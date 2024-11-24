import React from 'react';
import Sidebar from '../Sidebar';

function ViewProducts() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div>
        <select name="category" id="category" className='border p-2 rounded-md outline-primary'>
            <option value="Select Category" disabled selected>Select Product Category</option>
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
      </div>
    </div>
  )
}

export default ViewProducts