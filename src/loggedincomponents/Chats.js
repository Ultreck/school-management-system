import React, {useEffect, useRef, useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import img from '../images2/background.jpg';
import img2 from '../images2/pattern.avif'
import { BsThreeDotsVertical, BsArrowLeft, BsMicFill, BsEmojiLaughing} from "react-icons/bs";
import { IoIosInformationCircle, IoMdSend } from "react-icons/io";
import Emojis from './Emojis';
import axios from 'axios';
import { baseUrl } from '../baseUrl';
import {io} from "socket.io-client";
import {EmojiClickData, MouseEvent} from 'emoji-picker-react';


const Chats = ({isTrue}) => {
      const [presentUser, setpresentUser] = useState({});
      // const [emoji, setemoji] = useState(false);
      // const [inputStr, setinputStr] = useState('');
      const [arrivalMessage, setarrivalMessage] = useState(null);
      const [getMessage, setgetMessage] = useState([]);
      const [msgChatsClients, setmsgChatsClients] = useState('');
      const [showPicker, setshowPicker] = useState(false);
      const user_id = JSON.parse(sessionStorage.getItem("user_id"));
      const {id} = useParams();
      const user =  useSelector(state => state.datas);
      const navigate = useNavigate();
      const scrollRef = useRef();
      const socket =  useRef();

      useEffect(() => {
            if(presentUser !== {}){
                  socket.current = io(baseUrl);
                  socket.current.emit("addUser", user_id)
            }
      }, [presentUser, user_id]);

      useEffect(() => {
            scrollRef.current?.scrollIntoView({behavior: 'smooth'})
      }, [getMessage])
      
      useEffect(() => {
            // console.log(isTrue);
            let [found] = user.filter((value,) => (value._id === id));
            setpresentUser(found);

            axios.get(`${baseUrl}/get/chat/msg/${user_id}/${id}`).then(res => {
                  setgetMessage(res.data);
            }).catch(err => {
                  console.log(err);
            });
      }, [id, user_id, user]);




      const handleBackArr = () => {
            localStorage.setItem("chatIsTrue", JSON.stringify(false))
            navigate('/portal/chat/');
      }
      // const handleEmoji = () => {
      //       setemoji(!emoji)
      // };
      
      const onEmojiClick = (EmojiClickData, MouseEvent) => {
            setmsgChatsClients(prevInput => prevInput + EmojiClickData.emoji);
            setshowPicker(false);
            console.log(EmojiClickData);
            console.log(msgChatsClients);
      };

      const handleSend = (e) => {
            e.preventDefault();
            // const messg = {
            //       mySelf: true,
            //       message: msgChatsClients
            // };
            socket.current.emit("send-msg", {fro: user_id, to:id, message: msgChatsClients})
          axios.post(baseUrl + '/msg', {fro: user_id, to:id, message: msgChatsClients}).then(res => {
            axios.get(`${baseUrl}/get/chat/msg/${user_id}/${id}`).then(res => {
                  setgetMessage(res.data);
            }).catch(err => {
                  console.log(err);
            });
          }).catch(err => {
            console.log(err);
          })
          setmsgChatsClients("");
      //     setgetMessage(getMessage.concat(messg));
      //     console.log(getMessage);
      };
      useEffect(() => {
            if(socket.current){
                  socket.current.on("msg-receive", (msg) => {
                        setarrivalMessage({
                              mySelf:false,
                              message:msg
                        })
                  })
            }
      }, [arrivalMessage]);

      useEffect(() => {
            arrivalMessage && setgetMessage(pre => [...pre, arrivalMessage])
      }, [arrivalMessage])
      
      


  return (
    <div className='w-full h-full'>
            <div className="text  bg-white h-screen overflow-auto" style={{backgroundImage: `url(${img2})`}}>
                  <>
                  <nav className="text-white bg-blue-900 px-8 py-2 fixed w-full lg:w-3/4 flex justify-between">
                        <div className="text flex items-center gap-3">
                                    <BsArrowLeft className='text-xl mr-5 cursor-pointer'  title='Leave chat'onClick={handleBackArr} />
                              <div className="text w-10 h-10 rounded-full border-2 border-white bg-white">
                                    <img src={img} alt="" className="text w-full h-full rounded-full" />
                              </div>
                              <p className="text">{presentUser?.firstname } { presentUser?.lastname}</p>
                        </div>
                        <div className="text flex items-center">
                                    <BsThreeDotsVertical className='text-xl cursor-pointer'  title='oprions'/>
                        </div>
                  </nav>
            </>

                  <div className="text px-5 py-14 w-full h-full">
                        <div className="text  bottom-20">
                              <div className="text flex w-full py-2 my-10 bg-blue-200 border-l-8 border-blue-900 rounded-lg px-5">
                              <IoIosInformationCircle className='text-blue-900 mx-2 w-5 h-5'/>
                                    <p className="text-sm">
                                    Message are end-to-end encrypted. No one outside of this chat, not even EduTechChat , can read or listen to them.
                                    </p>
                              </div>
                              <div className="text w-full">
                                    <div className="text-sm pb-20 w-full">
                                          {getMessage.map((value, index) => (
                                                <>
                                                      <div ref={scrollRef} key={value._id}>
                                                      {value.mySelf?
                                                      <>
                                                      <div className="text px-3 lg:px-5 lg:w-2/5 w-2/3 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl  ml-auto  bg-blue-200 py-3  my-1  border">{value.message}</div>
                                                      </>:
                                                      <>
                                                      <div className="text px-3 lg:px-5 lg:w-2/5 w-2/3 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl bg-slate-200 py-3  mt-1  border">{value.message}</div>
                                                      </>
                                                      }
                                                      </div>
                                                </>
                                          ))}
                                    </div>
                              </div>

                        </div>

                  </div>
                  <div className='w-full mx-auto'>
                        {showPicker && 
                        <Emojis onEmojiClick={onEmojiClick}/>
                        }
                  </div>
                  <div className="text w-full relative">
                        <nav className="text-center px-5 bg-blue-900 w-full lg:w-3/4 py-3 bottom-0 flex fixed">
                              <div className="text-center flex justify-center items-center w-1/12">
                                    <BsEmojiLaughing onClick={() => setshowPicker(!showPicker)} className='text-xl text-white cursor-pointer' title='emoji'/>
                              </div>
                              <form action="" className="text w-10/12 flex" onSubmit={handleSend}>
                                    <div className="text w-11/12">
                                          <input type="text" className="text w-full py-2 rounded-lg px-5" placeholder='Type a message' value={msgChatsClients} onChange={(e) =>setmsgChatsClients(e.target.value)} />
                                    </div>
                                    <button  className="text-center flex justify-center items-center w-1/12 lg:bg-green-600 rounded-full mx-1 ">
                                          <IoMdSend className='text-xl text-white cursor-pointer' title='send'/>
                                    </button>
                              </form>
                              <div className="text-center flex justify-center items-center w-1/12">
                                    <BsMicFill className='text-xl text-white cursor-pointer' title='mic'/>
                              </div>
                        </nav>
                  </div>
            </div>
      
    </div>
  )
}

export default Chats
