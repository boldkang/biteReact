import { useState, useRef } from 'react'


const Register = () => {
  const [formData, SetFormData] = useState({
    name: "",
    date: "",
    country: "",
    bio: ""
  })
  //const countRef = useRef(0);
  const inputRef = useRef();

  const changeFormData = (e) => {
    //countRef.current++
    //console.log(countRef.current);
    SetFormData({
      ...formData, 
      [e.target.name]: e.target.value,
    })
  }
  const onSubmit = () => {
    if(formData.name === "") {
      //포커스를 해줌
      console.log(inputRef.current)
      inputRef.current.focus();
    }
  }

  return <>
  <div>
  <input ref = {inputRef} name = "name" value = {formData.name} onChange = {changeFormData} placeholder = "이름을 적어주세요."></input>
  </div>
  {formData.name}
  <div>
  <input name = "date" type = "date" onChange = {changeFormData} placeholder = "이름을 적어주세요."></input>
  </div>
  {formData.date}
  <div>
  <select name = "country" onChange = {changeFormData}>
    <option value = "">국적을 선택해주세요.</option>
    <option value = "KR">한국</option>
    <option value = "US">미국</option>
    <option value = "UK">영국</option>
  </select>
  </div>
  {formData.country}
  <div>
  <textarea name = "bio" onChange = {changeFormData} placeholder = "자기를 소개해주세요."></textarea>
  </div>
  {formData.bio}
  
  <div>
    <button onClick={onSubmit}>Submit</button>
  </div>

  </>
}

export default Register