

const ChartJsImage = require('chartjs-to-image');


// const data = {
//     labels: [
//       'Ahmed Khan',
//       'Hamza bhai',
//       'owais Ahmed',
//       'talha bhai'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [65, 59, 90, 81],
//       fill: true,
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgb(255, 99, 132)',
//       pointBackgroundColor: 'rgb(255, 99, 132)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgb(255, 99, 132)'
//     }, {
//       label: 'My Second Dataset',
//       data: [28, 48, 40, 19],
//       fill: true,
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgb(54, 162, 235)',
//       pointBackgroundColor: 'rgb(54, 162, 235)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgb(54, 162, 235)'
//     }]
//   };



// const config=new ChartJsImage();
//    config.setConfig({
//     type: 'radar',
//     data: data,
//     options: {
//       elements: {
//         line: {
//           borderWidth: 3
//         }
//       }
//     },
//   });




//   config.toFile('./my.png');
// console.log(config)




const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Looping tension',
      data: [65, 59, 80, 81, 26, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
    }]
  };





const config = new ChartJsImage().setConfig({
    type: 'line',
    data: data,
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100
        }
      }
    }
  });


  config.toFile('./my2.gif');
console.log(config)