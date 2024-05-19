import React, { useEffect,useState } from 'react'
import grpImg from "./assets/Group 8.png"
import imagetop from "./assets/Rectangle 4.png"
import CompanyLogo from "./assets/CompanyLogo.png"
import HackathonGirl from "./assets/HackathonGirl.png"
import HackathonCard2 from './Component/HackathonCard2'
import HackathonImg1 from "./assets/HackathonImg1.png"
import HackathonImg2 from "./assets/HackathonImg2.png"
import footer from "./assets/footer.png"
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const HackathonPage = () => {
    const URL = import.meta.env.VITE_HACKATHON_URL
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        const response = await fetch("https://project-hwd.onrender.com", {
            method: 'GET',
            headers: {
              'Content-Type':'application/json', 
            }
          });
        const data = await response.json();
        console.log("Data===",response)
    }
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    
    const CardData=[
        {
            img:HackathonImg1,
            grpImg:grpImg,
            title:"5G Enabled Smart Structure Innovation Challange",
            description:" Participate in the NextAlpha Quant Challenge, your opportunity to integrate on-chain and off-chain data to solve some of the exciting problems and events around the crypto world, and derive valuable insights.",
            registeredUser:"220",
            mode:"Online",
            cost:"Free",
            date:"5 days left"
        },
        {
            img:HackathonImg2,
            grpImg:grpImg,
            title:"Next Alpha Quant Challange - May",
            description:"Welcome to the 5G-Enabled Smart Infrastructure Innovation Challenge! This event aims to utilize 5G technology to transform our infrastructure, creating smarter, more efficient cities.",
            registeredUser:"180",
            mode:"Offline",
            cost:"Free",
            date:"7 days left"
        },
        {
            img:HackathonImg2,
            grpImg:grpImg,
            title:"5G Enabled Smart Structure Innovation Challange",
            description:"Welcome to the 5G-Enabled Smart Infrastructure Innovation Challenge! This event aims to utilize 5G technology to transform our infrastructure, creating smarter, more efficient cities.",
            registeredUser:"190",
            mode:"Offline",
            cost:"Free",
            date:"5 days left"
        },
        {
            img:HackathonImg1,
            grpImg:grpImg,
            title:"5G Enabled Smart Structure Innovation Challange",
            description:" Participate in the NextAlpha Quant Challenge, your opportunity to integrate on-chain and off-chain data to solve some of the exciting problems and events around the crypto world, and derive valuable insights.",
            registeredUser:"120",
            mode:"Offline",
            cost:"Free",
            date:"5 days left"
        },
        {
            img:HackathonImg1,
            grpImg:grpImg,
            title:"Next Alpha Quant Challange - May",
            description:"Welcome to the 5G-Enabled Smart Infrastructure Innovation Challenge! This event aims to utilize 5G technology to transform our infrastructure, creating smarter, more efficient cities.",
            registeredUser:"110",
            mode:"Offline",
            cost:"Free",
            date:"1 days left"
        },
        {
            img:HackathonImg2,
            grpImg:grpImg,
            title:"5G Enabled Smart Structure Innovation Challange",
            description:"Welcome to the 5G-Enabled Smart Infrastructure Innovation Challenge! This event aims to utilize 5G technology to transform our infrastructure, creating smarter, more efficient cities.",
            registeredUser:"120",
            mode:"Offline",
            cost:"Free",
            date:"3 days left"
        },
        {
            img:HackathonImg1,
            grpImg:grpImg,
            title:"Next Alpha Quant Challange - May",
            description:" Participate in the NextAlpha Quant Challenge, your opportunity to integrate on-chain and off-chain data to solve some of the exciting problems and events around the crypto world, and derive valuable insights.",
            registeredUser:"140",
            mode:"Offline",
            cost:"Free",
            date:"4 days left"
        },

    ]
    const totalPages = Math.ceil(CardData.length / itemsPerPage);
    const visibleCardData = CardData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const visibleCardData2 = CardData.slice((currentPage - 1) * 2, currentPage * 2);
  return (
    <div>
      <div className='mt-[7rem] flex justify-center items-start '>
        <div className='flex flex-col text-xl max-w-[800px] font-normal gap-3 ' >
            <p className='font-medium text-6xl'><span className='text-customBlue'>Unlimited </span>Opportunites</p>
            <p className='max-w-[650px] text-3xl leading-normal'>Sharp your skills, by diving headfirst into a world of creative problem-solving and pushing your boundaries at exciting new hackathons!</p>
            <div className='mt-4 flex gap-[3.5rem] items-center'>
                  <button className='bg-customBlue text-white text-lg p-2.5 pl-4 pr-4 rounded-md'>Apply Hackathon</button>
                  <button className='text-customBlue border-2 border-customBlue text-lg p-2 pl-3 pr-3 rounded-md'>Organise Hackathon</button>
            </div>
        </div>
        <img className='w-[35rem] h-[35rem] object-contain mt-[-2rem]' src={HackathonGirl}></img>
      </div>
      <div>
        <img className='ml-[10rem] mt-[-7rem]' src={CompanyLogo}></img>
      </div>
            {/* FEATURED HACKATHONS */}
        <div className='m-10 mt-[5rem]'>
            <p className='text-[3rem] font-normal ml-8'><span className='text-customPink'>Featured </span>Hackathons</p>
            <div className='flex justify-center items-center'>
                <div className='grid  grid-cols-2 gap-[40px] mt-8'>
                {
                    visibleCardData.map((CardData,index)=>(
                    <HackathonCard2 key={index} CardData={CardData}/>
                    ))
                }
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <button
                    className="mr-2 px-4 py-2 bg-customBlue text-white rounded-md"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                >
                    <GrPrevious/>
                </button>
                <button
                    className="px-4 py-2 bg-customBlue text-white rounded-md"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    <GrNext/>
                </button>
            </div>
        </div>

           {/* UPCOMING hACKATHONS */}
           <div className='m-10 mt-[5rem]'>
                <p className='text-[3rem] font-normal ml-8'><span className='text-customBrightBlue'>Upcoming </span>Hackathons</p>
                <div className='flex justify-center items-center'>
                    <div className='grid  grid-cols-2 gap-[40px] mt-8'>
                    {
                        visibleCardData2.map((CardData,index)=>(
                        <HackathonCard2 key={index} CardData={CardData}/>
                        ))
                    }
                    </div>
                </div>
            </div>

           {/* Past hACKATHONS */}
           <div className='m-10 mt-[5rem]'>
                <p className='text-[3rem] font-normal ml-8'><span className='text-customPurple'>Past </span>Hackathons</p>
                <div className='flex justify-center items-center'>
                    <div className='grid  grid-cols-2 gap-[40px] mt-8'>
                    {
                        visibleCardData2.map((CardData,index)=>(
                        <HackathonCard2 key={index} CardData={CardData}/>
                        ))
                    }
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className='w-full mt-[8rem]'>
          <img className='w-full' src={footer}></img>
      </div>
    </div>
  )
}

export default HackathonPage
