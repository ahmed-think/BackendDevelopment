const express=require('express');
const { parse, relative } = require('path');
const router=express.Router();
const path=require('path');
const {users}=require('../user/User')
const product=require('../product/product')
const {products}=require('../product/product')



var order=[]


//get All order
router.get('/',(req,res)=>res.json(order))



//get siingle order by id 
router.get('/:id',(req,res)=>{
    const found=order.some(order=>order.id===parseInt(req.params.id));

    if(found){
        res.json(order.filter(order=>order.id===parseInt(req.params.id)));
    } else{
        res.status(400).json({msg:`no order found with id ${req.params.id} `})

    }
});

//add a order
router.post('/',(req,res)=>{
//     var products=[];
// const pro=function addProduct( product){
//         console.log(products.push(...Array(product.price).fill(req.body.product_name)) );
//         }
//     const total=()=>{
//             return this.products.map(function(product){
//             return product.Price
//             })
//             .reduce(function(a, b){
//             return a + b;
//             }, 0);
//             }
//     pro({
//         product:product.price,
//         quantity:req.body.quantity
//     })
if(!req.body.username===undefined)
{
    return res.status(400).json({msg:'please include a username '})
}
else if( !req.body.productname===undefined)
{
    return res.status(400).json({msg:'please include a  productname'})
}
else if( !req.body.quantity===undefined)
{
    return res.status(400).json({msg:'please include a  quantity'})
}
else
{  
    const found=products.some(product=>product.name===req.body.productname);
    const fou=users.some(user=>user.name===req.body.username)
    if(found && fou)
    {
        const updateproduct=req.body;
        products.forEach(product=>{
            if(products.name===req.body.productname)
            {
                products.quantity=products.quantity-updateproduct.quantity ? products.quantity-updateproduct.quantity:products.quantity;
                // res.json({msg:'Products updated',products})
                console.log('inside middleware prod->',products)
                req.products = products
            }
        
        })
     order.push(updateproduct);
    }}})


//update order
router.put('/:id',(req,res)=>{
    const found=order.some(order=>order.id===parseInt(req.params.id));

    if(found){
       const update = req.body;
       order.forEach(order=>{
           if(order.id===parseInt(req.params.id)){
                 order.username=update.username ? update.username : order.username;
                 order.price=update.price ? update.price : order.price;
                 order.quantity=update.quantity ? update.quantity : order.quantity;
res.json({msg:`order updated`,order: order})
                }
       })
    } else{
        res.status(400).json({msg:`no order found with id ${req.params.id} `})

    }
});


//delete order
router.delete('/:id',(req,res)=>{
    const found=order.some(order=>order.id===parseInt(req.params.id));

    if(found){
        res.json({
            msg:'order deleted',
           product: order.filter(order=>order.id!==parseInt(req.params.id)
            )});
        } else{
        res.status(400).json({msg:`no order found with id ${req.params.id} `})

    }
    var i=1;
    order.forEach(order=>{
        order.id=i;
        i++
    })
});

module.exports=router;
