const cByContinent=require('./country-by-continent.json')
const cByFlag=require('./country-by-flag.json')
const fs =require('fs')
// var base64ToImage = require('base64-to-image');
var d=[]
const path=require('path')
for (let x of cByContinent){
    for(let y of cByFlag){
        if (x.country===y.country && y.flag_base64!==null){
            let base64String =y.flag_base64
            let base64Image = base64String.split(';base64,').pop();
           const a= fs.writeFile(path.join(__dirname+'/image/',`${y.country}.svg`), base64Image, {encoding: 'base64'}, function(err) {
        });
        let dat;
 setTimeout(()=>{
     dat={
                country:x.country,
                continent:x.continent,
                flag:`${x.country}.svg`
   }
   d.push(dat)  
   }
   ,100)


            break;
        }
    }
}

setTimeout(()=>{
    console.log(d);
    fs.appendFile(path.join(__dirname,'file.json'),JSON.stringify(d),(e)=>{
        console.log(e);
});
    console.log("done");
},10000)

