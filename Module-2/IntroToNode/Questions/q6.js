//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File

let fs = require("fs");
let path = require("path");

let folderPath = path.join(__dirname, "..", "unorganised");

let fileNameArr = fs.readdirSync(folderPath);

for (let i = 0; i < fileNameArr.length; i++) {
  if (path.extname(fileNameArr[i]) == ".mp3") {
    console.log("Audio File");
  } else if (path.extname(fileNameArr[i]) == ".mp4") {
    console.log("Video File");
  } else if (path.extname(fileNameArr[i]) == ".jpg") {
    console.log("Image File");
  } else if (path.extname(fileNameArr[i]) == ".zip") {
    console.log("Other File");
  } else if (path.extname(fileNameArr[i]) == ".xlsx") {
    console.log("Excel File");
  } else if (path.extname(fileNameArr[i]) == ".doc") {
    console.log("Document File");
  } else if (path.extname(fileNameArr[i]) == ".pdf") {
    console.log("Pdf File");
  }
}
