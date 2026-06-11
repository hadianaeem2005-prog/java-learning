//---------------------Object literal---------------------//

/*const person1={
    name:"haider",
    age:25,
    location:"Islamabad",
    email:"haider@gmail.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Tuesday"],
};

console.log(person1.age);
console.log(person1["email"]);

//-------------Declare Symbol in object---------------//
const age= Symbol(34);
const person2={
    name:"Sirat",
    [age]:30,
    email:"sirat2009@gmail.com",
};
console.log(person2[age]);
console.log(typeof person2[age]);
*/
//---------------------task-----------------------------//
const student={
    name:"Asad",
    score:[23,34,55],
    passingScore:60,
}
/*

const calculate=(student.score[0]+student.score[1]+student.score[2])/3;
console.log(`The average of the score is ${calculate}`);


//----------------Object  freeze--------------//
Object.freeze(student);
student.name="hania";
console.log(student.name);


//student.greeting=function(){
  //  console.log(`Hello mister ${this.name}`);};

//console.log(student.greeting());

student.age=23;
console.log(`hello is your age is ${student.age}`);


//-----------------------object constructor-----------//
const one=new Object();
console.log(one);


const two={
    name:"Sammy",
    id:"123abc",
    isLoggedin:false,
};
console.log(two);


//---------------Object within Object-----------------//
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "hadia",
            lastname: "sadia",
        }
    }
};

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

//--------------------join two objects------------//
let obj1={
    1:"a",
    2:"b",
};
let obj2={
    3:"c",
    4:"d",
};
//let obj3=Object.assign({},obj1,obj2);
//console.log(obj3);
 
//---------------spread method-----------------//

let obj3={...obj1,...obj2};
console.log(obj3);



//----------------array containing object-------------//
const users=[
    {
        id:1,
        email:"some@gmai.com",
    }
    ,
    {
        id:2,
        email:"get@gmail.com",
    }
];
console.log(users[1].id);


//-------------------------------------//
console.log(Object.keys(student));
console.log(Object.values(student));


console.log(student.hasOwnProperty('name'));

//----------------Object de-structure------------//
// instead of writing student.name student.age we can write it like that 
const {name:a}=student;
console.log(a);
*/


