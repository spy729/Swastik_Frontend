import React, { useState } from 'react'
import FooterSection from '../Component/FooterSection'
import MainBG3 from "../assets/MainBG3.png"
import YourProfile3 from "../assets/YourProfile3.png"
import YourProfile4 from "../assets/YourProfile4.png"
import YourHackathon1 from "../assets/YourHackathon1.png"
import YourHackathon2 from "../assets/YourHackathon2.png"
import CurrentHackathon from "../assets/CurrentHackathon.png"
const Profile = ({counter,setSubmit,submit}) => {

  return (
    <div className=' bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${MainBG3})`}}>
    <div className='flex'>
        {
            submit&&
            <div className='m-auto mt-5 '><img onClick={()=>setSubmit(false)} className='scale-75' src={CurrentHackathon}/></div>
        }
    </div>
    <div className='flex justify-around items-center pt-10'>
        {
            counter=="1"&&
            <img className='w-[18rem]' src={YourProfile3} />
        }
        {
            counter=="2"&&submit&&
            <img className='w-[18rem]' src={YourProfile3} />
        }
        {
            counter>="2"&&!submit&&
            <img className='w-[18rem]' src={YourProfile4} />
        }
        {
            counter=="1"&&
            <div className='bg-white p-5 rounded-lg'><img className='w-[40rem]' src={YourHackathon1} /></div>
            
        }
        {
            counter=="2"&&submit&&
            <div className='bg-white p-5 rounded-lg'><img className='w-[40rem]' src={YourHackathon1} /></div>
            
        }
        {
            counter>="2"&&!submit&&
            <div className='bg-white p-5 rounded-lg'><img className='w-[40rem]' src={YourHackathon2} /></div>
            
        }

    </div>
        {
            counter>="3"&&
            <div className='ml-10 mt-5 bg-white flex flex-col justify-center rounded-lg p-3 gap-3 w-[25rem] h-[10rem]'>
                <p className='font-semibold text-[2rem]'>Organise Hackathon</p>
                <div className='flex gap-5 items-center bg-slate-100 p-3 rounded-lg'>
                    <div className='text-customGray font-medium scale-125'>1</div>
                    <div className='text-customGray font-medium scale-125'>|</div>
                    <p className='text-customGrayText font-medium '>Hive Hackathon</p>
                    <div className='text-customGray font-medium scale-125'>|</div>
                    <button className='bg-yellow-300 p-2 pl-3 pr-3 ml-5 rounded-3xl'>Pending</button>
                </div>
            </div>
        }
      <div>
        <FooterSection/>
      </div>
    </div>
  )
}

export default Profile
