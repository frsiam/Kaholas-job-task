import React from 'react';

const Right = ({ mydata }) => {
    return (
        <>
            <div className='w-full grid grid-cols-2 gap-2 shadow-xl mt-6 md:mt-0'>
                <div className='grid grid-rows-2 '>
                    <div className='row-span-2'>
                        <img className='md:h-96 h-60 rounded-tl-xl' src={mydata?.paintingImages[0]} alt="" />
                    </div>
                </div>
                <div className='grid grid-rows-2 gap-y-1'>
                    <img className='rounded-tr-xl md:h-40 lg:h-48' src={mydata?.paintingImages[1]} alt="" />
                    <img className='md:h-40 lg:h-48' src={mydata?.paintingImages[2]} alt="" />
                </div>
            </div>
        </>
    );
};

export default Right;