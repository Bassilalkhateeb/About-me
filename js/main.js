'use strict';

let userName = prompt('What is your name ?');
alert('Welcome to my page'+' ' +userName);

let qo = prompt ('Do you know me well ? Answer yes or no');

if (qo.toLowerCase() === 'yes'){
  alert('Let\'s see..');
//   console.log(qo);
} else{
  alert('Read the paragraph below to know a few about me');
//   console.log(qo);
}

let qt = prompt ('Do you know what is my study major ? Answer yes or no');

if (qt.toLowerCase() === 'yes'){
  alert('Good one');
//   console.log(qt);
} else{
  alert('It\'s Civil Engineering');
  console.log(qt);
}

let cat = prompt ('Do I love cats? yes or no');

if (cat.toLowerCase() === 'yes'){
  alert('definitely you know somethings about me!!');
//   console.log(cat);
} else{
  alert('you are a stranger');
//   console.log(cat);
}

let qf = prompt ('Do I have a driving license ? yes or no');

if (qf.toLowerCase() === 'yes'){
  alert('maybe we are friends ');
  console.log(qf);
} else {
  alert('fortunately , I have one , I am a good driver');
//   console.log(qf);
}


let qfi = prompt ('Do you want to be my friend? yes or no');

if (qfi.toLowerCase() === 'yes'){
  alert('We\'re gonna be besties :D');
//   console.log(qfi);
} else {
  alert('You are going to miss a lot ');
//   console.log(qfi);
}

alert('It was my pleasure to know you'+' ' + userName);
