import React from 'react'
import {Routes,Route,useRoutes} from 'react-router-dom'
import { NewUser, Overview, Sales } from '../../@nestPage'
import { Dashboard } from '../dashboardPage'

 export const routesConfig =   [
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
