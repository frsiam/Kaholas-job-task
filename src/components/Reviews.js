import React from 'react';

const Reviews = ({ review }) => {
    return (
        <>
            <div className='flex items-center mt-2'>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                </div>
                <h1 className='ml-4 text-sm font-semibold text-slate-400'>{review?.reviewNumber} toal reviews for this {review?.name}</h1>
            </div>
        </>
    );
};

export default Reviews;