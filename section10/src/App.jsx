import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"
//import Exam from "./components/Exam"
import { useState, useRef, useReducer } from 'react'
import './App.css'

const mockData = [
  {
    id: 0, 
    isDone: false, 
    content: "React 끝내기",
    date: new Date().getTime(),
  }, 
  {
    id: 1, 
    isDone: false, 
    content: "인스타그램 끝내기",
    date: new Date().getTime(),
  },
  {
    id: 2, 
    isDone: false, 
    content: "피그마 끝내기",
    date: new Date().getTime(),
  }
]

function reducer(state, action) {
  switch(action.type) {
    case "CREATE" : return [action.data, ...state];
    case "UPDATE" : return state.map((item) => 
      item.id === action.targetId ? {...item, isDone: !item.isDone} : item
    )
    case "DELETE" : return state.filter((item) => item.id !== action.targetId)
    default: return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, mockData);
  const idRef= useRef(3);
  

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current ++, 
        isDone: false,
        content: content, 
        date: new Date().getTime(),
      }
    })
  }

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  }  

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }  
  /*
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false, 
      content: content,
      date: new Date().getTime(),
    }

    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    //
    //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열을 만듦
    setTodos(todos.map((todo) => todo.id === targetId? {...todo, isDone: !todo.isDone}: todo));
  }

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }
  */
  return (
    <div className = "App">
      <Header />
      <Editor onCreate = {onCreate}/>
      <List todos = {state} onUpdate = {onUpdate} onDelete = {onDelete}/>
    </div>
  )
}

export default App
