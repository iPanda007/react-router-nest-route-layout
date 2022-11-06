import React from 'react'
import { Link,useLocation } from 'react-router-dom';


function NavLink({to, className,inactiveClassName,activeClassName,...rest}){
       let location = useLocation();
       console.log({location})
       let isActive = location.pathname  === to;
       let allClassName = className + (isActive?`${activeClassName}`:`${inactiveClassName}`)
       return <Link className={allClassName} to={to} {...rest} />
}

const Navbar = () => {
  return (
    <nav className='p-5 border-b'>

        <NavLink
        to="/dashboard"
        activeClassName="text-red-400  border-b-2 border-indigo-600"
        inactiveClassName='hover:border-b-gray-600 hover:border-b-2'
        className=' pb-5 p-2 mr-1 '>
               Dashboard    
        </NavLink>
        <NavLink 
         to="/team"
        activeClassName="text-red-400 border-b-2 border-indigo-600"
        inactiveClassName="hover:border-b-2 hover:border-b-gray-600"
        className='pb-5 p-2 mr-1 '>
               Team
        </NavLink>
       <NavLink 
        to='/project'
       activeClassName="text-red-400 border-b-2 border-indigo-600"
       inactiveClassName="hover:border-b-2 hover:border-b-gray-600"
        className='pb-5 p-2 mr-1 '>
               Projects    
        </NavLink>
        <NavLink 
         to="/calender"
        activeClassName="text-red-400 border-b-2 border-indigo-600"
        inactiveClassName="hover:border-b-2 hover:border-b-gray-600"
        className='pb-5 p-2 mr-1 '>
               Calender 
        </NavLink>
    </nav>
  )
}

export default Navbar
