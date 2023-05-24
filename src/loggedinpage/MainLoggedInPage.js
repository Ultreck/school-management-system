import React, {useEffect, useState} from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import SideNav from '../loggedincomponents/SideNav'
import MainComponents from '../loggedincomponents/MainComponents'
import NavBar from '../loggedincomponents/NavBar'
import axios from 'axios'
import { baseUrl } from '../baseUrl'
import { useDispatch, useSelector } from 'react-redux'
import { userAct } from '../slices/UserSlice';
import { IoMdSchool } from "react-icons/io";

const MainLoggedInPage = ({ isLoggedIn}) => {
  const [open, setOpen] = useState(false);
  const [loader, setloader] = useState(true);
  const [users, setusers] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    let user_id = JSON.parse(localStorage.getItem('user_id'));
    axios.post(baseUrl + "/data", {user_id}).then((res) => {
      setusers(res.data);
      // console.log(res);
      let result = res.data
      dispatch(userAct(result));
      setloader(false);
    });

  }, []);

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

      <div className="text flex relative">
        <div className="text hidden lg:flex lg:mt-0">
            <SideNav setOpen={setOpen} open={open} />
        </div>
        <div className="text  ">
          <div className="text ">
            <NavBar/>
          </div>
          <div className={`text w-full ${open? 'lg:w-5/6' : "lg:w-11/12"}  absolute right-0` } >
            <Routes>
            <Route path="/" element={<MainComponents open={open}/>} />
            </Routes>
            <Outlet open={open}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLoggedInPage
