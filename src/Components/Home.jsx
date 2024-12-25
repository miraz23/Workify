import React, { useRef } from 'react'
import Banner from './Banner'
import Category from './Category'
import Faq from './Faq'

const Home = () => {
  const jobsRef = useRef(null);

  return (
    <div className='pt-10 px-10'>
        <Banner jobsRef={jobsRef}></Banner>
        <Category jobsRef={jobsRef}></Category>
        <Faq></Faq>
    </div>
  )
}

export default Home