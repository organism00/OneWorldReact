import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../fontawesome/css/all.css';
// import '../output.css';

// Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
// import { FaRegStar } from "react-icons/fa6";

// Images
import bag1 from '../Asset/images/bag-removebg-preview.png';
import bag3 from '../Asset/images/bag 3.png';
import brown from '../Asset/images/brown bag.png';
import black from '../Asset/images/black backpack.png';

import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const selectedProducts = [
  {
    "id": 1,
    "img": brown,
    "name": "Brown Travel Bag",
    "price": "₦100",
  },
  {
    "id": 2,
    "img": bag1,
    "name": "Yellow Backpack",
    "price": "₦200",
  },
  {
    "id": 3,
    "img": black,
    "name": "Black Backpack",
    "price": "₦300",
  }
]

const ProductDetails = () => {
  const [mainImageSrc, setMainImageSrc] = useState(bag1);
  const images = [bag1, bag3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showImage = (src) => {
    setMainImageSrc(src);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setMainImageSrc(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    setMainImageSrc(images[prevIndex]);
  };

  return (
    <div className="bg-gray-50 font-sans">
      <Navbar/>
      
      <div className="py-24">
        <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
          <div className="flex flex-col gap-6 items-center justify-center lg:h-[555px] w-[100%] lg:w-[500px] relative">
            <div className="h-[250px] w-[250px] rounded-[50%] bg-yellow-300 absolute top-10 lg:top-16 left-5 lg:left-10 z-0 "></div>
            <img src={mainImageSrc} alt="" className="h-[300px] z-10 " />
            <div className='flex items-center justify-center gap-4'>
              <div className="flex items-center justify-center h-10 w-10 bg-white text-red-500 shadow-lg rounded-[50%] cursor-pointer" onClick={prevImage}>
                <FaArrowLeft className="text-xl" />
              </div>
              <img src={bag1} alt="" className="w-[100px] h-auto cursor-pointer" onClick={() => showImage(bag1)} />
              <img src={bag3} alt="" className="w-[100px] h-auto cursor-pointer" onClick={() => showImage(bag3)} />
              <div className="flex items-center justify-center h-10 w-10 bg-white text-red-500 shadow-lg rounded-full cursor-pointer" onClick={nextImage}>
                <FaArrowRight className="text-xl" />
              </div>
            </div>
          </div>

          <div className="lg:h-[555px] lg:w-[580px]  p-6">
            <h2 className="text-red-600 font-semibold">Fashion Handbags</h2>
            <h1 className="text-4xl font-bold mt-2">Solid <Link to="#" className="font-normal">Basic Backpack</Link></h1>
            <div className="flex items-center text-red-500 mt-4">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaRegStarHalfStroke/>
              <i className="fas fa-star-half-alt"></i>
              <p className="text-gray-600 font-semibold ml-2">(45 Reviews)</p>
            </div>
            <p className="text-2xl font-bold mt-3">$120 <Link to="#" className="ml-2 text-black text-xl font-semibold">Free shipping worldwide</Link></p>
            <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-full">
              <i className="fa-solid fa-cart-shopping"></i> Add To Cart
            </button>
            <div className="mt-6">
              <p className="text-gray-600">Product Code: SKU 12345678</p>
              <p className="mt-2 text-gray-600">
                Introducing our latest trendy solid basic backpack, made with high-quality materials. Perfect for everyday use, it features a spacious main compartment and multiple pockets for easy organization.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-around mt-12">
          <div className="w-28 h-16 bg-white rounded-full shadow-md text-center p-3">
            <i className="fas fa-lock text-4xl text-red-600"></i>
          </div>
          <p className="mt-16 text-gray-600 absolute left-36">Secure Payment</p>
          <div className="w-28 h-16 bg-white rounded-full shadow-md text-center p-3">
            <i className="fas fa-truck text-4xl text-red-600"></i>
          </div>
          <p className="mt-16 text-gray-600 absolute left-[580px]">Free Delivery</p>
          <div className="w-28 h-16 bg-white rounded-full shadow-md text-center p-3">
            <i className="fas fa-undo text-4xl text-red-600"></i>
          </div>
          <p className="mt-16 text-gray-600 absolute left-[1005px]">Easy Returns</p>
        </div> */}

        {/* selected products */}
        <div className="flex flex-col items-center my-8">
          <h2 className="text-xl font-bold text-center mt-16">Selected products for You</h2>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {selectedProducts.map((product) => (
              <div key={product.id} className="rounded-xl shadow-md text-center">
                <div className='h-[250px] w-[250px] flex items-center justify-center bg-white '>
                  <img src={product.img} alt="img" className='w-[80%] h-[80%] object-cover' />
                </div>
                <div className='h-[50px] border-t flex items-center justify-center bg-white'>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
};

export default ProductDetails;