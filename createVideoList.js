const { dir } = require('console');
const fs = require('fs');
const path = require('path');


let listFilesSync = function(dir) {
    let fileList = [];
    let FL = fs.readdirSync(dir);
    FL.forEach((file) => {
      const fullPath = './video/'+file;
        fileList.push(fullPath);

    });
    return fileList;
  }


  function getFileName(path) {
    let file = path.replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, "");
    return file;
}

  // return an object with the file path and file size
  let createJSON = function (file) {
    let filename = getFileName(file)
    return {
        filename: file,
        title: filename,
        thumb: 'https://via.placeholder.com/191x286/000000/FFFFFF/?text='+ filename
    };
  }
  
  module.exports.createVideoList = function (directory) {
    const dirs = process.argv.slice(2);
    const videoFiles = listFilesSync(directory);
    const JSONOBJ = videoFiles.map(createJSON);
    let vidlist = {"videolist": []};
    JSONOBJ.forEach(function(obj){
        vidlist.videolist.push(obj);
    })
    console.log(vidlist)
    const outFile = `./src/videos.json`;
    fs.writeFileSync(outFile, JSON.stringify(vidlist, null, 2));
    console.log(`Wrote file ${outFile}`);
};

