/*
                                              Variables and data type
let name="sadia";
let age=undefined;
let isStudent=false;
console.table([name,age,isStudent]);
//console.log(typeof name);
console.log(typeof age);
//console.log(typeof isStudent);



//let city="muridke";
//city="lahore";
//console.log(city);

let name="Hadia";
let age=20;
let className="BSCS";
let isEnrolled=true;
age=age+1;
className="BSCS semester 2";
console.log(age,name);
console.log("-----Student Info-----");
console.log("Name: ", name);
console.log("Age; ", age);
console.log("Class: " , className);
console.log("Enrolled: ", isEnrolled);
let a="2";
let b=3;
let c=a+b;
console.log(c);
console.log(typeof c);
*/

                                        // Datatype conversion confusion

                              //In Number conversion
/*let score=33;
console.log(score);
console.log(typeof score);

let cat="33abc";
console.log(cat);
console.log(typeof cat);
let isNumber=Number(cat);
console.log(isNumber);
console.log(typeof isNumber);
*/


/*let cat=null;
console.log(cat);
console.log(typeof cat);
let isNumber=Number(cat);
console.log(isNumber);
console.log(typeof isNumber);



let cat=undefined;
console.log(cat);
console.log(typeof cat);
let isNumber=Number(cat);
console.log(isNumber);
console.log(typeof isNumber);




let cat=true;
console.log(cat);
console.log(typeof cat);
let isNumber=Number(cat);
console.log(isNumber);
console.log(typeof isNumber);





let cat="hadia";
console.log(cat);
console.log(typeof cat);
let isNumber=Number(cat);
console.log(isNumber);
console.log(typeof isNumber);

                   //In Boolean Conversion


let cat=1;
console.log(cat);
console.log(typeof cat);
let isNumber=Boolean(cat);
console.log(isNumber);
console.log(typeof isNumber);



let cat=0;
console.log(cat);
console.log(typeof cat);
let isNumber=Boolean(cat);
console.log(isNumber);
console.log(typeof isNumber);



let cat="";
console.log(cat);
console.log(typeof cat);
let isNumber=Boolean(cat);
console.log(isNumber);
console.log(typeof isNumber);


let cat="Hadia";
console.log(cat);
console.log(typeof cat);
let isNumber=Boolean(cat);
console.log(isNumber);
console.log(typeof isNumber);


                //In string Conversion
let age=66;
console.log(String(age));
console.log(typeof (String(age)));
*/


//---------------------------------------Operations------------------------//
/*let age=4;
console.log(-age);
console.log(age+age);
console.log(age*2);
console.log(age-2);
console.log(age/2);
console.log(5%2);


let str1="hello ";
let str2="Hadia";
let str3=str1+str2;
//console.log(str3);

//console.log("1"+2);
//console.log("1"+2+2);
let str4="1"+(2+3);
//console.log(str4);
//console.log(typeof str4);
let str5=(1+2)+"5";
//console.log(str5);
//console.log(typeof str5);

let x=2;
//let y=++x;
//console.log(x,y);
let y=x++;
//console.log(x,y);
*/


                       //Comparison of Data Types
/*
console.log(2>1);
console.log(2>=1)
console.log(2!=3);



console.log(null>0);
console.log(null<0);
console.log(null==0);
console.log(null>=0);
console.log(null<=0);
console.log(null!=0);


console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined<=0);
console.log(undefined!=0);


//console.log("2">1);

console.log("2"===2);
console.log("3"===9);
*/

//-------------------------Data Types Summary----------------------//
/*Primitive                         
7 types: String, Number, Boolean, Null, undefined, Symbol.

Reference(Non Primitive) 
Array, Object, functions.Array



const id=Symbol(133);
const anotherID=Symbol(133);
console.log(id==anotherID);
console.log(id===anotherID);


         //arrays
const first=["hello", "ni hao", "anneonghaseyo"];
console.log(first);

const student_data={
    name:"Hadia",
    age:20,
    cgpa:1,
    grades:34,
};
console.log(student_data);

const myFunction=function(){
    console.log("hello world");
};
console.log(myFunction);
console.log(typeof first);
console.log(typeof student_data);
console.log(typeof myFunction);
*/

//-------------------------Stack and Heap Memory in Javascript----------------------//
/*
let userOne={
    name:"Sadia",
    age:11,
    cgpa:4,
};
let userTwo=userOne;
userOne["name"]="hadia";
userTwo.age=userTwo.age+1;
console.log(userTwo.age);
console.log(userOne.age);
console.log(userOne.name);
*/
     //-----------Strings--------------------//
 let name="hadia";
 let email="hadia@gmail.com";
 //console.log(`Hello my name is ${name} and my email is ${email}. Hope this message finds you well.`);
 //console.log("hi hello my name is ",name, "and this is my gamil ", email);
 
 let school="hello miss";
console.log(school);
console.log(school[4]);
console.log(school[5]);
console.log(school.length);
console.log(school.toUpperCase());
console.log(school.toWellFormed());
console.log(school.charAt(3));
console.log(school.indexOf('m'));
let work="hitech-mood";
let note=school.substring(0,3);
console.log(note);
 console.log(school.slice(-8,4));
 let good="    good to see you     ";
 console.log(good.trim());



 let go="hello mister-how are you?";
 let un=go.split('-');
 console.log(un);
 console.log(un);
console.log(go.replace('hello','sweet'));

 
 
 

