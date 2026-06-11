//-------------Function-------------------//
/*function myName(){
    console.log("hello");
}
myName();
console.log(myName());

//-----------------------add two numbers---------------//
function addition(num1,num2){
    return num1+num2;
}
addition(10,10);
//-----------------------Store in variable----------------//
let result=addition(1,10);
console.log("Result: ",result);

function loginUserMessage(username){
    if(username===undefined)
    {
        console.log("Please enter name");
        return;
        
    }
    return (`${username} has just logged in`);
}
let name="hadia";
let update=loginUserMessage(name);
console.log(update);
//-------------in case of default value----------//
function loginMessage(user="sam")
{
    return `${user} has logged in`;
}
console.log(loginMessage());
//--------------if there is writte like that !username it's mean 
//     it is equal to username===undefined

function calculateCartPrice(){
    console.log(`hello`);
    
}

//-----------------------rest operator--------------//
//  in case of multiple unknown arguments we can use spread operator to identify or perform operations on them
function add(...num1){
    return num1;
}
let get=add(100,200,100);
console.log(get);


//------------------------How to pass object to function-------------------//
function data(get)
 {
    console.log(`${get.name} is the name of the person and his age is ${get.age}`);
}
let person={
    name:"saad",
    age:22,
    email:"some@gmail.com",
};
//data(person);
//-----------------------direct object in parameter---------------------------//
data({
    name:"hania",
    age:11,
});

//--------------------------passing arrays in function-----------------------------//
function showindex(arr)
{
    return arr[1];
}
let myArray=[100,200,300];
console.log("second value: ",showindex(myArray));
*/