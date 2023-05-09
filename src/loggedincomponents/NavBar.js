import React from 'react';
import { IoMdSchool, IoMdNotifications } from "react-icons/io";
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { AiOutlineBars } from "react-icons/ai";
import { useDispatch } from 'react-redux';
// import {  } from 'react-icons/io';

const NavBar = () => {
      const dispatch = useDispatch();
      // const [open, setopen] = useState(second)
  return (
    <div>
            <nav className="text w-full bg-blue-900 fixed border-b px-10 py-2 z-40">
                  <div className="text flex justify-between">
                        <div className="text lg:flex hidden ">
                              <div className="text rounded-full w-10 h-10 bg-white"></div>
                              <p className="text-white mt-2 mx-4">Oluwatayese Emmanuel</p> 
                        </div>
                        <div className="text flex lg:gap-5 gap-8 ">
                              <div title='profile' className="text rounded-full w-10 h-10 bg-white"></div>
                              <button title='chats' className="text-center text-white rounded-full w-10 h-10  mt bg-blue-300/50">
                                    <BsFillLightningChargeFill className='text-center mx-auto w-6 h-6'/>
                              </button>
                              <button title='Notification' className="text-center text-white rounded-full w-10 h-10  mt bg-blue-300/50">
                                    <IoMdNotifications className='text-center mx-auto w-6 h-6'/>
                              </button>
                              <button className="text-white text-2xl font-semibold ml-10">
                                    <AiOutlineBars/>
                              </button>
                        </div>
                  </div>
            </nav>
    </div>
  )
}

export default NavBar
