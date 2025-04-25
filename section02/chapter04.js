//spread 연산자


//배열
let arr1 = [1,2,3]
let arr2 = [4,5,6]

//when I want to add arr1 into arr2
arr2 = [arr1[0], arr1[1],arr1[2],4,5,6]

//console.log(arr2);

arr3 = [...arr1, ...arr2];

//console.log(arr3);

//객체
let obj1 = {
  name: "Mingu",
  age: 34,
  job: "designer",
}

let obj2 = {
  hobby: "Tennis",
  married: true
}

let obj3 = {
  ...obj1,
  ...obj2
}

//console.log(obj3);


//함수
//2. Rest 매개변수: object is not iterable. 
// array is iterable
function funcA(name, ...rest) {
  console.log(name);
};

funcA(...Object.values(obj1));

