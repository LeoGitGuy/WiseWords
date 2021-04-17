
const fs = require('file-system');
const sdk = require('microsoft-cognitiveservices-speech-sdk');
const speechConfig = sdk.SpeechConfig.fromSubscription("5527e7ebc99a48948a91f55d3b1728cf", "westeurope");
const { gpt_func } = require("./gpt")
var audiopath = "";
const { prompts } = require("../models/prompts");
function fromFile(audioname) {

}


exports.createExcelDict = (req, res, next) => {
  let audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("../backend/excels/" + req.file.filename));
  let recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

  recognizer.recognizeOnceAsync(result => {

    let s2tres = result.text;
    let number_of_words = (s2tres.split(" ").length + s2tres.split(" ").length%2) / 2
    console.log(number_of_words);
    recognizer.close();

    gpt_func(s2tres + prompts.general, number_of_words).then((gptres) => {

      console.log(s2tres);
      res.status(201).json({
        transcript: s2tres,
        gptres: gptres,
        prompt: prompts.general
      });
    })

  });
};
