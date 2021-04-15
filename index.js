
// // ARRAY 1
// const texasss = [
//     {
//       name: 'Mike',
//       age: 23,
//       gender: 'm',
//       us: false,
//     },
//     {
//       name: 'Liz',
//       age: 20,
//       gender: 'f',
//       us: true,
//     },
//     {
//       name: 'Chris',
//       age: 102,
//       gender: 'm',
//       us: true,
//     },
//     {
//       name: 'Chuloo',
//       age: 27,
//       gender: 'm',
//       us: false,
//     },
//     {
//       name: 'Annie',
//       age: 30,
//       gender: 'f',
//       us: true,
//     },
//   ]
  
// // Part 1 - Find all users older than 24
// const tot=texasss.filter(age=>age.age>24)
// alert(tot)



// // Part 2 - Find the total age of all users
// const to=texasss.map(age=>age.age).reduce((num1,num2)=>num1+num2);
// alert(to)

// // Part 3 - List all female coders
// const f_coders = texasss.filter(gendr=> gendr.gender=="f")
// alertf(f_coders)




// // ARRAY 2
// const newieyork = [
//     {
//       name: 'Michelle',
//       age: 19,
//       coder:true,
//       gender: 'f',
//       us: true,
//     },
//     {
//       name: 'Sam',
//       age: 25,
//       coder:false,
//       gender: 'm',
//       us: false,
//     },
//     {
//       name: 'Ivy',
//       age: 26,
//       coder:true,
//       gender: 'f',
//       us: false,
//     },
//     {
//       name: 'Nick',
//       age: 32,
//       coder:true,
//       gender: 'm',
//       us: true,
//     },
//     {
//       name: 'Jim Beglin',
//       age: 65,
//       coder:false,
//       gender: 'm',
//       us: true,
//     },
//   ]
  
//   // Part 1 - List all users in US in ascending order
//   const all_users= newieyork.filter(uss=>uss.us==true);
// //   all_users.sort((a, b) => a.name-b.name);
//   console.log(all_users)
//   // Part 2 - Sort all users by age
// newieyork.sort((a,b)=> a.age-b.age)

//   console.log(newieyork);
  
//       // Part 3 -  List all female coders
//       const fe_coders = newieyork.filter(gndr=>gndr.gender=="f")
//     console.log(fe_coders)



//     // ARRAY 3
// const vegzas = [
//     {
//       name: 'Charly',
//       age: 32,
//       coder:true,
//       gender: 'm',
//     },
//     {
//       name: 'Law',
//       age: 21,
//       coder:true,
//       gender: 'm',
//     },
//     {
//       name: 'Rosey',
//       age: 42,
//       coder:false,
//       gender: 'f',
//     },
//     {
//       name: 'Steph',
//       age: 18,
//       coder:true,
//       gender:'m'
//     },
//     {
//       name: 'Jon',
//       age: 47,
//       coder:false,
//       gender: 'm',
//     },
//   ]
  
//   // Part 1 - Find the total age of male coders under 25
// const total_age= vegzas.filter(num=>num.age<25 && num.gender=="m").map(age=>age.age).reduce((num1,num2)=>num1+num2)
// console.log('total age->',total_age);



//   // Part 2 - List all male coders over 30
//   const list=vegzas.filter(ag=>ag.age>30)
//   console.log(list)




//   // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.

// const newArr=[...texasss,...newieyork,...vegzas]
// const total_ag=newArr. map(sum=>sum.age).reduce((num1,num2)=>num1+num2);
// console.log(total_ag)




const arr=["dsadfewroquiis","oowqhaucuiqwdeha","wqieoiosiahczoa"];
const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;
  const newArr=[]
  
  arr.forEach(element => {
      newArr.push( countVowels(element))
  });
  console.log(newArr);