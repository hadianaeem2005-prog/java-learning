//------------------While loop------------------------//
/*let i=0;
while(i<5)
{
    console.log(`Hello`);
    i=i+1;
    
}
let arr=["batman","superman","spiderman"];
let y=0;
while(y<arr.length)
{
    console.log(`index ${y} contains value: ${arr[y]}`);
    y=y+1;
}
//--------------Do while loop--------------//
let score=1;
do{
        ++score;
    console.log(score);
    

}while(score<=10);


//---------------------------For loops----------------------//
for(let i=0;i<6;i++)
{
    console.log(i);
    
}
for(let i=0;i<6;i++)
{
    if(i==5)
    {
        console.log("5 is the best number");
    }
    console.log(i);
}



//---------------loop within loop--------------------//
for(let i=0;i<5;i++)
{
    console.log(`outer value is ${i}`);
    
    for(let y=0;y<5;y++)
    {
        let result=(i+1)*y;
        console.log(`inner value is ${y} and the answer is ${result}`);
        
    }
}

//---------Table of 5---------------------//
for(let i=1;i<11;i++)
{
    let result=5*i;
    console.log(`5 * ${i} = ${result}`);
}

//---------------------work on array------------------------//
let arr=["batman","superman","spiderman"];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    
}

//-----------------break and continue------------------------//
for(let i=0;i<6;i++)
{
    if(i==5)
    {
        console.log("5 is the best number");
        break;
    }
    console.log(i);
}
    
   for(let i=0;i<10;i++)
{
    if(i==5)
    {
        console.log("5 is the best number");
        continue;
    }
    console.log(i);
}
    
*/
//---------------"for of" loop(on arrays)-------------------------//
/*
 const arr=[1,2,3,4,5];
 for(const value of arr)
 {
    console.log(value);
    
 }



 let str="Hello world";
for(let value of str)
{
    if(value===" ")
    {
        continue;
    }
    console.log(value);
    
}




 let stri="Hello world";
for(let value of stri)
{
    console.log(value);
    
}
    
//-----------------for in on arrays---------------------//
//  for in in arrays give keys and values so just like obj we need to write ${key} to get keys and ${programming[key] to get values}


const programming=["js","rb","py","java","cpp"];
for(const key in programming)
{
    console.log(key);
    
}
for(const key in programming)
{
    console.log(programming[key]);
    
}

//-----------------------for each loop in arrays---------------//
//          for each loop does not return any value directly see a case below 

const programming=["js","rb","py","java","cpp"];
programming.forEach(function (value){
   // console.log(value);
    
});
programming.forEach((value)=>{
   // console.log(value);
    
});

function print(item)
{
    //console.log(item);
    
}
//programming.forEach(print);       //just give reference here not execute function

programming.forEach((item,index,arr)=>
    {
        console.log(item,index,arr);
        
    })



// -----------------------------if we have object in arrays---------------------------------//
const Coding=[
    {
        language:"javascript",
        shortcut:"js",
    },
    {
         language:"java",
        shortcut:"java",
    },
    {
        language:"Python",
        shortcut:"py",
    }
];

Coding.forEach((item)=>
{
    console.log(item);
    
});
Coding.forEach((item)=>
{
    console.log(item.language);
    
});

//---------------use of filter-----------//
const num=[1,2,3,4,5,6,7,8,9,10];
let get=num.filter((number)=>         //.filter is used to return something
{
    return number>4;
});
console.log(get);


// +++++++++++++++++++++++++++==     for each in arrays to return something
const newarr=[];
num.forEach(function (item){
    if(item>4)
    {
        newarr.push(item)
    }
})
console.log(newarr);



let books=[
    {
        title:"Book one",
        genre:"fiction",
        publish:2020,
    },
    {
        title:"Book two",
        genre:"history",
        publish:2005,
    },
    
    {
        title:"Book three",
        genre:"fiction",
        publish:2010,
    },
    
];
//console.log(books);
//console.log(books[2]);
let fictionBook=books.filter((let)=>
{
    return let.genre==="fiction";            // .filter is used to get something based on some criteria
});
console.log(fictionBook);


//------------------we also map if we want a specific value from obj that is within array-------------//

let books=[
    {
        title:"Book one",
        genre:"fiction",
        publish:2020,
    },
    {
        title:"Book two",
        genre:"history",
        publish:2005,
    },
    
    {
        title:"Book three",
        genre:"fiction",
        publish:2010,
    },
    
];
//  to get only books of genre of fiction
//let Onlybooks=books.filter((book)=>
//{
    //return book.genre==="fiction";

//});
//console.log(Onlybooks);

// to get only titles
let Onlybooks=books.filter((book)=>
{
    return book.genre==="fiction";

}
)
.map((book)=> book.title);
;
console.log(Onlybooks);
*/

//----------------Maps-----------------------//
/*
let map=new Map();
map.set(`Pak`,"Pakistan");
map.set(`USA`,"United States of America");
map.set(`Fr`,"France");
console.log(map);





//------------apply for of loop on map-----------------------//
for(let key of map)
{
    console.log(key);
    
}
for(let [key,value] of map)
{
    console.log(key, ":-", value);
    
}

// we can't use for in loop on maps because they are not iterable


//----------------for in loop(use in obj)-----------------//
const myObj={
    js:`javascript`,
    cpp:`C++`,
    rb:`ruby`,
    swift:`swift by apple`,
};
for(const key in myObj)
{
    console.log(key);
    
}
for(const key in myObj)
{
    console.log(myObj[key]);
    
}
for(const key in myObj)
{
    console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

*/

