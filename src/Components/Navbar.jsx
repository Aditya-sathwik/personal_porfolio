import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa" ;

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed px-2 bg-black'>
        <div>
   <h1 className=' text-5xl ml-2 font-bold'>ADITYA <span className='text-yellow-400'>SATHWIK</span></h1>
   </div>
   
   <ul className="flex px-3" >
    <li className='px-5 cursor-pointer text-gray-500 '><a>Home</a></li>
    <li className='px-5 cursor-pointer text-gray-500 '><a>About</a></li>
    <li className='px-5 cursor-pointer text-gray-500 '><a>Skills</a></li>
    <li className='px-5 cursor-pointer text-gray-500 '><a>Experience</a></li>
    <li className='px-5 cursor-pointer text-gray-500 '><a>Projects</a></li>
    <li className='px-5 cursor-pointer text-gray-500 '><a>Connect with me</a></li>
   </ul>

    </div>
   
  )
}

export default Navbar