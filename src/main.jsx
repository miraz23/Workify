import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Components/Home";
import Job from './Components/Job.jsx';
import Application from './Components/Application.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        loader: ()=>fetch('/company.json'),
        element: <Home/>,
      },
      {
        path: "applications",
        element: <Application/>,
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
