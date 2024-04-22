//3-7 forEach()
let numbers = [5, 3, 2, 4, 1];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
numbers.forEach(function (numbers) {
    console.log(numbers);
});

//3-8 map() : 항상 원본 배열의 길이만큼이 return된다.
let numbers_2 = [1, 2, 3, 4, 5];
let squaredNumbers = numbers_2.map(function (number) {
    return number * number;
});
console.log(squaredNumbers);   // [1, 4, 9, 16, 25]


//3-9 filter()
let numbers_3 = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers);   // [2, 4]

//3-10 reduce()
let numbers_4 = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);

// 3-11 Find()
let numbers_5 = [1, 2, 3, 4, 5];
let foundNumber = numbers.find(function (number) {
    return number > 3;
});
console.log(foundNumber);   // 4

//3-12 some()
let numbers_6 = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers.some(function (number) {
    return number % 2 === 0;
});

console.log(hasEvenNumber);   // true

//3-13 every()
let numbers_7 = [2, 4, 6, 8, 10];
let isAllEvenNumbers = numbers.every(function (number) {
    return number % 2 === 0;
});
console.log(isAllEvenNumbers);   // true

//3-14 sort()
let numbers_8 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers_8.sort(function (a, b) {
    return a - b;
});
console.log(numbers_8);   // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

//3-15 reverse()
let numbers_9 = [1, 2, 3, 4, 5];
numbers_9.reverse();
console.log(numbers_9);   // [5, 4, 3, 2, 1]
