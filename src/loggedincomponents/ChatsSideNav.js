import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import {BsSearch} from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUsers} from "react-icons/fa";
import { SiInstatus} from "react-icons/si";
import { BsThreeDotsVertical, BsChatLeftDotsFill, BsArrowLeft} from "react-icons/bs";
import male from "../images2/maleAvatar.jpg"
import female from "../images2/femaleAvatar.jpg"

const ChatsSideNav = () => {
      const [inputSearch, setinputSearch] = useState('');
      const [filterateData, setfilterateData] = useState([]);
      const chatId = JSON.parse(localStorage.getItem("chatId"));
      // const [active, setactive] = useState("");
      const users = useSelector(state => state.datas);
      const state = useSelector(state => state.users);
      let user_id = JSON.parse(sessionStorage.getItem("user_id"));
      const navigate = useNavigate();

      useEffect(() => {
            setfilterateData(users.filter(each => each.firstname?.toLowerCase().includes(inputSearch.toLowerCase())));
            // console.log(chatId);
      }, [inputSearch, users]);

      const handleBackArr = () => {
            navigate('/portal/');
      }

const handleChanges = (e) => {
      setinputSearch(e.target.value);
}
      

  return (
    <div className='relative hidden lg:grid w-full max-h-full overflow-auto'>
      <div className="text relative grid overflow-auto">
      <nav className="text bg-blue-900 w-full sm:w-2/3 lg:w-1/4 py-2 px-8 fixed border-r">
            <div className="text flex items-center gap-3 justify-between">
                  <div className="text-white flex items-center">
                        <BsArrowLeft className='text-xl mr-5 cursor-pointer'  title='Dashboard'onClick={handleBackArr} />
                        <div className="text w-10 h-10 rounded-full border-2 border-white bg-white">
                        {state?.path? 
                       <img src={state?.path} alt="" className="text w-full h-full rounded-full" />:
                      <>
                      {state.gender === 'male' || state.gender === 'Male' || state.gender === 'MALE' ? 
                          <img src={male} alt="" className="text w-full h-full rounded-full" />:
                          <img src={female} alt="" className="text w-full h-full rounded-full" />
                    }
                      
                      </>
                    }
                        </div>

                  </div>
                  <div className="text-white flex items-center gap-5">
                        <FaUsers className='cursor-pointer' title='communities'/>
                        <SiInstatus className='cursor-pointer' title='status'/>
                        <BsChatLeftDotsFill className='cursor-pointer' title='new chat'/>
                        <BsThreeDotsVertical className='cursor-pointer' title='menu'/>
                  </div>
            </div>
      </nav>
      <div className="text fixed mt-14 w-full lg:w-1/4 py-1 border bg-white">
            <div className="text w-11/12 flex items-center mx-auto  " >
            <BsSearch className={`text-lg absolute ml-2`}/>
              <input type="search" onChange={handleChanges} className={`text-base py-1 w-full  focus:outline-none px-8 rounded-lg bg-slate-200 border `} placeholder='search by firstname...' />
            </div>
      </div>
      </div>
            <div className="text   bg-white  pt-24 ">
                  {inputSearch?
                  filterateData.map((value, index) => (
                        <>
                        {filterateData.length > 0 ?
                        <>
                        {value._id === user_id? 
                              <div className="text"  key={value._id}></div>:
                              <NavLink to={`active/${value._id}`}   key={value._id}>
                                    <div className={`text flex py-3 items-center w-full border-b  px-8 hover:bg-slate-100 cursor-pointer ${ chatId === value._id ? 'bg-slate-100' : ""}`}>
                                          <div className={`text border-b-white w-12 h-12 rounded-full border ${ chatId === value._id ? 'bg-slate-100' : "bg-white"}`}>
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
                                          <div className="text px-6  py-3">{value.firstname } { value.lastname }</div>
                                          <hr />
                                    </div>
                              </NavLink>
                        }
                        </>:
                        <div className="text">Nothing to show here</div>
                        }
                        </>
                  )):
                  users.map((value, index) => (
                        <>
                        {value._id === user_id? 
                              <div className="text"  key={value._id}></div>:
                              <NavLink to={`active/${value._id}`}   key={value._id}>
                                    <div className="text flex py-3 items-center w-full border-b  px-8 hover:bg-slate-100 cursor-pointer">
                                          <div className="text border-b-white w-12 h-12 rounded-full border bg-slate-200">
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
                                          <div className="text px-6  py-3">{value.firstname } { value.lastname }</div>
                                          <hr />
                                    </div>
                              </NavLink>
                        }
                        </>
                  ))

            }
            </div>
    </div>
  )
}

export default ChatsSideNav
