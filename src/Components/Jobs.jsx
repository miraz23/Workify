import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const Jobs = () => {
    const jobs = useLoaderData()
    const [seeAll, setAll] = useState(false);

    return (
        <div className='text-center my-6 mx-10'>
            <h1 className='text-5xl custom-text p-4'>Featured Jobs </h1>
            <p className='text-lg my-4'>Explore thousands of job opportunities with all the information you need. It's your future.</p>
            <div className="grid md:grid-cols-2 gap-4 mt-10 md:w-3/4 mx-auto">
                {
                    (seeAll ? jobs : jobs.slice(0, 4)).map((job) => (
                        <div key={job.id}>
                            <div className='mx-auto border-2 rounded-xl items-center p-4 bg-slate-200'>
                                <div className='gap-4 items-center'>
                                    <div className="image p-2">
                                        <img src={job.company_logo} className='w-36' alt="Company Logo"/>
                                    </div>
                                    <div className="details text-start p-2">
                                        <div className='flex justify-between'>
                                            <div>
                                                <h1 className='text-lg font-bold'>{job.job_title}</h1>
                                                <p className='mb-2'>{job.company_name}</p>
                                            </div>
                                            <div>
                                                <button className='border-2 px-6 py-2 bg-white rounded-lg mb-4'>{job.remote_or_onsite}</button>
                                            </div>
                                        </div>
                                        <div className='md:flex'>
                                            <p className='flex items-center mr-6'><MapPinIcon className="h-6 w-6 text-blue-500"/>{job.location}</p>
                                            <p className='flex items-center mt-2 md:mt-0'><CurrencyDollarIcon className="h-6 w-6 text-blue-500"/>Salary : {job.salary}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <a href={`/details/${job.id}`} className='custom-btn mt-4 w-full'>View Details</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                seeAll 
                    ? <button onClick={() => setAll(false)} className='custom-btn mt-6'>Show Less</button>
                    : <button onClick={() => setAll(true)} className='custom-btn mt-6'>Show All</button>
            }
        </div>
    );
};

export default Jobs;
