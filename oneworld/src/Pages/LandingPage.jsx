import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Slider from "react-slick";
import { allProducts, allCat } from '../Products/ProductDummyData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
import img1 from '../Asset/ProductImages/tv.png';
import img2 from '../Asset/ProductImages/laptop.png';
import img3 from '../Asset/ProductImages/freezer.png';
import cat7 from '../Asset/ProductImages/RIPI8797.PNG';

function LandingPage() {
  const navigate = useNavigate();
  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    TransitionEvent: "ease-in-out",
  };

  return (
    <div>
      <Navbar/>
      <div className="bg-primary h-[110vh] w-[100%] flex items-center justify-center ">
        <div className="flex flex-col gap-10 lg:flex-row justify-center items-center max-w-[1087px] ">
          <div className="flex flex-col space-y-6 px-4">
            <p className="text-white">Lorem ipsum dolor sit amet.</p>
            <h1 className="text-black text-3xl lg:text-5xl font-semibold">oneWorld Wireless HeadPhone</h1>
            <button className="bg-white shadow-lg flex justify-center gap-4 w-[150px] py-2 rounded-sm hover:scale-105 transition-all duration-700 ease-in-out"><box-icon name='cart-alt' className="items-center justify-center"></box-icon> Shop now</button>
          </div>
          {/* Slideshow Container */}
          <div className="w-screen px-4 h-[300px] lg:w-[500px] lg:h-[400px] "> 
            <Slider {...sliderSettings}>
              <div className='w-[100%] h-[100%] '>
                <img src={img1} alt="hospital1" className="w-[100%] object-cover " />
              </div>
              <div className='w-[100%] h-[100%] '>
                <img src={img2} alt="hospital3" className="w-[100%] object-cover " />
              </div>
              <div className='w-[100%] h-[100%] '>
                <img src={img3} alt="hospital3" className="w-[100%] object-cover " />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="bg-white pt-2 ">
        <div className=" flex flex-col my-10 space-y-3 px-20 mx-auto container max-w-[1200px]:">
            <p className="text-2xl font-semibold opacity-85">Browse by Categories</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-4 px-5 rounded-sm b">
          {allCat.map((item) => (
            <div key={item.id} className="overflow-hidden cursor-pointer flex flex-col items-center justify-center  border w-[100%] md:w-36 rounded-lg shadow-xl lg:hover:scale-110 transition-all duration-500 ease-in-out" onClick={() => navigate(`/products?category=${item.title}`)}>
              <div className="h-auto lg:h-28 w-[100%] flex items-center justify-center overflow-hidden">
                <img src={item.img} alt="img" className="w-[70%] object-cover "/>
              </div>
              <div className="w-[100%] h-10 flex items-center justify-center">
                <p className='font-medium'>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured product */}
      <div className="bg-white pt-20 flex justify-center">
        <div className="bg-gray-200  justify-center items-center  container max-w-[1087px] flex">
          <div className="mx-auto container py-10 px-10 md:px-20 flex flex-col lg:flex-row gap-12 lg:items-center">
            <div className="flex flex-col space-y-10 w-full lg:w-1/2">
              <h1 className="text-black text-3xl lg:text-4xl font-400">Enhance Your Music Exeperiance</h1>
              <div className="flex gap-2">
                <div className="flex flex-col items-center rounded-full bg-white w-[50px] h-[50px] text-center justify-center">
                  <p className="font-semibold text-sm">15</p>
                  <p className="text-sm opacity-70">mms</p>
                </div>
                <div className="flex flex-col items-center rounded-full bg-white w-[50px] h-[50px] text-center justify-center">
                  <p className="font-semibold text-sm">10</p>
                  <p className="text-sm opacity-70">mms</p>
                </div>
                <div className="flex flex-col items-center rounded-full bg-white w-[50px] h-[50px] text-center justify-center">
                  <p className="font-semibold text-sm">56</p>
                  <p className="text-sm opacity-70">mms</p>
                </div>
                <div className="flex flex-col items-center rounded-full bg-white w-[50px] h-[50px] text-center justify-center">
                  <p className="font-semibold text-sm">64</p>
                  <p className="text-sm opacity-70">mms</p>
                </div>
              </div>
              <button className="bg-blue-500 text-white w-[150px] py-2 rounded-sm lg:hover:scale-105 transition-all duration-700 ease-in-out">check it out</button>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={cat7} alt="img" className="object-cover w-full lg:hover:scale-110 transition-all duration-500 ease-in-out"/>
            </div>
          </div>
        </div>
      </div>
      
      {/* All products */}
      <div className='flex justify-center'>
        <div className="flex flex-col mx-5 md:mx-10 lg:mx-auto lg:max-w-[1087px] py-10 bg-white">
          <p className="text-2xl font-semibold my-5 opacity-85">All Categories</p>
          <div className="flex flex-col justify-center flex-wrap gap-10 sm:flex-row">
            {allProducts.map((item) => (
              <div key={item.id} className=" w-[100%] lg:w-60 overflow-hidden rounded-md shadow-md border cursor-pointer lg:hover:scale-105 transition-all duration-500 ease-in-out flex flex-col items-center">
                <div className="h-44 w-[100%] flex items-center justify-center overflow-hidden">
                  <img src={item.img} alt="" className="w-[45%] py-6 object-cover rounded-t-2xl"/>
                </div>
                <div className="pl-4 w-[100%] h-14 flex flex-col justify-center">
                  <p className='font-medium opacity-70 text-primary'>{item.title}</p>
                  <p className="opacity-70">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage