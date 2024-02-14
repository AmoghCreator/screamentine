import './App.css';
import pic1 from './pic1.jpeg';
import pic2 from "./pic2.png";
import pic3 from "./pic3.jpeg";
import audio from "./Howling 003.wav";
import audio2 from "./Howling 006.wav";
import audio3 from "./scream-001.mp3";

function Bad() {
  return (
	<div className="bg-rd-600 w-screen h-screen flex flex-wrap gap-0">
	  <audio src={audio} autoPlay loop></audio>
	  <audio src={audio2} autoPlay loop></audio>
	  <audio src={audio3} autoPlay loop></audio>
	  {[...Array(2)].map((_, i) => (
		  <>
		<img src={pic1} alt="pic1" className="w-2/6 h-2/4 pic1" key={i}/>
		<img src={pic2} alt="pic1" className="w-2/6 h-2/4 pic2" key={i}/>
		<img src={pic3} alt="pic1" className="w-2/6 h-2/4 pic3" key={i}/>
		  </>
	  ))}
	  <h1 className='text-center absolute text-7xl justify-center items-center flex h-screen w-screen text-blue-300 font-bold'>Share or be Cursed</h1>
    </div>
  );
}

export default Bad;

