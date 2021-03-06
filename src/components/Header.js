import React from 'react';

const Header = ({ mydata }) => {
    return (
        <>
            <header>
                <h1 className='text-5xl font-bold'>{mydata?.campaignName}</h1>
                <p className='text-lg font-semibold text-slate-500 mt-2'>{mydata?.courseType} <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> </p>
            </header>
        </>
    );
};

export default Header;