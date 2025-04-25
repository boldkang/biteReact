//단락 평가 (Short - circular Evaluation)


function returnFalse() {
  console.log("false")
  return false;
}

function returnTrue() {
  console.log("true")
  return true;
}

console.log(returnTrue() && returnFalse());