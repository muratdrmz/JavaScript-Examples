

// >>>>variables==================
    /*
    name="Peter Pan"
    console.log(name)
    sentence='how are you today'

    There are 3 types

    var
    let   value can be changed
    const value can not be changed

    */



// >>>>operators

    /*
     =+-
    */

// >>>>user input

    /*

    food=Number (prompt("how much was the food?"));
    tipPercentage= Number (prompt("tip %?")/100);

    tipAmount=food*tipPercentage

    total=food+ tipAmount;

    alert(tipAmount);
    alert(total);

    console.log('tip amount', tipAmount);

    console.log('total', total);

    */

// >>>>data types (strings. numbers)

    /*
    numbers=1, 5, 2.5
    strings='helllo' "what s upp"
    arrays=[   ]
    objects={  }
    boolean = true or false
    */


// >>>>Math operators
    /*
    Multiply *
    Divide /
    Exponents **
    Modulo/Remainder % 5%2=1
    Add +
    Subtract -
    */

// Math Methods=======================

    /*

    Math.floor(2.5)  2
    Math.ceil(2.5) 3
    Random 0-1 arasi numara verir

    */

// Baby weater app  conditionals

     /*
     let weather=prompt('how is the weather?');

     if(weather=='rain'){
      console.log('Grab your umbrella');
     }else{
      console.log('Wear your sunglassess');
     }
      */
     /*
     let weather=prompt('how is the weather?');

     one='Grab your umbrella'
     two='Wear your sunglassess'

     if(weather=='rain'){
      alert(one);
     }else{
      alert(two);
     }
     */

//  conditional operators
     // == ===  >   <   >=  <=  !=  !==

// FUNTCIONS==================

     // this is a function called sayMyName it has no arguments.
     // it logs out your name to the console

     // function sayMyName(){
     //  console.log('Qazí')
     // }

     // argument diyoruz name diye yazilan ifadeye
     // this is a function called sayMyName it has one argument
     // it logs out your name to console

     // function sayMyName (name){
     //  console.log(name);
     // }

     // sayMyName("Lance")

     // function greeting(name){
     //  greet="hi " + name + ", Nice to meet you!" 
     // console.log(greet);
     // }

     // greeting("murat")

     // tamplate literals

     // function greeting(name){
     //  greet=`hi ${name} , Nice to meet you!`
     //  console.log(greet);
     // }

     // greeting('Amber Heard')

     // ========

     // function sum(a,b){
     //  // return
     //  return a+b
     // }

     // console.log(sum(1,2)) yada

     // num1=sum(4,2)
     // console.log(num1);

     // new example

     // function calculateFoodTotal(food, tip){
     //    const tipPercentage=tip/100
     //    const tipAmount=food*tipPercentage
     //    // total=food+tipAmount
     //    const total=sum(food,tipAmount)
     //    return total
     // }

         // console.log(calculateFoodTotal(50, 20));


// ES6
// Arrow Functions=>

   // arrow function with explicit return
    // const sumArrow=(a,b)=>{return a+b}

   // or arrow function with implicit return

    // const sumArrow2=(a,b) => a+b

    // console.log(sumArrow2(10,50));

// ====ARRAYS======================

    // const groceries=['bonon', 'apple', 'orange', 'melon', 'barbel', 'hedy']

    // console.log(groceries);
    // console.log(groceries[1]);

// Array methods===
   // groceries.push('cokí')
   // console.log(groceries);

      // groceries.push('ben')

//Array slice==========
        // start from 0 inclusive and up to 6 not inclusive
        // console.log(groceries.slice(0,6));
        // console.log(groceries.slice(3,6));
        // console.log(groceries.slice(1,4));

// array methods = slice  push indexOf  length

     // console.log(groceries.indexOf('orange'));
     // console.log(groceries.length);

// OBJECTS
      /*
       object 
              leonardo dicaprio
       Properties 
        person.name='leonardo'
        person.shirt='white'

        */
             // object person demek
     // const person={
     //  name:'Leonadro',
     //  shirt:'white'     
     // }


     // access object; dot notation vs bracket notation
      // console.log(person.name);

      // console.log(person['name']);

      // assign object
      // person.phone= '111-22-333-444'
      // person['phone']='11-44-33'
      // console.log(person.phone);
      // console.log(person);

     // person2
     // const person2={
     //  name:'Qazi',
     //  shirt:'black'}
     // console.log(person2);
     // console.log(person2.name);

      // es6 arrow function (2 argumetns)
      // object
      // template literals
      // methods
     
      // const introducer=(name, shirt)=>{
      //  const person={
      //  name:name,
      //  shirt:shirt,
      //  assets:100000,
      //  liabilities:50000,
      //  netWorth:function(){
      //   return this.assets-this.liabilities
      //  }

      // }

      // const intro= `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.assets-person.liabilities} USD`
      
      // const intro= `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()} USD`

      // return intro
     // }

     // console.log(introducer('Qaz', 'black'));


// FOR LOOPS=========================

        // const fruits=['banana', 'apple', 'orange', 'armut','banana', 'apple', 'orange', 'armut','banana', 'apple', 'orange', 'armut','banana', 'apple', 'orange', 'armut','banana', 'apple', 'orange', 'armut']
 
        // console.log(fruits[0]);
        // console.log(fruits[1]);
        // console.log(fruits[2]);
        // console.log(fruits[3]);

        // for(let i=0; i<fruits.length; i++){
        //     console.log(i, fruits[i]);
        // }

        // for(const fruit of fruits){
        //     console.log(fruit);
        // }

        // const numbers=[1,2,3,4,5,6]

        // sum up all numbers in array

        // for(let i=0; i<numbers.length; i++){
        //     console.log(i,numbers[i]);}
        

        // for (number of numbers){
        //     console.log(number);
        // }

        //    for (const number of numbers){
        //     console.log(number*2); }

        // const double=(numbers)=>{
        //   let result=[]
        //   for (const number of numbers){
        //        result.push(number*2)
        // }
        // return result
        // }

        // console.log(double([1,2,3,4,5,6]));

// 07 Array & Object Exercises==============
       
        // const howManyLetters=()=>{
        //     const phrase='hey, can you go to grocery store with me?'
            
            // for- in farkli seyler yapar

            //  for(const letter in phrase){
            //     console.log(letter);
            // }

            // string oluyorsa Number diye yapinca arti 1 oluyor

            //  for(const index in phrase){
            //     console.log(Number (index)+1);
                
            // }

            // counter

        //     const howManyLetters=(phrase)=>{
            
        //     let result=0;

        //     for(const index in phrase){
        //         console.log(Number (index)+1);
        //         result=Number (index) +1           }

        //    return{result}
        
            // bu da olabílir yada kullanici yazsin dersen promt olur
            // const phrase='hey, can you go to grocery store with me?'


            // const phrase=prompt('write you phrase')     


            // console.log(howManyLetters(phrase)); 

            // butun bunlar length ile daha kisa yapilir

            // const howManyLetters=(phrase)=>{
            //     return {result:phrase.lenght}
            // }
            // const phrase=prompt("tel me yoru phrase")

            // console.log(howManyLetters(phrase));

        // sum up all numbers in array

        // for(const index in phrase){
        // console.log(Number (index)+1);
        //     result=Number (index) +1           

        //  return{result}}



        // const sumArray=(numbers)=>{
        //     let result=0;
        //     // for loop
        //     for (const number of numbers){
        //         console.log(number);
        //         result=result+number
        //               }
        //     return{result}
        // }

        // const nums=[1,2,3,4,5]
        // console.log(sumArray(nums));        
          

         // const sumArray=(nums)=>{
        //     let result=0
        //      for (const num of nums){
        //         console.log(num);
        //     result=result + num
        // }

        // return{ result }
        // }

        // const nums=[1,2,3,4,5,6];

        // console.log(sumArray(nums));

       
        // const nums=[1,2,3,4,5]

        // const max=(numbers)=>{
        //  let result=numbers[0]   
        // //  loop
        // for(const number of numbers){
        //     if(number>result){
        //         result=number
        //     }
        // }
        // return {result}
        // }
     
        // console.log(max([1,2,3,40,5]));

        // const letterFrequency=(phrase)=>{
        //  console.log(phrase)   
        //  let frequency={}
        //  for(const letter of phrase){
        //     if (letter in frequency){
        //         frequency[letter]=frequency[letter]+1
        //         // frequency[letter]+=1
        //         // frequency[letter]++
        //     }else{
        //         frequency[letter]=1
        //     }
        //  }
        //  return frequency
        // }

        // console.log(letterFrequency("haha how are you today gode gk fkd kdfj"));

        // incremental operators
        // ++ -- +=

        // const wordFrequency=(phrase)=>{
        //     console.log(phrase);
        //     let frequency={};

        //     // for(const word of phrase){
        //     //     if(word in frequency){
        //     //         frequency[word]++
        //     //     }else{
        //     //         frequency[word]=1
        //     //     }
        //     // }
        //     return frequency
        // }



        // function wordFrequency(phrase){ boyle de baslayabilir

        // const wordFrequency=(phrase)=> {
        //     let frequency= {}
        //     words = phrase.split(' ')
        //     for(const word of words){
        //       if(word in frequency){
        //         frequency[word]+=1
        //       }else{
        //         frequency[word]=1
        //       }
        //     } 

        //      console.log(words)
        //      return frequency           

        // }
        // console.log(wordFrequency('lol what lol yo yo yo'));   

        // YADA AYNI SEY SOYLE YAPILIR

        // const letterFrequency=(phrase)=>{
        //     let frequency={}
        //     for(const letter of phrase){
        //         if (letter in frequency){
        //             frequency[letter]+=1
        //         }else{
        //             frequency[letter]=1
        //         }
        //     }
        //     return frequency
        // }

        // const wordFrequency=(phrase)=>{
        //     let frequency={}
        //     const words=phrase.split(' ')
        //    return letterFrequency(words)
        // }

        // const userInput=prompt('Write your sentence')


        //  console.log(wordFrequency(userInput))
        
        // function howManySeconds(hours){
        //     let minutes=hours*60
        //     let seconds=minutes*60

        //     return seconds
        // }
        // console.log(howManySeconds(24));


// HIGHER ORDER FUNCTIONS===========

    // map - it loops and returns
    // filter =loops and returns an Array
    // reduce

    // [1,2,3,4].map(number => console.log(number))

    // let result=[1,2,3,4].map(number=>number*2)
    // console.log(result);

// MAP

    // const doubleMap=(numbers)=>{
    //     return numbers.map(number=>number*2)
    // }

    //     console.log(doubleMap([1,2,3,4,5]));    

// FILTER============================
    //  function filter(numbers,greaterThan)

    //      const filter=(numbers, greaterThan)=>{
    //         let result=[]
    //         for(const number of numbers){
    //             if(number>greaterThan){
    //                 result.push(number)
    //             }
    //         }       

    //         return result
    //      }
    //      console.log(filter([1,2,3,4,5,6],3));

    //     const nums=[1,2,3,4,5,6]
    //   console.log(nums.filter(num=>num>4 || num<2))
    //   console.log(nums.filter(num=>num>4 && num<2))
   
     const actors=[
        {name:'johny', netWorth:200 },
        {name:'amber', netWorth:10 },
        {name:'matt', netWorth:170 },
        {name:'brad', netWorth:300 },
        {name:'amber', netWorth:10 },
        {name:'leo', netWorth:100 },
     ]

    //  let result= actors.filter(actor=>actor.netWorth>100)
    // //  console.log(result);
     
    // //  document.body.innerHTML=`<h1>${result[0].name}</h1>`
    // let names=result.map(actor=>actor.name).join(', ')

    //  document.body.innerHTML=`<h1>${names}</h1>`
    //  console.log(result.map(actor=>actor.name).join(', '))
    
//  REDUCE======================= 

    //  const nums=[1,2,3]
    //  const result=nums.reduce((prev, curr)=> prev+curr)
    //  console.log(result);
    //  document.body.innerHTML=`<h1>${result}</h1>`

    // function sum(a,b){
    //     return a+b
    // }
    
    // function sum(a,b){
    //     return a+b
    // }

    // const nums=[1,2,3]
    // const result=nums.reduce(sum)
    // console.log(result);

    //     function multiply(a,b){
    //     return a*b
    // }

    // const nums=[1,2,3,4]
    // const result=nums.reduce(multiply) //bunun yerine ((a,b)=>a*b) bu da olur
    // console.log(result);
    // document.body.innerHTML=`<h1>${result}</h1>`


    // let result=actors.reduce((a,b)=>a+b.netWorth,0)
    // document.body.innerHTML=`<h1>${result}</h1>`
    // console.log(result);



// DOM MANIPULATION==============


// random 

// let fruits =['apple', 'orange', 'kivi', 'bar','bar'];

// const randomFruit= (fruits) => {
//  const randomNumber=Math.floor(Math.random()*fruits.length)

//  return fruits[randomNumber]
// }

// console.log(randomFruit(fruits));


// if else if else
// rainy 1 sunny -1 overcast 0

// const weatherScore=(weather, weather2)=>{
//     let score

//     if (weather==='rainy' && weather2==='overcast'){
//         score=2
//     } else if(weather==='rainy'){
//         score=1
//     }else if(weather==='sunny'){
//         score=-1
//     }else{
//         score=0
//     }

//     return score
// }

// console.log(weatherScore('rainy'));

// ===========================

