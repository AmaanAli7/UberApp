import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { SocketContext } from "../context/socketContext";
import LiveTracking from "../components/LivetTacking";
const Riding = () => {
  const location = useLocation();
  const { ride } = location.state || {};
  const {socket}=useContext(SocketContext)
  const navigate=useNavigate()

socket.on("ride-ended",()=>{
    navigate('/home')
})



  return (
    <div>
      <Link
        to="/home"
        className="fixed right-2 top-2 h-10 w-5 p-5 bg-white flex items-center justify-center rounded-full"
      >
        <i className=" text-lg font-bold ri-home-4-line"></i>{" "}
      </Link>
      <LiveTracking/>
      <img
        className=" w-screen"
        src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
      />

      <div className="flex items-center justify-between">
        <img
          className="h-12"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg mr-1 font-medium capitalize">
            {ride?.captain.fullname.firstname}
          </h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1 mr-1">{ride?.captain.vehicle.plate}</h4>
          <p className="text-sm mr-1 text-gray-600">Maruti Suzuki Alto</p>
          <h1 className="text-lg font-semibold"> </h1>
        </div>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
         
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h4 className=" font-medium">Destination</h4>
              <p className="text-sm -mt-1 text-gray-600">{ride?.destination}</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-1">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
          <button className="w-full mt-4 bg-green-600 text-white font-semibold p-2  rounded-lg">
            Make a Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
