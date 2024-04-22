// 불리언(Boolean)
// true(참), false(거짓)

let bool1 = true; 
console.log(bool1); // true 
console.log(typeof bool1); // "boolean"

let bool2 = false; 
console.log(bool2); // false 
console.log(typeof bool2); // "boolean"


// undefined : 값이 할당되지 않은 변수
let x; 
console.log(x); // undefined

// null :값이 존재하지 않음을 '명시적'으로 나타내는 방법
let y = null;
console.log(y); // null


// Object(객체) : key-value pair
let person = { 
    name: 'Alice', 
    age: 20 
}; 
console.log(typeof person); // 'object'

// array(배열);
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입
let numbers = [1, 2, 3, 4, 5]; 
let fruits = ['apple', 'banana', 'orange'];
console.log(numbers); //[1, 2, 3, 4, 5]
console.log(fruits); // ['apple', 'banana', 'orange']