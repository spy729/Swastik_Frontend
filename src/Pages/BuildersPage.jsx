import React from 'react'
import BuilderImg from "../assets/BuilderImg.png"
import BuilderImg2 from "../assets/BuilderImg2.png"
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.png"
import user4 from "../assets/user4.png"
import user5 from "../assets/user5.png"
import MainBG2 from "../assets/MainBG2.svg"
import MainBG3 from "../assets/MainBG3.png"
import HackathonImg1 from "../assets/HackathonImg1.png"
import HackathonImg2 from "../assets/HackathonImg2.png"
import IncompleteTeamCard from '../Component/IncompleteTeamCard'
import RequestUser from '../Component/RequestUser'
import FooterSection from '../Component/FooterSection'
const BuildersPage = () => {
    const IncompleteTeam=[
        {
            img:HackathonImg1,
            title:"5G Enabled Smart Structure Innovation Challange",
            teamName:"Team_Swastik",
            user:[
                {
                    img:user1,
                    name:"Shreya",
                },
                {
                    img:user2,
                    name:"Anirudh",
                },
                {
                    img:user3,
                    name:"Shreya",
                },
                {
                    img:user4,
                    name:"Govind",
                },
            ],
            memberRequired:[
                {
                    position:"Designer",
                },
                {
                    position:"Backend Developer",
                },

            ],
        },
        {
            img:HackathonImg2,
            title:"Next Alpha Quant Challange - May",
            teamName:"Team_Warriors",
            user:[
                {
                    img:user1,
                    name:"Shreya",
                },
                {
                    img:user2,
                    name:"Anirudh",
                },
                {
                    img:user3,
                    name:"Shreya",
                },
                {
                    img:user4,
                    name:"Govind",
                },
            ],
            memberRequired:[
                {
                    position:"Designer",
                },
                {
                    position:"Backend Developer",
                },

            ],
        },
        {
            img:HackathonImg1,
            title:"5G Enabled Smart Structure Innovation Challange",
            teamName:"Team_Swastik",
            user:[
                {
                    img:user1,
                    name:"Shreya",
                },
                {
                    img:user2,
                    name:"Anirudh",
                },
                {
                    img:user3,
                    name:"Shreya",
                },
                {
                    img:user4,
                    name:"Govind",
                },
            ],
            memberRequired:[
                {
                    position:"Designer",
                },
                {
                    position:"Backend Developer",
                },

            ],
        },
        {
            img:HackathonImg2,
            title:"Next Alpha Quant Challange - May",
            teamName:"Team_Warriors",
            user:[
                {
                    img:user1,
                    name:"Shreya",
                },
                {
                    img:user2,
                    name:"Anirudh",
                },
                {
                    img:user3,
                    name:"Shreya",
                },
                {
                    img:user4,
                    name:"Govind",
                },
            ],
            memberRequired:[
                {
                    position:"Designer",
                },
                {
                    position:"Backend Developer",
                },

            ],
        },
        {
            img:HackathonImg1,
            title:"5G Enabled Smart Structure Innovation Challange",
            teamName:"Team_Swastik",
            user:[
                {
                    img:user1,
                    name:"Shreya",
                },
                {
                    img:user2,
                    name:"Anirudh",
                },
                {
                    img:user3,
                    name:"Shreya",
                },
                {
                    img:user5,
                    name:"Govind",
                },
            ],
            memberRequired:[
                {
                    position:"Designer",
                },
                {
                    position:"Backend Developer",
                },

            ],
        },
        {
            img:HackathonImg2,
            title:"Next Alpha Quant Challange - May",
            teamName:"Team_Warriors",
            user:[
                {
                    img:user1,
                    name:"Shreya",
                },
                {
                    img:user2,
                    name:"Anirudh",
                },
                {
                    img:user3,
                    name:"Shreya",
                },
                {
                    img:user4,
                    name:"Govind",
                },
            ],
            memberRequired:[
                {
                    position:"Designer",
                },
                {
                    position:"Backend Developer",
                },

            ],
        },

    ]
    const RequestTeam=[
        {
            img:user1,
            name:"Rishi Keshari",
        },
        {
            img:user3,
            name:"Govind Varshney",
        },
        {
            img:user4,
            name:"Utkarsh Kumar",
        },
        {
            img:user2,
            name:"Deepa Maurya",
        },
        {
            img:user5,
            name:"Ayush Thakur",
        },
    ]
  return (
    <div className=' bg-cover bg-no-repeat' style={{ backgroundImage: `url(${MainBG3})`}}>
      <img className='object-fill w-full'  src={BuilderImg2}></img>
      <div className='m-10 mb-[12rem]'>
        <p className='text-[3.5rem] font-medium text-customBrightBlue ml-[5rem] mt-[7rem] mb-10'>Participants</p>
        <div className='flex justify-center items-center gap-10'>
                {/* IMCOMPLETE TEAM */}
        <div  className=' bg-white flex flex-col justify-center gap-5 border-[3px] border-customGrayText rounded-3xl p-5 pr-[3rem]'>
            <p className='text-[2rem] font-medium'>Incomplete Teams</p>
            <div className='flex-1 border-[2px] border-customGray'></div>
            <div className='flex flex-col overflow-y-scroll max-h-[500px] gap-10'>
                {/* component banaao */}
                {
                    IncompleteTeam.map((data,index)=>(
                        <IncompleteTeamCard key={index} data={data}/>
                    ))
                }
                
            </div>
        </div>
                    {/* REQUEST */}
        <div  className=' bg-white flex flex-col justify-center gap-5 border-[3px] max-w-[390px] border-customGrayText rounded-3xl p-5 pr-[2rem]'>
            <p className='text-[2rem] font-medium'>Requests</p>
            <div className='flex-1 border-[2px] border-customGray'></div>
            <div className='flex flex-col overflow-y-scroll max-h-[500px] gap-10'>
                {
                    RequestTeam.map((data,index)=>(
                        <RequestUser data={data}  />
                    ))
                }
            </div>
        </div>
        </div>
      </div>
      <div>
        <FooterSection/>
        </div>
    </div>
  )
}

export default BuildersPage
