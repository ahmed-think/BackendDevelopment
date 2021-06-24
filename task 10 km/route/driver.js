const express = require ('express');
const router = express.Router();
const car = require('../schema/driver');


router.get('/cars', (req, res)=>{
    /* Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    }); */
    console.log('data->',req.body)
    car.aggregate(
        [{
            $geoNear: 
            {
                '$geometry':{'type':'Point', 'coordinates':[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
                'spherical': true,
                'maxdistance': 2000
            }
        }
        ],(car)=>{
            res.send(car);
        })
    // User.geoNear(
    //     {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    //     {maxDistance: 100000, spherical: true}
    // ).then(function(car){
    //     res.send(car);
    // }).catch(next);
});


router.post('/addcar',(req, res)=>{
    car.create(req.body).then((car)=>{
        res.send(car);
    })
});


router.put('/updatecar/:id', (req, res)=>{
    car.findByIdAndUpdate({_id: req.params.id}, req.body,{new:true}).then((car)=>{
            res.send(car);
    })
});


router.delete('/deletecar/:id',(req, res)=>{
    car.findByIdAndRemove({_id: req.params.id}).then((car)=>{
        res.send(car);
    })
});

router.post('/searchNearby', (req, res) => {
    if (req.body.longitude !== undefined && req.body.latitude !== undefined ) {
      let { longitude, latitude } = req.body
      car.find({
        geometry: {
          $nearSphere: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude], //longitude and latitude
            },
            $minDistance: 0,
            $maxDistance: 10 * 1000,
          },
        },
      })
        .limit(4)
        .exec((err, docs) => {
          if (err) return res.json(err);
          else return res.json(docs);
        });
    } else {
      return res.json('Location can not be null')
    }
  })

module.exports = router;