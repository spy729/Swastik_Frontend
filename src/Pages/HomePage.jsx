import React from 'react'
import imagetop from "../assets/Rectangle 4.png"
import grpImg from "../assets/Group 8.png"
import CarsouleImage1 from "../assets/CarsouleImage1.png"
import CarsouleImage2 from "../assets/CarsouleImage2.png"
import CarsouleImage3 from "../assets/CarsouleImage3.png"
import CompanyLogo from "../assets/CompanyLogo.png"
import Carousel from 'better-react-carousel'
import HackathonCard from '../Component/HackathonCard'
import Cardbg1 from "../assets/Cardbg1.png";
import Cardbg2 from "../assets/Cardbg2.png";
import Cardmain1 from "../assets/Cardmain1.png"
import Cardmain2 from "../assets/Cardmain2.png"
import Cardmain3 from "../assets/Cardmain3.png"
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import user4 from "../assets/user4.png"
import user5 from "../assets/user5.png"
import footer from "../assets/footer.png"
import { NavLink } from 'react-router-dom'
const HomePage = ({isLoggedIn}) => {
  const CardData=[
    {
      bgimg:Cardbg1,
      mainimg:Cardmain1,
      mode:"Offline",
      cost:"Free",
      name:"HackWithDelhi",
      location:"Greater Noida, India",
      participants:"250 Applied",
      date:"Running",
    },
    {
      bgimg:Cardbg2,
      mainimg:Cardmain2,
      mode:"Offline",
      cost:"Free",
      name:"Hack A Thon",
      location:"Greater Noida, India",
      participants:"350 Applied",
      date:"1 days left",
    },
    {
      bgimg:Cardbg1,
      mainimg:Cardmain2,
      mode:"Online",
      cost:"Free",
      name:"Code Cubile",
      location:"Ghaziabad, India",
      participants:"450 Applied",
      date:"3 days left",
    },
    {
      bgimg:Cardbg2,
      mainimg:Cardmain3,
      mode:"Offline",
      cost:"Free",
      name:"Front-End Battle ‘24",
      location:"Greater Noida, India",
      participants:"357 Applied",
      date:"1 days left",
    },
    {
      bgimg:Cardbg1,
      mainimg:Cardmain1,
      mode:"Offline",
      cost:"Free",
      name:"HackWithDelhi",
      location:"Greater Noida, India",
      participants:"250 Applied",
      date:"Running",
    },
    {
      bgimg:Cardbg1,
      mainimg:Cardmain2,
      mode:"Online",
      cost:"Free",
      name:"Code Cubile",
      location:"Ghaziabad, India",
      participants:"450 Applied",
      date:"3 days left",
    },
  ]
  const userData=[
    {
      userImg:user1,
      name:"Swapnil"
    },
    {
      userImg:user2,
      name:"Sweta Garg"
    },
    {
      userImg:user3,
      name:"Rishi Keshari"
    },
    {
      userImg:user4,
      name:"Prakhar Gupta"
    },
    {
      userImg:user5,
      name:"Prakhar Gupta"
    },
  ]
  const NumberData=[
    {
      value:"90K+",
      name:"Active Users"
    },
    {
      value:"39K+",
      name:"Opportunities"
    },
    {
      value:"3K+",
      name:"Collages"
    },
    {
      value:"50+",
      name:"Brand Trust"
    },
    {
      value:"18+",
      name:"Countries"
    },
  ]
  return (
    <div>
      <div className='mt-[7rem] flex justify-around '>
        <div className='flex flex-col text-xl max-w-[800px] font-normal gap-3 ' >
            <p className='font-medium text-6xl'><span className='text-customBlue'>Unlock</span> New Hackathon</p>
            <p className='max-w-[650px] text-3xl leading-normal' >Explore the opportunites from across the globe to participate and showcase your skills and gain experties or collaborate with professionals.</p>
            <div className='mt-4 flex gap-[5rem] items-center'>
                {
                  isLoggedIn?
                  <NavLink to="/hackathon">
                  <button className='bg-customBlue text-white text-lg p-2.5 pl-4 pr-4 rounded-md'>Join Hackathon</button>
                  </NavLink>:
                  <NavLink to="/login">
                  <button className='bg-customBlue text-white text-lg p-2.5 pl-4 pr-4 rounded-md'>Join Hackathon</button>
                  </NavLink>
                }
                
                
                <div className='flex justify-center items-center gap-2'>
                    <img src={grpImg}></img>
                    <p className='text-sm font-medium'>Participated In Hackathons</p>
                </div>
            </div>
        </div>
        <div className='relative'>
            <img className='w-[24rem] h-[33rem]' src={imagetop}></img>
            <p className='absolute bg-customYellow w-[300px] font-medium text-[24px] rounded-full p-2 pl-5 bottom-[10rem] left-[-8rem]'>60000+ Projects</p>
            <p className='absolute bg-customOrange w-[300px] font-medium text-[24px] rounded-full p-2 pl-5 bottom-[5rem] left-[-10rem]'>3000+ Hackathons</p>
        </div>
      </div>
      <div>
        <img className='ml-[10rem] mt-[-6rem]' src={CompanyLogo}></img>
      </div>
      <div className='flex justify-center items-center mt-[5rem] ml-[8rem] mr-[11rem]'>
        <Carousel cols={2} rows={1} gap={40}  loop autoplay={2000}>
          {[CarsouleImage1, CarsouleImage2, CarsouleImage3].map((image, index) => (
            <Carousel.Item key={index}>
              <img className='' src={image} alt={`Carousel Image ${index + 1}`} />
            </Carousel.Item>
          ))}
          {[CarsouleImage2, CarsouleImage3, CarsouleImage1].map((image, index) => (
            <Carousel.Item key={index + 3}>
              <img className='' src={image} alt={`Carousel Image ${index + 4}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* latest hackatons */}
      <div className='flex flex-col items-center justify-center mt-10 gap-10 '>
        <p className='text-[3rem] font-normal'><span className='text-customBlue'>Latest</span> Hackathons</p>
        <div className='grid grid-rows-2 grid-cols-3 gap-[40px]'>
        {
          CardData.map((card,index)=>(
            <HackathonCard card={card}/>
          ))
          
        }
        </div>
        <p className='text-customBrightBlue scale-150'>See all</p>
      </div>
      <div className='flex flex-col justify-center items-center mt-[6rem] mb-10 gap-10'>
        <p className='text-[3rem] font-medium'>Top Performers of the month </p>
        <div className='flex gap-[4.5rem]'>
          {
            userData.map((user,index)=>(
              <div className='flex flex-col justify-center items-center gap-3 mt-8 '>
              <img className='rounded-full' src={user.userImg}></img>
              <span className='text-customGrayText scale-125 font-medium'>{user.name}</span>
              </div>
            ))
          }
        </div>
        <p className='text-customBrightBlue scale-150'>See all</p>
      </div>
              {/* OUR nUMBER */}
      <div className='flex flex-col justify-center items-center gap-10 mt-[8rem]'>
        <p className='text-[3rem] font-medium'>Our Numbers</p>
        <div className='flex gap-[7.5rem]'>
          {
            NumberData.map((num,index)=>(
              <div className='flex flex-col justify-center items-start' >
              {
                num.value.includes("K")? 
                <p className='text-[3rem] font-medium'>{num.value.split("K")[0]}<span className='text-customBrightBlue'>K+</span></p>
                : 
                <p className='text-[3rem] font-medium'>{num.value.split("+")[0]}<span className='text-customBrightBlue'>+</span></p>
              }
              <p className='text-customGrayText ml-1'>{num.name}</p>
              
              </div>
            ))
          }
        </div>
      </div>

            {/* FOOTER */}
      <div className='w-full mt-[12rem]'>
          <img className='w-full' src={footer}></img>
      </div>
    </div>
  )
}

export default HomePage
