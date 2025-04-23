// 1. if 조건문(if문)

let num = 10;

if(num >= 10) {
  console.log("num은 10 이상입니다.");
} else {
  console.log("num은 10 이하입니다.");
} 



let animal = "dog";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "cat": {
    console.log("고양이");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("동물 없음");
  }
}