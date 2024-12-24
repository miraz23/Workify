import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'


const App = () => {

  return (
    <div>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      <div className='pt-10 px-10'>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App