const express=require('express')
const app=express();
const ChartJsImage = require('chartjs-to-image');
const bodyparser=require('body-parser')
app.use(bodyparser.json());
app.use(express.urlencoded({extended: false}));
const myChart = new ChartJsImage();
app.post('/',(req,res)=>{

const da=req.body
// console.log(da.label);
console.log('body->',da)
// return res.json({message:"Success"})
if(da.label.length===da.data.length){
    console.log("d");
myChart.setConfig({
  type: req.body.type,
  data: { labels: da.label, datasets: [{ label: req.body.chart, data: da.data, backgroundColor: ["#669911", "#119966","#000" ],
  hoverBackgroundColor: ["#66A2EB", "#FCCE56","#FCCE55"] }], },
  options: {
    scales: {
        xAxes: [{
            ticks: {
                min: 0 // Edit the value according to what you need
            }
        }],
        yAxes: [{
            stacked: true
        }]
    },chartArea: {
        backgroundColor: 'rgba(251, 85, 85, 0.4)'
    }

}
}).toFile('./mt.png');
res.send(myChart)
}
// myChart.toFile('./mym.png')
});
app.get('/makeimage',(req,res)=>{
   myChart.toFile('./mym.png');
})

app.listen(300,()=> console.log("ok"))