import React, {
      useEffect
} from 'react'
import { useSelector } from 'react-redux';
import img2 from '../images2/background.jpg';
import {BsSearch} from "react-icons/bs";
import img from '../images2/user1.jpg'
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUsers} from "react-icons/fa";
import { SiInstatus} from "react-icons/si";
import { BsThreeDotsVertical, BsChatLeftDotsFill, BsArrowLeft} from "react-icons/bs";

const ChatsSideNav = () => {
      // const [active, setactive] = useState("");
      const users = useSelector(state => state.datas);
      let user_id = JSON.parse(sessionStorage.getItem("user_id"));
      const navigate = useNavigate();

      useEffect(() => {
            // let [found] = users.filter((value,) => (value._id === user_id));
            // setpresentUser(found);
            // console.log(found);
            // console.log(user_id);
            
      }, []);

      const handleBackArr = () => {
            navigate('/portal/');
      }

      // const navLinkStyles = ({isActive}) => {
      //       return {
      //         backgroundColor: isActive? 'rgb(147 197 253)' : 'none',
      //       }
      //       }
      

  return (
    <div className='relative w-full max-h-full overflow-auto'>
      <div className="text relative grid overflow-auto">
      <nav className="text bg-blue-900 w-full sm:w-2/3 lg:w-1/4 py-2 px-8 fixed border-r">
            <div className="text flex items-center gap-3 justify-between">
                  <div className="text-white flex items-center">
                        <BsArrowLeft className='text-xl mr-5 cursor-pointer'  title='Dashboard'onClick={handleBackArr} />
                        <div className="text w-10 h-10 rounded-full border-2 border-white bg-white">
                              <img src={img} alt="" className="text w-full h-full rounded-full" />
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
              <input type="search" className={`text-base py-1 w-full  focus:outline-none px-8 rounded-lg bg-slate-200 border `} placeholder='search...' />
            </div>
      </div>
      </div>
            <div className="text  bg-white  pt-24 ">
                  {users.map((value, index) => (
                        <>
                        {value._id === user_id? 
                              <div className="text"></div>:
                              <NavLink to={`active/${value._id}`}  >
                                    <div className="text flex py-3 items-center w-full border-b  px-8 hover:bg-slate-100 cursor-pointer">
                                          <div className="text border-b-white w-12 h-12 rounded-full border bg-slate-200">
                                                <img src={img2} alt="" className="text w-full h-full rounded-full" />
                                          </div>
                                          <div className="text px-6  py-3">{value.firstname } { value.lastname }</div>
                                          <hr />
                                    </div>
                              </NavLink>
                        }
                        </>
                  ))}
            </div>
    </div>
  )
}

export default ChatsSideNav
