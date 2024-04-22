// 연산자
// 1. 산술 연산자
// 1-1 더하기 연산자
console.log(2 + 3);       // 5 
console.log("2" + "3");   // "23" 
console.log("2" + 3);     // "23" 
console.log(2 + "3");     // "23"
console.log("------------------"); 

// 1-2 빼기 연산자
console.log(5 - 2);       // 3 
console.log("5" - "2");   // 3 
console.log("5" - 2);     // 3 
console.log(5 - "2");     // 3 
console.log("five" - 2);  // NaN
console.log("------------------"); 

//1-3 곱하기 연산자
console.log(2 * 3);       // 6 
console.log("2" * "3");   // 6 
console.log("2" * 3);     // 6 
console.log(2 * "3");     // 6 
console.log("two" * 3);   // NaN
console.log("------------------"); 

//1-4 나누기 연산자(/)
console.log(6 / 3);       // 2 
console.log("6" / "3");   // 2 
console.log("6" / 3);     // 2 
console.log(6 / "3");     // 2 
console.log("six" / 3);   // NaN
console.log("------------------"); 

//1-5 나머지 연산자(%)
console.log(7 % 3);       // 1 
console.log("7" % "3");   // 1 
console.log("7" % 3);     // 1 
console.log(7 % "3");     // 1 
console.log("seven" % 3); // NaN
console.log("------------------"); 


// 2 할당 연산자
// 2-1 등호 연산자(=)
// let x = 10; 
// console.log(x);   // 10 
// x = 5; 
// console.log(x);   // 5

// 2-2 더하기 등호 연산자 (+=)
// let a = 10; 
// a += 5; 
// console.log(a);   // 15
// 2-3 뺴기 등호 연산자 (-=)
// let b = 10; 
// b -= 5; 
// console.log(b);   // 5
// 2-4 곱하기 등호 연산자 (*=)
// let c = 10; 
// c *= 5; 
// console.log(c);   // 50
// 2-5 나누기 등호 연산자(/=)
// let d = 10; 
// d /= 5; 
// console.log(d);   // 2
// 2-6 나머지 등호 연산자(%=)
// let e = 10; 
// e %= 3; 
// console.log(e);   // 1
// console.log("------------------"); 

// 3. 비교 연산자
// 3-1 일치 연산자(===)
console.log(2 === 2);   // true 
console.log("2" === 2);   // false 
console.log(2 === "2");   // false
console.log("------------------"); 
// 3-2 불일치 연산자 (!==)
console.log(2 !== 2);   // false 
console.log("2" !== 2);   // true 
console.log(2 !== "2");   // true
console.log("------------------"); 
// 3-3 작다(<) 연산자
console.log(2 < 3);   // true 
console.log(2 < "3");   // true 
console.log("2" < 3);   // true
console.log("------------------"); 
// 3-4 크다(>) 연산자
console.log(2 > 3);   // false 
console.log(2 > "3");   // false 
console.log("2" > 3);   // false
console.log("------------------"); 
// 3-5 작거나 같다 (<=) 연산자
console.log(2 <= 3);   // true 
console.log(2 <= "3");   // true 
console.log("2" <= 3);   // true 
console.log(2 <= 2);   // true
console.log("------------------"); 
// 3-6 크거나 작다(>=) 연산자
console.log(2 >= 3);   // false 
console.log(2 >= "3");   // false 
console.log("2" >= 3);   // false 
console.log(2 >= 2);   // true
console.log("------------------"); 

// 4. 논리 연산자
// 4-1 논리곱(&&) 연산자
console.log(true && true);   // true 
console.log(true && false);   // false 
console.log(false && true);   // false 
console.log(false && false);   // false
console.log("------------------"); 

//4-2 논리합(||) 연산자
console.log(true || true);   // true 
console.log(true || false);   // true 
console.log(false || true);   // true 
console.log(false || false);   // false
console.log("------------------"); 

//4-3 논리부정(!) 연산자
console.log(!true);   // false 
console.log(!false);   // true 
console.log(!(2 > 1));   // false
console.log("------------------"); 

// 5. 삼항 연산자(? :)
let x = 10; 
let result = (x > 5) ? "크다" : "작다"; 
console.log(result);   // "크다"
console.log("------------------"); 

// 6. 타입 연산자(typeof)
console.log(typeof 123);   // "number" 
console.log(typeof "123");   // "string" 
console.log(typeof true);   // "boolean" 
console.log(typeof undefined);   // "undefined" 
console.log(typeof null);   // "object" 
console.log(typeof {});   // "object" 
console.log(typeof []);   // "object" 
console.log(typeof function(){});   // "function"
console.log("------------------"); 

