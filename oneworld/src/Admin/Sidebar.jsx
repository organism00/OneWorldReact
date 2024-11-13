import React, { useState } from 'react';
import { FaTachometerAlt, FaExchangeAlt, FaPlus, FaMoneyBillWave, FaChartLine, FaCog, FaQuestionCircle, FaSignOutAlt, FaSun, FaMoon } from 'react-icons/fa';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import '../Styles/customScrollbar.css';
import logo from '../Asset/images/logo.png'

const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNewDropdownOpen, setNewDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleNewDropdown = () => setNewDropdownOpen(!isNewDropdownOpen);

  return (
    <div className="flex h-screen bg-gray-100 md:grid md:grid-cols-[16rem_1fr]">
      <aside className="customScrollbar w-60 bg-red-500 text-white flex flex-col fixed h-screen overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3 p-4 border-b border-gray-700">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full bg-white p-1" />
          <span className="text-lg font-semibold">One World</span>
        </div>

        {/* Navigation */}
        <nav className="flex-grow p-4">
          <ul className="space-y-2">
            {/* Dashboard */}
            <li className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <FaTachometerAlt className="mr-3" />
              <span>Dashboard</span>
            </li>

            {/* Products with Sub-menu */}
            <li>
              <div
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={toggleDropdown}
              >
                <div className="flex items-center">
                  <FaExchangeAlt className="mr-3" />
                  <span>Products</span>
                </div>
                {isDropdownOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
              </div>
              {isDropdownOpen && (
                <ul className="pl-10 mt-2 space-y-1">
                  <li className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <a href="landingPage.html">Add Products</a>
                  </li>
                  <li className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <a href="test.html">View Products</a>
                  </li>
                </ul>
              )}
            </li>

            {/* New with Sub-menu */}
            <li>
              <div
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={toggleNewDropdown}
              >
                <div className="flex items-center">
                  <FaPlus className="mr-3" />
                  <span>New</span>
                </div>
                {isNewDropdownOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
              </div>
              {isNewDropdownOpen && (
                <ul className="pl-10 mt-2 space-y-1">
                  <li className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <a href="landingPage.html">Add Product</a>
                  </li>
                  <li className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <a href="test.html">View Products</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Budget */}
            <li className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <FaMoneyBillWave className="mr-3" />
              <span>Budget</span>
            </li>

            {/* Analytics */}
            <li className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <FaChartLine className="mr-3" />
              <span>Analytics</span>
            </li>

            {/* Settings */}
            <li className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <FaCog className="mr-3" />
              <span>Settings</span>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <ul className="space-y-2">
            <li className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <FaQuestionCircle className="mr-3" />
              <span>Help</span>
            </li>
            <li className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <FaSignOutAlt className="mr-3" />
              <span>Logout</span>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between mt-4 p-2 bg-gray-700 rounded-full cursor-pointer">
            <FaSun className="text-yellow-300" />
            <FaMoon className="text-gray-300" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
