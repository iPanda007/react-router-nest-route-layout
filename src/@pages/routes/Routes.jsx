import React from 'react'
import {Routes,Route,} from 'react-router-dom'
import { NewUser, Overview, Sales } from '../../@nestPage'
import { Dashboard } from '../dashboardPage'
import View from '../View'

const AdminRoutes = () => {
  return (
    <>
    <View/>
      <Routes>
            <Route path="/" element={<Dashboard/>}>
                  <Route path='/' element={<Overview/>}></Route>
                  <Route path='/newuser' element={<NewUser/>}></Route>
                  <Route path='/sales' element={<Sales/>}></Route>
            </Route>
            <Route path="team"/>
            <Route path="project"/>
            <Route path="calender"/>
        </Routes>   
    </>
  )
}

export default AdminRoutes
