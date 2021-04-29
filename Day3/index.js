const fs=require('fs');
const path=require('path');
const http=require('http');
const { dirname } = require('path');
const dir ="./txt"
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        // fs.mkdir(path.join(__dirname,'/Files'),{},err=>{
        //     if(err) throw err
        //     console.log('Folder created...')
        //     fs.writeFile(path.join(__dirname,'/Files','File.txt'),'Hello Owais',err=>{
        //         if(err) throw err
        //         console.log('File write hogai...')
                
        //             fs.writeFile(path.join(__dirname,'/Files','File.ppt'),'Hello Owais',err=>{
        //                 if(err) throw err
        //                 console.log('File write hogai...')
        //             })
        //     })
        // }) 
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
    }
    if(req.url==='/movefiles'){
        fs.mkdir(path.join(__dirname,'/TextFile'),{},err=>{
            if(err) throw err
            console.log('Text File foler created...')
            fs.rename(path.join(__dirname,'/Files',files=>{const ext=path.extname(`./${files}`)}),
            path.join(__dirname,'/TextFile','/File.txt'),err=>{
                if(err) throw err
                console.log('File moved to Text File Folder...')
            fs.mkdir(path.join(__dirname,'/PptFile'),{},err=>{
                    if(err) throw err
                    console.log('Ppt File foler created...')
            fs.rename(path.join(__dirname,'/Files','File.ppt'),
                    path.join(__dirname,'/PptFile','/File.ppt'),err=>{
                    if(err) throw err
                        console.log('File moved to Ppt File Folder...')
                    })
                })
            })
        })
    }
    res.write('<h1>Hello</h1>');
    res.end();
});

const PORT=process.env.PORT || 5000
server.listen(PORT,()=>console.log(`Server Started at Port ${PORT}`));