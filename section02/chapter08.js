//5가지 요소를 순회 및 탐색 매서드



// 1. forEach
//모든 요소를 순회하며, 각각의 요소에 특정 동작을 수행시키는 매서드

let arr1 = [1,2,3];

arr1.forEach(function(item, index, arr) {
  console.log(index, item *2 );
})


let DoubledArr = []

arr1.forEach((item) => {
  DoubledArr.push(item*2);
})

console.log(DoubledArr)


// 2. Includes
// 특정요소가 안에 속해있는지 체크를 하는 것

let checkUp = arr1.includes(3)

console.log(checkUp);


// 3. indexOf
// 특정 요소의 인덱스 넘버를 가져오는 것

const indexNum = arr1.indexOf(1);
console.log(indexNum)

const arrMember = [
  {name: "이정환"},
  {name: "강민구"}
]

console.log(arrMember.indexOf({name: "이정환"})); // 객체의 경우 찾으려고 하면 못 찾음 왜냐하면 얕은 비교라서 객체의 경우는 참조값이기 때문에 찾지 못함 따라서 이 경우는 findindex를 사용해야해야함

//find Index 예시
console.log("findMember", arrMember.findIndex((member)=> {
  if(member.name ==="이정환") return true
}))

//Simpler version
console.log("findMemberSimple", arrMember.findIndex((member)=> member.name ==="이정환"))

//4. Find index
const indexFind = arr1.findIndex((item) => {
  if (item === 2) return true
})

console.log("findIndex", indexFind);


//5. Find
const findNumber = arrMember.find((item)=> item.name === "이정환");

console.log(findNumber)