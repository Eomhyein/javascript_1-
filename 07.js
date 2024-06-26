// 함수 = function(기능)
// input, output

// 1. 함수 선언문
// function add (매개변수) {
    // 함수 내부에서 실행할 로직
// }

// 두개의 숫자를 입력 받아서 덧셈을 한후 내보내는 것
function add(x, y) {
    return x+y;
}
 console.log(add(2, 3));   // 5

// 2. 함수 표현식
let add = function(x, y) { 
    return x + y; 
    } 
console.log(add(2, 3));   // 5

// 함수의 input-> 매개변수(매개체가 되는 변수)
// output :  return문 뒤에 오는 값 : 반환값
