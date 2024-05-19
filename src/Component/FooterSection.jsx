import React from 'react'
import { FaTelegram } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const FooterSection = () => {
  return (
    <div className='w-full bg-customFooterBg mt-[6rem] pt-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
        <div className='flex justify-around items-start mt-10'>
            <div className='flex gap-[1.5rem] font-normal'>
                <div className='flex flex-col gap-5 '>
                    <p className='font-semibold'>COMMUNITY</p>
                    <p>Organise a Hackathon</p>
                    <p>Explore hackathons</p>
                    <p>Code of Conduct</p>
                    <p>Brand Assets</p>
                    <p>Documentation</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='font-medium'>COMPANY</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Changelog</p>
                    <p>Privacy & Terms</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='font-medium'>SUPPORT</p>
                    <p>Help</p>
                    <p>Refund Policy</p>
                    <p>Status</p>
                    <p>Contact us</p>
                </div>
            </div>
            <div ><p className='font-bold text-[2.5rem]'>Fueling <span className='text-customPink'>coders</span>  & spot <br/> lighting the <span className='text-customPurple'>genius</span>  with <br/> them . </p></div>
        </div>
        <div className='flex justify-center items-center gap-5 p-10 pb-0'>
            <div className='flex-1 border-2 border-top-customGray'></div>
            <div className='flex text-[1.5rem] gap-2'>
                <FaTelegram className='text-customBrightBlue'/>
                <FaMeta className='text-customPurple'></FaMeta>
                <FaSquareInstagram className='text-customPink'/>
                <FaGithub />
                <AiFillLinkedin className='text-customBlue'/>
            </div>
        </div>
        <p className='text-customBrightBlue text-[2rem] font-semibold ml-10 pb-5'>Project Swastik</p>
    </div>
  )
}

export default FooterSection
