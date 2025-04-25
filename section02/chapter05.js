
//원시 타입은 값자체로써 변수에 저장되고 복사
//불변의 값: 그 이유는 변화되더라도 원본의 값은 그대로 메모리에 존재하기 때문


//객체 타입: 참조값을 변수에 저장되고 복사
//가변값: 메모리에 저장된 값이 수정이 됨


//객체타입의 주의사항: 의도치않게 값이 변경이 될 수 있음

let o1 = {name: "볼드"}
let o2 = o1;//얕은 복사: 객체의 참조값을 복사하여 원본객체가 수정될 수 있어 위험함

o2.name = "라이트"
//console.log(o1);



let o3 = {name: "볼드"}
let o4 = {...o3};//이런식으로 깊은 복사: 새로운 객체를 생성하면서 프로퍼티만 따로 복사: 원본객체가 수정되지 않아 안전

o4.name = "라이트"
//console.log(o3);





//객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다.

let io1 = {name: "볼드"}
let io2 = io1;//얕은 복사
let io3 = {...io1};//깊은 복사


console.log(io1 ===io2) //참조값만 비교: True
console.log(io1 === io3) //참조값만 비교: False


//얕은 비교
console.log(io1 ===io3)

//깊은 비교
console.log(JSON.stringify(io1) === JSON.stringify(io3))