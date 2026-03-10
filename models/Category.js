const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
    category:String,
    subcategor:String,
    tags:[String],
    filters :[String],
    createdAt:{type:Date,default :Date.now}
});

module.exports = mongoose.model("category",CategorySchema);