const express=require('express');
const { parse } = require('path');
const router=express.Router();
const path=require('path');


var product =[
    {
        id:1,
        name: "shirt",
        price: 250,
        quantity: 8
    },
    {
        id:2,
        name: "pent",
        price: 400,
        quantity: 6
    }
]
//get All product
router.get('/',(req,res)=>res.json(product))



//get siingle product by id 
router.get('/:id',(req,res)=>{
    const found=product.some(product=>product.id===parseInt(req.params.id));

    if(found){
        res.json(product.filter(product=>product.id===parseInt(req.params.id)));
    } else{
        res.status(400).json({msg:`no product found with id ${req.params.id} `})

    }
});

//add a product
router.post('/',(req,res)=>{
    const add_product={
        id:product.length+1,
        name:req.body.name,
        price:req.body.price,
        quantity:req.body.quantity
    }
if(!add_product.name){
    return  res.status(400).json({msg:`please add name `})
}else if( !add_product.price){
    return  res.status(400).json({msg:`please add price `})
}else if( !add_product.quantity){
    return  res.status(400).json({msg:`please add quantity `})
}
product.push(add_product)
res.json(add_product)
})


//update product
router.put('/:id',(req,res)=>{
    const found=product.some(product=>product.id===parseInt(req.params.id));

    if(found){
       const update = req.body;
       product.forEach(product=>{
           if(product.id===parseInt(req.params.id)){
                 product.name=update.name ? update.name : product.name;
                 product.price=update.price ? update.price : product.price;
                 product.quantity=update.quantity ? update.quantity : product.quantity;
res.json({msg:`product updated`,product})
                }
       })
    } else{
        res.status(400).json({msg:`no product found with id ${req.params.id} `})

    }
});


//delete product
router.delete('/:id',(req,res)=>{
    const found=product.some(product=>product.id===parseInt(req.params.id));

    if(found){
        res.json({
            msg:'product deleted',
           product: product.filter(product=>product.id!==parseInt(req.params.id)
            )});
        } else{
        res.status(400).json({msg:`no product found with id ${req.params.id} `})

    }
    var i=1;
    product.forEach(product=>{
        product.id=i;
        i++
    })
});

module.exports=router;
module.exports.products=product;


