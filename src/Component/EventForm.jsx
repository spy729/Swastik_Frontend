import React, { useState } from 'react';
import MainBG2 from "../assets/MainBG2.svg"
import MainBG3 from "../assets/MainBG3.png"
import toast from 'react-hot-toast';
import { ImCross } from "react-icons/im";
import { NavLink,Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FooterSection from './FooterSection';

const EventForm = () => {
    const Navigate=useNavigate()
    const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    contact: '',
    organiser: '',
    location: '',
    mode: 'offline',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    const url = "https://project-hwd-js-ts.onrender.com"

    try {
      // Create hackathon event
      const createResponse = await fetch(`https://project-hwd-js-ts.onrender.com/hackathon/create_hackathon`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!createResponse.ok) {
        // const createErrorText = await createResponse.text();
        console.error('Error creating event:');
        toast.error('Failed to create event.');
        return;
      }

      const createData = await createResponse.json();
      console.log('Create success:', createData);
      toast.success('Event created successfully!');

      // Extract event ID from the create response
      const eventId = createData.newHackathon._id;
      console.log("eventId",eventId)
      console.log('Update request payload:', JSON.stringify(formData));


      // Update hackathon event with the obtained event ID
      const updateResponse = await fetch(`$https://project-hwd-js-ts.onrender.com/hackathon/update_hackathon/${eventId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({formData}),
      });
    console.log("updateResponse",updateResponse)
      if (!updateResponse.ok) {
        // const updateErrorText = await updateResponse.text();
        // console.error('Error updating event:', updateErrorText);
        toast.error('Failed to update event.');
        return;
      }

      const updateData = await updateResponse.json();
      console.log('Update success:', updateData);
      toast.success('Event updated successfully!');
      
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
    
    // Navigate("/hackathon")
  };
  const openInNewTab = (url) => {
    const newWindow = window.open("https://hive-hwd.onrender.com", '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    // className='bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${MainBG2})`}}
    <div className='flex flex-col shadow-3xl  max-w-[100vw] bg-cover  ' style={{ backgroundImage: `url(${MainBG3})`}}>
        
      <form className=" relative w-[550px] border-2 border-b-8 mx-auto p-5 mt-10 bg-white shadow-md rounded-lg">
      <NavLink to="/hackathon"><ImCross  className="absolute right-3 top-3"/></NavLink> 
        <h2 className="text-[3rem] font-bold mb-6 text-customBrightBlue">Create Hackathon</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full h-[7rem] px-3 py-2 border rounded-md"
            required
          />
        </div>
<div className='flex justify-between items-center'>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className=" w-[15rem] px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-[15rem] px-3 py-2 border rounded-md"
            required
          />
        </div>
</div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="organiser">Organiser Name</label>
          <input
            type="text"
            id="organiser"
            name="organiser"
            value={formData.organiser}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="mode">Mode</label>
          <select
            id="mode"
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="offline">Offline</option>
            <option value="online">Online</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button onClick={() => openInNewTab('https://www.example.com')} className="w-full bg-customBrightBlue  text-white py-2 px-4 mb-5 mt-5 rounded-md hover:bg-customBrightBlueDark"> 
         Submit
          </button>
          {/* <a href="https://hive-hwd.onrender.com" target="_blank"  rel="noopener noreferrer" ><button onClick={handleSubmit}>Submit</button> </a> */}
      </form>
      <div >
        <FooterSection/>
      </div>
    </div>
  )
}

export default EventForm;
