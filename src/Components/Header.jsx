import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
      <div className='m-4'>
          <div className="navbar bg-base-100 p-5 ">
              <div className="navbar-start">
                  <Link to="/"><p className='text-5xl custom-text cursor-pointer'>Workify</p></Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 tracking-wider font-medium">
                      <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Home</NavLink></li>
                      <li><NavLink to="/applications" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>Applications</NavLink></li>
                  </ul>
              </div>
              <div className="navbar-end">
                  <a href='#jobs' className='custom-btn'>Start Applying</a>
              </div>
          </div>
      </div>
    )
}

export default Header