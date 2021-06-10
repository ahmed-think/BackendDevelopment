const Tasks = require("./task/schema")//yahan apna Task k model ka require karana

const checktaskstatus=(req,res,next)=>{
    if(req.body.email!==undefined && req.body.taskname!==undefined)
    {
        Tasks.findOne({taskname:req.body.taskname,performed:true},(err,doc)=>{
            if(err) return res.json({message:"Failed",err})
            else
            {
                if(doc!==null)
                {
                    Tasks.find({performed:false},(err,dataa)=>{
                        console.log("hello")
                        if(err){
                            return res.json({message:"faield",err}) 
                        }
                        else{
                            return res.json({message:"task already performed",dataa})
                        }
                    })
                      

                }
                else
                {
                    next();
                }
            }
        })
    }
}
module.exports=checktaskstatus