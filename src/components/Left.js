import React from 'react';
import Reviews from './Reviews';

const Left = ({ mydata }) => {
    return (
        <>
            <div className='w-full'>
                <h1 className='text-lg text-left mr-6 font-semibold'>{mydata?.description}</h1>
                <div className='my-6 flex items-center'>
                    <img className="mask mask-circle h-12" src={mydata?.courseTecher?.img} alt='' />
                    <h1 className='ml-4 text-lg font-bold text-blue-600'>{mydata?.courseTecher?.teacherName}</h1>
                </div>
                {
                    mydata?.reviews?.map((review, index) => <Reviews key={index} review={review} />)
                }
                <div className='my-4'>
                    <h1 className='text-xl font-semibold text-zinc-700'>Completed by {mydata?.numberOfLearners} learners</h1>
                </div>
                <div className='flex justify-between mr-36'>
                    <button className='btn btn-primary rounded-full'>
                        <span className='normal-case text-xl font-normal'>See Class Schedule</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button className=" text-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        <span className='font-bold text-lg ml-2'>Save</span>
                    </button>
                    <button>
                        <img className='inline' src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/000000/external-Share-contact-us-tanah-basah-basic-outline-tanah-basah.png" alt='' />
                        <span className='font-bold text-lg ml-2'>Share</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Left;