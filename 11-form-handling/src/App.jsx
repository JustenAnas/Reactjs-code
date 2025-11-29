import React from 'react'

const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("form is sibmitted");
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='enter your name' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App