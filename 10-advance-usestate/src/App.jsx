import { useState } from "react"

 const App = () => {

  const [num, setNum] = useState(10)

  const btnClicked = () =>{
    //batch update
       setNum(prev=>(prev+1));//we also write like this so we can have previous value
       setNum(prev=>(prev+1));
       setNum(prev=>(prev+1));
  }

   return (
     <div>
      <h1>{num}</h1> 
      <button onClick={btnClicked}>Click</button>
     </div>
   )
 }
 
 export default App