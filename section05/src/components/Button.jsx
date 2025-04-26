const Button = ({children,text, color = "black"}) => {
  const clickHandling = (e) => {
    //console.log(e)
    //console.log(text)
  }
  return <>
  <button 
  onClick= {clickHandling}//함수가 아니라 표현식으로 마치 콜백함수처럼
  style ={{color: color}}>
    {text}
    {children}
  </button>
  </>
}




export default Button;