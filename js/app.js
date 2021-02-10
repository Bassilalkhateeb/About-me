// 'use strict';


// let userName = prompt('What is your name ?');

// function welcome (userName){

//   alert('Welcome to my page'+' ' +userName);
// }
// welcome(userName);


// function questionOne() {

//   let qo = prompt ('Do you know me well ? Your answer should be yes , no or Y , N ');

//   if (qo.toLowerCase() === 'yes' || qo.toUpperCase() === 'Y'){
//   //   console.log(qo);
//     alert('Let\'s see..');

//   } else{
//   //   console.log(qo);
//     alert('Read the paragraph below to know a few about me');
//   }

// }
// questionOne();




// let qt = prompt ('Do you know what is my study major ? Your answer should be yes , no or Y , N');

// if (qt.toLowerCase() === 'yes' || qt.toUpperCase () === 'Y'){
//   //   console.log(qt);
//   alert('Good one');

// } else{
//   //console.log(qt);
//   alert('It\'s Civil Engineering');

// }

// let cat = prompt ('Do I love cats? yes , no or Y , N');

// if (cat.toLowerCase() === 'yes' || cat.toUpperCase() === 'Y' ){
//   //   console.log(cat);
//   alert('definitely you know somethings about me!!');

// } else{
//   //   console.log(cat);
//   alert('you are a stranger');

// }

// let qf = prompt ('Do I have a driving license ? yes , no or Y , N');

// if (qf.toLowerCase() === 'yes' || qf.toUpperCase() === 'Y'){
//   // console.log(qf);
//   alert('maybe we are friends ');
// } else {
//   //   console.log(qf);
//   alert('fortunately , I have one , I am a good driver');

// }


// let qfi = prompt ('Do you want to be my friend? yes , no or Y , N');

// if (qfi.toLowerCase() === 'yes' | qfi.toUpperCase() === 'Y'){
//   //   console.log(qfi);
//   alert('We\'re gonna be best friends :D');

// } else {
//   //   console.log(qfi);
//   alert('You are going to miss a lot ');

// }

// alert('Now to the guessing game');

// let qs= prompt ('Guess the number from 1-8');


// let attempts=4;
// one();
// function one() {


//   while(attempts) {

//     if (Number(qs)>4){
//       alert('Too High!!');
//     }

//     else if(Number(qs)<4){
//       alert('Too low!');
//     }

//     else if(Number(qs) === 4){
//       alert('That is correct');
//       alert('You are smart');
//       break;
//     }

//     attempts-=1;
//     qs=prompt('please try again you have : ' +attempts+ ' remaining!');

//   }
// }
// alert('The number is 4');


let myHero = ['spiderman', 'ironman', 'batman', 'superman', 'hulk', 'thor'];
let userInput = prompt ('Can you guess which is my fav superhero??');


for (let i=0 ;i <= 6;i++){


  for (let z=0; z < myHero.length; z++){
    if (myHero[z]===userInput){
      alert ('right answer');
      i=7;
      break;
    }


  }
  if(i === 7){

    break;

  }
  let fadi=5-i;
  alert ('wrong answer, try again you have : '+fadi+' attempts left');
  userInput = prompt ('try to guess my fav hero');
  if(fadi === 0){
    alert('sorry no more attempts');
  }

}


alert('It was my pleasure to know have you '+userName+' in my page :)');
