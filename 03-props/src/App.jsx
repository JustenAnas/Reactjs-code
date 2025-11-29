  import React from 'react'
import Card from './components/Card'
  
  const App = () => {
    return (
      <div className='parent'>
        <Card user='Aman' img='https://plus.unsplash.com/premium_photo-1760482557508-398a23d01dfe?q=80&w=691&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Card user='Nayan' img="https://plus.unsplash.com/premium_photo-1761947288852-933ad1a61d22?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
       
      </div>
    )
  }
  export default App