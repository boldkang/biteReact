import "./TodoItem.css"

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

export default TodoItem