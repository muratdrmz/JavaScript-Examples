// let num=0

// let num2=10
// while(num<num2){
// console.log('looping', num);
//  num++

// }

// let finished=true

// while(finished==true){
//  console.log('looping');
//  finished=false
//  // yukardaki olmazsa sonsuz loop
// }


// ADDAVANTLISTENER

let playDiv=document.getElementById('play')
// console.log(playDiv.innerText);

// playDiv.onclick=()=>{
//  console.log('yo yo');
// }
// function (){} yada ()=>{}
// playDiv.addEventListener('click', ()=>{
//  console.log('yoyo');
// })

// document.addEventListener('keydown', function(e){
//  console.log('hi');
// })

document.addEventListener('keydown', function(e){
 if(e.key=='q'){
  console.log('you pressed q');
 }else{
  console.log('not q');
 }
})