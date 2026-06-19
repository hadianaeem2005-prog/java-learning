//-----------------if---------------------------//
/*let price=100;
let money=200;
if(price<money)
{
    console.log(`Here is your extra money`);
}

let age=20;
if(age>18)
{
    console.log(`You can't vote because your age is less than required`);
}


let agee=25;
if(agee>18)
{
    console.log(`Adult`);
    
}
if(agee<18)
{
    console.log(`Minor`);
    
}


let loggedin=true;
if(loggedin)
{
    console.log(`Welcome`);
    
}
else
{
    console.log(`Please log in `);
    
}


//-----------------Multiple conditions-------------------//

let mark=50;
if(mark<40)
{
    console.log(`Your marks are not good`);
}
else if(mark>40 && mark<60)
{
    console.log(`Your marks are good so far`);
    
}
else{
    console.log(`Great job`);
    
}


let marks=50;
if(marks>=90)
{
    console.log(`A+`);
    
}
else if(marks>=80)
{
    console.log(`A`);
    
}
else if(marks>=70)
{
    console.log(`B`);
    
}
else
{
    console.log(`Fail`);
    
}


let age=20;
let hasID=true;
if(age>=18 && hasID)
{
    console.log(`Entry allowed`);
    
}


let temperature=34;
if(temperature>40)
{
    console.log(`Very Hot`);
    
}
else if(temperature>30)
{
    console.log(`Hot`);
    
}
else 
{
    console.log(`Cool`);
}



//--------------------nested if------------------------//
let age=20;
let hasID=true;
if(age>=18)
{
    if(hasID)
    {
        console.log(`Entry Allowed`);
        
    }
}



let age=19;
let hasID=false;
if(age>=18)
{
    if(hasID)
    {
        console.log(`Entry Allowed`);
    }
    else
    {
        console.log(`Bring your ID Please`);
        
    }
}


//--------------------Switch case-----------------------//
const month=4;
switch(month)
{
    case 1:
        {
            console.log(`Month: January`);
            break;
        }
    case 2:
        {
            console.log(`Month: Feb`);
            break;
        }
    case 3:
        {
            console.log(`Month: March`);
            break;
        }
     case 4:
        {
            console.log(`Month: April`);
            break;
        }
    case 5:
        {
            console.log(`Month: May`);
            break;
        }
    default:
        {
            console.log(`nothing`);
            
        }
}



let fruit="Apple";
switch(fruit)
{
    case "Apple":
        {
            console.log(`Red fruit`);
            break;
        }
    case "Mango":
        {
            console.log(`Yello fruit`);
            break;
        }
    case "Orange":
        {
            console.log(`Orange fruie`);
            break;
        }
    default:
        {
            console.log(`Not a fruit`);
            break;
        }
}



const email="some@gmail.com";
if(email)
{
    console.log(`Got user email`);
    
}
else{
    console.log(`Don't have user email`);
    
}


//    if we have empty string it is considered false
// if we have empty array it is considered true

// we get false  when   0,-0,BigInt ,0n, null ,undefined, NaN
//truely values      "0" , "false" , " " , [] ,  {},  function(){}



let arr=[];
if(arr.length==0)
{
    console.log(`It is am empty array`);
    
}

let obj={};
if(Object.keys(obj)===0)
{
    console.log(`It is an empty object`);
    
}
    


//--------------------------AND and OR operator--------------------//
//       Nullish Coalescing Operator  
let val;
val=5??10;
console.log(val);

// it means if we have value then ok otherwise null or undefined will be displayed
let val1=null?? 10?? 20;
console.log(val1);



//---------------------Terniary Operator-------------------//
//condition ? true :false

const iceTeaPrice=100;
iceTeaPrice>200? console.log(`Within range`):console.log(`Out of range`);

const value=900;
let show=value==400? `less than required` :` more than required`;
console.log(show);
*/




