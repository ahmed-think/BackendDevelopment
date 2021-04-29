const fs=require('fs')
const path= require('path')
// directory to check if exists
const dir = './uploads';

// check if directory exists
if (fs.existsSync(dir)) {
    console.log('Directory exists!');
} else {
    console.log('Directory not found.');
    fs.mkdir(dir, function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log("New directory successfully created.")
        }
      })
}
// const dirs="Day2"
// const t=fs.readdir(`../${dirs}`,(err,file)=>{
//     if(err)
//     console.log(err)
//     else console.log(file)
// })
// const p=fs.readdirSync('../Day1')

// const a=p.map(e=>'.txt'.includes(e))
// console.log(a)



const testFolder = './';


const ext= fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  })
})
console.log(path.extname('ext'));
