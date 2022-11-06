import React from 'react'
import {Routes,Route,useRoutes} from 'react-router-dom'
import { NewUser, Overview, Sales } from '../../@nestPage'
import { Dashboard } from '../dashboardPage'
import View from '../View'

const AdminRoutes = () => {
  return  useRoutes([
      {path:"dashboard",
      element:<Dashboard/>,
      children:[
        {path:"overview",element:<Overview/>},
        {path:"newuser",element:<NewUser/>},
        {path:"sales",element:<Sales/>}
      ]
      },
      {path:"/team",},
      {path:"/projects"},
      {path:"/calender"}
    ])


}

export default AdminRoutes
