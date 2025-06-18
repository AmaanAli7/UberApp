import {Link} from 'react-router-dom'
import gsap from 'gsap'


const Start = () => {

  gsap.from("#text", {duration: 2, y: -50, opacity: 0,ease: "power2.out", delay: 0.7});

  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1514749204155-24e484635226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRheGl8ZW58MHx8MHx8fDA%3D)] h-screen flex justify-between flex-col w-full ">
        <div className="h-screen relative overflow-hidden">
          {/* <img
            className="w-16 absolute left-36  top-10"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          /> */}
          <div className="flex items-center justify-center py-5"><h1 className="text-3xl font-bold">Roamer</h1></div>
          
        </div>
        <div className="bg-white pb-7 py-4 px-4">
          <h2 id="text" className="text-3xl font-bold">Get Started with Roamer Drive</h2>
          <Link to='/login' className="flex items-center justify-center w-full bg-cyan-600 text-black py-3 rounded mt-7 text-lg font-semibold hover:bg-cyan-700 transition-colors scale-2">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
