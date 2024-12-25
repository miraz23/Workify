import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const Application = () => {
    const [storedJob, setStoredJob] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem('appliedJobs')) || [];
        setStoredJob(getData);
        setData(getData);
    }, []);

    const handleFilter = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === 'Filter') {
            setStoredJob(data);
        } else {
            const filteredJobs = data.filter((single) => single.remote_or_onsite === selectedValue);
            setStoredJob(filteredJobs);
        }
    };

    const clearLocalStorage = () => {
        localStorage.clear();
        setStoredJob([]);
    };

    return (
        <div>
            <h1 className='text-5xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-4'>Applied Jobs</h1>
            <div>
                <div className="mb-20 w-3/4 text-end mx-auto flex items-center justify-between">               
                    <div>
                        <select id="filter" onChange={handleFilter} className='bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center'>
                            <option value="Filter">Filter By</option>
                            <option value="Remote">Remote</option>
                            <option value="Onsite">Onsite</option>
                        </select>
                    </div>
                    <div>
                        <button onClick={clearLocalStorage} className="bg-red-500 text-white font-semibold py-2 px-4 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div>
            {
                storedJob.length > 0 
                ? (
                    storedJob.map((applied) => (
                        <div key={applied.id} className='md:flex w-80 md:w-3/5 mx-auto border-2 rounded-3xl justify-between items-center p-4 bg-slate-200 mb-4'>
                            <div className='md:flex gap-4 items-center'>
                                <div className="image p-2">
                                    <img src={applied.company_logo} alt={`${applied.company_name} logo`} className='w-36' />
                                </div>
                                <div className="details text-start">
                                    <h1 className='text-lg font-bold'>{applied.job_title}</h1>
                                    <p className='mb-2'>{applied.company_name}</p>
                                    <button className='border-2 px-6 py-1 bg-white rounded-lg mb-4'>
                                        {applied.remote_or_onsite}
                                    </button>
                                    <div className='md:flex'>
                                        <p className='flex items-center mr-6'><MapPinIcon className="h-6 w-6 text-blue-500"/>{applied.location}</p>
                                        <p className='flex items-center mt-2 md:mt-0'><CurrencyDollarIcon className="h-6 w-6 text-blue-500"/>Salary: {applied.salary}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to={`/details/${applied.id}`} className='custom-btn mt-4 w-full'>
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))
                ) 
                : (
                    <p className="text-center text-xl font-semibold mt-8 italic">You haven't applied to any jobs yet.</p>
                )
            }
            </div>
        </div>
    );
};

export default Application;
