"use client";

export default function Home() {
  //////////////reduce/////////////
  const numbers: number[] = [200, 46, 160, 85, 10];

  function sum_reduce(acc: number, curr: number) {
    return acc + curr;
  }

  let sumOfAll = numbers.reduce(sum_reduce);
  console.log("sumOfAll", sumOfAll);
  let differenceOfAll = numbers.reduce((acc, curr) => acc - curr);
  let ages: number[] = [18, 3, 45, 16, 18, 20, 23, 18, 56, 30, 18, 45];

  let findages = ages.reduce(function (acc: number[], curr: number) {
    // console.log(acc.indexOf(curr), "value");
    if (acc.indexOf(curr) === -1) {
      acc.push(curr);
    }
    return acc;
  }, []);

  console.log(findages);
  ////////////filter///////////
 
  const data: (number | null |string)[] = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];
  
  const filteredArray = data.filter((value) => typeof value === 'number' && value > 2000);
  
  const queryFilter = [
    "qwerty",
    "monday",
    "Thousand",
    "sumOfAll",
    "wednesday",
    "refer",
    "java",
  ];

  let queryData = (arr: string[], word: string) =>
    arr.filter(
      (elem: string) => elem.toLowerCase().indexOf(word.toLowerCase()) !== -1
    );

  let findData = queryData(queryFilter, "day");

  /////////////////////map()///////////

  let arrayData: number[] = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
  const squareRootArray = arrayData.map(Math.sqrt);
/////
  let arrayDatas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let squareArray = arrayDatas.map((x) => x ** 2);
  console.log(squareArray, "squareArray");

  const objectArray = [
    { name: "John", age: 23, pay: 2300, bonus: 500 },
    { name: "Max", age: 34, pay: 2500, bonus: 2500 },
    { name: "Steve", age: 23, pay: 1795, bonus: 800 },
    { name: "Miler", age: 34, pay: 3499, bonus: 1500 },
    { name: "Steve", age: 45, pay: 800, bonus: 600 },
  ];

  ////////////////////concat()////////////////////////////////////
  let arr1 = [2, 3, 5, 7, 9];
  let arr2 = [2, 4, 6, 8, 10];
  let joinedArray = arr1.concat(arr2);
  let valArr = arr2.concat(15, arr1);

  /////////////////entries()//////////

  // let lang:string[] =['c','java','python','javascript','php','c++']
  // let iterator:[number, string]= lang.entries();

// for (let entry of iterator) {
//   console.log(entry);
// }

//////////////////////////////every()/////////


function checkOdd(num:number) {
  return( num%2 !== 0);
}
const numbersCheck:number[] = [1,3,5,17,11,79];

let check = numbersCheck.every(checkOdd); 
console.log(check,"check"); 
/////
let arr5 = [ 1 , 2 , 7 , 4 , 5];

let result = arr5.every(element => element < 6);
console.log(result,"result"); 

//////////////////////fill()/////////
let fruits = ['Apple', 'Banana', 'Grape'];

fruits.fill("Cherry");

console.log(fruits);
// ///
let prices = [651, 41, 4, 3, 6];

let new_prices = prices.fill(5);

console.log(prices,"p");
///////////////find()///////////////
function isEven(element: number) {
  return element % 2 == 0;
}

let randomArray = [1, 45, 8, 98, 7];

let firstEven = randomArray.find(isEven);
console.log(firstEven); 

let firstOdd = randomArray.find((element) => element % 2 == 1);
console.log(firstOdd);
//////
const team = [
  { name: "Bill", age: 10 },
  { name: "Linus", age: 15 },
  { name: "Alan", age: 20 },
  { name: "Steve", age: 34 },
];
function isAdult(member: { age: number; }) {
  return member.age >= 18;
}

console.log(team.find(isAdult))

// ///////////some()///////////
function checkMinor(age: number) {
  return age < 18;
}

const ageArray = [34, 23, 20, 26, 12];

let checks = ageArray.some(checkMinor);

console.log(checks,"checkminor");

// //////////includes()//////////

let languages = ["JavaScript", "Java", "C","Python"];

let checkIncludes = languages.includes("Java");

console.log(checkIncludes,"checkIncludes"); 
let check1 = languages.includes("Python")

console.log(check1,"check1")

let check2 = languages.includes("python");

console.log(check2,"check2");

  return (
    <>
      <div>
        <p> reduce()</p>
        <p>sumOfAll {sumOfAll} </p>
        <p>differenceOfAll {differenceOfAll}</p>
        <p>findages {findages}</p>
        <p>filters</p>
        <p>filterArray {filteredArray}</p>
        <p>findData {findData}</p>
        <p>map()</p>
        <p>squareRootArray {squareRootArray}</p>
        <p>squareArray {squareArray}</p>
        {/* <p>ObjectMap {objectMap}</p> */}
        <p>concat()</p>
        <p>joinedArray {joinedArray}</p>
        <p>valArr {valArr}</p>
        <p>every()</p>
        <p>check {check}</p>
        <p>result{result}</p>
        <p>fill()</p>
        <p>fruits {fruits}</p>
        <p>new_prices {new_prices}</p>
        <p>find()</p>
        <p>firstEven {firstEven}</p>
        <p>firstOdd {firstOdd}</p>
        {/* <p>adultMember {adultMember}</p> */}
        <p>checks {checks}</p>
        <p>checkIncludes {checkIncludes}</p>

      </div>
    </>
  );
}
