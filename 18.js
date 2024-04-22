
// for 문
// 1-1 기본적인 for문
//for (초기값; 조건식; 증감식 {
// })
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//1-2 배열과 함께 사용하는 for문
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// ex) 0~10까지의 수 중에서 2의 배수만 console.log로 출력하는 예시
for (let i = 0; i <= 10; i++) {
    if (i >= 2) {
        if (i % 2 === 0) {
            console.log(i + "는 2의 배수 입니다!");
        }
    }
}

//1-3 for ... in 문
let person = {
    name: "John",
    age: 30,
    gender: "male"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}



// 2. while문
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// 3. do...while문
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

// 4. break문과  continue문
// 4-1 break문
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// 4-2  continue문
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}


// while문을 활용하여, 3초과 100미만의 숫자 중 5의 배수인 것만 출력하라

let i = 3;
while (i < 100) {
    if (i % 5 === 0 && i >= 5) {
        console.log(i + "는 5의 배수입니다!");
    }

    i++;
}

