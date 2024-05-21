import React,{useState} from 'react'
import axios from 'axios'
import loginImg from "../assets/loginImg.png"
import palm from "../assets/palm.png"
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import MainBG2 from "../assets/MainBG2.svg"
import MainBG3 from "../assets/MainBG3.png"

const Login = ({atLoginPage,setLoginPage,setLoggedIn}) => {
  const navigate=useNavigate();
  const [isShow,setShow]=useState(false)
  const [email, setEmail] = useState("member@gmail.com");
  const [password, setPassword] = useState("12345"); 
  const loginUrl=import.meta.env.VITE_HACKATHON_URL;
  console.log("Login url",loginUrl)
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response = await fetch(`${loginUrl}/auth/login`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json', 
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await response.json();
    const token = data.token;
    if (token) {
      localStorage.setItem("token", token);
      console.log("localStorage", localStorage);
      const updatedToken = localStorage.getItem("token");
      console.log("updatedToken", updatedToken);
    } else {
      console.error("No Authorization token found in response headers");
    }
    if(response.ok){
      toast.success("Logged in Successfully");
      navigate('/');
      setLoggedIn(true);
    }
    else{
      toast.error("Invalid Credentials ")
    }
    console.log("data",data);
    console.log("response",response)
    setEmail('')
    setPassword('')
  }
  return (
    
      <div className='flex justify-center items-center bg-center bg-cover bg-no-repeat  z-20 bg-slate-50' style={{ backgroundImage: `url(${MainBG3})`}}>
      <div className='flex gap-10 justify-center items-center m-w-[950px] m-h-[600px] z-20 m-9 mr-10 rounded-xl bg-white border-1 border-black p-5 pr-10 shadow-2xl '>
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
      <form className=' relative flex flex-col gap-5' >
        <input className='border-[1px] w-full rounded-md border-black p-2' 
        type='email'
         placeholder='Email ID'
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
        //  required
         />
        <input className='border-[1px] w-full rounded-md border-black p-2'
         type={isShow ? 'text' : 'password'}
          placeholder='Enter Your Password'
          value={password}
         onChange={(e)=>setPassword(e.target.value)}
         required
          />
        {
          !isShow ?
          <FaRegEyeSlash onClick={()=>setShow(!isShow)} className=' absolute scale-125  right-3 top-[4.5rem]'/>:
          <FaRegEye onClick={()=>setShow(!isShow)} className=' absolute scale-125 right-3 top-[4.5rem] '/>
        }
        <button className='bg-customBlue text-white rounded-3xl p-2' onClick={handleSubmit}>Login</button>
      </form>
      <button className='border-[1px] border-black rounded-3xl p-2 text-customGrayText'>Don’t have any Account ? <span className='text-customBrightBlue'> <NavLink to="/signup">Sign up</NavLink> </span></button>

      </div>
    </div>
    </div>
    
  )
}

export default Login
