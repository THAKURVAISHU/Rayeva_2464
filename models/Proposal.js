const mongoose = require("mongoose");
const ProposalSchema = new mongoose.Schema({
    budget:Number,
    products:[
        {
            item:String,
            const:Number
        }
    ],
    impact_summary:String,
    createdAt:{
        type :Date,
        default:Date.now



    }
});
module.exports = mongoose.model("Proposal",ProposalSchema);
