import React, {useState, useEffect} from 'react';
import { AiTwotoneLike, AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import axios from 'axios';
import { baseUrl } from '../baseUrl';
import male from "../images2/maleAvatar.jpg"
import female from "../images2/femaleAvatar.jpg"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TimestampDisplay from './TimestampDisplay';
// import { AiTwotoneLike } from 'react-icons/bi';


const Blogs = () => {
  const [likeIsTrue, setlikeIsTrue] = useState();
  const [loader, setloader] = useState(true);
  // const [commentLog, setcommentLog] = useState(true);
  const state = useSelector(state => state.users);
  const [isOptions, setisOptions] = useState(null);
  const [newsFeedArray, setnewsFeedArray] = useState([]);
  const liked = JSON.parse(sessionStorage.getItem("user_id"));
  
  
  useEffect(() => {
   axios.get(baseUrl + '/getNewsFeed').then(res => {
    setnewsFeedArray(res.data.result);
    setloader(false);
    // console.log(res);
  })
  }, [likeIsTrue]);

  const notificationActions =  (action, posterId, more) => {
    let name = state.firstname + " " + state.lastname;
    let path = state.path;
   axios.post(baseUrl + "/actions", {name, path, action, more, posterId, liked }).then(res => 
    console.log(res)).catch(error => console.log(error)); 
  }
// Handle likes functions 
const handleLikes = (post, posterId, more) => {
  axios.put(baseUrl + "/likes", {post, liked}).then(res => {
    setlikeIsTrue(res);
    notificationActions("like", posterId, more)
  }).catch(err => {
    console.log(err);
  });
}


// Handle unlikes functions 
const handleUnlikes = (post, posterId, more) => {
  axios.put(baseUrl + "/unlike", {post, liked}).then(res => {
    setlikeIsTrue(res);
    notificationActions("unlike", posterId, more);
  }).catch(err => {
    console.log(err);
  });
}


// Handle conmment functions 
  const handleComments = (e) => {
    console.log(e);
  }
// Handle follow functions 
  const handleFollow = (posterId, more) => {
    axios.put(baseUrl + "/follow", {posterId, liked}).then(res => {
      setlikeIsTrue(res);
      notificationActions("following", posterId, more);
    }).catch(err => {
      console.log(err);
    });

  }

// Handle unfollow functions 
  const handleUnFollow = (posterId, more) => {
    axios.put(baseUrl + "/unfollow", {posterId, liked}).then(res => {
      setlikeIsTrue(res);
      notificationActions("unfollowed", posterId, more);
    }).catch(err => {
      console.log(err);
    });
  }

// Handle conmment functions 
  const handleDeletePost = (id) => {
    if(window.confirm("Are you sure you want to delete this?")){
      axios.post(baseUrl + "/deletePost", {id}).then(res => {
        alert(`${ res.data.result.deletedCount  } Item(s) Deleted`);
  })
  }else{
    alert("Delete Canclled")
  }
  }
  const handleOption = (e) => {
    if(isOptions === e) return setisOptions(null);
    setisOptions(e);
    
  };
  return (
    <div className="text bg-slate-200 py-8">
    <div className='w-full sm:w-3/4 md:w-3/5 mx-auto lg:w-3/5 lg:px-20'>
       <div className="text mt-10">
        {newsFeedArray.map((value, index) => (
          <>
          {!loader ? 
            <div className="text bg-white my-3 py-5 rounded-lg">
                <div className="text px-4 lg:px-10 my-3 flex relative items-center  justify-between">
                  <div className="text  flex items-center">
                  {value?.senderImg? 
                       <img src={value?.senderImg}  alt="value?_image" className="text w-10 h-10 rounded-full border" />:
                      <>
                      {value?.gender === 'male' || value?.gender === 'Male' || value?.gender === 'MALE' ? 
                           <img src={male}  alt="value?_image" className="text w-10 h-10 rounded-full border" />:
                           <img src={female}  alt="value?_image" className="text w-10 h-10 rounded-full border" />
                    }
                      
                      </>
                    }
                    <div className="text relative grid">
                      <span className="text-sm lg:text-lg mx-6">{ value?.firstname } {value?.lastname}</span>
                      <span className="text-xs font-semibold text-slate-500 absolute mt-5 ml-6"> <TimestampDisplay timestamp={value.createdAt} /></span>
                    </div>
                  </div>
                  <div  className="text  flex items-center" onClick={() =>handleOption(index)}>
                    <BiDotsHorizontalRounded title='options' className='text-2xl cursor-pointer '/>
                  <div className={` ${isOptions === index?  '' : 'hidden'} w-2/5 sm:w-1/3 md:w-1/3 lg:w-2/5 xl:w-1/3 absolute -translate-x-28 sm:-translate-x-28 md:-translate-x-36 lg:-translate-x-28 xl:-translate-x-40 shadow-lg ${value.user_id === liked? "mt-28" : "mt-40"}  bg-white rounded-lg border `}>
                        <ul className="text">
                          {value.follow.includes(liked)? 
                          <li className={`text cursor-pointer ${value.user_id === liked && 'hidden'} px-5  py-2 hover:bg-blue-600 bg-blue-500 text-white font-bold`} onClick={() =>handleUnFollow(value.user_id, value.more)}>Following</li>
                          :
                          <li className={`text cursor-pointer ${value.user_id === liked && 'hidden'} px-5  py-2 hover:bg-slate-100 `} onClick={() =>handleFollow(value.user_id, value.more)}>Follow</li>
                          }

                            <Link to={`/portal/blog/details/${value.user_id}`}>
                               <li className={`text cursor-pointer px-5 my-2 py-2 hover:bg-slate-100 ${value.user_id === liked && 'hidden'}`} >View Profile</li>
                            </Link>
                          <li className={`text cursor-pointer px-5 ${value.user_id === liked? "" : "hidden"}  py-2 hover:bg-red-300 text-red-600 bg-red-50 border-t border-red-500`} onClick={() =>handleDeletePost(value._id)}>Delete</li>
                        </ul>
                  </div>
                  </div>
                </div>
               <hr />
               <div className="text w-full md:h-96 h-80">
                      <img src={value?.path}  alt="users_image" className="text w-full h-full  border" />
                </div>
                  <div className="text-slate-700 px-5 pb-5 border-b mt-5 text-sm lg:text-lg">{value?.more}</div>
                <div className="text px-10 flex justify-between py-3 items-center">
                    <div className="text flex items-center ">
                        <span className="text-lg ">{value?.likes.length}</span>
                        <span className="text-sm mx-1">Like(s)</span>
                    </div>
                  <div className="text ">
                        <span className="text-lg">{value?.comments.length } </span>
                        <span className="text-sm  ">Comment(s)</span>
                  </div>
               </div>
               <hr />
               <div className="text flex justify-around items-center pt-3 gap-3 px-5">
                {value.likes.includes(liked)?
                  <button title='Like' onClick={() =>handleUnlikes(value._id, value.user_id, value.more)}  className="text-center hover:bg-gray-100 w-1/2 rounded-lg">
                      <div className={`text-center rounded-lg py-1 bg-gray-100  text-blue-500 flex items-center justify-center gap-3`}>
                        <AiTwotoneLike className='text-2xl'/>
                        <span className="text">Liked</span>
                      </div>
                  </button>:
                  <button title='Like' onClick={() =>handleLikes(value._id, value.user_id, value.more)}  className="text-center hover:bg-gray-100 w-1/2 rounded-lg">
                    <div className={`text-center flex py-1 rounded-lg  hover:bg-gray-100 items-center justify-center gap-3`}>
                      <AiOutlineLike className='text-2xl'/>
                      <span className="text">Like</span>
                    </div>
                </button>
                }
                <Link to={`/portal/users/comment/${value._id}`} title='Comment' className="text-center hover:bg-gray-100 w-1/2 rounded-lg py-1 ">
                <div className="text-center flex items-center justify-center gap-4">
                    <FaRegCommentAlt  className='text-xl  '/>
                    <span className="text">Comment</span>
                </div>
                </Link>
               </div>
            </div>:

            <div className="text bg-white my-3 py-2 rounded-lg ">
                <div className="text px-10 my-3 flex relative items-center  justify-between">
                  <div className="text w-4/5 flex items-center animate-pulse text-neutral-400">
                      <span className="text w-10 h-10 rounded-full bg-slate-400"></span>
                      <span className="text ml-6  w-2/3 py-4 bg-slate-400"></span>
                  </div>
                  <div  className="text animate-pulse flex items-center" onClick={() =>handleOption(index)}>
                    <BiDotsHorizontalRounded title='options' className='text-2xl cursor-pointer text-slate-400'/>
                  </div>
                </div>
               <hr />
               <div className="text w-full md:h-96 h-80 flex justify-center items-center">
                <div className="text-white text-2xl w-full h-full  border bg-slate-400 animate-pulse flex justify-center items-center font-bold">Buffering...</div>
              </div>
              <div className="text-slate-400 px-5 border-b mt-5  animate-pulse bg-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, odio itaque! Aspernatur 
              </div>
                <div className="text px-10 flex justify-between py-3 items-center">
                    <div className="text-slate-400 bg-slate-400 animate-pulse flex items-center ">
                        <span className="text-lg ">{value?.likes.length}</span>
                        <span className="text-sm mx-1">Like(s)</span>
                    </div>
                  <div className="text-slate-400 bg-slate-400 animate-pulse ">
                        <span className="text-lg">{value?.comments.length } </span>
                        <span className="text-sm  ">Comment(s)</span>
                  </div>
               </div>
               <hr />
               <div className="text flex justify-around items-center pt-3 gap-3 px-5">
                  <button title='Like' onClick={() =>handleLikes(index, value._id, value.user_id)}  className="text-center text-slate-400 bg-slate-400 animate-pulse hover:bg-gray-100 w-1/2 rounded-lg">
                    <div className={`text-center flex py-1 rounded-lg  hover:bg-gray-100 items-center justify-center gap-3`}>
                      <AiOutlineLike className='text-2xl'/>
                      <span className="text">Like</span>
                    </div>
                </button>
                <button title='Comment' onClick={() =>handleComments(value.comments)} className="text-center text-slate-400 bg-slate-400 animate-pulse hover:bg-gray-100 w-1/2 rounded-lg py-1 ">
                <div className="text-center flex items-center justify-center gap-4">
                    <FaRegCommentAlt  className='text-xl  '/>
                    <span className="text">Comment</span>
                </div>
                </button>
               </div>
            </div>
                  }
          </>
        ))
      }

       </div>
    </div>
</div>
  )
}

export default Blogs
