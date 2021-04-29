const arr=["dsadfewroquiis","oowqhaucuiqwdeha","wqieoiosiahcAzoa hajkesdfsdf"];
const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;
  const newAr=[]
  
  arr.forEach(element => {

      newAr.push( countVowels(element.toLocaleLowerCase()))
  });
  console.log(newAr);