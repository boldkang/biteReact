//배열 순회

//Array
let arr1 = [4,2,3]


//length를 활용
for (let i = 0; i < arr1.length; i++) {
  //console.log(arr1[i]);
}


//of 활용하기
for (let item of arr1) {
  //console.log(item);
}



//객체 순회

let person = {
  name: "Mingu",
  age: 43,
  job: "Designer",

}

//key, value



//Object.keys 사용하기
keys = Object.keys(person);
//console.log(keys);

for (let i = 0; i < keys.length; i++){
  //console.log(keys[i])
}
// 객체에서 키 값들만 뽑아서 새로운 배열만들기
for (key of keys) {
  const value = person[key]
  console.log(key, value);
}



//Object.value 사용하기
values = Object.values(person);

console.log(values);

for (let value of values) {
  console.log(value);
}

//in 활용