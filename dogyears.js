//This is a reassignable variable (myAge) set to (19).
let myAge = 21;

//This is a reassignable variable (earlyYears) set to different values.
let earlyYears = 2;

earlyYears *= 10.5;

myAge -= 2;

//This is a reassignable variable that retrieves the result from (myAge -= 2;). then multiplying it by 4 (laterYears *= 4;) to account dog years.
let laterYears = myAge;

laterYears *= 4;

//(myAgeInDogYears) is a constant variable that calculates using the * operator to multiply earlyYears by laterYears.
const myAgeInDogYears = earlyYears + laterYears;

//myName is a reassignable value and is set to 'Ali' , it is then printed out with the .toLowerCase() Mehod to print the string in all lower case. 
let myName = 
'Ali'.toLowerCase();

//This is the final output converting human years to dog years. 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);




