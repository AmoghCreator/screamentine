import logo from './logo.svg';
import pic1 from './pic1.jpeg';
import heart from "./heart-svgrepo-com.svg";
import {useState} from 'react';
import './App.css';
import Bad from './Bad';

function App() {

  const [bool, setBool] = useState(false);

  return (
	  <div className='bg-red-700'>
	  {!bool && <div className="flex flex-col w-screen h-screen justify-center items-center bg-pink-300">
	  <div className="bg-white w-5/6 flex flex-col justify-center items-center gap-8 p-4 rounded-3xl">
		  <img src={heart} className='w-20 h-20' style={{fill:"pink"}}/>
	  <h1 className='text-2xl text-red-500 font-bold'>Love Calculator</h1>
	  <h1 className='text-xl'>exactly how much does your valentine crush love you ? type in their name and find out !</h1>
	  <div className='w-full text-center text-2xl'>
	  	<input className='border-black border-2 border-solid w-9/12'/>
	  	<button className='bg-red-500 text-white border-solid border-2 border-black px-2 font-semibold'><h1 className='h-full' onClick={() => setBool(!bool)}>Calculate</h1></button>
	  </div>
	  </div>
    </div>}
	  {bool && <Bad />}

	  </div>
  );
}

export default App;
