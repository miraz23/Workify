import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='m-4'>
            <div className="navbar flex justify-between bg-base-100 p-5 ">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Home</NavLink></li>
                        <li><NavLink to="/jobs" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Jobs</NavLink></li>
                        <li><NavLink to="/applications" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Applications</NavLink></li>
                    </ul>
                </div>
                <div className="">
                    <Link to="/"><p className='text-5xl custom-text cursor-pointer'>Workify</p></Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 tracking-wider font-medium">
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Home</NavLink></li>
                        <li><NavLink to="/jobs" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Jobs</NavLink></li>
                        <li><NavLink to="/applications" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Applications</NavLink></li>
                    </ul>
                </div>  
                 <div className="flex items-center ">
                    <div className="hidden lg:block text-md custom-text font-bold mr-2">Mohiul Islam Miraz</div>
                    <img src="./src/assets/developer.jpg" alt="Profile" className="w-10 h-10 cursor-pointer rounded-full border border-gray-300"/>
                 </div> 

               
            </div>
      </div>
    )
}

export default Header