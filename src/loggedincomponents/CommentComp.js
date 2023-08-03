import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../baseUrl';
import male from "../images2/maleAvatar.jpg";
import female from "../images2/femaleAvatar.jpg";
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiTwotoneLike, AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import {BsArrowLeft, BsMicFill, BsEmojiLaughing} from "react-icons/bs";
import { IoMdSend, IoMdChatbubbles, IoMdSchool } from "react-icons/io";
import { useSelector } from 'react-redux';
import EmojiPicker from 'emoji-picker-react';
import {TbReload } from "react-icons/tb";
import TimestampDisplay from './TimestampDisplay';

const CommentComp = () => {
      const [currentPost, setcurrentPost] = useState({});
      const [likeIsTrue, setlikeIsTrue] = useState();
      const [option, setoption] = useState(false);
      const [loader, setloader] = useState(true);
      const [user, setuser] = useState({});
      // const [update, setupdate] = useState(false);
      const [comment, setcomment] = useState("");
      const [showPicker, setshowPicker] = useState(false);
      const {id} = useParams();
      const navigate = useNavigate();
      const state = useSelector(state => state.datas)
      const liked = JSON.parse(sessionStorage.getItem("user_id"));
      
      useEffect(() => {
            axios.get(baseUrl + '/getNewsFeed').then(res => {
                 let [found] = res.data.result.filter(value => value._id === id)
                  setcurrentPost(found);
                  setloader(false);
            })
      }, [likeIsTrue, id]);
      
      useEffect(() => {
            let [found] = state.filter((value,) => (value._id === liked));
            setuser(found);
            //   console.log(currentPost);
            //   console.log(found);
      }, [state, liked]);

      const notificationActions =  (action) => {
            let name = user.firstname + " " + user.lastname;
            let path = user.path;
            let posterId = currentPost.user_id;
            let more = currentPost.more;
           axios.post(baseUrl + "/actions", {name, path, action, more, posterId, liked })
           .then(res => console.log(res))
           .catch(error => console.log(error)); 
          }

      const handleSend = (e) => {
            let fullName = user.firstname + " " + user.lastname;
            let path = user.path;
            let gender = user.gender;
            e.preventDefault();
          axios.put(baseUrl + '/comment', {id, comment, liked, fullName, path, gender}).then(res => {
            setlikeIsTrue(res);
            notificationActions("comment");
          }).catch(err => {
            console.log(err);
          })
          setcomment("");
      //     console.log(getMessage);
      };


// Handle likes functions
const handleLikes = (post, poster) => {
      axios.put(baseUrl + "/likes", {post, poster, liked}).then(res => {
            setlikeIsTrue(res);
            notificationActions("like");
      }).catch(err => {
            console.log(err);
      });
}


// Handle unlikes functions 
const handleUnlikes = (post, poster) => {
      axios.put(baseUrl + "/unlike", {post, poster, liked}).then(res => {
        setlikeIsTrue(res);
        notificationActions("unlike");
      }).catch(err => {
        console.log(err);
      })
    }

const handleOption= () => {
      setoption(!option);
}

// Handle follow functions 
const handleFollow = (postId, userId) => {
      axios.put(baseUrl + "/follow", {postId, userId, liked}).then(res => {
        setlikeIsTrue(res);
        notificationActions("following");
      }).catch(err => {
        console.log(err);
      })
    }
  
  // Handle unfollow functions 
    const handleUnFollow = (postId, userId) => {
      axios.put(baseUrl + "/unfollow", {postId, userId, liked}).then(res => {
        setlikeIsTrue(res);
        notificationActions("unfollowed");
      }).catch(err => {
        console.log(err);
      })
    }

const handleViewProfile= () => {

}
const handleDeletePost= () => {

}
const onEmojiClick = (EmojiClickData, MouseEvent) => {
      setcomment(prevInput => prevInput + EmojiClickData.emoji);
      setshowPicker(false);
      console.log(EmojiClickData);
      console.log(comment);
};

 // Handle back arrow function
 const handleBackArrow = () => {
      navigate('/portal/blog');
      localStorage.setItem('active', JSON.stringify(0));
    };

  return (
    <div className="bg-gray-100/50">
      <div className="w-full relative sm:w-3/4 md:w-3/5 mx-auto lg:w-2/5  border">
            <div className="text flex bg-white fixed w-full sm:w-3/4 md:w-3/5 mx-auto lg:w-2/5  items-center z-20 gap-10 top-0 border py-3 px-6">
              <BsArrowLeft title='back home' onClick={handleBackArrow} className='cursor-pointer'/>
            <h1 className="text font-semibold">{currentPost.firstname} {currentPost.lastname} </h1>
            </div>
      </div>
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
      <div className='w-full sm:w-3/4 pt-7 md:w-3/5 mx-auto lg:w-2/5 border overflow-auto scroll-smooth'>
            <div className="text">
            <div className="text bg-white mt-3 pb-5 rounded-lg">
                  {loader}
                <div className="text px-10 py-3 flex relative items-center  justify-between">
                  <div className="text py-1 flex items-center ">
                  {currentPost?.senderImg? 
                       <img src={currentPost?.senderImg}  alt="value?_image" className="text w-10 h-10 rounded-full border" />:
                      <>
                      {currentPost?.gender === 'male' || currentPost?.gender === 'Male' || currentPost?.gender === 'MALE' ? 
                           <img src={male}  alt="value?_image" className="text w-10 h-10 rounded-full border" />:
                           <img src={female}  alt="value?_image" className="text w-10 h-10 rounded-full border" />
                    }
                      
                      </>
                    }
                    
                      <span className="text mx-3">{ currentPost?.firstname } {currentPost?.lastname}</span>
                  </div>
                  <div  className="text  flex items-center" onClick={handleOption}>
                    <BiDotsHorizontalRounded title='options' className='text-2xl cursor-pointer '/>
                    <div className={` ${option?  '' : 'hidden'} w-2/5 sm:w-1/3 md:w-1/3 lg:w-2/5 xl:w-1/3 absolute -translate-x-28 sm:-translate-x-28 md:-translate-x-36 lg:-translate-x-28 xl:-translate-x-40 shadow-lg ${currentPost.user_id === liked? "mt-28" : "mt-40"}  bg-white rounded-lg border `}>
                        <ul className="text">
                          {currentPost.follow?.includes(liked)? 
                          <li className={`text cursor-pointer ${currentPost.user_id === liked && 'hidden'} px-5  py-2 hover:bg-blue-600 bg-blue-500 text-white font-bold`} onClick={() =>handleUnFollow(currentPost._id, currentPost.user_id)}>Following</li>
                          :
                          <li className={`text cursor-pointer ${currentPost?.user_id === liked && 'hidden'} px-5  py-2 hover:bg-slate-100 `} onClick={() =>handleFollow(currentPost._id, currentPost.user_id)}>Follow</li>
                          }

                          <Link to={`/portal/blog/details/${currentPost?.user_id}`}>
                          <li className={`text cursor-pointer px-5 my-2 py-2 hover:bg-slate-100 ${currentPost.user_id === liked && 'hidden'}`} onClick={() =>handleViewProfile(currentPost._id)}>View Profile</li>
                          </Link>
                          <li className={`text cursor-pointer px-5 ${currentPost?.user_id === liked? "" : "hidden"}  py-2 hover:bg-slate-100 text-red-600 bg-red-50 border-t border-red-500`} onClick={() =>handleDeletePost(currentPost._id)}>Delete</li>
                        </ul>
                  </div>
                  </div>
                </div>
               <hr />
               <div className="text w-full md:h-96 h-80">
                      <img src={currentPost?.path}  alt="users_image" className="text w-full h-full  border" />
                </div>
                  <div className="text-gray-600 text-sm lg:text-md px-5 border-b mt-5 pb-5">{currentPost?.more}</div>
                <div className="text px-10 flex justify-between py-3 items-center">
                    <div className="text flex items-center ">
                        <span className="text-lg ">{currentPost.likes?.length}</span>
                        <span className="text-sm mx-1">Like(s)</span>
                    </div>
                  <div className="text ">
                        <span className="text-lg">{currentPost.comments?.length } </span>
                        <span className="text-sm  ">Comment(s)</span>
                  </div>
               </div>
               <hr />
               <div className="text flex justify-around items-center pt-3 gap-3 px-5">
                {
               currentPost.likes?.includes(liked)?
                  <button title='Like' onClick={() =>handleUnlikes(currentPost._id, currentPost.user_id)}  className="text-center hover:bg-gray-100 w-1/2 rounded-lg">
                      <div className={`text-center rounded-lg py-1 bg-gray-50  text-blue-700 flex items-center justify-center gap-3`}>
                        <AiTwotoneLike className='text-2xl'/>
                        <span className="text">Liked</span>
                      </div>
                  </button>
                     : 
                  <button title='Like' onClick={() =>handleLikes( currentPost._id, currentPost.user_id)}  className="text-center hover:bg-gray-100 w-1/2 rounded-lg">
                    <div className={`text-center flex py-1 rounded-lg  hover:bg-gray-100 items-center justify-center gap-3`}>
                      <AiOutlineLike className='text-2xl'/>
                      <span className="text">Like</span>
                    </div>
                </button>
                } 
                <div className="text-center w-1/2 rounded-lg py-1 ">
                <div className="text-center flex items-center justify-center gap-4">
                    <FaRegCommentAlt  className='text-xl text-slate-400  '/>
                    <span className="text text-slate-400">Comment</span>
                </div>
                </div>
               </div>
            </div>
            {currentPost.comments?.length > 0 ?
            <div className={`pb-5 ${currentPost.comments? "mb-10":"mb-5"} bg-white`}>
                {currentPost.comments?.map((msg, index) => (
                      <>
                  <div className="text relative" key={msg._id}>
                        <div className="text py-3 flex px-5 items-center">
                              <div className="text -mt-7 w-10 h-10 rounded-full border mr-4">
                                    {msg?.path? 
                                    <img src={msg.path} alt="" className="text w-full h-full rounded-full" />:
                                    <>
                                    {msg?.gender === 'male' || msg?.gender === 'Male' || msg?.gender === 'MALE' ? 
                                    <img src={msg.path} alt="" className="text w-full h-full rounded-full" />:
                                          <img src={msg.path} alt="" className="text w-full h-full rounded-full" />
                                    }
                                    
                                    </>
                              }
                        </div>
                        <div className="text mb-10 bg-gray-100 py-3 px-5 relative rounded-lg"> 
                        <h1 className="text-sm lg:text-md font-bold">{msg.fullName}</h1>
                        <span className="text-slate-800 text-sm">{msg.text}</span>
                        <span className="text-slate-800 text-xs absolute -bottom-5 left-0">
                              <TimestampDisplay timestamp={currentPost.comments[index].createdAt}/>
                        </span>
                        </div>
                        </div>
                  </div>
                  </>
                ))}
            </div>:
            <div className="text pb-10 h-60 grid justify-center items-center">
                  <div className="text-center">
                        <div className="text-center">
                              <IoMdChatbubbles className='text-6xl mx-auto text-gray-600'/>
                        </div>
                        <p className="text-gray-400 italic text-sm lg:text-md">Be the first to comment.</p>
                  </div>
            </div>
                        }
            <div className=' fixed bottom-0 w-full sm:w-3/4 pt-7 md:w-3/5 mx-auto lg:w-2/5'>
                        {showPicker && 
                        <EmojiPicker width={`100%`} onEmojiClick={onEmojiClick}/>
                        }
            </div>
            <div className="text w-full border-t-2 sm:w-3/4 md:w-3/5 mx-auto lg:w-2/5 h-16 bg-gray-100 fixed bottom-0">
                        <nav className="text flex mt-3">
                              <div className="text-center flex justify-center items-center w-1/12">
                                    <BsEmojiLaughing onClick={() => setshowPicker(!showPicker)} className='text-xl text-blue-700 cursor-pointer' title='emoji'/>
                              </div>
                              <form action="" className="text w-10/12 flex" onSubmit={handleSend}>
                                    <div className="text w-11/12">
                                          <input type="text" className="text w-full py-2 rounded-lg px-5" placeholder='Type your comment...' value={comment} onChange={(e) =>setcomment(e.target.value)} />
                                    </div>
                                    <button  className="text-center flex justify-center items-center w-1/12 rounded-full mx-1 ">
                                          <IoMdSend className='text-xl text-blue-700 cursor-pointer' title='send'/>
                                    </button>
                              </form>
                              <div className="text-center flex justify-center items-center w-1/12">
                                    <BsMicFill className='text-xl text-blue-700 cursor-pointer' title='mic'/>
                              </div>
                        </nav>
            </div>
            </div>
      </div>
    </div>
    )
}

export default CommentComp
