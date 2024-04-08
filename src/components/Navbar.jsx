import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = ({ setSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className='flex flex-row justify-between space-x-60 '>
        <img src = {logo} className = 'w-20'/>
        <div>
        <input type = 'text' placeholder = 'Search by name' className = 'border-2 border-orange-500 rounded-md p-2 rounded-full h-12 mt-4 m-2'  value={searchQuery} onChange={handleSearchChange}/>
        </div>
    </div>
  )
}

export default Navbar;