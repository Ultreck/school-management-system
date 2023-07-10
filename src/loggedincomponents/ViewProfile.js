import React from 'react'
import { useSelector } from 'react-redux';
import male from "../images2/maleAvatar.jpg";
import female from "../images2/femaleAvatar.jpg";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from 'react-router-dom';

const ViewProfile = () => {
      const state = useSelector(state => state.users);
      const navigate = useNavigate();
      // closing function
           const handleClose = () => {
            navigate('/portal/users/profile');
           }
  return (
    <div>
      <div className="text flex justify-center items-center bg-gray-50 h-screen">
            <div className="text w-full relative lg:w-2/3 h-1/2 lg:h-4/5 pt-10 lg:px-10 bg-white border">
            <div className="text-2xl text-red-600 absolute right-5 top-5  cursor-pointer" title='close' onClick={handleClose}><ImCancelCircle/></div>
            {state?.path? 
                       <img src={state?.path}  alt="" className="text w-full h-full " />:
                      <>
                      {state?.gender === 'male' || state?.gender === 'Male' || state?.gender === 'MALE' ? 
                           <img src={male}  alt="" className="text w-full h-full " />:
                           <img src={female}  alt="" className="text w-full h-full " />
                    }
                      
                      </>
                    }
            </div>
      </div>
    </div>
  )
}

export default ViewProfile
