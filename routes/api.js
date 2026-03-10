const express = require("express");
const router = express.Router();
const autoCategory = require("../modules/autoCategory");
const proposalGenerator = require("../modules/proposalGenerator");

router.post("/auto-category",async(req,res)=>{
  try {
    const {description} =req.body;
    const output = await autoCategory(description);
    res.json(output);
  } catch (error) {
    res.status(500).json({error:error.message});
  }
});
router.post("/proposal",async(req,res)=>{
try { 
 const{budget,needs} = req.body;
 const output = await proposalGenerator(budget,needs);
 res.json(output);
} catch (error) {
  res.status(500).json({error:error.message});
}
});

module.exports = router;