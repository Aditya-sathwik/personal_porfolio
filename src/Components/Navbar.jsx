import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa" ;

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed px-2 bg-black'>
        <div>
   <h1 className=' text-5xl ml-2 font-bold'>ADITYA <span className='text-yellow-400'>SATHWIK</span></h1>
   </div>
   <ul>
    <li className="list">
        <a href="#">
            <span className="icon"></span>
            <span className="text">Home</span>
        </a>
    </li>
    <li className="list">
        <a href="#">
            <span className="icon"></span>
            <span className="text">Home</span>
        </a>
    </li>
    <li className="list">
        <a href="#">
            <span className="icon"></span>
            <span className="text">Home</span>
        </a>
    </li>
    <li className="list">
        <a href="#">
            <span className="icon"></span>
            <span className="text">Home</span>
        </a>
    </li>
    <li className="list">
        <a href="#">
            <span className="icon"></span>
            <span className="text">Home</span>
        </a>
    </li>
    <li className="list">
        <a href="#">
            <span className="icon"></span>
            <span className="text">Home</span>
        </a>
    </li>
   </ul>
   
  
  

    </div>
   
  )
}

export default Navbar