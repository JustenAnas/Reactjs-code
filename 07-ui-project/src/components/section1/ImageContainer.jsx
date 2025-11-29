import RightCard from "./RightCard"


const ImageContainer = (props) => {
  return (
    <div className='h-full flex flex-nowrap gap-10 p-5 w-2/3  '>
         {props.users.map(function(e,index){
          return <RightCard key={index} id={index} img={e.img} tag ={e.tag}/>
         })}
    </div>
  )
}

export default ImageContainer