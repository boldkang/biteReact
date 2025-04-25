//배열 매서드

//1. push
//배열의 맨 뒤에 새로운 요소를 추가하는 매서드

let arr1 = [1,2,3]
const newLength = arr1.push(4,5,6,7);// 이 매서드는 추가한 다음 변환된 후의 길이를 반환

//console.log(arr1, newLength);


//2. pop
//배열의 맨 뒤에 있는 요소를 제거하고, 제거한 값을 반환

const poppedItem = arr1.pop();
//console.log(arr1);


//3. shift
//배열의 맨 앞에 있는 요소를 제거하고, 제거한 값을 반환


const shiftItem = arr1.shift();
//console.log(arr1, shiftItem);


//4. unshift
//배열의 맨 앞에 있는 새로운 요소를 추가하는 매서드

const newLength2 = arr1.unshift();
//console.log(arr1, newLength2);

//3, 4는 맨 앞의 경우는 인덱스를 미루거나 당기거나 해야하기 때문에 비교적 느리게 동작
//그래서 push, pop을 사용하도록 좋음


//5. slice
//마치 가위 처럼 배열의 특정범위를 잘라내서 새로운 배열로 변환
//인수는 처음 자를 부분과 다음 자를 부분(+1), 두번째 인수를 제거하면 끝까지 출력
//잘려도 원본이 바뀌지 않음

//인수의 음수를 넣으면 뒤에서 부터 자를 부분을 
let arr2 = [1,2,3,4,5,6]
slicedItems = arr2.slice(2,5)
//console.log(slicedItems);

slicedItems1 = arr2.slice(2)
//console.log(slicedItems1);

slicedItems2 = arr2.slice(-2)
//console.log(slicedItems2);
//6. concat
//두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 번환
let arr3 = [1,2,3];
let arr4 = [4,5,6];

const concatItems = arr3.concat(arr4);
console.log(concatItems);