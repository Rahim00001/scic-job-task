import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/Error/ErrorPage.jsx';
import Login from './Components/Login/Login.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Register from './Components/Register/Register.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import PrivateRoute from './Components/Private/PrivateRoute.jsx';
import UpdateTask from './Components/UpdateTask/UpdateTask.jsx';
import Team from './Components/Team/Team.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/team',
        element: <Team></Team>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        loader: () => fetch('https://scic-job-task-server-rho.vercel.app/tasks')
      },
      {
        path: '/updateTask/:id',
        element: <UpdateTask></UpdateTask>,
        loader: ({ params }) => fetch(`https://scic-job-task-server-rho.vercel.app/tasks/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
