for (let i = 0; i < 10; i++) {
  if (i%2 === 0) {
    continue;
  } //continue는 건너뛰어버림
 console.log(i);
 if (i >=5) {
  break;
 } //아예 나가버림
}