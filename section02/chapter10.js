let date1 = new Date();
console.log(date1);
let date2 = new Date("1997/4/2");//생성자
console.log(date2);
let date3 = new Date(1997,4,2);
console.log(date3);


let ts1 = date1.getTime();
console.log(ts1); //calculating time from UTC and show ms


//3. 시간 요소를 추출
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

//4. 시간 수정하기
date1.setFullYear(2023)
date1.setMonth(0);


console.log(date1.toDateString());//제일 중요 
console.log(new Date().toDateString());