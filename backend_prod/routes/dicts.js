const express = require("express");
const multer = require("multer");
const router = express.Router();
const DictController = require("../controllers/dicts");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../backend/excels");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    //const ext = file.mimetype;
    cb(null, name);
  }
});




router.post("/audio", multer({
  storage: storage
}).single("file"), DictController.createExcelDict );



module.exports = router;

