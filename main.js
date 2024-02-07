// var ab = 2;
// ab-=5;

// console.log(ab)

// var obi = 28;
// obi*=2

// console.log(obi)

// var saviour=100;
// saviour/=10

// console.log(saviour)

// var amor=13;
// amor%=200
// console.log(amor)


// var add=20
// var addd=5
// var acc = add + addd;

// add--

// console.log(add)



// //3. COMPARISON OPERATORS (== , !=, <, >, <=, >=) 

// var avv =2;
// console.log(avv=='2')


// //4 LOGICAL OPERATOR(&&, ||, !)
// var save = 33;
// var wise =21 
// console.log((save>10 )&&(wise > 10));

// var save =false;
// var wise = 21;
//  console.log(!false);

// //5 conditional or TENAERY OPERATOR([])

// const john=28;
// const ayiba=10;
// result=(john<ayiba) ? 'the answer is correct' : 'not corrcet';
// console.log(result);

// //CONDITIONAL STATEMENT
// //if condition 
// var aaa = 3 
// if (aaa>10.) {
//     console.log("correct guy!");
// }
// //if...else condition 
// if (aaa>10.) {
//     console.log("correct guy!");
// }else{ console.log("omo the guy no correct ooo!!!")}

// //if else... else if condition 
// if (aaa>10.) {
//     console.log("correct guy!");
// }else if (aaa>10) {
//     console.log("it's zero")
// } {
//      console.log("omo the guy no correct ooo!!!")}

// //JavaScript loops
// //1. WHILE LOOP

// //while ("experetion){
//     //statement to be cxecuted if expression is true


//  //var CountingNumbers =1;

//  //while(CountingNumbers < 10) {
//     //console.log("Counting Numbers:"+ CountingNumbers);
//     //CountingNumbers++; 
// //}
// //var CountingNumbers =0;

// //while(CountingNumbers < 10) {
//   // console.log("Counting Numbers:"+ CountingNumbers);
//   // CountingNumbers++; 
// //}

// //for (gold=0; gold <=5; gold++){
//   //  console.log("Gold COins:"+ gold);
// //}

// const number=8;
// for (i=1; i<=12; i++){
//     const resultAnswer=number*i;
//     console.log(`${number}x${i}=${resultAnswer}`)
// }

// //JAVASCRIPY FUNSTION 
// //

// //question 3
// var sumOfSquaresLimit =5;
// var sumOfSquare =0;

// for (j=1; j<=sumOfSquaresLimit; j++){
//     sumOfSquare+= j**2;
// }
// console.log(`${sumOfSquare}`)

// //var integerLimit=20
// //var startInt=2;
// //while(starInt<= integerLimit{
//   //  console.log(startInt)
// //})

// //question 2
// var factorialNumber=5;
// var factorialOutput=1
// var k=1;
// do{
//     factorialOutput *=k;
//     k++
// }while (k<=factorialNumber);
// console.log(factorialOutput)

// //question 4 verry correct.
// var positiveinteger=20 
// for(m=20; m>=1; m--){
//     console.log(m)
// }
// //question 6
// //function reversestring (a) {
//     //var reversestring='';
//     //for (i = a.length - 1; i>=0; i--){
//       //  reversestring+=a[i];
//     //}
//   //  return reversestring;
// //}
// //console.log('reversed strings:'+ reversestring("wisdom"));

// //JavaScript Array 
// //this a data structure that allows you to store and organize multiple values using a single variable.
// // 1. array element: each value withn an arry is called an arry element
// //2. array index :its a numeric representation that indicate the position of an element in the array
// //3. array lenght: this is the number of an element in the array 
// //#note ; javaScript arrays are zero index
 
// //array constructor 
// //const testArray=new Array ('me', 3, false,'house');
// //console.log(testArray[2])


// // using array literal
// //const myArray= [,1,2,3,4,5,6];
// //console.log(myArray[myArray.length-2])

// const myArray=[1,2,3,4,5,6]
// myArray[2] ='happy';
// console.log(myArray)
// myArray.unshift('saviour')
// for (i=0; i<myArray.length; i++){
//     console.log(myArray[i])
// }

// var yourArray=[1,'His','my','us', 5 ]
// arrayResult=myArray.concat(yourArray)
// console.log(myArray)
// console.log(arrayResult)

// // Array concartination 
// var yourArray =[1, 2, 3, 4, 5, 6, 9,'new',"In"]
// aryResult=myArray.concat(yourArray)
// console.log(typeof myArray)
// console.log(myArray.join('"'))
// myArray.unshift("month")
// console.log(myArray)
// myArray.pop()
// console.log(myArray)
// myArray.pop()
// console.log(myArray)
// myArray.shift()
// console.log(myArray)
// myArray.reverse

// javaSCript asynchronous
// 1.promise 
// 2 call back 

// console.log("first");
// setTimeout(() => {
//     console.log("second")
// } ,3000)
// console.log("third");
// console.log("fourth")

// function greeting(name){
//     return new Promise((resolve,reject)=>{
//         if (name ==="error"){
//             reject("This is not a name")
//         }else{
//             console.log(`hello ${name}`)
//             resolve();
//         }
//     });
// }
// function theFunction(){
//     console.log(`I am a callback function`)
// }
// // using the promise 
// greeting('error').then(()=>{
//     theFunction();
// }).catch(error=>{
//     console.log('Error',error);
// })

// a var can also be a function.
//var mabel=function mF (){}
//arrow function
//const mabel =() =>{}


 // Distructuring in JavaScript
 // this helps you to extract array values or object properties into distinct variables 
const array=[1,2,3,4];
const [first,second,third,fourth]= array
console.log(array)


const ayiba={
    age: 28,
    gender:'male',
    occupation: 'NYSC',
    salary: 33000
}
const {age,gender,occupation,salary}=ayiba
console.log(salary)

//spread operators...
//it allows you to spread elements
const imoh=[1,2,3,4]
const tryNow=[...imoh];
console.log(tryNow)