import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import LandingPage from './Pages/LandingPage';
import SortedProductDisplay from './Products/SortedProductDisplay';

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/products" element={<SortedProductDisplay/>} />
        </Routes>
      </Router>

    </div>
  )
}

export default App