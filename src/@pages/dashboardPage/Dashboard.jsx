import React from 'react'
import { Link,useLocation } from 'react-router-dom'

function ActiveLink(props){
   return
}

const dashboard = () => {
  return (
    <div className='p-7 flex items-end'>
        <h4 className='text-5xl font-bold mr-16' >Dashboard</h4>
        <nav className=''>
            <Link  className='p-2'>OverView</Link>
            <Link  className='p-2'>New User</Link>
            <Link  className='p-2'>Sales</Link>
        </nav>
    </div>
  )
}

export default dashboard
