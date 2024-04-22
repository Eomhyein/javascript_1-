// 배열
// 1. 생성
// 1-1 기본 생성
let fruits = ["사과", "바나나", "오렌지"];

//1-2 크기 지정
let numbers = new Array(5);
// console.log(fruits.length);
// console.log(numbers.length);

// 2.  요소 접근
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 3.배열 메소드
// 3-1. push()
let fruits_1 = ["사과", "바나나"];
console.log("1 =>", fruits_1);

fruits_1.push("오렌지");
console.log("2 =>", fruits_1);

// 3-2 pop()
let fruits_2 = ["사과", "바나나", "오렌지"];
fruits_2.pop();
console.log(fruits_2);   // ["사과", "바나나"]

// 3-3 shift()
let fruits_3 = ["사과", "바나나", "오렌지"];
fruits_3.shift();
console.log(fruits_3);   // ["바나나", "오렌지"]

// 3-4 unshift()
let fruits_4 = ["바나나", "오렌지"];
fruits_4.unshift("사과");
console.log(fruits_4);   // ["사과", "바나나", "오렌지"]

// 3-5 splice()
let fruits_5 = ["사과", "바나나", "오렌지"];
fruits_5.splice(1, 1, "포도");
console.log(fruits_5);   // ["사과", "포도", "오렌지"]
console.log("----------");   
// 3-6 slice()
let fruits_6 = ["사과", "바나나", "오렌지"]; 
let slicedFruits = fruits_6.slice(1, 2);
console.log(slicedFruits);   // ["바나나"]

