import { useEffect, useState } from 'react';
import Header from './components/Header';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  const [mydata, setMydata] = useState();
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        return setMydata(data[0])
      })
  }, [])
  return (
    <div className='max-w-6xl mx-auto min-h-screen py-8 px-5 md:px-4 lg:px-0'>
      <Header mydata={mydata} />
      {/* flex w-full mx-auto */}
      <main className='grid grid-cols-1 md:grid-cols-2 my-12'>
        <Left mydata={mydata} />
        <Right mydata={mydata} />
      </main>
    </div>
  );
}

export default App;
