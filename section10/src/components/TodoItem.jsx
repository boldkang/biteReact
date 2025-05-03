import "./TodoItem.css"
import { memo } from 'react';

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
  
  const onChangeToggle = () => {
    onUpdate(id);
  }

  const onDeleteButton = () => {
    onDelete(id);
  }
  return <div className='TodoItem'>
    <input onChange = {onChangeToggle} readOnly checked = {isDone} type="checkbox"></input>
    <div className="content">{content}</div>
    <div className="date">{new Date(date).toLocaleDateString()}</div>
    <button onClick = {onDeleteButton} className ="remove">삭제하기</button>
  </div>
}

export default memo(TodoItem, (prevProps, nextProps) => {
  //onUpdate, onDelete의 경우는 객체이기 때문에 주소값을 참조하기 때문에 리렌더링이 되면 새로운 녀석들이 됨 그래서 계속 바뀌었다고 생각을 함
  
  //변환값에 따라 props가 바뀌었는지 안바뀌었는지 체크
  // T = 바뀌지 않음 -> 리렌더링 x
  // F = 바뀜 -> 렌더링


  if(prevProps.id !== nextProps.id) return false;
  if(prevProps.isDone !== nextProps.isDone) return false;
  if(prevProps.content !== nextProps.content) return false;
  if(prevProps.date !== nextProps.date) return false;
  return true;
});