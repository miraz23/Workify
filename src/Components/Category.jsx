import React from 'react'

const Category = ({ jobsRef }) => {
  return (
    <div ref={jobsRef} className='text-center my-6'>
            <h1 className='text-5xl custom-text p-4'>Job Category List </h1>
            <p className='text-lg mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-4 gap-4 p-2 mt-10">
                <div>
                    <div className='border-2 bg-slate-200 p-4 rounded-3xl'>
                        <img className='w-20 mx-auto mb-2 rounded-xl' src="https://img.freepik.com/free-vector/illustration-circuit_53876-5583.jpg?w=740&t=st=1681135555~exp=1681136155~hmac=e355c2f1d9abdb72e5990f777254b8b3bd11b48b6320673c6789c7b70c8de831" alt=""/>
                        <h1 className='text-lg tracking-wider'>Engineering Job</h1>
                        <p>220+ Jobs Available</p>
                    </div>
                </div>
                <div>
                    <div className='border-2 bg-slate-200 p-4 rounded-3xl'>
                        <img className='w-20 mx-auto mb-2 rounded-xl' src="https://img.freepik.com/free-vector/illustration-light-bulb-icon_53876-5597.jpg?w=740&t=st=1681135862~exp=1681136462~hmac=2dff853e6ca160d9427b939dd5d63b914df231c1f989d39724247c098051b265" alt=""/>
                        <h1 className='text-lg tracking-wider'>Account & Finance</h1>
                        <p>300+ Jobs Available</p>
                    </div>
                </div>
                <div>
                    <div className='border-2 bg-slate-200 p-4 rounded-3xl'>
                        <img className='w-20 mx-auto mb-2 rounded-xl' src="https://img.freepik.com/free-vector/illustration-loudspeaker-icon_53876-5840.jpg?w=740&t=st=1681136005~exp=1681136605~hmac=038b124dcc8e86797334f6aa3859130333e1fa86188ee41a7f99fd31d87fdd03" alt=""/>
                        <h1 className='text-lg tracking-wider'>Creative Design</h1>
                        <p>100+ Jobs Available</p>
                    </div>
                </div>
                <div>
                    <div className='border-2 bg-slate-200 p-4 rounded-3xl'>
                        <img className='w-20 mx-auto mb-2 rounded-xl' src="https://img.freepik.com/free-vector/illustration-calculator-machine_53876-5566.jpg?w=740&t=st=1681135895~exp=1681136495~hmac=9b4b3931ac77d9e8850db58e8f4205a1b5ed06a516c71969c050f992e6603296" alt=""/>
                        <h1 className='text-lg tracking-wider'>Marketing & Sales</h1>
                        <p>150+ Jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Category