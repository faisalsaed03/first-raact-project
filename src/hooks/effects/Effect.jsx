import { useEffect } from "react"

export default function Effect() {
  useEffect(()=>{
    console.log("faisal");
  },[])
  return (
    <div>Effect</div>
  )
}

