import React from 'react'
import { FaCircleUser } from "react-icons/fa6";

const IncompleteTeamCard = ({data}) => {
  return (
      <div className='flex justify-between items-center gap-10 m-w[680px] border-2 border-customGrayText rounded-xl p-5 mr-4'>
                <div className='flex  flex-col gap-3'>
                    <div className='flex items-center gap-3'>
                        <img className='h-[2.5rem] w-[2.5rem] border-2 border-customGrayText p-1 rounded-md object-contain' src={data.img}></img>
                        <div>
                            <p className='font-semibold text-[0.8rem]'>{data.title}</p>
                            <p className='font-bold text-[0.8rem]'>{data.teamName}</p>
                        </div>
                    </div>
                    {/* TEAM AND REQUIRED */}
                    <div className='flex justify-between gap-10 mt-3'>
                    <div>
                    <p className='font-semibold text-[0.9rem] mb-3'>Team Members</p>
                    <div className='flex gap-3'>
                        {
                            data.user.map((user,index)=>(
                                <div key={index} className='flex  justify-center items-center gap-1'>
                                <img className='h-[1.5rem] w-[1.5rem] object-contain rounded-full' src={user.img}></img>
                                <p className='text-customGrayText text-[0.7rem] font-medium'>{user.name.split(' ')[0]}</p>
                                </div>
                                
                            ))
                        }
                    </div>
                    </div>
                    <div>
                    <p className='font-semibold text-[0.9rem] mb-3'>Members Required</p>
                    <div className='flex gap-3'>
                        {
                            data.memberRequired.map((user,index)=>(
                                <div key={index} className='flex justify-center items-center gap-1'>
                                <FaCircleUser className='h-[1.5rem] w-[1.5rem] text-customGray'/>
                                <p className='text-customGrayText text-[0.7rem] font-medium'>{user.position}</p>
                                </div>
                                
                            ))
                        }
                    </div>
                    </div>
                    </div>
                </div>
                <button className="bg-customBrightBlueBg text-white p-2 pl-5 pr-5 text-[0.8rem] rounded-2xl">Join Request</button>

        </div>
  )
}

export default IncompleteTeamCard
