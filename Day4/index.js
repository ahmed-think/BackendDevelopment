
const path=require('path')
const fs = require('fs');
var i;

const t=fs.readdir('./txt',(err,file)=>{
    if(err)
    console.log(err)
    else {
        file.forEach(element=>
            fs.readFile(path.join(__dirname,'./txt',element),"utf8",(err,len)=>{
                var count = 1;
                for (i=0; i < len.length; i++){
                    if (len[i] =='\n') {count++;}}
                    const WordCount=str=> { 
                        return str.split(" ").length;
                        }
                console.log("File Name: ",element,"\ncharacters:",len.length,"\nline:",count,"\nTotal Words:",WordCount(len))
        })
            
            )
      
        
        }})
    