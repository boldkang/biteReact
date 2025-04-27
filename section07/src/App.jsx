import Viewer from './components/viewer.jsx'
import Controller from './components/controller.jsx'
import Even from './components/even.jsx'
import './App.css'
import { useState, useEffect, useRef } from "react"




function App() {

const [count, setCount] = useState(0);
const isMount = useRef(false);

//Mount
useEffect(()=> {
  console.log("Mount");
}, []);

//Update
useEffect(()=> {
  if (!isMount.currnent) {
    isMount.currnent = true
    return;
  }//check if it's mount
    console.log("Update");
});

//UnMount




/*
useEffect(()=> {
  console.log(`count: ${count}`);
}, [count]);
//의존성 배열, dependent array, dep
*/

const onClickButton = (value) => {
  setCount(count + value);
};

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
      <Viewer count = {count} />
      {count%2 === 0? <Even /> : null}
      </section>
      <section>
      <Controller onClickButton = {onClickButton} />
      </section>
      
      
    </div>
  )
}

export default App
