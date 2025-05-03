import { useReducer } from 'react'

function reducer(state, action) {
  console.log(state, action)
  if(action.type ==="Increase") {
    return state + action.data;
  } else if (action.type ==="Decrease") {
    return state - action.data;
  }
}


const Exam = () => {

  //dispatch: 발송하다, 급송하다. 
  // -> 상태변화가 있어야 한다는 사실을 알리는 발송하는 함수  
  const [state, dispatch] = useReducer(reducer,0);
  

  const onClickPlus = () => {
    //인수: 상태가 어떻게 변화되길 원하는지 기입
    dispatch({
      type: "Increase",
      data: 1,
    })
  }
  const onClickMinus = () => {
    //인수: 상태가 어떻게 변화되길 원하는지 기입
    dispatch({
      type: "Decrease",
      data: 1,
    })
  }

  return <div>

      <h2>{state}</h2>
      <button onClick = {onClickPlus}>+</button>
      <button onClick = {onClickMinus}>-</button>
    </div>
}

export default Exam;