import React, {useState, useEffect} from 'react';
import LandingNavBar from '../landingcomponents/LandingNavBar';
import LandingComponent from '../landingcomponents/LandingComponent';
import { IoMdSchool } from "react-icons/io";

const LandingPage = () => {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setloader(false);
  }, [])
  
  return (
    <div>
          {/* Loader */}
          <div className={`text w-full fixed ${!loader && "hidden"}  h-screen bg-slate-700 z-50 `}>
        <div className="text w-full h-screen fixed  bg-slate-800">
          <div className="text-center  ">
            <div className="text mt-20">
                   <IoMdSchool className='text-amber-600  mt-6 mx-auto text-5xl'/>
                    <span className="text-white text-xl font-bold">Edutech</span>
            </div>
            <div className="text-center mx-auto abso relative rounded-full  animate-spin duration-300 p-4 mt-40 w-20 h-20 z-50  border-t-2"> </div>
          </div>
        </div>
      </div>
   <LandingNavBar/>
   <LandingComponent/>
    </div>
  )
}

export default LandingPage
