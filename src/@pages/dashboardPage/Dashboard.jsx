import React from 'react'
import { Link,useLocation,matchRoutes,Outlet } from 'react-router-dom'
import { routesConfig } from '../routes/Routes';
function ActiveLink({to,activeClassName,inactiveClass,className,...rest}){
    // const location = useLocation()
    // const isActive = location.pathname == to
    // const allClassName =  className + (isActive?`${activeClassName}`:`${inactiveClass}`)
        const location = useLocation();
        
        let isActive = location.pathname == to
        let allClassName = className+ (isActive? ` ${activeClassName} `: ` ${inactiveClass} `)
      
   return <Link className={allClassName} to={to}  {...rest}/>
}

const dashboard = () => {
  return (
      <>
            <div className='p-7 flex items-end'>
        <h4 className='text-5xl font-bold mr-16' >Dashboard</h4>
        <nav className=''>
            <ActiveLink 
             className="p-2"
             activeClassName = "bg-gray-600 text-gray-900"
             inactiveClass = "text-gray-700"
             to="/dashboard/overview">OverView</ActiveLink>

            <ActiveLink
             to="/dashboard/newuser"
             className='p-2'
            activeClassName="bg-gray-600 text-gray-900"
            inactiveClass="text-gray-700"
            >New User</ActiveLink>

            <ActiveLink
              activeClassName="bg-gray-600 text-gray-900"
              inactiveClass="text-gray-700"
             to="/dashboard/sales" className='p-2'>Sales</ActiveLink>
        </nav>
       
    </div>
        <div className='m-5'>

            <Outlet/>
        </div>
      </>
  )
}

export default dashboard
