import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Mens from './pages/Mens'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
 
 
 const App = () => {
   return (
     <div className='bg-black  text-white h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}>
        <Route index element={<h1>About Page</h1>} />
        <Route path='men' element={<Mens/>} />
        <Route path='women' element={<Women/>} />
        </Route>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/course/:id' element={<CourseDetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
     </div>
   )
 }
 
 export default App