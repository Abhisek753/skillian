import fetch from "node-fetch";

// var x=7;
// function getName(){
//    console.log("Hi Swati")
// };
// getName();
// console.log(x);

// getName()
//  console.log(x);
//  var x=7;
//  function getName(){
//     console.log("Hi Swati")
//  }

// var x=1;
// a();
// b();
// console.log(x);
// function a(){
//     var x=10;
//     console.log(x);
// };
// function b(){
//     var x=100;
//     console.log(x)
// }
  
// console.log(multiply);

// const multiply=function(a,b){
//     return a*b
// }
// console.log(multiply);
// console.log(multiply(2,3))
// console.log(print)
// var print=()=>console.log("hi roman");
// console.log(print())

// (function ())
// let number=[2,3,4];
// let tripple=number.map((el)=>el*3)
// console.log(tripple)

//Recursive function;

// function Factor(n){
//     if(n==0){
//         return 1
//     }
//     return Factor(n-1)
// }
// console.log(Factor(6));

// function count(n){
//     if(n==0) return;
//     console.log(n);
//     count(n-1)
// }
// count(5)

// function count(){
//     var name="hello"
//     function x(){
//         console.log(name)
//     }
//     x()
// }
// count()

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y
// }
// var z=x()
// console.log(z);
// z()
// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i)
//     },3000)
//     console.log("Kunal is reading")
// }
// x();
// function x(){
//     for(var i=1;i<=5;i++){
//       function close(i){
//         setTimeout(function(){
//             console.log(i)
//            },1000)
//       }
//       close(i)
//     }
//     // console.log("hello")
// }
// x()
//rest operator
// function a(...value){
//     console.log(value)
// }
// a(1,2,3,4,5)
// let obj1={name:"abhi1",age:34}
// let obj2={name:"abhi34",age:24}
// console.log({...obj1,...obj2});

// "use strict"
// var a=10;
// var data=20
// function b(){
//     var a=20;
// console.log(a);

    
// }
// b()
// console.log(this)
// const obj={
//     name:"jhon",
//     show:function(){
//         console.log(this);
        
//     }
// };
// obj.show()
// let arr=[10,20,30,40,50];
// const [n1,n2,n3,n4]=arr
// console.log(n3)

// let myPromise=new Promise((res,rej)=>{
//     let success=false;
//     setTimeout(()=>{
//         success?res("data got"):rej("error occured");
//     },2000);
// })

// myPromise.then(res=>console.log(res)).catch(err=>console.log(err))

// function firstStep(){
//     return new Promise(res=>{
//         setTimeout(()=>res("step 1 done"));
//     });

// }

// firstStep().then(res=>{
//     console.log(res);
//     return "step 2 done"
// })
// .then(res=>{
//     console.log(res)
// }).catch(err)

// console.log(window.a);
// let p1= new Promise(res=>setTimeout(()=>res("first print"),5000))
// let p2= new Promise(res=>setTimeout(()=>res("second print"),2000))

// // Promise.all([p1,p2]).then(res=>console.log(res))
// Promise.race([p1,p2]).then(res=>console.log(res))
fetch("http://localhost:3000/posts",{
    method:"POST",
    headers:{ "Content-Type": "application/json"},
    body:JSON.stringify({"title":"RANDOM DATA",})

})
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err,"My api"))

