
import { useState } from "react";
import palm from "../assets/palm.png"
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import SignupImg from "../assets/SignupImg.png";
import { FaRegUser } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { GiPayMoney } from "react-icons/gi";
import { toast } from "react-toastify";
import MainBG2 from "../assets/MainBG2.svg"
import MainBG3 from "../assets/MainBG3.png"
const Signup = ({atLoginPage,setLoginPage,setLoggedIn}) => {
  const navigate=useNavigate();
  const [isShow,setShow]=useState(false)
  const [isShow2,setShow2]=useState(false)
  const [name,setName]=useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [role,setRole]=useState("member")

  const SignUpUrl="https://project-hwd-js-ts.onrender.com";
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(confirmPassword)
    console.log(role)
    if(password!==confirmPassword){
      toast.info("Confirm Password not matched")
      setPassword('')
      setConfirmPassword('')
      return ''
    }
    else if(role==="organiser"){
      const response = await fetch(`${SignUpUrl}/auth/register_member`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json', 
        },
        body: JSON.stringify({
          name,
          email,
          password,
        })
      });
      const data = await response.json();
      if(response.ok){
        toast.success("User Signup Succesfully ")
        navigate('/');
        setLoggedIn(true);
      }
      else{
        toast.error("Invalid Credentials ")
      }
      console.log("data==",data)
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setLoggedIn(true)
    }
    else{
      const response = await fetch(`${SignUpUrl}/auth/register_collaborator`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json', 
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        })
      });
      const data = await response.json();
      if(response.ok){
        toast.success("User Signup Succesfully ")
        navigate('/');
        setLoggedIn(true);
      }
      else{
        toast.error("Invalid Credentials ")
      }
      console.log("data==",data)
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setLoggedIn(true)

    }
  }

  return (
    //className='bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${MainBG2})`}}
    <div className='flex justify-center items-center bg-center bg-cover bg-no-repeat  z-20 bg-slate-50' style={{ backgroundImage: `url(${MainBG3})`}}>
    <div className='flex gap-10 justify-center items-center m-w-[950px] m-h-[600px] z-20 m-9 mr-10 rounded-xl bg-white border-1 border-black p-5 pr-10 shadow-2xl '>
    <img src={SignupImg}></img>
    <div className='flex flex-col gap-5'>
      <div className='flex border-b-[1px] border-black gap-3 mb-2'>
      <img  className='object-contain' src={palm}></img>
      <div className='flex flex-col items-start'>
        <p className='text-[0.9rem]'>Hi, Swastikian</p>
        <p className='font-medium text-[1.2rem] mb-2'>Welcome Back To Project Swastik!</p>
      </div>
    </div>
    <form onSubmit={handleSubmit} className=' relative flex flex-col gap-5' >

    <div className="flex  gap-5">
          <label className={`role-option ${role === 'member' ? 'active bg-slate-300' : ''} flex justify-center items-center border-2 border-customGray text-customGrayText p-2 rounded-3xl`}>
            <input
              type="radio"
              name="role"
              value="member"
              checked={role === 'member'}
              onChange={(e)=>setRole(e.target.value)}
              className="hidden"
            />
            <FaRegUser className="mr-1"/> Member
          </label>
          <label className={`role-option ${role === 'organizer' ? 'active bg-slate-300' : ''} flex justify-center items-center border-2 border-customGray text-customGrayText p-2 rounded-3xl`}>
            <input
              type="radio"
              name="role"
              value="organizer"
              checked={role === 'organizer'}
              onChange={(e)=>setRole(e.target.value)}
              className="hidden"
            />
            <GoOrganization className="mr-1"/> Organizer
          </label>
          <label className={`role-option ${role === 'sponsor' ? 'active bg-slate-300' : ''} flex justify-center items-center border-2 border-customGray text-customGrayText p-2 rounded-3xl`}>
            <input
              type="radio"
              name="role"
              value="sponsor"
              checked={role === 'sponsor'}
              onChange={(e)=>setRole(e.target.value)}
              className="hidden"
            />
           <GiPayMoney className="mr-1 mt-1"/> Sponsor
          </label>
        </div>


    <input className='border-[1px] w-full rounded-md border-black p-2'
      type='text'
       placeholder='User Name'
       value={name}
       onChange={(e)=>setName(e.target.value)}
       required
    >
    </input>
      <input className='border-[1px] w-full rounded-md border-black p-2' 
      type='email'
       placeholder='Email ID'
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       required
       ></input>
      <input className='border-[1px] w-full rounded-md border-black p-2'
       type={isShow ? 'text' : 'password'}
        placeholder='Enter Your Password'
        value={password}
       onChange={(e)=>setPassword(e.target.value)}
       required
        ></input>
      {
        !isShow ?
        <FaRegEyeSlash onClick={()=>setShow(!isShow)} className=' absolute scale-125  right-3 bottom-[8.5rem]'/>:
        <FaRegEye onClick={()=>setShow(!isShow)} className=' absolute scale-125 right-3 bottom-[8.5rem] '/>
      }
      <input className='border-[1px] w-full rounded-md border-black p-2'
       type={isShow2 ? 'text' : 'password'}
        placeholder='Confirm Password'
        value={confirmPassword}
       onChange={(e)=>setConfirmPassword(e.target.value)}
       required
        ></input>
        {
        !isShow2 ?
        <FaRegEyeSlash onClick={()=>setShow2(!isShow2)} className=' absolute scale-125  right-3 bottom-[4.5rem]'/>:
        <FaRegEye onClick={()=>setShow2(!isShow2)} className=' absolute scale-125 right-3 bottom-[4.5rem] '/>
      }
      <button className='bg-customBlue text-white rounded-3xl p-2' >Signup</button>
    </form>
    <button className='border-[1px] border-black rounded-3xl p-2 text-customGrayText'>Already have any Account ? <span className='text-customBrightBlue'> <NavLink to="/login">Login</NavLink> </span></button>

    </div>
  </div>
  </div>

  )
}

export default Signup
