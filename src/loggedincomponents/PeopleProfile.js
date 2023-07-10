import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import male from "../images2/maleAvatar.jpg";
import img from "../images2/Windows-pana.png";
import female from "../images2/femaleAvatar.jpg";
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical} from "react-icons/bs";

const PeopleProfile = () => {
      const [isTrue, setisTrue] = useState(null)
      const state =  useSelector(state => state.datas);
      // const [cuorseMate, setcuorseMate] = useState([]);
      const users = useSelector(state => state.users);
      // const userAvatar = useSelector(state => state.boolean);


      // const user_id = JSON.parse(sessionStorage.getItem("user_id"));
      useEffect(() => {
            
      }, []);

      const handleThreeDots = (e) => {
            if(isTrue === e) return  setisTrue(null);
            setisTrue(e);
      }
      
  return (
    <div className='w-full '>
      <div className="text border shadow-md bg-white  ml-10 w-full lg:flex h-auto mt-40 sticky top-12">
            <div className="text-sm w-full sticky top-0">
                  <h1 className="text-center py-5 border-b text-3xl font-bold underline underline-offset-4">Course Mates</h1>
            {state.map((value, index ) => (
                  <>
                  {value.program === users.program && value.courses === users.courses && value.level === users.level?
                        <div className="text cursor-pointer hover:bg-slate-50 " key={value._id}>
                        {value._id === users._id?
                        <div className="text hidden"></div>:
                        <div className='flex relative  mx-auto items-center border-b border-l border-r py-1 px-6 w-full' key={index}>
                              <div className="text border w-12 h-12 rounded-full relative">
                              <span className="text absolute p-1 w-1 h-1 rounded-full right-1 bg-green-500"></span>
                              {value.path?
                                    <img src={value?.path} alt="" className="text w-full h-full rounded-full" />:
                                    <>
                                    {value.gender === 'male' || value.gender === 'Male' || value.gender === 'MALE' ? 
                                    <img src={male} alt="" className="text w-full h-full rounded-full" />:
                                    <img src={female} alt="" className="text w-full h-full rounded-full" />
                              }
                                    </>
                              }
                              </div>
                              <p className="text-sm ml-7">{value.firstname} {value.lastname}</p>
                              <p className="text-lg hover:bg-blue-600 p-1 hover:text-white absolute right-3" onClick={() =>handleThreeDots(value._id)}><BsThreeDotsVertical/></p>
                              <div className={`absolute bg-blue-100 mt-36 z-20 ${isTrue === value._id? "" : "hidden"} right-0 rounded-lg  shadow-lg `}>
                                    <ul className="text gap-5">
                                          <Link  to={`/portal/blog/details/${value._id}`}>
                                                <li className="text py-3 px-5 text-sm hover:bg-blue-200">View Profile</li>
                                          </Link>
                                          <Link  to={`/portal/chat/active/${value._id}`}>
                                                <li className="text py-3 px-5 text-sm hover:bg-blue-200">Chat</li>
                                          </Link>
                                    </ul>
                              </div>
                        </div>
                        }
                  </div>:
                  <div className="text hidden">
                        <img src={img} alt="" className="text" />
                  </div>
            }
                  </>
                        ))}
           </div>
      </div>
    </div>
  )
}

export default PeopleProfile
