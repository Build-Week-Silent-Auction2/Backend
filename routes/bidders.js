const router = require('express').Router();

const Bidder = require('../models/user');
const restricted = require('../middleware/restricted');

router.get('/bidder', (req,res)=>{
  Bidder.get('bidders', null)
    .then(bidders => res.status(200).json({bidders}))
    .catch(error => res.status(500).json(error.message));
});

router.get("/bidders/:id", (req, res) => {
  const id = req.params.id;

  Bidder.get("bidders", id)
    .then(bidder => res.status(200).json({ bidder }))
    .catch(error => res.status(500).json(error.message));
});

router.delete("/bidders/:id", restricted, (req, res) => {
  const { id } = req.params.id;

  Bidder.remove("bidders", id)
    .then(() => res.status(200).json({ message: "bidder removed" }))
    .catch(error => res.status(500).json(error.message));
});

module.exports = router;