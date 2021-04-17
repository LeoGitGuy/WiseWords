const fs = require('file-system');
const sdk = require('microsoft-cognitiveservices-speech-sdk');
const speechConfig = sdk.SpeechConfig.fromSubscription("5527e7ebc99a48948a91f55d3b1728cf", "westeurope");
const { gpt_func } = require("./gpt")
import { prompts } from '../models/prompts';

function fromFile() {

    let audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("../excels/leon3.wav"));
    let recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizeOnceAsync(result => {
      console.log(`RECOGNIZED: Text=${result.language}`);
      recognizer.close();
      gpt_func(transcription,"Semantic Category:\n", prompts.classification).then((myres_0) => {
        console.log(myres_0);
      })

      transcription = "todo"

      if (myres_0.charAt(0)==num.toString(1)){
        console.log("A Company meeting.");
        start_sequence = ":\n";
        prompt_dict = company_dict;
      } else if (myres_0.charAt(0)==num.toString(3)){
        console.log("A Teacher or Professor talking to his students.");
        start_sequence = "Subjects:\n";
        prompt_dict = education_dict;
      } else if (myres_0.charAt(0)==num.toString(4)){
        console.log("A draft for an E-Mail.");
        start_sequence = ":\n";
        prompt_dict = email_dict;
      } else (myres_0.charAt(0)==num.toString(2)){
        console.log("A General conversation.");
        start_sequence = "Topic:";
        prompt_dict = general_dict;
      }
      gpt_func(transcription,start_sequence, prompt_dict).then((myres_1) => {
        console.log(myres_1);
    });
    console.log(myres_1)
}

fromFile();