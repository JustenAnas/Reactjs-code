
const App = () => {
 
  const pageScrolling=()=>{
    console.log('page scrolling......');
    
  }
  return (
    <div onWheel={pageScrolling}> 
       <div className="page1">
        
       </div>
       <div className="page2">

       </div>
       <div className="page3">

       </div>
    </div>
  ) 
}

export default App

