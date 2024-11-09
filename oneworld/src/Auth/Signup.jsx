import React from "react";
import { Link } from "react-router-dom";
// import "../output.css"; 
// import "../fontawesome/css/all.css";

// Icons
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";


const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-yellow-50">
      <div className="w-[950px] h-[500px] bg-white rounded-3xl flex shadow-lg">
        <div className="w-[40%] bg-red-500 p-11 flex flex-col rounded-tl-3xl rounded-bl-3xl">
          <h1 className="text-xl font-bold text-black pt-[30px]">
            Welcome to ONE WORLD
          </h1>
          <p className="text-black text-sm">
            For an epic time, jump into Arena World!!
          </p>
          <div className="mt-[45px]">
            <img src="../audience.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
      <div>
        <img
          src="../IMG-20241029-WA0009.jpg"
          alt=""
          className="h-14 absolute left-[570px] top-[62px]"
        />
        <i className="fa-solid fa-magnifying-glass text-[10px] absolute left-[870px] top-[86px]" />
        <a
          href="../landingPage.html"
          className="absolute left-[885px] top-[80px] text-sm"
        >
          Search
        </a>
        <i className="fa-regular fa-user absolute left-[940px] top-[85px] text-[11px]" />
        <p className="absolute left-[955px] top-[80px] text-sm">Sign in</p>
        <p className="absolute left-[1010px] top-[80px] text-sm">En</p>
        <i className="fa-solid fa-caret-down absolute left-[1027px] top-[84px] text-[14px]" />
      </div>
      <div className="h-[370px] w-[520px] bg-white absolute left-[550px] top-[150px] flex flex-col justify-center p-24">
        <h2 className="text-2xl font-semibold text-black relative top-[-40px]">
          Sign Up
        </h2>
        <form className="space-y-2">
          <input
            type="email"
            placeholder="Email or Phone"
            className="w-full bg-gray-200 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gray-500 relative top-[-20px]"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-gray-200 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gray-500 relative top-[-20px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-200 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gray-500 relative top-[-20px]"
          />
          <button className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-black relative top-[-20px]">
            Let's Get Started!
          </button>
          <p className="text-gray-400 relative top-[-10px] text-sm">
            _____________________ feeling lazy? _____________________
          </p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center justify-center gap-4 w-[160px] py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800">
              <FaFacebookF/>
              Facebook
            </button>
            <button className="flex items-center justify-center gap-4 w-[160px] py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500">
              <IoLogoGoogle/>
              Google
            </button>
          </div>
          <i className="fa-brands fa-google absolute left-[275px] top-[280px] text-white text-sm" />
          <p className="text-sm text-center relative top-[25px]">
            Already a member?{" "}
            <Link to="#" className="text-yellow-500 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;