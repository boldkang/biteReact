//1, 변수

let age = 27;
//변수 선언, 변수의 초기화


age =30;
//변수는 바꿀 수 있음

console.log(age);


//2. 상수: 바꿀 수 없음
//초기화 후에는 바꿀 수 없음
//바꿀 수 없기 때문에 선언시 무조건 초기화를 해주어야 함
const birth = "1994";
//const birth 만으로는 안됨


//3. 변수 명명 규칙
// $, _ 제외한 기호는 사용할 수 없다.
// 숫자로 시작할 수 없다.
let name1;
let _2name;

// 예약어는 사용 못함
//const, if 등등은 사용 못함

// 4.변수 명명 가이드

//무슨 의미인지 알기 어려움
let a = 1;
let b = 2;
let c = a - b;

//의미있는 이름을 정하는 것이 중요함
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;


