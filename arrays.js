//----------Arrays-----------------------//
//                 How to declare arrays?                 
//const first=[1,2,3,4,5];
/*const second=new Array(11,22,33,44,55);
console.log(first);
console.log(first[6]);
console.log(second[2]);
*/


                     //Various arrays methods
/*first.push("hello");
console.log(first);

first.pop();
console.log(first);

first.unshift("go");
console.log(first);

first.shift();
console.log(first);

const first=[1,2,3,4,5];
console.log(first.includes(6));
console.log(first.indexOf(1));
*/


//-------slice and split---------------//
let arr1=[1,2,3,4,5,6,7];
//let arr2=arr1.slice(0,4);
let arr2=arr1.splice(0,5,"hello",78);
//console.log(arr2);

//in arr2 we got removed part to see updated part we need to display arr1

let hero_1=["thor","Ironman","spiderman"];
let hero_2=["superman","flash","batman"];
//now I want both arr to merge together like a single one 
//hero_1.push(hero_2)
//console.log(hero_1);
//console.log(hero_1[3]);
//console.log(hero_1[3][1]);

//          use of concatenate(it stores updated array into different variable)
//let all=hero_1.concat(hero_2)
//console.log(all);

//           use of spread operator
/*
let all=[...hero_1,...hero_2];
//console.log(all);
console.log();
let one="12345";
console.log(Array.from(one));
*/

let fruit=["Apple","Mango","Banana"];
fruit.push("Orange");
console.log(fruit);

console.log(Array.of("Apple","Mango","Banana"));
let a="123";
console.log(typeof (Number(a)));

let name="hadia";
console.log(name.toUpperCase());

console.log(Math.floor(Math.random()*10)+1);
let today=new Date();
console.log(today.getFullYear());


