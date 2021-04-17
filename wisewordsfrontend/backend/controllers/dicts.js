
const fs = require('file-system');
const sdk = require('microsoft-cognitiveservices-speech-sdk');
const speechConfig = sdk.SpeechConfig.fromSubscription("5527e7ebc99a48948a91f55d3b1728cf", "westeurope");
const { gpt_func } = require("./gpt")
var audiopath = "";
function fromFile(audioname) {

}


exports.createExcelDict = (req, res, next) => {
  let audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("../backend/excels/" + req.file.filename));
  let recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
  recognizer.recognizeOnceAsync(result => {
    let s2tres = result.text;
    recognizer.close();
    gpt_func("my favorite food is").then((gptres) => {
      console.log(gptres);
      res.status(201).json({
        message: s2tres,
      });
    })

  });
};

