const got = require('got');

const API_KEY = "sk-RfecCUXHspo3wLUqT5OxVRZUiveGmVsIAYdhkqmc";


const gpt_func = (async (transcript, start_sequence, prompts) => {
  const url = 'https://api.openai.com/v1/engines/davinci/completions';
  const params = {
    "prompt": prompts["prompt"],
    "max_tokens": prompts["max_tokens"],
    "stop": prompts["stop"],
    "temperature": prompts["temperature"],
    "top_p": prompts["top_p"],
    "frequency_penalty": prompts["frequency_penalty"],
    "presence_penalty": prompts["presence_penalty"]
  };
  params["prompt"] += transcript + "\n###\n"+ start_sequence;
  console.log("STARTING SEQ");
  console.log(start_sequence);
  console.log("PROMPT");
  console.log(params["prompt"]);
  const headers = {
    'Authorization': 'Bearer ' + API_KEY,
  };

  try {
    const response = await got.post(url, { json: params, headers: headers }).json();
    output = response.choices[0].text;
    return output
  } catch (err) {
    console.log(err);
  }
});

/* delete(key) {
  if(this.hasKey(key)) {
     delete this.container[key];
     return true;
  }
  return false;
}; */

module.exports.gpt_func = gpt_func;

