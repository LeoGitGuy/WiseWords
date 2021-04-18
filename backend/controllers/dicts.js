
const fs = require('file-system');
const sdk = require('microsoft-cognitiveservices-speech-sdk');
const speechConfig = sdk.SpeechConfig.fromSubscription("5527e7ebc99a48948a91f55d3b1728cf", "westeurope");
const { gpt_func } = require("./gpt")
var audiopath = "";
const { prompts } = require("../models/prompts");
const translate = require("@iamtraction/google-translate");

let recognizer;
let audioConfig;


var final2 = []
var s2tres = "";

exports.createExcelDict = (req, res, next) => {
  let language = req.query.language;
  final2 = []
  audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("../backend/excels/" + req.file.filename));
  recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
  recognizer.startContinuousRecognitionAsync();


  recognizer.recognizing = (s, e) => {
    console.log(`RECOGNIZING: Text=${e.result.text}`);
  };

  recognizer.recognized = (s, e) => {
    final2.push(e.result.text);
    if (e.result.reason == ResultReason.RecognizedSpeech) {
      console.log(`RECOGNIZED: Text=${e.result.text}`);
      console.log("leo")
    }
    else if (e.result.reason == ResultReason.NoMatch) {
      console.log("NOMATCH: Speech could not be recognized.");
    }
  };

  recognizer.canceled = (s, e) => {
    console.log(`CANCELED: Reason=${e.reason}`);

    if (e.reason == CancellationReason.Error) {
      console.log(`"CANCELED: ErrorCode=${e.errorCode}`);
      console.log(`"CANCELED: ErrorDetails=${e.errorDetails}`);
      console.log("CANCELED: Did you update the subscription info?");
    }

    recognizer.stopContinuousRecognitionAsync();
  };

  recognizer.sessionStopped = (s, e) => {
    //console.log(final2);
    console.log("\n    Session stopped event.");

    recognizer.stopContinuousRecognitionAsync(() => {
      recognizer.close();
      s2tres = final2.join(" ");
      gpt_func(s2tres, "Semantic Category:", prompts["classification"]).then((gptres) => {
        let mode = "";
        if (gptres.includes("Company")) {
          mode = "company"
        }
        else if (gptres.includes("General")) {
          mode = "general"
        }
        else if (gptres.includes("Teacher")) {
          mode = "education"
        }
        else {
          mode = "general"
        }
        console.log("FIRST CHAR");
        console.log(gptres);
        gpt_func(s2tres, prompts[mode]["starting_sequence"], prompts[mode]).then((finalGptres) => {
          if(language != "en"){
          translate(finalGptres, { to: language }).then(translatedSummary => {
            res.status(201).json({
              transcript: s2tres,
              gptres: translatedSummary.text,
              prompt: gptres
            });
          });
          }
          else {
            res.status(201).json({
              transcript: s2tres,
              gptres: finalGptres,
              prompt: gptres
            });
          }
        });
      });
    });
  };
  //let number_of_words = (s2tres.split(" ").length + s2tres.split(" ").length%2) / 2
  //console.log(number_of_words);
  /*  Wir mussen zuerst gpt_func aufrufen mit s2tres und prompts.classification.prompt als Argumente
  und dann diese if statement integrieren, um zu entscheiden welche prompt wir mit der
  Transkription benutzen sollen um die Zusammenfassung zu bekommen. */
  // Diese if statement soll unser Prompt bestimmen. i.e:
  // if ....
  // let prompt = prompts.education.prompt
};





