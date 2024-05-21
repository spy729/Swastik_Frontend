import React from 'react'
import { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { toast } from 'react-toastify';

const HackathonCard2 = ({CardData,past,upcomming,setSubmit}) => {
  const [teamName, setTeamName] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [forWhome,setForWhome]=useState('')

  const joinSubmitHandler=async(e)=>{
    e.preventDefault()
    toast.success("Applied Successfully")
    setTeamCode("")
    setTeamName("")
    setSubmit(true)
  }
  return (
    <div className=' bg-white max-w-[670px] m-h-[420px] rounded-xl border-[2px] border-customGrayText text-customGrayText p-5'>
      <div className='flex justify-between gap-10'>
        <div className='flex gap-5'>
            <img src={CardData.img}></img>
            <p className='text-[1.5rem] font-medium text-black'>{CardData.title}</p>
        </div>
        <GoArrowUpRight className='text-[2.5rem] mt-1'/>
      </div>
      <div className='flex justify-between mt-3'>
        <div className='flex justify-center items-center gap-5'>
            <p className='bg-customWhite p-3 drop-shadow-sm rounded-2xl'>#Hackathon</p>
            <p className='bg-customWhite p-3 drop-shadow-sm rounded-2xl'>#Presentation</p>
        </div>
        <div className='flex justify-center items-center '>
            <img className='w-[6rem]' src={CardData.grpImg}></img>
            <p className='scale-90 font-semibold'> + <span className='text-black'>{CardData.registeredUser}</span><span className='text-customBrightBlue'> Registered</span></p>
        </div>
      </div>
      <div className="flex-1 border-[0.1rem] mt-3 mb-3 "></div>
      <div className='flex flex-col justify-between'>
      <p>{CardData.description}</p>
      <div className='flex justify-between mt-[4rem]'>
        <div className='flex gap-5'>
        <p className='bg-customWhite p-3 drop-shadow-sm rounded-2xl'>{CardData.date}</p>
        <p className='bg-customWhite p-3 drop-shadow-sm rounded-2xl'>{CardData.mode}</p>
        </div>
        
<div className='flex gap-4'>
              {
                past!=="past" && upcomming!=="upcomming" && <button onClick={()=>setForWhome("join")} className=' bg-blue-500 text-white hover:bg-customBrightBlueDark rounded-md pl-4 pr-4'>Join Team</button>
              }
            <button onClick={()=>setForWhome("apply")} className={`rounded-md pl-4 pr-4 ${past=="past" ? 'bg-red-400 text-black cursor-not-allowed' : upcomming=="upcomming" ? 'bg-yellow-400 text-black cursor-wait' : 'bg-customBrightBlueBg hover:bg-customBrightBlueDark text-white'}`}>
                        {past=="past" ? 'Ended' : upcomming=="upcomming" ? 'Coming Soon' : 'Apply Now'}
            </button>

  </div>       
      </div>
      {
          forWhome!=''&&
        <form onSubmit={joinSubmitHandler} className='flex justify-end mt-3 relative'>
        {
          forWhome=="apply" ?
          <input
          className='w-[15rem] rounded-lg pl-5 border-2'
          value={teamName}
          placeholder='Team Name'
          onChange={(e)=>setTeamName(e.target.value)}
          ></input>:
          <input
          className='w-[15rem] rounded-lg pl-5 border-2'
          placeholder='Team Code'
          value={teamCode}
          onChange={(e)=>setTeamCode(e.target.value)}
          ></input>
        }
        <span onClick={()=>setForWhome('')} className='absolute right-[13.8rem] top-[5px]'><RxCrossCircled/></span>
        <button className='absolute top-1 right-1'><FaSearch className='text-[1rem]'/></button>
      </form>
      }
      
      </div>
    </div>
  )
}

export default HackathonCard2
