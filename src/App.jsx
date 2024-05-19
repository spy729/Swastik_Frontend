import { useState } from 'react'
import search from "./assets/LightGray.png"
import { Routes,Route,NavLink } from 'react-router-dom'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'
import Signup from './Pages/Signup'
import { FaRegUser  } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import HackathonPage from './HackathonPage'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate=useNavigate()
  const [isLoading , setLoading]=useState(false)
  const [atLoginPage,setLoginPage]=useState(false)
  const [isLoggedIn,setLoggedIn]=useState(false);
  const [isUserClicked,setUserClicked]=useState(false);
  return (
    <>
    <div>
      <nav className='flex p-3 pl-7 pr-7 items-center justify-between shadow-xl'>
        <div className='flex gap-12 justify-center items-center  '>
        <NavLink to="/">
        <h1 className='text-red-500 text-3xl'>Logo</h1>
        </NavLink>
          
          <form className='relative'>
            <input className='rounded-full p-1.5 pl-7 border-2 border-black custom-width-300' type='text' placeholder='Search Opportunities'></input>
          <button><img src={search} className='h-5 absolute left-2 top-2.5' ></img></button>
          </form>
          
          <li className='flex gap-8 justify-center items-center text-lg'>
            <NavLink to="/"><ul>Discover</ul></NavLink>
            {
              isLoggedIn?
              <NavLink to="/hackathon"><ul>Hackathons</ul></NavLink>:
              <NavLink to="/login"><ul>Hackathons</ul></NavLink>
            }
            
            <ul>competator</ul>
          </li>
        </div>
        {
          !isLoggedIn ?
          <div className='flex justify-center items-center text-xl gap-5'>
            <NavLink to="/login">
              <button onClick={()=>setLoginPage(!atLoginPage)} className='text-customBlue '>Login</button>
            </NavLink>
            <NavLink to="/signup">
            <button className='bg-customBlue text-white rounded-lg pl-4 pr-4 pt-1 pb-1'>Sign Up</button>
            </NavLink>
        </div>
        :
         <div>
        {
          !isUserClicked ?
          <FaRegUser onClick={()=>setUserClicked(!isUserClicked)} className='text-[1.75rem] mr-5' /> :
          <div>
          <FaUser  onClick={()=>setUserClicked(!isUserClicked)} className='text-[1.75rem] mr-5' />
          {isUserClicked && (
                  <div className=' z-10 absolute right-0 mt-2 mr-2 w-48 bg-white border rounded-lg shadow-lg'>
                    <ul className='flex flex-col p-2 text-[1.2rem]'>
                      <li className='py-1 px-4 hover:bg-gray-200 cursor-pointer'>My Profile</li>
                      <li className='py-1 px-4 hover:bg-gray-200 cursor-pointer'>Notifications</li>
                      <li className='py-1 px-4 hover:bg-gray-200 cursor-pointer'>Settings</li>
                      <li className='py-1 px-4 hover:bg-gray-200 cursor-pointer'
                      onClick={()=>{setLoggedIn(false);navigate("/");setUserClicked(false)}}
                      >Logout</li>
                    </ul>
                  </div>
                )}
          </div>
          
        }
        </div>
        }
      </nav>
      
    </div>
    <Routes>
      <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>}></Route>
      <Route path="/login" element={<Login setLoggedIn={setLoggedIn} atLoginPage={atLoginPage} setLoginPage={setLoginPage}></Login>}></Route>
      <Route path="/signup" element={<Signup atLoginPage={atLoginPage} setLoginPage={setLoginPage}/>}></Route>
      <Route path="/hackathon" element={<HackathonPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
