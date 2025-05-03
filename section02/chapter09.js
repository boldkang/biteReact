// 5가지 배열 변형 매서드


//1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링 하여 새로운 배열로 반환


let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "고요한", hobby: "테니스" },
  { name: "백지승", hobby: "축구" },
]


const tennisArr= arr1.filter((item)=> item.hobby === "테니스");
console.log(tennisArr);



//2. map
//배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1,2,3];
const mapResult2 = arr2.map((item)=> item *2
)

console.log(mapResult2)


const nameOnly = arr1.map((item)=> item.name);

console.log(nameOnly)


//3. sort
//배열을 사전순으로 정렬하는 매서드

let arr3 = ["b","a","c"]
arr3.sort();
console.log(arr3);


let arr4 = [3,20,1]
arr4.sort((a, b) => {
  if(a > b) {return 1}
  else if(a < b){return -1}
  else {return 0}
});
console.log(arr4);


let arr5 = ["b","a","c"]
const rearrangedArr = arr5.toSorted();
console.log(rearrangedArr);

let arr6 = ["hi", "welcome","love"]
console.log(arr6.join(" "))
console.log(arr6.join("-"))