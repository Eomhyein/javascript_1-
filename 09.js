// 화살표 함수
// 1) 기본적인 화살표 함수
let add = (x, y) => { 
    return x + y; 
    } 
    console.log(add(2, 3));   // 5

// 2) 한 줄로 된 화살표 함수
let add2 = (x, y) => x + y; 
console.log(add2(2, 3));   // 5

// 3) 매개변수가 하나인 화살표 함수
let square = x => x * x; 
console.log(square(3));   // 9