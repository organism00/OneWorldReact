import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import LandingPage from './Pages/LandingPage';
import SortedProductDisplay from './Products/SortedProductDisplay';
import ProductDetails from './Products/ProductDetails';
import Signup from './Auth/Signup';

// Orders
import OrderStatus from './Orders/OrderStatus';

// Admin
import Dashboard from './Admin/Dashboard';

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/products" element={<SortedProductDisplay/>} />
          <Route path="/productdetails" element={<ProductDetails/>} />
          <Route path="/signup" element={<Signup/>} />

          {/* Orders */}
          <Route path="/orderstatus" element={<OrderStatus/>} />

          {/* Admin */}
          <Route path="/admin/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>

    </div>
  )
}

export default App