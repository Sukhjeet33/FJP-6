// let inputArr = process.argv;
// console.log(inputArr);

// let input = process.argv[2];
// console.log(input);

let fs = require("fs");
let path = require("path");

let folderPath = process.argv[2];

let folderExists = fs.existsSync(folderPath);

let extObj = {
  Audio: [".mp3"],
  Video: [".mp4", ".mkv"],
  Image: [".jpeg", ".jpg", ".gif", ".png"],
  Application: [".exe", ".apk"],
  Document: [".doc", ".docx", ".xlsx", ".pdf", ".txt"],
};

if (folderExists) {
  let files = fs.readdirSync(folderPath);
  // if(path.extname)
  // console.log(files);

  for (let i = 0; i < files.length; i++) {
    if (path.extname(files[i])) {
      let extName = path.extname(files[i]);

      // console.log(extName);
      let folderName = giveFolderName(extName);
      // console.log(folderPath);
      console.log("extName- ", extName, "folderName- ", folderName);
      let folderNamePath = path.join(folderPath, folderName);
      if (!fs.existsSync(folderNamePath)) {
        fs.mkdirSync(folderNamePath);
        moveFile(folderPath, folderNamePath, files[i]);
      } else {
        // console.log(folderPath);
        // console.log(folderNamePath);
        moveFile(folderPath, folderNamePath, files[i]);
      }
    }
  }
  // console.log(files);
} else {
  console.log("Enter a valid Path !!!");
}

function giveFolderName(extName) {
  for (let key in extObj) {
    let extArr = extObj[key];
    for (let i = 0; i < extArr.length; i++) {
      if (extArr[i] == extName) {
        return key;
      }
    }
  }
  return "Others";
}

function moveFile(src, dest, fileName) {
  let srcPath = path.join(src, fileName);
  let destPath = path.join(dest, fileName);

  fs.copyFileSync(srcPath, destPath);
  fs.unlinkSync(srcPath);
}
