/*
var head = document.querySelector(".head");
head.style.color = "red";
head.style.fontSize ="30px";
head.style.fontFamily = "Arial";
head.style.textAlign = "center";
head.style.textShadow = "2px 2px 4px #000000";
*/
/*let name;
let age=22;
name = age > 20 ? 'Oake' : 'khat';
console.log(name); */

/*let color = "blue";


switch (color) {
    case "blue" : console.log("The color is blue");break;
    case "red" : console.log ("The color is red");break;
    case "green" : console.log ("The color is green");break;
    default : console.log ("The color is not blue, red, or green");
} */

// for loop
/*for (let b = 0; b < 5; b++) {
    console.log("Hellow World"+b);
    }

//while loop
let j = 0;
while (j < 5) {
    console.log ("My Number is" + j);
    j++;
}


 let data = ["oake", "khat", "Soe", "lwin"];

 // for loop
 for(let i=0; i< data.length; i++){
    console.log(data[i]);
 }

 // foreach loop
 data.forEach((val , b) => {
    console.log(val + " " + b);
 });

 // while loop
 let k=0;
 while (k<data.length){
    console.log(data[k]);
    k++;
 }

 // do while loop
 let m=0;
 do{
    console.log(data[m]);
    m++;
 } while (m<data.length);


// for in 
for (a in data){
    console.log(a);w3e2
}*/

/* let num = "24Hello";
let result = Number(num);
if (isNaN(result)) {
   console.log("The result is not a number");
} else {
   console.log("The result is a number: " + result);
}

function add(a,b){
   y
} */
/* function add(num1, num2, num3, num4){
   let sum= num1 + num2 + num3 + num4;
   return sum;
}
let result = add(1,2,4,1);
console.log(result); */

// Call back function
/* let expression = function (num, fun){
   let result = fun(num);
   return console.log(result*2);
}
expression(5, function(num_1){
   return num_1 + 2;
}) */


// Expression function and arrow function
/* let expression = (one, two ) => {
   let sum = one + two;
   return sum;
}
sum = expression(3, 4);
console.log(sum); */

/* let example = (three, four) => console.log(three * four);

example(5, 6); */


// map method
/* names = ["oake", "khat", "soe", "lwin"];
let newNames = names.map((name) => {
   return "mr. " + name;
})
console.log(newNames); */

// filter method
/* let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter((num) => {
   return num % 2 === 0;
})
console.log(evenNumbers);


for(i in numbers){
   if (numbers[i] % 2 ===0){
      console.log(numbers[i]);
   } else {
      console.log("This is odd number");
   }
} */

 // reduce method
 /* let numebers = [1, 2, 3, 4, 5];
   let sum = numebers.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
   });
   console.log(sum); */

// Object
/* let Objects = {
   name: "oakesoe",
   age:28,
   city: "Yangon",
   profession: "Developer" 
}
let data = Objects.map((para) => {
   return Objects.para;
})
console.log(data); */

// Conditional Statement
/* let temp = parseInt(prompt("Enter the temperature in Celsius: "));

if(temp > 27){
   console.log("It's hot outside");
}else if (temp > 20){
   console.log("It's warm outside");
}else if (temp > 10){
   console.log("It's cool outside");
}else {
   console.log("It's cold outside");
}   */

//Chellenge for conditinal Statement

/* et people = [
  { name: "oake",age: 28,ticket: null, Gender:"M"},
  {name: "khat",age: 22,ticket: null, Gender:"F"},
  { name: "soe",age: 30,ticket: null, Gender:"M"},
  {name: "lwin",age: 25,ticket: null, Gender: "F"},
  { name: "aung",age: 18,ticket: null, Gender: "M"}];

let people_ticket = people.map((person) => {
  if (person.age >= 18) {
    person.ticket = "Adult";
  } else { 
    person.ticket = "Child";
  }
  return person;
});

console.table(people_ticket);


let gender = people_ticket.map((human) => {
   if (human.Gender ==="M"){
      human.Gender = "Male";
   } else {human.Gender = "Female"};
   return human;
})

console.table(gender); */


// switch statement

/* let color = prompt ("Enter a color; ");

switch (color.toLowerCase()){
   case "red" : console.log( "The color is red");
   break;
   case "blue" : console. log("The color is blue");
   break;
   case "green" : console.log(" The color is green");
   break;
   default : console.log("The color is not red, blue, or green");
}
 */
//Ternary operator
/* let age = 19;

if (age >= 18) {
   console.log ("You can drive");
}else {
   console.log("You cannot drive")
}


my_license = age >=18 ? "You can drive" : "You cannot drive";
console.log ( my_license); */


// whilel loop
/* let i = 0;
while (i<=10){
   console.log(i);
   i++;
} */

// Do while loop
/* let j = 0;

do {
   console.log(j);
   j++;
} while (j <= 10); */


// for loop 
/* 
let data = ["oake", "khat", "soe", "lwin"];

for (let i=0; i <data.length; i++){
   console.log (data[i]);
}

//for in loop
for (i in data){
   console.log(data[i]);
}

let i = 0;

console.log("The number is " + i); */


/* let item_price = [1000, 1500, 2000, 2500,3000, 4500, 5000];

for (i of item_price){
   if (i === 3000){
      console.log("It is not for sale");
   } else {
      console.log("The price is " + i);   
   }
} */

//letter literal
/* et person = {
   name: "oake",
   brother: "Phoe",
   sister: "Moe",
   parents: ["U Aunt", "Daw Ngu"],
   age : 28
}

let mydata =`
<h3> My name is ${person.name} </h3>
<ul>
   <li> Father : ${person.parents[0]} </li>
   <li> Mothehr : ${person.parents[1]} </li>
   <li> Brother : ${person.brother} </li>
   <li> Sister : ${person.sister} </li>
   <li> Age : ${person.age} </li>
</ul>
`

document.querySelector(".para").innerHTML = mydata; */


//date object
/* let now = new Date();

console.log(now);
console.log(now.getDay());
console.log (now.getTime());
console.log(now.getMonth());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getDate()) */

// sort method 
/* let number = [12, 23, 1, 2, 53,32,4,5,7,8,15];

let ans = (x,y) => {
   return x-y;
}

number.sort(ans);
console.log(number); */


// find method
/*  let number = [12, 23, 1, 2, 53,32,4,5,7,8,15];

 let result = number.find((num) => {
   return num >16;
 })
   console.log(result); */
// array methods
/* et number = [12, 3 ,4 ,5 ,6, 7];

let number2 = [8,9,0,1,21,31,3,24];

let result = number .concat(number2);

let result2 = [...number, ...number2];

console.log(result);
console.log(result2); */

//window object

/* indow.alert("do not use");

window.prompt("Enter your name: ");

window.confirm("Are you sure you want to delete this item?"); */
/* let con = window.confirm("Are you over 18 years old?");

let answer = con ? " You are over 18 years old" : "You are not over 18 years old";

document.querySelector(".head").innerHTML = answer; */

/* document.querySelector(".head").innerHTML = window.innerHeight;


/* window.location.href = "document.html"; */

/*document.querySelector(".butt").addEventListener("click",    function(){
   window.location.href = "document.html";
})
 */

