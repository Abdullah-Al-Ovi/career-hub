import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home/Home';
import AppliedJobs from './AppliedJobs/AppliedJobs';
import Statistics from './Statistics/Statistics';
import JobInfo from './JobInfo/JobInfo';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('/jobs.json')
      },
      {
        path:'/stats',
        element:<Statistics></Statistics>
      },
      {
        path:'/jobInfo/:jobId',
        loader:()=> fetch('../public/jobs.json'),
        element: <JobInfo ></JobInfo>
      }
      
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
