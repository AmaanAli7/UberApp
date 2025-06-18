import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
      {
        params: {
          rideId: props.ride._id,
          otp: otp,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      props.setConfirmRidePopUp(false);
      props.setRidePopUp(false);
      navigate("/captain-riding", { state: { ride: props.ride } });
    }
  };

  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setRidePopUp(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this Ride to Start
      </h3>
      <div className="flex items-center justify-between p-3 border-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 rounded-full object-cover w-12"
            src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">
            {props.ride?.user.fullname.firstname}{" "}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">{props.ride?.pickup}</h3>
              <p className="text-sm -mt-1 text-gray-600">Pickup</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">{props.ride?.destination}</h3>
              <p className="text-sm -mt-1 text-gray-600">Destination </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare}.00 </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Only</p>
            </div>
          </div>
        </div>

        <div className="mt-5 w-full  ">
          <form
            onSubmit=
              {submitHandler}
            
          >
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="bg-[#eee] font-mono px-6 py-4 text-lg rounded-lg w-full  mt-3 mb-5"
              type="text"
              placeholder="Enter OTP"
            />
            <button className=" bg-green-600 justify-center text-lg flex w-full text-white font-semibold p-3 px-10 rounded-lg">
              Confirm
            </button>

            <button
              onClick={() => {
                props.setConfirmRidePopUp(false);
                props.setRidePopUp(false);
              }}
              className="mt-2 w-full bg-red-700 text-white text-lg font-semibold p-3 px-10 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
