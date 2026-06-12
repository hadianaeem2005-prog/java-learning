/*let a=10;
const b="hello";
var c=900;

//console.log(a);
//console.log(b);
//console.log(c);

//----------------------------------------------within if condition--------------------------------------//
if(true)
{
    let a=333;
    const b=2222;
    var c=22222222222222;

}

console.log(a);
console.log(b);
console.log(c);
//var display its most recent value 
// keys outside of anything condition is considered global scope while inside the loops or conditions are considered block scope
//if we simple write c=90 it is also accessible and can be modified outside of {}


//-------------------------------------Scope Level and mini hoisting-----------------------------------------//
// function within function
function one()
{
    const name="hadia";
    function two()
    {
        const website="Youtube";
        console.log(name);
    }
   // console.log(website);
    two();
    
}
one();


if(true)
{
    const name="hadia";
    if(name==="hadia")
    {
        const website="youtube";
        console.log(name+" "+website);
    }
    //console.log(website);
}
//console.log(name);


//------------------------------------------imp concept-------------------------------------//
function addition(value)
{
    return value+1;
}
console.log(addition(5));
//console.log("Answer; ",addTwo(1));

//we can also declare function in variabe like this:

const addTwo=function(num){
    return num+2;
}
console.log("Answer; ",addTwo(1));

// if function is written like first one we can console.log before the function however if is stored in variable then first function then function call


//---------------------------------This and Arrow in js----------------------------//
const user={
    name:"hadia",
    price:1000,
    welcomeMessage: function()
    {
        console.log(`${this.name}, welcome to the website`);
        console.log(this);
        

    }
};

//console.log(user);
//console.log(user.welcomeMessage());
//user.welcomeMessage();
//console.log(this);         //it will show {} because it is not referring anything if used outside in the console if used within obj it will show obj



//"THIS" is used to access all the keys within the context like it is used within the obj so this can access all the keys within the obj


//-------------------THIS in function------------------------//
function one()
{
    let name="saad";
    console.log(this);       // it will show many other things
    console.log(this.name); // it will show undefined 
    
    
}
one();

//THIS is not suitable to use within the function better to use it in object



//--------------------------------------------------arrow function--------------------------------------------//
//to make arrow function just don't write function and use =>
    const pro= () => {
        let product="comb";
        let price=200;
        console.log(this);                //it will show {}
        console.log(this.price);                // it will show undefined
    }
    pro();


let addNum=(num1,num2) =>
{
    return num1+num2;
};
console.log(addNum(1,3));

// we can write the above arrow function like this:
let addtwo=(no1,no2) => no1+no2;
//  or like this
let addition=(no1,no2) => (no1+no2);

// here if we use {} it is compulsory to write return and it is explicit return if we use() no need to write return it is called implicit return




//------------------Immediatelu Invoked Function Expression-----------------//
// we use IIFE to avoid global scope pollution we use variables inside the function they
// can overwrite the variables outside so IIFE avoid it

function show()
{
    console.log(`Bluetooth is connected`);
};
show();       // simple function

(function show()
{
    console.log(`Bluetooth is connected too`);
    
})();      //    using named IIFE cuz it is with the function name
( () =>
{
    console.log(`hello world`);
    
})();        // using arrow  IIFE (simple IIFE)



( (name) =>
{
    console.log(`hello ${name}`);
    
})("hania");    // just like show(name){}      for call show("hania")

// here if we use multiple IIFE make sure to add ; at the last of each otherwise it will not work

*/






