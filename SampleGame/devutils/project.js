var path = require('path');
var fs = require('fs');

var fileName = 'project.json';
var resPath = '.es5';

var file = JSON.parse(fs.readFileSync(fileName));
function getFiles(dir, fileList){
    for (i = 0; i < fileList.length; i++) {
        fileList[i] = fileList[i].replace(/^src\//,`${dir}/`)
      }
    return fileList;
}

var files  = getFiles(resPath, file.jsList);
file.jsList = files;
console.log(files);
fs.writeFileSync(fileName, JSON.stringify(file, null, 2));