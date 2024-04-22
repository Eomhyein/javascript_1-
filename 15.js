// 객체
// 하나의 변수에 여러개의 값을 넣을 수 있다
//  1. 객체 생성 방법
// 1-1, 기본적인 객체 생성 방법
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
let person2 = new Person("홍길동", 30, "남자");
let person3 = new Person("홍길순", 25, "여자");

// 2. 접근하는 방법
console.log(person.name);   // "홍길동" 
console.log(person.age);    // 30 
console.log(person.gender);  // "남자"


// 3. 객체 메소드(객체가 가진 여러가지 기능)
// 3.1 Object.keys() 메소드
let person4 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};
let keys = Object.keys(person4);
console.log(keys);   // ["name", "age", "gender"]

// 3-2. Object.values() 메소드
let person5 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};
let values = Object.values(person5);
console.log(values);   // ["홍길동", 30, " 남자 "]

// 3-3. Object.entries() 메소드
let person6 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};
let entries = Object.entries(person6);
console.log(entries);

// 3-4 Object.assign() 메소드
let person7 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};
let newPerson = Object.assign({}, person7, { age: 35 });
console.log(newPerson);   // { name: " 홍길동", age: 35, gender: "남자" }

// 3-5 객체 비교
let person8 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};
let person9 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};
console.log(person8 === person9);   // false 
console.log(JSON.stringify(person8) === JSON.stringify(person9));   // true

// 3-6 객체 병합
let person10 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};
let person11 = {
    name: "홍길동",
    age: 30,
    gender: "남자"
};
let mergedPerson = { ...person10, ...person11 };
console.log(mergedPerson);   // { name: "홍길동", age: 30, gender: "남자" }