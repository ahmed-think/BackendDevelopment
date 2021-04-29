const { exec } = require('child_process');
const fs=require('fs')
const path=require('path')
const util = require('util');
  
// Counts the number of directory in 
// current working directory
// const a= exec('ipconfig', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }      
//  console.log(`Ip config details${stdout}`)
// }
 
//  )
// console.log(a)


var process = require('child_process');
process.exec('ipconfig',function (err,stdout,stderr) {
    if (err) {
        console.log("\n"+stderr);
    } else {
        console.log(stdout);
        var w=fs.writeFile('./file.txt',stdout,err=>{
            if(err) console.log(err);
            console.log(`${stdout} > file.txt`)
        })
    }
});
// var w=fs.createWriteStream('./file.txt',{flags: 'a'})
//  var logStream = fs.createWriteStream('./logFile.log', {flags: 'a'});

// var spawn = require('child_process').spawn,
//     ls    = spawn('ls', ['-lh', '/usr']);

// ls.stdout.pipe(logStream);
// ls.stderr.pipe(logStream);

// ls.on('close', function (code) {
//   console.log('child process exited with code ' + code);
// });

//   if (stderr!= "")
//   console.error(`stderr: ${stderr}`);
// });
