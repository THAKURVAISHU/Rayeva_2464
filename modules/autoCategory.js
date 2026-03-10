const runPrompt = require("../modules/aiService");
const Category = require ("../models/Category");

async function autoCategory(productDescription){
    const prompt =` Classify the product into a primary category and subcategory.
    Generate 5-10 SEO tags.
    Suggest sustainability filters(plastic-free,compostable,vegan,reycled).
    Ruturn json only 
    Product: ${productDescription}
    `;
const result= await runPrompt(prompt);
const parsed = JSON.parse(result);   


//db save
const categoryDoc = new Category(parsed);
await categoryDoc.save();
return parsed;
}

module.exports = autoCategory;