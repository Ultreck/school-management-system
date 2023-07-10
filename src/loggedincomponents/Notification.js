import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { BsArrowLeft} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../baseUrl';
import io from 'socket.io-client';

const Notification = () => {
  // const [usersPost, setusersPost] = useState([])
  // const [state, setstate] = useState([])
  const [allNotificationActions, setallNotificationActions] = useState([])
  // const [likesPersons, setlikesPersons] = useState([])
const navigate = useNavigate();
const id = JSON.parse(sessionStorage.getItem("user_id"));


useEffect(() => {
  axios.get(baseUrl + '/notification').then(res => {
    setallNotificationActions(res.data);
    // setstate(res.data.result)
    // const found = res.data.result.filter((value) => value.user_id === id);
    // setallNotificationActions(found);
    // let likesArray = found.flatMap((item) => item.likes);
    // console.log(found);
    // setusersPost(likesArray);
    // axios.get(baseUrl + "/datas").then(res =>{
    //   let likedPerson = res.data.filter((element) => usersPost.includes(element._id));
    //   setlikesPersons(likedPerson);
    //   }).catch(err => {
      
    //   });
  });
 }, [id]);


  const handleBackArrow = () => {
    navigate('/portal/');
  }
  return (
    <div className="text">
      <div className="text">
      <div className="text flex w-full bg-white shadow-lg items-center z-20 gap-10 fixed border py-3 px-6">
              <BsArrowLeft title='back home' onClick={handleBackArrow} className='cursor-pointer'/>
            <h1 className="text font-semibold">Back to dashboard</h1>
        </div>
      </div>
      <div className='w-full pt-20 md:w-2/3 lg:w-1/2 mx-auto overflow-auto bg-slate-50 min-h-screen'>
        {allNotificationActions.map((value, index) => (
          <>
            {value.user_id === id?
              <div className=" hidden"></div>:
              <>
          {value.poster_id === id? 
            <div className="text relative flex py-4 mx-2 lg:mx-8 border-l border-slate-800 items-center rounded-tl-full rounded-bl-full">
                <div className="text w-10 h-10 border bg-slate-300 rounded-full mx-4">
                  <img src={value.path} alt="" className="text w-full h-full rounded-full" />
                </div>
                <div className={`text items-center  ${value.action === "following" || value.action === "unfollowed"? 'flex': 'lg:flex flex-wrap'}`}>
                  <div className="text flex">
                    <span className="text-xs lg:text-sm ">{value.name}</span>
                    {value.action === 'like' || value.action === 'unlike'?
                    <span className="text flex ">
                      <span className="text-xs lg:text-sm font-bold mx-2 ">{value.action}d </span>
                      <span className="text-xs mr-1 lg:text-sm">your post: </span> 
                    </span>:
                    <span className="text flex ">
                      {value.action === 'following' ?
                      <>
                      <span className="text-xs lg:text-sm font-bold mx-2 ">Is now {value.action}</span>
                      </>:
                      <>
                      {value.action === "comment" ? 
                       <div className="text flex items-center">
                          <span className="text-xs lg:text-sm font-bold mx-2 ">{value.action}ed</span>
                          <span className="text-xs mr-1 lg:text-sm">your post: {value.action}</span> 
                       </div>:
                        <>
                        <span className="text-xs lg:text-sm font-bold mx-2 ">{value.action}</span>
                        </>
                      }
                      </>
                      }
                    </span>
                    }
                    </div>
                    
                    <div className={`${value.action === "like" || value.action === "unlike" || value.action === "comment"? '': 'hidden'}`}>
                      <span className="text-xs text-slate-600 italic lg:text-sm">{value.more.slice(0, 30)}...</span>
                    </div>
                    <div className={`${value.action === "following" || value.action === "unfollowed"? '': 'hidden'}`}>
                      <span className="text-xs text-slate-600 italic lg:text-sm">You</span>
                    </div>
                </div>
                <div className="text-xs lg:text-sm border-b w-3/4 text-end absolute bottom-0 right-0">
                  {value.createdAt.slice(11, 16) < "12:00"? `${value.createdAt.slice(11, 16)}am `: `${value.createdAt.slice(11, 16)}pm `} 
                  {value.createdAt.slice(0, 10)}
                </div>
              </div>:
                <div className="text hidden"></div>
              }
              </>
            }
          </>
        ))}
      </div>
    
    </div>
  )
}

export default Notification
