import Viewer from './components/viewer.jsx'
import Controller from './components/controller.jsx'
import './App.css'
import { useState } from "react"


function App() {
const [count, setCount] = useState(0);

const onClickButton = (value) => {
  setCount(count + value);
};

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
      <Viewer count = {count} />
      </section>
      <section>
      <Controller onClickButton = {onClickButton} />
      </section>
      
      
    </div>
  )
}

export default App
