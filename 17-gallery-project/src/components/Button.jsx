
const Button = (props) => {
 const { index, setIndex, setData } = props;
  return (
    <div>
        <div 
      className=" flex items-center justify-center gap-6 p-4">
        <button 
        style={{opacity:index == 1?0.5:1}}
      onClick={()=>{
        if(index>1){
          setData([])
           setIndex(index-1)
        }
       
      }}
      className="bg-amber-400 text-sm text-black rounded px-4 py-2 font-semibold">
        Prev
      </button>
      <h4>Page {index}</h4>
      <button 
      onClick={()=>{
        setData([])
        setIndex(index+1)
      }}
      className="bg-amber-400 text-sm text-black rounded px-4 py-2 font-semibold">
        Next
      </button>
      </div>
    </div>
  )
}

export default Button