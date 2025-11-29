import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div 
    className="flex py-4 px-8 bg-amber-400 justify-between items-center "
    >
        <h2 
        className="font-bold text-xl" >
        ganBu
        </h2>
        <div 
        className="flex gap-8"
        >
            <Link to='/'> Home</Link>
            <Link to='/about'> About</Link>
            <Link to='/course'> Course</Link>
            <Link to='/contact'> Contact</Link>
        </div>
    </div>
  )
}

export default Navbar