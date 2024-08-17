import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import AddStudent from './components/AddStudent/AddStudent.jsx'
import RemoveStudent from './components/RemoveStudent/RemoveStudent.jsx'
import Home from './components/Home/Home.jsx'
import ShowStud from './components/ShowStud/ShowStud.jsx'
import StudEdit from './components/EditStud/StudEdit.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/AddStudent",
        element:<AddStudent />
      },
      {
       path:"/RemoveStudent/:id",
       element:<RemoveStudent /> 
      },
      {
        path:"/ShowStudent/:id",
        element:<ShowStud /> 
       },
       {
        path:"/EditStud/:id",
        element:<StudEdit /> 
       }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
