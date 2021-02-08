'use strict';

let userName = prompt('What is your name ?');
alert('Welcome to my page'+' ' +userName);

let qo = prompt ('Do you know me well ? Answer yes or no');

if (qo.toLowerCase() === 'yes'){
  //   console.log(qo);
  alert('Let\'s see..');

} else{
  //   console.log(qo);
  alert('Read the paragraph below to know a few about me');

}

let qt = prompt ('Do you know what is my study major ? Answer yes or no');

if (qt.toLowerCase() === 'yes'){
  //   console.log(qt);
  alert('Good one');

} else{
  //console.log(qt);
  alert('It\'s Civil Engineering');
  
}

let cat = prompt ('Do I love cats? yes or no');

if (cat.toLowerCase() === 'yes'){
  //   console.log(cat);
  alert('definitely you know somethings about me!!');

} else{
  //   console.log(cat);
  alert('you are a stranger');

}

let qf = prompt ('Do I have a driving license ? yes or no');

if (qf.toLowerCase() === 'yes'){
  // console.log(qf);
  alert('maybe we are friends ');
} else {
  //   console.log(qf);
  alert('fortunately , I have one , I am a good driver');

}


let qfi = prompt ('Do you want to be my friend? yes or no');

if (qfi.toLowerCase() === 'yes'){
  //   console.log(qfi);
  alert('We\'re gonna be besties :D');

} else {
  //   console.log(qfi);
  alert('You are going to miss a lot ');

}

alert('It was my pleasure to know you'+' ' + userName);
