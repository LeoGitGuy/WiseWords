const fs = require('file-system');
const sdk = require('microsoft-cognitiveservices-speech-sdk');
const speechConfig = sdk.SpeechConfig.fromSubscription("5527e7ebc99a48948a91f55d3b1728cf", "westeurope");
let audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("../excels/demo_teacher11.wav"));

const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

const final2 = [];

const contRecognition = (async () => {

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
      console.log(final2);
      recognizer.close();
    });
  };

  recognizer.startContinuousRecognitionAsync();

});

contRecognition().then(()=>{
  console.log("hey2");
})
console.log("hey");
