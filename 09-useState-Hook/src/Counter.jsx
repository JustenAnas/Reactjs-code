import { useState } from "react"
 
const Counter = () => {
    const [inc, setInc] = useState(0)
    
    function increaseNum (){
         setInc(inc+1)
        
    }
    function decreaseNum (){
        setInc(inc-1)
    }
    function  jump5Num (){
        setInc(inc+5)
    }

  return (
    <div>
        <h1>{inc}</h1>
        <button onClick={increaseNum}>Increase</button>
        <button onClick={decreaseNum}>Decrease</button>
        <button onClick={jump5Num}>Jump by 5</button>
    </div>
  )
}

export default Counter