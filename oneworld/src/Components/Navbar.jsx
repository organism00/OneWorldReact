import React, { useState } from 'react';
import {Link} from 'react-router-dom';

// Icons
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";




function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className="text-black container items-center font-pop z-50 flex justify-center w-[100%] lg:my-4 fixed ">
        <div className="flex items-center bg-secondary justify-between mx-auto container  py-4 px-4 max-w-[1087px] shadow-xl lg:rounded-lg">
          <div className="">
            <h1 className="font-poppins font-semibold text-2xl">oneWorld</h1>
          </div>
          <div className="space-x-5 items-center hidden lg:flex">
            <Link to="">Pages</Link>
            <Link to="">About </Link>
            {/* <a href="">Home</a> */}
            <Link to="../signup.html">Sign Up</Link>
            <Link to="#">Sign In</Link>
            <Link to="">Contact Us</Link>
          </div>
          <div className="flex text-black space-x-4 items-center opacity-50 ">
            <IoSearch className='text-xl'/>
            <FaRegHeart className='text-xl'/>
            <MdOutlineShoppingCart className='text-xl'/>
            <FaRegUser className='text-xl'/>
          </div>
          <TiThMenu className='text-2xl lg:hidden ' onClick={() => setIsOpen(!isOpen)}/>
        </div>
      </nav>

      {isOpen && (
        <div className="space-x-5 items-center z-50 fixed shadow-lg top-16 bg-[white] w-full  px-20 py-10 flex justify-center">
          <div className='flex flex-col gap-6 w-[100%]'>
            <Link className='border-b ' to="">Pages</Link>
            <Link className='border-b ' to="">About </Link>
            <Link className='border-b ' to="../signup.html">Sign Up</Link>
            <Link className='border-b ' to="#">Sign In</Link>
            <Link className='border-b ' to="">Contact Us</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar