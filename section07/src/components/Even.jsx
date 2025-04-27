import { useEffect } from 'react'

const Event = () => {
  useEffect(()=>{
    return () => {
      console.log("Unmount")
    }
  })
return <><h1>짝수입니다.</h1></>

}

export default Event