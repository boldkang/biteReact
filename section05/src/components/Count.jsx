import {useState} from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return <>
    {count}
  <div>
    <button onClick = {() => {
      setCount(count + 1)
    }}>+</button>
  </div>
  </>
  
}

export default Count