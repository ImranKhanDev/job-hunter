import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
// import Featured from './Components/Featured/Featured.jsx';
import Home from './Components/Home/Home.jsx';
import JobsDetail from './Components/JobsDetails/JobsDetail.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader:()=>fetch('categories.json()')
      },
      {
        path: 'applied',
        element: <AppliedJobs></AppliedJobs>,
        loader:() => fetch('/jobs.json')
      },
      {
        path: "/job/:id",
        element: <JobsDetail></JobsDetail>,
        loader: () => fetch('/jobs.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)