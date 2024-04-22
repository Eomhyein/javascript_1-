// 형번환
// 형태 ->바꿨다
// 명시적, 암시적

// 1. 암시적
//1-1. 문자열
let result1 = 1 + "2";
console.log(result1);
console.log(typeof result1);
console.log("------------------");

console.log(1 + "2");   // "12" 
console.log("1" + true);   // "1true" 
console.log("1" + {});   // "1[object Object]" 
console.log("1" + null);   // "1null" 
console.log("1" + undefined);   // "1undefined"
console.log("------------------");

// 1-2. 숫자 변환
console.log(1 - "2");   // -1 
console.log("2" * "3");   // 6 
console.log(4 + +"5");   // 9
console.log("------------------");

// 1-3 불리언 변환
console.log(Boolean(0));   // false 
console.log(Boolean(""));   // false 
console.log(Boolean(null));   // false 
console.log(Boolean(undefined));   // false 
console.log(Boolean(NaN));   // false
console.log(Boolean("false"));   // true 
console.log(Boolean({}));   // true
console.log("------------------"); 


// 2. 명시적 형 변환
//2-1 문자열
let result5 = String(123);
console.log(typeof result5);
console.log("------------------"); 

console.log(String(123));       // "123" 
console.log(String(true));      // "true" 
console.log(String(false));     // "false" 
console.log(String(null));      // "null" 
console.log(String(undefined)); // "undefined" 
console.log(String({}));        // "[object Object]"
console.log("------------------"); 

// 2-2 Number
let result10 = Number("123");
console.log(result10);
console.log(typeof result10);
console.log("------------------"); 

console.log(Number("123"));   // 123 
console.log(Number(""));      // 0 
console.log(Number("  "));    // 0
console.log(Number(true));     // 1 
console.log(Number(false));   // 0