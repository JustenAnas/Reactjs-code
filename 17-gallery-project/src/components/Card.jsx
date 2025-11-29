const Card = (props) => {
  return (
    <div>
        <a href={props.e.url} target="_blank">
       <div className="h-40 w-44 overflow-hidden bg-white ">
        <img className="h-full w-full object-cover" src={props.e.download_url} alt="" />
      </div>
      <h2>{props.e.author}</h2>
     </a>
    </div>
  )
}

export default Card