 import {Link, Outlet, useNavigate} from 'react-router-dom'
const About = () => {

  const navigate = useNavigate()

  const btnClicked = ()=>{
    navigate('/')
  }

  return (
    <div>
      <button
      onClick={btnClicked}
       className='bg-blue-600 text-white px-5 py-2 rounded m-2'>Return to Homepage</button>
        <div className='flex justify-center gap-10 py-4'>
            <Link className='text-xl font-semibold' to='/about/men'>Men</Link>
            <Link className='text-xl font-semibold' to='/about/women'>Women</Link>
        </div>

        <Outlet/>
    </div>
  )
}

export default About