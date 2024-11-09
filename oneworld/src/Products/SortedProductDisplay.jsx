import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import QueryString from 'query-string';
import { useNavigate } from 'react-router-dom';

import { allProducts } from './ProductDummyData';

function SortedProductDisplay() {
  const navigate = useNavigate();
  const queryString = QueryString.parse(window.location.search);
  const {category} = queryString;
  const sortedCategory = allProducts.filter((product) => product.category === category);

  return (
    <div>
      <Navbar />

      <div className='flex justify-center'>
        <div className="bg-white w-[100%] mx-5 md:mx-10 lg:mx-auto lg:max-w-[1087px] pt-16 py-10 flex flex-col justify-center items-center ">
          <div className=" flex flex-col lg:flex-row lg:items-center justify-between my-10 space-y-3 mx-auto container max-w-[1087px] ">
            <p className="lg:text-xl font-semibold opacity-85">All {category} product <span className="text-sm text-gray-500">{`(${sortedCategory.length} product${sortedCategory.length === 1 ? '' : 's'} found)`}</span></p>
            <div className="flex gap-2">
              <p className="text-xl font-semibold opacity-85">Sort by</p>
              <select name="product-sort" id="product-sort" className="border border-gray-500 px-2 rounded">
                <option value="Popularity">Newest Arivals</option>
                <option value="Popularity">Popularity</option>
                <option value="Popularity">Price: Low to High</option>
                <option value="Popularity">Price: High to Low</option>
              </select>
            </div>
          </div>

          {sortedCategory.length > 0 ? (
            <div className="flex flex-col justify-center flex-wrap gap-10 sm:flex-row ">
              {sortedCategory.map((product) => (
                <div key={product.id} className="cursor-pointer w-[100%] lg:w-60 overflow-hidden rounded-md shadow-md border lg:hover:scale-105 transition-all duration-500 ease-in-out flex flex-col items-center" onClick={() => navigate(`/productdetails/?product-id=${product.id}`)}>
                  <div className="h-60 lg:h-44 w-[100%] flex items-center justify-center overflow-hidden">
                    <img src={product.img} alt="" className="w-[45%] py-6 object-cover rounded-md"/>
                  </div>
                  <div className="pl-4 w-[100%] h-16 flex flex-col justify-center">
                    <p className='text-[#f2592b] font-medium opacity-70'>{product.title}</p>
                    <p className="opacity-70">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ):(
            <div className='italic text-2xl text-[red]'>Sorry, No products found...</div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SortedProductDisplay