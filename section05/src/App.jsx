//import { useState } from 'react'
import './App.css'
//import Header from './components/Header.jsx'//확장자를 안붙여도 됨 여기서는
//import Main from './components/Main.jsx'
//import Footer from './components/Footer.jsx'
//import Button from './components/Button.jsx'
//import Bulb from './components/Bulb.jsx'
//import Count from './components/Count.jsx'
import Register from './components/Register.jsx'



function App() {//부모 컴포넌트: 조상 Root 컴포넌트
  //console.log(count);
  //console.log(light);

/*
  const buttonProps = {
    text: "카페",
    color: "red",
    a: 1,
    location: "London",
  }
*/
  //Props: 부모 컴포넌트에서 자식 컴포넌트로 넘기는 값
  return (
    <>
      <Register />
      {/*
      <div>
        <Bulb />
        <Count />
      </div>


      <Header />
      <h1> 안녕 리액트! </h1>
      <Main />
      <Footer />
      <Button text = {"메일"} color = "blue" /> 
      <Button {...buttonProps}/>
      <Button text = {"블로그"}> 
        <Header />  
      </Button> 
      */}
    </>
  )
}

export default App
