// const fs= require('fs')
// // fs.stat('./',err=>console.log(err))

const fs = require("fs");
const { basename } = require("path");
const path = require("path")

// const getAllFiles = function(dirPath, arrayOfFiles) {
//   files = fs.readdirSync(dirPath)

//   arrayOfFiles = arrayOfFiles || []

//   files.forEach(function(file) {
//     if (fs.statSync(dirPath + "/" + file).isDirectory()) {
//       arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
//     } else {
//       arrayOfFiles.push(path.join(__dirname, dirPath, file))
//     }
//   })

//   return arrayOfFiles
// }
// const getTotalSize = function(directoryPath) {
//     const arrayOfFiles = getAllFiles(directoryPath)
  
//     let totalSize = 0
  
//     arrayOfFiles.forEach(function(filePath) {
//       totalSize += fs.statSync(filePath).size
//     })
  
//     return convertBytes(totalSize)
//   }
//   const convertBytes = function(bytes) {
//     const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  
//     if (bytes == 0) {
//       return "n/a"
//     }
  
//     const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  
//     if (i == 0) {
//       return bytes + " " + sizes[i]
//     }
  
//     return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
//   }
//   console.log(getTotalSize('../Day1'))

let total=0;
var arr=[]
const getfile=function(dire){
    files=fs.readdirSync(dire)
    
     files.forEach(element => {
       arr.push(path.join(__dirname,dire,element))
    })
    arr.forEach(ele=>total+=fs.statSync(ele).size)
    return (total/1024/1024)
    }
    console.log(getfile('../Day1'));
    if(total>100){
       for (let x = 0; x < arr.length-1;x++) {
           let s=fs.statSync(arr[x]).size;
           let y=x+1
           let r=fs.statSync(arr[y]).size
        //    console.log(r)
           if (s<r) {
            const f=r
           }
           else{
               const oldpath= arr[x]
               const newpath=`../Day2/${path.basename(arr[x])}`
            const f=s;
            console.log(arr[x]);
            fs.renameSync(oldpath,newpath)
             console.log(f/1024/1024);
            console.log(oldpath);
            console.log(newpath);
           }      
        }
    }