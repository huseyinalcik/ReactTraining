import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  return(
    <div className="bg-black py-4">
    <h1 className='text-white flex justify-center text-4xl py-8'>{count}</h1>
      <div className='flex justify-center items-center'>
      <button className='py-4 mr-5 text-black p-10 text-2xl bg-white rounded outline outline-offset-2  hover:outline-green-800 hover:text-green-800  transition-all duration-500' onClick={() => setCount(count + 1)}>Arttır
      </button>
      <button className='py-4 text-black p-10 text-2xl bg-white rounded outline outline-offset-2  hover:outline-red-800 hover:text-red-800  transition-all duration-500' onClick={() => setCount(count - 1)}>Azalt
      </button>
      </div>
     <div>
    </div>
      </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <App />
</>
);

