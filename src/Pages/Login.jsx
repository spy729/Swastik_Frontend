import React,{useState} from 'react'

import loginImg from "../assets/loginImg.png"
import palm from "../assets/palm.png"
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Login = ({atLoginPage,setLoginPage}) => {
  const [isShow,setShow]=useState(false)
  return (
      <div className='flex justify-center items-center  z-20 bg-slate-50'>
      <div className='flex gap-10 justify-center items-center m-w-[950px] m-h-[600px] z-20 m-10 rounded-xl bg-white border-1 border-black p-5 pr-10 shadow-2xl '>
      <img src={loginImg}></img>
      <div className='flex flex-col gap-5'>
        <div className='flex border-b-[1px] border-black gap-3 mb-2'>
        <img  className='object-contain' src={palm}></img>
        <div className='flex flex-col items-start'>
          <p className='text-[0.9rem]'>Hi, Swastikian</p>
          <p className='font-medium text-[1.2rem] mb-2'>Welcome Back To Project Swastik!</p>
        </div>
      </div>
      <div className='flex  items-center border-2 border-b-4 rounded-lg p-2'>
        <FcGoogle className='scale-150'/>
        <p className='m-auto text-customGrayText scale-90'>continue with Google</p>
      </div>
      <div className="flex items-center ">
        <div className="flex-1 border-[2px] border-top-dashed"></div>
        <span className="text-customGrayText text-[0.8rem] m-1 ">or login with email</span>
        <div className="flex-1 border-[2px] border-top-dashed"></div>
      </div>
      <form className=' relative flex flex-col gap-5'>
        <input className='border-[1px] w-full rounded-md border-black p-2' type='text' placeholder='Email ID'></input>
        <input className='border-[1px] w-full rounded-md border-black p-2' type='password' placeholder='Enter Your Password'></input>
        {
          !isShow ?
          <FaRegEyeSlash onClick={()=>setShow(!isShow)} className=' absolute scale-125  right-3 top-[4.5rem]'/>:
          <FaRegEye onClick={()=>setShow(!isShow)} className=' absolute scale-125 right-3 top-[4.5rem] '/>
        }
        <button className='bg-customBlue text-white rounded-3xl p-2'>Login</button>
      </form>
      <button className='border-[1px] border-black rounded-3xl p-2 text-customGrayText'>Don’t have any Account ? <span className='text-customBrightBlue'>Sign up</span></button>

      </div>
    </div>
    </div>
    
  )
}

export default Login
