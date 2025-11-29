 

const Navbar = (props) => {
  return (
    <div>
        <p>{props.theme}</p>
        <button onClick={()=>{
            props.setTheme('Dark')
        }}>change theme</button>
    </div>
  )
}

export default Navbar