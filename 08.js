// 소코프, 전역변수, 지역변수, 화살표 함수 

let x = 10;
function printX() {
    console.log(x);
}
printX();   // 10

function printX() {
    let x = 10;
    console.log(x);
}
printX();   // 


if (true) {
    let x = 10;
    console.log(x);
}
console.log(x);   // ReferenceError: x is not defined
