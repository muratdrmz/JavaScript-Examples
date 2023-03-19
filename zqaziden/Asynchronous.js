// Asynchronous Programming
// PROMIS


// const waitingForSoup=()=>console.log('soup');

// console.log('You start the convo with your girl');
// setTimeout(waitingForSoup, 2000)
// console.log('still speaking');

// const promise1=new Promise((resolve, reject)=>{
//  setTimeout(() =>{
//   isReady=[true, false][Math.floor(Math.random()*2)] 
//   isReady ? resolve('soup is ready'):reject('No soup today');
//  },2000)
    
//  })
  
   // ? bu isaret asagidaki anlaminda
   // if(isReady==true){
   //  'run this'
   // }else{
   //  'run this'
    // }

// console.log(
//  promise1
//  .then(success=>console.log({success}))
//  .catch(error=>console.log({error}))
//  )

 // ASYNC AWAIT

 // console.log(
 //  'fetch:',
 //  fetch('https://dog.ceo/api/breeds/image/random')
 //  .then(response=>response.json())
 //  .then(data=>console.log(data)
 //   )
 // );

 // yukardakinin kolayi bu

//  const getDog=async()=>{
//   const url='https://dog.ceo/api/breeds/image/random'
//   const response= await fetch(url)
//   const data=await response.json()
//   console.log(data);
//  }

//  getDog()

