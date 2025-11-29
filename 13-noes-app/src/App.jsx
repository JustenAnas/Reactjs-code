import { useState } from 'react'

 const App = () => {
   const [info, setInfo] = useState('')
   const [detail, setDetail] = useState('')
   const [task, setTask] = useState([])

  const submitHandler=(e)=>
  {
    e.preventDefault(); 
    let copyTask =[...task];//...se purana wala rhta h
    copyTask.push({info,detail})
    setTask(copyTask)
    
    setInfo('')
    setDetail('')
  }

  const deleteNote=(index)=>{
     let copyTask =[...task];
     copyTask.splice(index,1)
      setTask(copyTask)
  }


   return (
     <div
     className='h-screen lg:flex bg-black text-white'
     >
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex p-10 lg:w-1/2 gap-5 flex-col items-start overflow-hidden '>
      <h1
      className='text-3xl font-bold'>
      Add notes
      </h1>
      <input
      className='px-5 w-full py-2 border-2 rounded '
      type="text"
      value={info}
      onChange={(e)=>{
        setInfo(e.target.value)
      }}
      placeholder='enter notes heading'
      />
      <input
      className='px-5 w-full py-2 border-2 h-24 rounded '
      type="text"
      value={detail}
      onChange={(e)=>{
        setDetail(e.target.value)
      }}
      placeholder='enter details'
       /> 
      <button 
      className='bg-white active:bg-gray-300 text-black px-5 py-2 rounded'>
      Add notes
      </button>
      </form>
      <div
      className='p-10 lg:border-l-2 lg:w-1/2 overflow-hidden'
      >
      <h1 
      className='text-3xl font-bold'>
      Your notes
      </h1>
      <div
      className="container flex flex-wrap  gap-5 overflow-auto mt-5 h-[90%] "
      >
      {task.map(function(e,index)
      {
      return <div key={index} className=' flex justify-between flex-col items-start pt-7 pb-4 px-4 relative h-52 w-36 rounded-2xl bg-white text-black'>
      <div>
      <h3
      className='leading-tight text-xl font-bold'>
      {e.info}
      </h3>
      <p 
      className='mt-3 text-gray-500 leading-tight font-medium'>
      {e.detail}
      </p>
      </div>
      <button 
      onClick={()=>{
        deleteNote(index)
      }}
      className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text white'>
      Delete
      </button>
      </div>
      })}
    </div>
    </div>
     </div>
   )
 }
 
 export default App