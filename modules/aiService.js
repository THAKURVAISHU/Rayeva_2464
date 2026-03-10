
const USE_MOCK = true;
async function  runPrompt(prompt) {
 if(USE_MOCK){
  return JSON.stringify({
   category: "Packaging",
   subcategory:"Compostable Cups",
   tag:["ero-friendly","biodegradable","pastic-free"],
    filters:["compostable","plastic-free"]
  });
 }


const OpenAI = require("openai");
const client = new OpenAI({apikey:process.env.OPENAI_API_KEY});
const response = await client.chat.completions.create({
model:"gpt-4o-mini",
message:[{role:"user", content: prompt}],
});
return response.choice[0].message.content;
}
module.exports =runPrompt;