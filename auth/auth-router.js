const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('./auth-model');
const GT = require('./generateToken');

router.post("/register/:userType", (req,res) =>{
  const {userType} = req.params.userType;
  const user = req.body;
  const token = GT(user.username);
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;

  User.insert(userType, user)
    .then(newUser => res.status(201).json({message: "Registration successful", newUser, token}))
    .catch(error => res.status(500).json(error.message));
});

router.post("/login/:userType", (req,res)=>{
  const {userType} = req.params.userType;
  const {username, password} = req.body;

  User.findBy(userType, {username})
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)){
        const token = GT(user.username);
        res.status(200).json({message: `welcome ${user.username}`, user, token});
      } else {
        res.status(401).json({error: "Invalid Credenials"});
      }
    })
    .catch(error => res.status(500).json(error.message));
})

module.exports = router;