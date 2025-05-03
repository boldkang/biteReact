import TodoItem from './TodoItem'
import "./List.css"
import { useState } from 'react'

const List = ({todos, onUpdate, onDelete}) => {
  const [searchItem, setSearchItem] = useState("");
  //const [filteredTodo, setFilteredTodo] = useState();
  const onSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  }


  //search function ***
  const filteredItems = () => {
    //if nothing entered
    if(searchItem === '') {
      return todos;
    };
    //시작하기
    return todos.filter((todo)=> 
      todo.content.toLowerCase().includes(searchItem.toLowerCase())
    );
  };
  const filteredTodos = filteredItems()


  return <div className='List'>
    <div>To do list</div>
    <div>
      <input value = {searchItem} onChange = {onSearch} className = "search" placeholder = "검색어를 입력하세요"></input>
    </div>

    <div className = "todo_wrapper">
      {filteredTodos.map((todo) => {
        return <TodoItem key = {todo.id} {...todo} onUpdate = {onUpdate} onDelete = {onDelete}/>
      })}
    </div>
    
  </div>
}

export default List