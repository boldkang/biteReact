import TodoItem from './TodoItem'
import "./List.css"
import { useState, useMemo, useContext } from 'react'
import { TodoStateContext } from '../App'

const List = () => {
  const todos = useContext(TodoStateContext);
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


  //Analysed function
  const {totalItems, doneItems, noDoneItems} = useMemo(()=> {
    
    const totalItems = todos.length;
    const doneItems = todos.filter((item) => item.isDone).length;
    const noDoneItems = totalItems - doneItems;
    console.log("analysis")
    return {totalItems, doneItems, noDoneItems};
  }, [todos]) 

  return <div className='List'>
    <div>To do list</div>
    <div>
      <input value = {searchItem} onChange = {onSearch} className = "search" placeholder = "검색어를 입력하세요"></input>
    </div>
    <div>
      <p>total: {totalItems}</p>
      <p>done: {doneItems}</p>
      <p>not yet: {noDoneItems}</p>
    </div>

    <div className = "todo_wrapper">
      {filteredTodos.map((todo) => {
        return <TodoItem key = {todo.id} {...todo} />
      })}
    </div>
    
  </div>
}

export default List