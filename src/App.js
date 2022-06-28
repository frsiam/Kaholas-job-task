import { useEffect, useState } from 'react';

function App() {
  const [mydata, setMydata] = useState();
  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then(res => res.json())
      .then(data => {
        console.log(data[0].campaignName)
        return setMydata(data[0])
      })
  }, [])
  console.log(mydata?.paintingImages)
  return (
    <div className='max-w-6xl mx-auto min-h-screen py-8'>
      <header>
        <h1 className='text-orange-600'>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More</h1>
        <p>Multi - Day Course ?</p>
      </header>
    </div>
  );
}

export default App;
