import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Components/Home";
import Jobs from './Components/Jobs.jsx';
import Job from './Components/Job.jsx';
import Application from './Components/Application.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "applications",
        element: <Application/>,
      },
      {
        path: "jobs",
        loader: ()=>fetch('/company.json'),
        element: <Jobs/>,
      },
      {
        path: "details/:id",
        element: <Job/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
