import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const HackathonCard2 = ({CardData}) => {
  return (
    <div className='max-w-[670px] m-h-[420px] rounded-xl border-[2px] border-customGrayText text-customGrayText p-5'>
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
        <button className='bg-customBrightBlueBg text-white rounded-md pl-5 pr-5'>Apply now</button>
      </div>
        
      </div>
    </div>
  )
}

export default HackathonCard2
