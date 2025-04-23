//1. 묵시적 변환
// 자바스크립트가 알아서 형을 변환


let num = 10;
let str = "20";
const result = num + str;
console.log(result);//숫자를 문자로 변환

//명시적 변환
//내장함수를 사용하여 직접적으로 변환
//문자열 -> 숫자

let str1 = "10";
let strToNum = Number(str1);

let str2 = "10개"
let strToNum2 = parseInt(str2)
console.log(strToNum2);//parseInt 숫자만 빼어냄 하지만 앞에 문자가 있는 경우는 안됨


//숫자 -> 문자열
let number1 = 20;
let numToStr = String(number1);

console.log(numToStr+'입니다.');