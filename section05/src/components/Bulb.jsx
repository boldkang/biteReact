import { useState } from 'react';

const Bulb = () => {
  const [light, setLight] = useState("OFF");

  console.log(light);
  return <>
  {light === "OFF" ? <h1 style = {{backgroundColor: "orange"}}>OFF</h1> : <h1 style = {{backgroundColor: "grey"}}>ON</h1>}
  <button onClick = {() => {
        setLight(light === "OFF" ? "ON" : "OFF")}
      }>{light === "OFF" ? "켜기" : "끄기"}
  </button>
  </>
}

export default Bulb