import { useEffect, useState } from 'react';

function App() {
  const [mydata, setMydata] = useState();
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        console.log(data[0].campaignName)
        return setMydata(data[0])
      })
  }, [])
  console.log(mydata?.numberOfLearners)
  return (
    <div className='max-w-6xl mx-auto min-h-screen py-8'>
      <header>
        <h1 className='text-5xl font-bold'>{mydata?.campaignName}</h1>
        <p className='text-lg font-semibold text-slate-500 mt-2'>{mydata?.courseType} <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg> </p>
      </header>
      <main className='flex w-full mx-auto my-12'>
        <div className='w-full'>
          <h1 className='text-lg text-left mr-6 font-semibold'>{mydata?.description}</h1>
          <div className='my-6 flex items-center'>
            <img className="mask mask-circle h-12" src={mydata?.courseTecher?.img} alt='' />
            <h1 className='ml-4 text-lg font-bold text-blue-600'>{mydata?.courseTecher?.teacherName}</h1>
          </div>
          <div className='flex items-center'>
            <div class="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
            </div>
            <h1 className='ml-4 text-sm font-semibold text-slate-400'>{mydata?.reviews?.teacherReviews} toal reviews for this teacher</h1>
          </div>
          <div className='flex items-center my-3'>
            <div class="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
            </div>
            <h1 className='ml-4 text-sm font-semibold text-slate-400'>{mydata?.reviews?.classReviews} toal reviews for this class</h1>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 gap-2 shadow-xl'>
          <div className='grid grid-rows-2 '>
            <div className='row-span-2'>
              <img className='h-96 rounded-tl-xl' src={mydata?.paintingImages[0]} alt="" />
            </div>
          </div>
          <div className='grid grid-rows-2 gap-y-1'>
            <img className='rounded-tr-xl' src={mydata?.paintingImages[1]} alt="" />
            <img className='' src={mydata?.paintingImages[2]} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
