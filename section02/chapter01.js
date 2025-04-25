//Truthy & Falsy
//참이나 거짓이 아니어도 조건문내에서 참이나 거짓으로 판단


//1. Falsy한 값: 7가지

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n

if(!f1) {
  console.log("falsy")
}

// 2. Truthy 한 값
// Falsy한값을 제외한 모든 값이 참

let t1 = "hello";



// 3. 활용사례

function printName(person) {
  if(!person) {
    console.log("default");
    return; //이게 중요함
  }
  console.log(person.name);
}

//let person = {name: "bold"};
//객체를 받으면 됨

//만약 에러가 생긴다면?
let person

printName(person);