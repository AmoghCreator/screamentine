import './App.css';

function Good() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-pink-300 gap-10">
	  <div className="bg-white w-1/2 flex flex-col justify-center items-center gap-20 p-20 rounded-3xl">
	  <h1 className='text-4xl text-red-500 font-bold'>Love Calculator</h1>
	  <h1 className='text-2xl'>exactly how much does your valentine crush love you ? type in their name and find out !</h1>
	  <div className='w-full text-center text-2xl'>
	  	<input className='border-black border-2 border-solid w-9/12'/>
	  	<button className='bg-red-500 text-white border-solid border-2 border-black px-2 font-semibold'><h1 className='h-full'>Calculate</h1></button>
	  </div>
	  </div>
    </div>
  );
}

export default Good;

