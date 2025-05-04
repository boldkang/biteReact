import "./Editor.css"
import { useState, useRef, useContext} from 'react'
import { TodoDispatchContext } from '../App' 

const Editor = () => {
  const {onCreate} = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const handleContent = (e) => {
    setContent(e.target.value)
  }
  const onSubmit = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit()
    }
  }

  return <div className='Editor'>
    <input onKeyDown = {onKeyDown} ref = {inputRef} value = {content} onChange = {handleContent} placeholder = "입력하세요."></input>
    <button onClick = {onSubmit}>추가하기</button>
  </div>
}

export default Editor