const express = require('express');

const bodyParser = require('body-parser');

const dictsRoutes = require('./routes/dicts');

const path = require('path')


const app = express();

/* mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://EndoSpeech:' + "VGmzqChCTqcGd4N" + '@cluster0.acvuh.mongodb.net/endo?retryWrites=true&w=majority', {useNewUrlParser: true})
  .then(() => {
    console.log("Connected to db");
  })
  .catch(() => {
    console.log("Connection lost");
  }); */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));




app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS');


  next();
});

app.use("/wisewords/upload", dictsRoutes);


app.use(express.static(path.join( __dirname,'./dist/wisewordsfrontend')));
app.get("/*", (req,res)=> res.sendFile(path.join(__dirname, './dist/wisewordsfrontend')));



module.exports = app;
