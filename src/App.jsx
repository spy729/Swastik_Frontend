import { useState } from 'react'
import search from "./assets/LightGray.png"
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage'
import Signup from './Pages/Signup'

function App() {
  const [isLoading , setLoading]=useState(false)
  const [atLoginPage,setLoginPage]=useState(false)
  return (
    <>
    <div>
    {
      !atLoginPage&&
      <nav className='flex p-3 pl-7 pr-7 items-center justify-between shadow-xl'>
        <div className='flex gap-12 justify-center items-center  '>
          <h1 className='text-red-500 text-3xl'>Logo</h1>
          <form className='relative'>
            <input className='rounded-full p-1.5 pl-7 border-2 border-black custom-width-300' type='text' placeholder='Search Opportunities'></input>
          <button><img src={search} className='h-5 absolute left-2 top-2.5' ></img></button>
          </form>
          
          <li className='flex gap-8 justify-center items-center text-lg'>
            <ul>Discover</ul>
            <ul>Hackathons</ul>
            <ul>competator</ul>
          </li>
        </div>
        {
          !isLoading&&
          <div className='flex justify-center items-center text-xl gap-5'>
          <button className='text-customBlue '>Login</button>
          <button className='bg-customBlue text-white rounded-lg pl-4 pr-4 pt-1 pb-1'>Sign Up</button>
        </div>
        }
        
      </nav>
    }
      
    </div>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/login" element={<Login atLoginPage={atLoginPage} setLoginPage={setLoginPage}></Login>}></Route>
      <Route path="/signup" element={<Signup atLoginPage={atLoginPage} setLoginPage={setLoginPage}/>}></Route>
    </Routes>
    </>
  )
}

export default App
