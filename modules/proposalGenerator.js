const runPrompt = require("../modules/aiService");
const Proposal = require("../models/Proposal");

async function propsalGenerator(budget,clientNeeds){
    const prompt = ` Suggest a sustainable product mix within budget ${budget}.
    provide cost breakdown.Add impact positioning summary Return JSON only.
    Client Needs :${clientNeeds}`;

    const reusult = await runPrompt(prompt);
    const parsed = JSON.parse(result);  


    const proposalDoc= new Proposal(parsed);
    await proposalDoc.save();
    return parsed;
}

module.exports = propsalGenerator;