// import { useState } from "react"

//   const App = () => {
 
//     const [a, setA] = useState(0);
//     //a is read only
//     //setA is write only 
//     //useState(0) is me telling a no. is

//     function changeNum() {
//       setA(67)
//       //change the no. by doing this 
//     }

//    return (
//      <div>
//       <h1>value of a is {a}</h1>
//       <button onClick={changeNum}>click</button>
//      </div>
//    )
//  }
 
//  export default App
 
import Counter from './Counter'

const App = () => {
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App