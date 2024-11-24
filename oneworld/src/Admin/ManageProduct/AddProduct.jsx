import React from 'react';
import Sidebar from '../Sidebar';

function AddProduct() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='p-6 space-y-4 w-[100%] lg:px-20 '>
        <h1 className='text-xl font-medium'>Add new product</h1>
        <form action="submit" className='flex flex-col gap-4'>
          <select name="category" id="category" className='border p-2 rounded-md outline-primary'>
            <option value="Select Category" disabled selected>Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
            <option value="Toys">Toys</option>
            <option value="Groceries">Groceries</option>
            <option value="Beauty">Beauty</option>
            <option value="Books">Books</option>
            <option value="Sports">Sports</option>
            <option value="Home">Home</option>
            <option value="Health">Health</option>
            <option value="Jewelry">Jewelry</option>
            <option value="Shoes">Shoes</option>
            <option value="Bags">Bags</option>
          </select>

          <input type="text" placeholder='Product Brand' className='border p-2 rounded-md outline-primary' />
          <input type="text" placeholder='Product Name' className='border p-2 rounded-md outline-primary' />
          <input type="text" placeholder='Product Description' className='border p-2 rounded-md outline-primary' />
          <input type="text" placeholder='Product Price' className='border p-2 rounded-md outline-primary' />
          <input type="number" placeholder='Product Quantity' className='border p-2 rounded-md outline-primary' />

          <input type="file" accept="image/*" multiple title="Image" className='flex flex-col border p-2 rounded-md outline-primary' />

          <button type="submit" className='bg-primary hover:bg-hover text-white font-bold py-2 px-4 rounded transition-all duration-700 ease-in-out'>
              Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct