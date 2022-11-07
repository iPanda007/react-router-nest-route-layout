import React from 'react'
import {Routes,Route,useRoutes,Navigate} from 'react-router-dom'
import { NewUser, Overview, Sales } from '../../@nestPage'
import { Dashboard } from '../dashboardPage'

 export const routesConfig =   [
      { path: '', element: <Navigate to="/dashboard" /> },
      {path:"dashboard",
      element:<Dashboard/>,
      children:[
        {path:"",element:<Overview/>},
        {path:"newuser",element:<NewUser/>},
        {path:"sales",element:<Sales/>}
      ]
      },
      {path:"/team",},
      {path:"/projects"},
      {path:"/calender"}
    ]
const AdminRoutes = () => {
  return  useRoutes(routesConfig)


}

export default AdminRoutes
