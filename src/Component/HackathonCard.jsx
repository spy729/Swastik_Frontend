import React, { useState } from 'react'
import hart1 from "../assets/hart1.png"
import hart2 from "../assets/hart2.png"
import arrow from "../assets/arrow.png"
import people from "../assets/people.png"
import clock from "../assets/clock.png"
import TiltComponent from "react-parallax-tilt";
const HackathonCard = ({card}) => {
  const [isLiked,setLiked]=useState(true)
  return (
    <TiltComponent tiltMaxAngleX={5} tiltMaxAngleY={5} tiltReverse={true}>
    <div  className=' relative w-[390px] h-[405px] rounded-xl border border-black'>
      <img className='w-[390px] h-[120px] rounded-t-xl' src={card.bgimg}></img>
      <img className='absolute bg-customGray h-[100px] w-[100px] object-contain rounded-full left-8 top-[5rem]' src={card.mainimg}></img>
      <div className=' pl-5 pr-5 mt-[5rem] flex text-customGrayText justify-between'>
        <div className='flex flex-col gap-9'>
        <div className='flex flex-col gap-3 '>
          <p className='flex gap-3'><span>{card.mode}</span>|<span>{card.cost}</span> </p>
          <p className='text-black font-semibold scale-150 ml-7'>{card.name}</p>
          <p>{card.location}</p>
        </div>
        <div className='flex flex-col gap-3'>
        <p className='flex justify-start items-center gap-3'><img src={people}></img><p className='scale-90'>{card.participants}</p></p>
        <p className='flex justify-start items-center gap-3'><img src={clock}></img><p className='scale-90'>{card.date}</p></p>
        </div>
        </div>

      
      <div className='flex flex-col justify-between'>
      {
        isLiked ?
        <img onClick={()=>setLiked(!isLiked)} className='h-[30px] w-[30px] object-contain' src={hart1}></img>
        :
        <img onClick={()=>setLiked(!isLiked)} className='h-[30px] w-[30px] object-contain' src={hart2}></img>
      }
      
      <img className='h-[20px] w-[20px] object-contain mb-3' src={arrow}></img>
      </div>
      </div>
     
    </div>
    </TiltComponent>
  )
}

export default HackathonCard
