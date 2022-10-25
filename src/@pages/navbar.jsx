import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='p-5'>
        <Link className='border-b-2 p-2 mr-1 border-indigo-600 hover:border-b-gray-600'>
               Dashboard    
        </Link>
        <Link className='p-2 mr-1 hover:border-b-2 hover:border-b-gray-600'>
               Team
        </Link>
        <Link className='p-2 mr-1 hover:border-b-2 hover:border-b-gray-600'>
               Projects    
        </Link>
        <Link className='p-2 mr-1 hover:border-b-2 hover:border-b-gray-600'>
               Calender 
        </Link>
    </nav>
  )
}

export default Navbar
