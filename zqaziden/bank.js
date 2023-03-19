class Bank{
 constructor(balance){
  this.balance=balance
 }
 withdraw(amountInput){
  // guard clause
  if(this.balance-amountInput<=0){
   console.log('X You cannot withdraw');
   return
  }
  this.balance-=amountInput
  console.log('withdrew', `$${amountInput}`);
  console.log({balance:this.balance});
 }
 deposit(amountInput){
  this.balance+=amountInput
  console.log('deposited', `$${amountInput}`);
  console.log({balance:this.balance});
 }
}
const qaziChecking=new Bank(0)


const depositButton=document.getElementById('deposit')
const withdrawtButton=document.getElementById('withdraw')
const amountInput=document.getElementById('amount')
const balanceDiv=document.getElementById("balance")
const enterDiv=document.getElementById("enter")

depositButton.onclick=()=>{
 const amount=Number(amountInput.value)
qaziChecking.deposit(amount)
balanceDiv.innerText=`Balance:$${qaziChecking.balance}`
enterDiv.innerText+=`+$${amount}`
}

withdrawtButton.onclick=()=>{
  const amount=Number(amountInput.value)
 qaziChecking.withdraw(amount)
 balanceDiv.innerText=`Balance:$${qaziChecking.balance}`
 enterDiv.innerText+=`-$${amount}`
}





