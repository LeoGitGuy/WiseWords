const got = require('got');

const API_KEY = "sk-RfecCUXHspo3wLUqT5OxVRZUiveGmVsIAYdhkqmc";

const gpt_func = (async (prompt) => {
  const url = 'https://api.openai.com/v1/engines/davinci/completions';
  const params = {
    "prompt": prompt,
    "max_tokens": 160,
    "temperature": 0.7,
    "frequency_penalty": 0.5
  };
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

module.exports.gpt_func = gpt_func;
