// class User{
//     register(){
//         console.log("User registered...")
//     }
// }

// function testVar(){
//     var a = 30;
//     if(true){
//         var a = 50;
//         console.log(a);
//     }
//     console.log(a)
// }

// testVar();

// function testLet(){
//     let a = 30;
//     if(true){
//         let a = 50;
//         console.log(a);
//     }
//     console.log(a);
// }

// testLet();

// for(var i = 0; i < 10; i++){
//     console.log(i);
// }

// console.log(i)

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// console.log(i)

// const array = [1,2,3,4];
// array.push(10)
// array = [3,4,5]
// array = "Hello"
// console.log(array)


// let string = "Hey this is Gangadhar here. we need to use \"backslash\" to print double quotes here.";
// let name = "Gangadhar";
// let command = `Hey this is Gangadhar here. Let's understand "string" literal usage using backticks we can directly use double quotes and variables can also be used.`
// +`. my name is : ${name}`;
// console.log(string)
// console.log(command)


// Strings and number methods

// let theString = "Hello, my name is Gangadhar and I love coding"

// console.log(theString.startsWith('Hello'))
// console.log(theString.startsWith('Hllo'))
// console.log(theString.endsWith('coding'))
// console.log(theString.includes("Gangadhar"))
// console.log(theString.includes("Ganga"))

// console.log(0xFA)
// console.log(0b1001110)
// console.log(0o7623)

// // console.log(Number.isFinite(456))
// // console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(NaN))
// console.log(Number.isNaN(3))
// console.log(Number.isNaN(NaN))


// Default Params & Spread Operator

// function greet($greet="Bye"){
//     console.log($greet)
// }

// greet()


// let args = [1,2,3,4]
// let args2 = [...args,8]
// function test(){
//     console.log(args)
//     console.log(args2)
// }
// test()



// Set, Map, WeakSet  and  WeakMap

// let myArray = [11,22,34,65,34]
// let mySet = new Set(myArray)
// mySet.add('100');
// mySet.add({a:1, b:2})
// mySet.delete(11)

// mySet.forEach(function(val){
//     console.log(val)
// })

// console.log(mySet)


// let myMap = new Map([['a1','hello'], ['b2', 'bye']])
// myMap.set('c3', 'foo')
// console.log(myMap)


// let carWeakSet = new WeakSet();

// let car1 = {
//     make : 'Honda',
//     model : 'Civic'
// }
// carWeakSet.add(car1)
// console.log(carWeakSet)

// let carWeakMap = new WeakMap();

// let key1 = {
//     id : 1
// }

// let car1 = {
//     make : 'Honda',
//     model : 'Civic'
// }

// carWeakMap.set(key1, car1);
// console.log(carWeakMap)



// Arrow Functions

// let sum = (a,b) =>{
//     return a+b;
// }

// console.log(sum(5,2))


//Promises

// var myPromise = Promise.resolve('Foo');

// myPromise.then((res) => console.log(res))

// var myPromise = new Promise(function(resolve, reject){
//     setTimeout(() => resolve(4), 2000);
// })

// myPromise.then((res) => {
//     res += 3;
//     console.log(res)
// })



// Fetch Data

// function getData(method, url){
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = function(){
//             if(this.status >= 200 && this.status < 300){
//                 resolve(xhr.response)
//             }else{
//                 reject({
//                     status : this.status,
//                     statusText : this.statusText
//                 })
//             }
//         }
//         xhr.onerror = function(){
//             reject({
//                 status : this.status,
//                 statusText : this.statusText
//             })
//         };
//         xhr.send();
//     })
// }

// getData('GET',"http://universities.hipolabs.com/search?country=United+States").then((data)=>{
//     // let todos = JSON.parse(data);
    
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


// const fetchData = (url) => {
//     fetch(url).then((result)=>{
//         console.log("Result : " +result)
//     }).catch(err => console.log("Error : "+err))
// }

// fetchData("http://universities.hipolabs.com/search?country=United+States")



// Generators

function *g1(){
    console.log("Hello");
    yield 'Yield 1 ran ...';
    console.log("World");
    yield 'Yield 2 ran ...';
    return 'Returned...';
}

var g = g1();

// console.log(g.next());
// console.log(g.next().value)

for(let val of g){
    console.log(val);
}