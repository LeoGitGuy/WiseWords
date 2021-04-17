
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
    //let number_of_words = (s2tres.split(" ").length + s2tres.split(" ").length%2) / 2
    //console.log(number_of_words);
    recognizer.close();

    /*  Wir mussen zuerst gpt_func aufrufen mit s2tres und prompts.classification.prompt als Argumente
    und dann diese if statement integrieren, um zu entscheiden welche prompt wir mit der
    Transkription benutzen sollen um die Zusammenfassung zu bekommen. */
    // Diese if statement soll unser Prompt bestimmen. i.e:
    // if ....
      // let prompt = prompts.education.prompt
    gpt_func(s2tres, "Semantic Category:",prompts["classification"]).then((gptres) => {
      let mode = "";
      switch(gptres.chartAt(0)){
        case "1":
          mode = "company"
          break;
        case "2":
          mode = "general"
          break;
        case "3":
          mode = "education"
          break;
        default:
          mode = "general"
          break;
      }
      gpt_func(s2tres, "Subjects:\n", prompts[mode]).then((finalGptres)=>{
        console.log(s2tres);
        res.status(201).json({
          transcript: s2tres,
          gptres: finalGptres,
          prompt: gptres
        });
      })

    })
  });
};
