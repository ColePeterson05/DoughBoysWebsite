/*
console.log("Hello World, from external JS!"); //First line in JS

let age = 20;
let name = 'Cole';
console.log("name is: " + name + ", age is: " + age);

let a = 5;
console.log(a);
let b = 20;
console.log(b);

let msg = "hello world";
                //012345678910
console.log(msg);
console.log(msg.charAt(4)); //returns charcter at indext 4
console.log(msg.replace('o','a')); //replacing o with a

console.log(msg.split(" "));

console.log(''== 0); //comparison function true because it can be converted into number 0

console.log(''=== 0); //false since it is not physically 0

//function declartions
function sum(a, b) {
    return a + b;
}
console.log(sum(5,10));

//function expression
const greet2 = function() {
    console.log("Hello from greet2");
}
//arrow function
const sumArr = (a,b) => a + b;
console.log(sumArr);

//Learning about event listenrs
const heading = document.querySelector('h1');

function changeText(){
    console.log("Change text");
}
heading.addEventListener('click', changeText);
*/
//Temp learning JS ^^


const follower = document.getElementById('follower');

document.addEventListener('mousemove', (e) => {
    follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
