import React, {useState, useEffect} from 'react';
import male from "../images2/maleAvatar.jpg";
import female from "../images2/femaleAvatar.jpg";
import { BsArrowLeft} from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { baseUrl } from '../baseUrl';
import {IoMdSchool } from "react-icons/io";
import {TbReload } from "react-icons/tb";

const PosterDetails = () => {
      const [state, setstate] = useState({});
      const [currentPost, setcurrentPost] = useState({});
      const [allLikes, setallLikes] = useState([]);
      const [likeIsTrue, setlikeIsTrue] = useState(false);
      const [loader, setloader] = useState(true);
      const navigate = useNavigate();
      const data = useSelector(data => data.datas);
      const {id} = useParams();
      const liked = JSON.parse(sessionStorage.getItem("user_id"));

      useEffect(() => {
            axios.get(baseUrl + "/datas").then(res =>{
                  let [found] = res.data.filter((value) => value._id === id)
                  setstate(found);
                  setloader(false);
                  }).catch(err => {
                    // alert("Network error : error occur while  connecting to the internet. check your internet connection");
                  });

      }, [data, id, likeIsTrue])
      

      useEffect(() => {
            axios.get(baseUrl + '/getNewsFeed').then(res => {
              const found = res.data.result.filter((value) => value.user_id === id);
              setcurrentPost(found);
              let likesArray = found.flatMap((item) => item.likes);
              setallLikes(likesArray);
              setloader(false);
            });
           }, [id]);

      useEffect(() => {
         
           }, [likeIsTrue]);

           const notificationActions =  (action) => {
            let name = state.firstname + " " + state.lastname;
            let path = state.path;
            let posterId = currentPost.user_id;
            let more = currentPost.more;
           axios.post(baseUrl + "/actions", {name, path, action, more, posterId, liked }).then(res => 
            console.log(res)).catch(error => console.log(error)); 
          }

        // Handle back arrow function
  const handleBackArrow = () => {
      navigate('/portal/blog');
      localStorage.setItem('active', JSON.stringify(0));
    };

// Handle follow functions 
const handleFollow = () => {
      let userId = state._id;
      axios.put(baseUrl + "/follow", {userId, liked}).then(res => {
            setlikeIsTrue(res);
            notificationActions("following");
      }).catch(err => {
            console.log(err);
      })
}

// Handle unfollow functions 
const handleUnFollow = () => {
      let userId = state._id;
      axios.put(baseUrl + "/unfollow", {userId, liked}).then(res => {
        setlikeIsTrue(res);
        notificationActions("unfollowed");
      }).catch(err => {
        console.log(err);
      })
    }

  return (
    <div className='w-full' >
        {/* Loader */}
        <div className={`text w-full fixed ${!loader && "hidden"}  h-screen bg-slate-700 z-50 `}>
        <div className="text w-full h-screen fixed  bg-slate-800">
          <div className="text-center  ">
            <div className="text mt-40">
                   <IoMdSchool className='text-amber-600  mt-6 mx-auto text-5xl'/>
                    <span className="text-white text-xl font-bold">Edutech</span>
            </div>
            <div className="text-center mx-auto relative rounded-full   p-4 mt-20 w-20 h-20 flex justify-center items-center z-50 "> <TbReload className='animate-spin duration-300 text-white text-4xl'/></div>
          </div>
        </div>
      </div>
        <section className="text w-full md:w-2/3 lg:w-1/2 mx-auto border h-screen">
      {/* <div className="text w-full h-full fixed bg-slate-500 z-50"></div> */}
          <div className="text">
            <div className="text flex w-full bg-white top-0 lg:top-0 shadow-lg items-center z-20 gap-10 sticky border py-3 px-6">
              <BsArrowLeft title='back home' onClick={handleBackArrow} className='cursor-pointer'/>
            <h1 className="text font-semibold">{state?.firstname} {state?.lastname} </h1>
            </div>
               
              <div className="text h-20 md:h-32 w-full border  bg-slate-200">
                  {/* <img src={img} alt="" className="text h-full w-full border " /> */}
              </div>
              <div className="text ">
                <div className="text relative">
                  <div className="text  absolute -translate-y-14 md:-translate-y-24 ml-5 h-28 w-28 md:h-40 md:w-40 rounded-full border-4 border-white">
                     {state?.path?
                          <img src={state?.path} alt="" className="text rounded-full w-full h-full"
                          //  loading='lazy'
                          />:
                          <>
                          {state?.gender === 'male' || state?.gender === 'Male' || state?.gender === 'MALE' ? 
                          <img src={male} alt="" className="text rounded-full w-full h-full" loading='lazy'/>:
                          <img src={female} alt="" className="text rounded-full w-full h-full" loading='lazy'/>
                    }
                          </>
                         
                     }
                  
                  </div>
                   
                </div>
                <div className='text relative flex'>
                    <div className="text-xs relative lg:text-sm w-full  pt-14 lg:pb-10 px-3 lg:px-5">
                      <h1 className="text-md font-bold py-2">{state?.firstname} {state?.lastname}</h1>
                      <p className="text-slate-600 py-1 lg:py-2">
                        <span className="text-slate-900">Student Id: </span>
                        <span className="text">{state? state.matric: 'Loading...'}</span>
                      </p>
                      <p className="text-slate-600 py-1 lg:py-2">
                        <span className="text-slate-900">Country : </span>
                        <span className="text">{state? state.country: 'Loading...'}</span>
                      </p>
                      <p className="text-slate-600 py-1 lg:py-2">
                        <span className="text-slate-900">Region : </span>
                        <span className="text">{state? state.region: 'Loading...'}</span>
                      </p>
                      <p className="text-slate-600 py-1 lg:py-2">
                        <span className="text-slate-900">City : </span>
                        <span className="text">{state? state.city: 'Loading...'}</span>
                      </p>
                      <p className="text-slate-600 py-1 lg:py-2">
                        <span className="text-slate-900">Program : </span>
                        <span className="text-">{state? state.program: 'Loading...'}</span>
                      </p>
                      <p className="text-slate-600 py-1 lg:py-2">
                        <span className="text-slate-900">Faculty : </span>
                        <span className="text">{state? state.faculty: 'Loading...'}</span>
                      </p>
                      <p className="text-slate-600 py-1 lg:py-2">
                        <span className="text-slate-900">E-mail : </span>
                        <span className="text">{state? state.email: 'Loading...'}</span>
                      </p>
                      <p className="text-slate-600 py-1 lg:py-2">
                        <span className="text-slate-900">Course : </span>
                        <span className="text">{state? state.courses: 'Loading...'}</span>
                      </p>
                      <p className="text-slate-600 py-1 lg:py-2">
                        <span className="text-slate-900">Level : </span>
                        <span className="text">{state? state.level: 'Loading...'}</span>
                      </p>
                      <p className="text-slate-600 py-1 lg:py-2">
                        <span className="text-slate-900">Contact : </span>
                        <span className="text">{state? state.contact: 'Loading...'}</span>
                      </p>
                    </div>
                    <div className='text-center absolute right-0 py-2 lg:border-l'>
                        <div className='text flex items-center gap-2 mx-auto'>
                          <div className='text px-1 lg:px-5 mx-auto'>
                              <div className='lg:text-2xl font-bold font-mono text-blue-600'>{state?.following?.length}</div>
                              <div className='text-slate-500 text-sm'>Following</div>
                          </div>|
                          <div className='text px-1 lg:px-5 mx-auto'>
                              <div className='lg:text-2xl font-bold font-mono text-blue-600'>{state?.follow?.length}</div>
                              <div className='text-slate-500 text-sm'>Follower(s)</div>
                          </div>|
                          <div className='text px-1 lg:px-5 mx-auto'>
                              <div className='lg:text-2xl font-bold font-mono text-blue-600'>{allLikes?.length}</div>
                            <div className='text-slate-500 text-sm '>Like(s)</div>
                        </div>
                        </div>
                        {state?.follow?.includes(liked)? 
                        <div onClick={handleUnFollow} className='text-white mt-4 w-2/3 mx-auto py-3 cursor-pointer text-sm lg:text-md bg-blue-500 rounded-sm hover:bg-blue-600'>Following</div>
                        :
                        <div onClick={handleFollow} className='text-white mt-4 w-2/3 mx-auto py-3 cursor-pointer text-sm lg:text-md bg-blue-500 rounded-sm hover:bg-blue-600'>Follow</div>
                        }
                    </div>
                </div>
              </div>
          </div>
        </section>
    </div>
  )
}

export default PosterDetails
