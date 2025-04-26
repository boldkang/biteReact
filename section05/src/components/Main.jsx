//JSX 주의사항
// 1. 중괄호 내부에서는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 랜더링 됨 True, Indefined, Null은 렌더링이 안됨. 오브젝트도 안됨
// 3. 모든 태그는 닫혀야 한다. img는 안닫아도 괜찮았지만 JSX에서는 무조건 닫아야함
// 4. 최상위 태그는 반드시 하나여야만 한다. 빈태그의 경우는 있다고 생각하지만 그대로 둠

import "./main.css"

const Main = () => {
  const user = {
    name: "bold",
    isLogin: false,
  };
  return <>
  {user.isLogin ? (
    //스타일링 하는 방법 1
    <div style={{backgroundColor: "red"}}>로그아웃</div>

  ) : (
    //스타일링 하는 방법 2
    <div className = "login">로그인</div>
  )}
  
  </>
  
 
}

export default Main;