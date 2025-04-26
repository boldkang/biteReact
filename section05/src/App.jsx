//import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'//확장자를 안붙여도 됨 여기서는
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'




function App() {//부모 컴포넌트: 조상 Root 컴포넌트

  return (
    <>
      <Header />
      <h1> 안녕 리액트! </h1>
      <Main />
      <Footer />
    </>
  )
}

export default App
