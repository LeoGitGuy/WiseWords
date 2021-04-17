const fs = require('file-system');
const sdk = require('microsoft-cognitiveservices-speech-sdk');
const speechConfig = sdk.SpeechConfig.fromSubscription("5527e7ebc99a48948a91f55d3b1728cf", "westeurope");
const { gpt_func } = require("./gpt")


function fromFile() {

    let audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("../excels/leon3.wav"));
    let recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizeOnceAsync(result => {
      console.log(`RECOGNIZED: Text=${result.language}`);
      recognizer.close();
      gpt_func("my favorite food is").then((myres) => {
        console.log(myres);
      })
    });
    console.log("ok12")
}

fromFile();
