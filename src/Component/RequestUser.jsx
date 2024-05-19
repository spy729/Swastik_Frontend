import React from 'react'

const RequestUser = ({data}) => {
  return (
    <div className='flex-1 gap-5 border-2 border-customGrayText rounded-xl p-5 max-w-[330px] mr-3 '>
      <div className='flex justify-between gap-5'>
        <div className='flex gap-2 justify-center items-center'>
            <img className='h-[2.5rem] w-[2.5rem] rounded-full object-contain' src={data.img}></img>
            <p className='text-[1.2rem] text-customGrayText font-medium'>{data.name}</p>
        </div>
        <p className='text-customBrightBlue text-[0.7rem] font-semibold mt-3'>View&#160;Profile</p>
      </div>
      <button className="bg-customBrightBlueBg text-white p-2 pl-5 pr-5 mt-5 text-[0.7rem] rounded-2xl">Approve Request</button>
    </div>
  )
}

export default RequestUser
