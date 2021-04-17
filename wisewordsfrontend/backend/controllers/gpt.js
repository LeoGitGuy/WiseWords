const got = require('got');

const API_KEY = "sk-RfecCUXHspo3wLUqT5OxVRZUiveGmVsIAYdhkqmc";

const gpt_func = (async (transcription,start_sequence, prompt_dict) => {
  const url = 'https://api.openai.com/v1/engines/davinci/completions';
  const params = prompt_dict
  params["prompt"] += transcription + "\n###\n"+ start_sequence
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

delete(key) {
  if(this.hasKey(key)) {
     delete this.container[key];
     return true;
  }
  return false;
};

module.exports.gpt_func = gpt_func;

