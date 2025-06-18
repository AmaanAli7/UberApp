import React, { useRef, useState } from 'react'
import CaptainDetails from '../components/CaptainDetails'
import { Link,useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide'
import LiveTracking from '../components/LivetTacking'

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef=useRef(null)
  const location=useLocation()
  const rideData=location.state?.ride

  useGSAP(function(){

    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
    },[finishRidePanel]) 


  return (
    <div className='h-screen relative flex flex-col'>
       
            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div className='h-screen  w-screen top-0 z-[-1]'>
                <LiveTracking/>

            </div> 
            

            <div className='h-1/5 p-6 bg-yellow-400 relative flex items-center justify-between' onClick={()=>{
              setFinishRidePanel(true)
            }} >
            <h5 className='p-1  text-center w-[93%] absolute top-0' onClick={()=>{
                
            }} ><i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i></h5>
            <h4 className='text-xl font-semibold' >4Kms Away</h4>


            <button  onClick={()=>{
               
            }}className='bg-green-700 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button></div>

<div  ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12'>
       <FinishRide 
       ride={rideData} setFinishRidePanel={setFinishRidePanel}/>
        </div>
    
            </div>
  )
}

export default CaptainRiding