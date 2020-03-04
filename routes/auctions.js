const router = require('express').Router();

const restricted = require('../middleware/restricted');

const Auction = require('../models/auctions');

router.get('/auctions', (req,res)=>{
  Auction.get()
    .then(auctions => res.status(200).json({auctions}))
    .catch(error => res.status(500).json(error.message));
});

router.get('/:sellerId/auctions', (req,res)=>{
  const sellerId = req.params.sellerId;

  Auction.getBySellerId(sellerId)
    .then(auctions => res.status(200).json({auctions}))
    .catch(error => res.status(500).json(error.message));
});

router.get('/auctions/:id', (req,res) =>{
  const id = req.params.id;

  Auction.getByAuctionId(id)
    .then(auction => res.status(200).json({auction}))
    .catch(error => res.status(500).json(error.message));
  
});

router.post("/:sellerId/:itemId/auctions", restricted, (req,res) =>{
  const {sellerId, itemId} = req.params;
  const time = req.body;
  const {auction_start, auction_end} = time;

  if (!auction_start || !auction_end) {
    res
      .status(400)
      .json({ message: "Please fill in the required information" });
  } else {
    if(req.body.bidder_id)
    {
      Auction.insertwb(sellerId, itemId, time, req.body.bidder_id)
      .then(newAuction =>
        Auction.findBy(time)
        .then(auctionInfo =>{
          res.status(201).json({message: "auction created", auctionInfo})
        })
      )
      .catch(error => res.status(500).json(error.message));
    }else{
      Auction.insert(sellerId, itemId, time)
        .then(newAuction =>
          Auction.findBy(time)
          .then(auctionInfo =>{
            res.status(201).json({message: "auction created", auctionInfo})
          })
        )
        .catch(error => res.status(500).json(error.message));
    }
  }
});

router.put("/auctions/:auctionId", restricted, (req,res) =>{
  const auctionId = req.params.auctionId;
  const change = req.body;
  const {auction_end} = change;

  if(!auction_end){
    res.status(400).json({message: "please fill in the required information"});
  } else {
    Auction.update(auctionId, change)
    .then(() => res.status(202).json({ message: "auction end updated" }))
    .catch(error => res.status(500).json(error.message));
  }
})

router.delete("/auctions/:auctionId", restricted, (req, res) => {
  const  auctionId  = req.params;

  Auction.remove(auctionId)
    .then(() => res.status(200).json({ message: "auction removed" }))
    .catch(error => res.status(500).json(error.message));
});

module.exports = router;