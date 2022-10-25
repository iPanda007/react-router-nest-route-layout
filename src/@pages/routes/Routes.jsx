import React from 'react'
import {Routes,Route,} from 'react-router-dom'
import View from '../View'

const AdminRoutes = () => {
  return (
    <>
    <View/>
      <Routes>
            <Route path="/" />
            <Route path="team"/>
            <Route path="project"/>
            <Route path="calender"/>
        </Routes>   
    </>
  )
}

export default AdminRoutes
