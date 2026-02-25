import OpenAI from "openai";
import { openAiApiKey } from "./constants";

const openai = new OpenAI({
  apiKey: openAiApiKey,
  dangerouslyAllowBrowser: true,
});

export default openai;

// const response = await client.responses.create({
//   model: "gpt-5.2",
//   instructions: "You are a coding assistant that talks like a pirate",
//   input: "Are semicolons optional in JavaScript?",
// });

// console.log(response.output_text);
