//This project is to Find one-digit-difference numbers Or ODD numbers
//And to find Number of one-digit-difference ODD & prime no's in between 0-10 million
// Take input number from user 
let x = prompt("Enter a Value : ", "0")
num = parseInt(x)
//To find is the number is prime or not 
function numisPrime(n){
    
    if (num%3===0){
        return (false)
    }
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return(true)
}
if (numisPrime(num)){
    console.log(`${num} is a prime `)
}
else {
    console.log(`${num} is not a prime `)
    
}
//function to find numbers is one-digit-difference(ODD) or not

  function numisODD(n) {
      
    let numString = n.toString();
    for (let i = 0; i < numString.length - 1; i++) {
      let digit1 = parseInt(numString[i]);
      let digit2 = parseInt(numString[i + 1]);
      if (Math.abs(digit1 - digit2) !== 1) {
        return false;
      }
    }
    return true;
  }
  if (numisODD(num)){
    console.log(`${num} is a ODD `)
}
else {
    console.log(`${num} is not a ODD `)
    
}
// To Find Number of one-digit-difference ODD & prime no's in between 0-10 million

let count = 0
for (let i = 0;i<=1000000; i++){
    
    if(numisPrime(i) &&  numisODD(i)){
        count++
        
    }
}
console.log(`There are ${count} one-digit-difference ODD & prime no's in between 0-10 million`)