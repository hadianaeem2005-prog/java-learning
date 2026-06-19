/*
const student={
    name:"hadia",
    marks:44.3,
    printMarks:function(){
        console.log(`Marks: ${this.marks}`);  
    }
}


const employee={
    tax(){
        console.log("the tax is 10%");
        
    }
};
 //---------------------------how to make prototype------------------------//
 //  by this we can access obj keys for getting function see below
 const one={
    salary:5000,
 }
 
 one.__proto__=employee;          // by this we have made the obj, prototype of another obj.


const two={
    salary:23000,
    tax(){
        console.log("your tax is 30%");
        
    }
};
two.__proto__=employee;             // if an obj has a key same as key of prototype then obj key is preffered


//-----------------------------Class in js----------------------------------//

//we use class to make template of our desired obj

class car{
    constructor(name){
        console.log("i am constructor and the car is ", name);

        
    }
    start(){
        console.log("start the car");     // no need to put commas at the end of function
        
    }
    stop(){
        console.log("stop the car");
        
    }
    brand(brand){
        this.brand=brand;
    }
    
}

let civic=new car();
let fortuner=new car("i am fortuner");
civic.brand("civic")






//---------------------Inheritance in js-----------------------------------//
 class parent{
    greet(){
        console.log("hello world");
        
    }
 }

 class child extends parent{}

let laptop=new child;



class person{
    constructor(){
        console.log("I am in person constructor");
        
    }
    eat(){
        console.log("eat");
        
    }
    sleep(){
        console.log("sleep");
        
    }
}

class doctor extends person{
    constructor(){
        console.log("i am in doctor constructor");
        super();                    //if i have derived data from parent and both child and parent have constructor 
                                           // then we use super to access parent constructor otherwise there would be an error
        
    }
    work(){
        super.eat();                       //    in order to access parent functions we use super 
        console.log("work in hospital, help the patients get cured");
        
    }
}

let hadia=new doctor();     


let data="sign language tutorials";
 class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    viewdata(){
        console.log("website data: ",data);
        
    }
 }

 let student1=new user("saad","saad@gamil.com");
 let student2=new user("mahad","mahad@gmail.com");


 
 class Admin extends user{
    constructor(name,email){
        super(name,email)
    }
    editData(){
        data="no sign tutorials";
    }
    
 }


 let admin1=new Admin("khadija","khadija@gmail.com");
 

 class student{
    work(){
        console.log("work");
        
    }
 }

 let student1=new student();


//---------------------------Try and catch ---------------------------//
let a=5;
let b=10;
console.log("a+b= ",a+b);
console.log("a-b= ",a-b);
console.log("axb= ",a*b);
console.log("a/b= ",a/b);
console.log("a%b= ",a%b);
try{
console.log("a+b= ",a+c);
}catch(err){
    console.log(err);
    
}
console.log("a+b= ",a+b);
console.log("a+b= ",a+b);
console.log("a+b= ",a+b);



function getData(data){
    setTimeout(()=>{
        console.log("here is your data",data);
        
    },1000)
}

getData(12345);


//--------------------------Promises(solution to callback hell)---------------------//

 let promise=new Promise((resolve,reject)=>{
    resolve("the task is completed")
 })


let getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log(("I am a promise"));
        reject("not succeeded")
    })
};

let promise=getPromise();
promise.then(()=>{
    console.log("promise fulfilled");
    
})
promise.catch((err)=>{
    console.log(err);
    
})




    
function data1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success")
        },3000)
    })
}


console.log("fetching data1");
let p1=data1();
p1.then((res)=>{
    console.log(res); 
})



p1.catch((err)=>{
console.log(err
);
})


function data2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success")
        },3000)
    })
}


console.log("fetching data2");
let p2=data2();
p1.then((res)=>{
    console.log(res); 
})



p2.catch((err)=>{
console.log(err                   // if we want to fetch data 2 after finding out the data 1 then do that
);
})




function data1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success")
        },3000)
    })
}



function data2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success")
        },3000)
    })
}


console.log("fetching data1");
let p1=data1();
p1.then((res)=>{
    console.log("success");
    
    console.log("fetching data2");
    let p2=data2();
    p2.then((res)=>{
        console.log("success");
        
    });
    
})



//--------------------------Promise in datail----------------------------//

let promise_1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("I am within the promise");
        resolve()
    },2000)
})
promise_1.then(()=>{
    console.log("mission completed");
    
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("I am within the promise 2");
        resolve()
    },2000)
}).then(()=>{
    console.log("mission 2 completed");
    
})


let practice=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let okay=true;
        if(okay)
        resolve(`tea is ready`);
    else{
        reject();
    }
        
    },2000)
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("error detected");
    
})


new Promise((resolve,reject)=>{
    let marks=90;
    if(marks>=50)
    {
        resolve(`Pass`)
    }
    else{
        reject(`Fail`)
    }
}).then((data)=>{
console.log(data);

}).catch((error)=>{
console.log(error);

})




let practice=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let okay=true;
        if(okay)
        resolve(`tea is ready`);
    else{
        reject();
    }
        
    },1000)
});
async function getpromisee() {
    let result=await practice;
    console.log(result);
    
}
getpromisee();


*/


//-------------How to get data from promise into then------------------//
/*
let promise_3=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({user:"hadia", age:33,})
    },3000)
})
promise_3.then((user)=>{
console.log(user);

})

//--------------Suppose we want username------------------------//

let promise_4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:"sadia", password:333,})
        }
        else{
            reject("error: something is wrong")
        }
    },4000)
})
promise_4
.then((user)=>{
    console.log(user);
    return user.username    
})
.then((name)=>{
console.log(name);
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected");
    
})


//---------------use of async-------------------------//

let promise_5=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:"javascript", password:333,})
        }
        else{
            reject("error: javascript is wrong")
        }
    },2000)
});
async function profive() {
    try{ 
    let result=await promise_5       // it doesn't handle error gracefully so we use try catch
    console.log(result);
    }
    catch(error){
console.log(error);

    }
    
}
profive();



function hello(name,age){
    this.name=name;
    this.age=age;

}
let hell=new hello("sid",55);
console.log(hell);



function hello(get){

    return get*5
}
hello.power=9;
console.log(hello(2));
console.log(hello.power);
console.log(hello.prototype);




fetch=('url');

async function getFETCH(){
    let result=await fetch;
    let final=await result.json();
    console.log(final);
}
getFETCH()                             


//-----------------prototype----------------------------//
// if we want to add prototype (by making on our own) in a single idea use name.prototype.eat=function(){
}    if we want to link two different ideas use Object.prototype=(one,two)

function user(username){
    this.username=username;
}
user.prototype.login=function(){
    console.log(`${this.username} logged in`)
}

//---------------------

family A
family B
Object.prototype=(family A,family B)        //  now family B is the prototype of family A
//       for two constructor function use Object.prototype=(one.prototyoe,two.prototype)



function increment(){
    
console.log(this.score++);
};

function coffee(name,score){
    this.name=name;
    this.score=score;
    console.log(`name: ${name}   score: ${score}`);
    
}
coffee.prototype.increment=increment;
let chai=new coffee("asad",40);
console.log(chai);

chai.increment();
chai.increment();






function student(name){
    this.name=name;
}
student.prototype.sayname=function(){
    console.log(`my name is ${this.name}`);
    
}
let one=new student("hadia");
one.sayname();

function car(brand){
    this.brand=brand;
}
car.prototype.drive=function(){
    console.log(`${this.brand} is driving`);
    
};
let two=new car("toyota");
two.drive();


function user(name){
this.name=name;
}
user.prototype.country="Pakistan";

let three=new user("hadia");
console.log(three.country);




*/



//-------------------lets make prototype of true length---------------------------//
/*
let name="hadia         ";
console.log(name.length);

function truelength(){
    console.log(this.trim().length); 
}
String.prototype.truelength=truelength;
console.log(name.truelength());




//---------------here i am dealing with constructor function --------to get data from another constructor function we use .call and also send this

function getname(name){
    this.name=name;
}
function userinfo(name,email,password){
    getname.call(this,name)
    this.email=email;
    this.password=password;
}
const data=new userinfo("hadia","hadia@gmail.com",1234);
console.log(data);




//------------------------------Classes------------------------------//

class user{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changename(){
        return `${this.name.toUpperCase()}`
    }
}

const data=new user("saira","saira@gmail.com",111222);
console.log(data.encryptPassword());
console.log(data.changename());



class user{
    constructor(name){
        this.name=name;
    }

    logMe(){
        console.log(`Username is ${this.name}`);
        
    }
}

class teacher extends user{
    constructor(name,email,password){
        super(name)
        this.email=email;
        this.password=password;
    }

    addcourse(){
        console.log(`new course was added by ${this.name}`);
    }
}

const data=new teacher("Hadia","hadia@gmail.com",222);
data.addcourse();
const datatwo=new user("anila");
datatwo.logMe();          
data.logMe();

console.log(data===teacher);       // false
console.log(data instanceof teacher);         //  true
console.log(data instanceof user);          // true



class user{
    constructor(name){
        this.name=name;
    }

    logMe(){
        console.log(`Username is ${this.name}`);
        
    }

    createID(){
        return `333`
    }
}
let ten= new user("saad");
console.log(ten.createID());           //  give value of ID
//        if we use static with createID then we can't get and answer


class teacher extends user{
    constructor(name,email){
        super(name);
        this.email=email;
    }
}

const laptop=new teacher("lenovo","some@gmail.com");
laptop.logMe();



 
//          Task one    Prototype skill builder

class user{
    constructor(name){
        this.name=name;

    }
}
user.prototype.sayHello= function(){
        console.log(`Hello, I am ${this.name}`);  
    };

    let user_1=new user("Hadia");
    let user_2=new user("tahira");
user_1.sayHello();
user_2.sayHello();




//Task two           Prototype override TextDecoderStream
function car(brand){
    this.brand=brand;
}
car.prototype.speed=100;
let c1=new car("toyota");
c1.speed=200;
console.log(c1.speed);     //change speed


//      Task three           Object.create practice
const animal={
    sound:"Generic sound",
}
let dog=Object.create(animal);
console.log(dog.sound);
console.log(animal.sound);

*/

//Task four             Async Output Prediction+code
console.log("start");
setTimeout(()=>{
    console.log("set timeout");
    
},1000)
Promise.resolve().then(()=>{
    console.log("hello from promise");
    
})
console.log("end");


// Task five
class bankAccount{
    constructor(name,balance){
        this.name=name;
        this.balance=balance;
    }


    deposit(){
        this.balance+=amount;
        console.log(`the deposit amount of money is ${this.balance}`);
        
    }

    withdraw(amount){
        if(amount>this.balance){
            console.log("not enough money");
            
        }
        else{
            this.balance-=amount;
        
        console.log(`the amount withdraw is ${amount}`);
        }
    }

    showbalance(){
        console.log(`the remianing balance is${this.balance}`);
        
    }
}
let acc1=new bankAccount("hadia",1000);
acc1.deposit(500);







