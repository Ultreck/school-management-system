import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import img from '../images2/background.jpg';
import img2 from '../images2/pattern.avif'
import { BsThreeDotsVertical, BsArrowLeft, BsMicFill, BsEmojiLaughing} from "react-icons/bs";
import { IoIosInformationCircle, IoMdSend } from "react-icons/io";
import Emojis from './Emojis';
import axios from 'axios';
import { baseUrl } from '../baseUrl';


const Chats = ({isTrue}) => {
      const [presentUser, setpresentUser] = useState({});
      // const [emoji, setemoji] = useState(false);
      const [inputStr, setinputStr] = useState('');
      const [getMessage, setgetMessage] = useState([]);
      const [msgChatsClients, setmsgChatsClients] = useState('');
      const [showPicker, setshowPicker] = useState(false);
      // const [sender, setsender] = useState([]);
      // const [receiver, setreceiver] = useState([]);
      const user_id = JSON.parse(sessionStorage.getItem("user_id"));
      const {id} = useParams();
      const user =  useSelector(state => state.datas);
      const navigate = useNavigate()
      useEffect(() => {
            // console.log(isTrue);
            let [found] = user.filter((value,) => (value._id === id));
            setpresentUser(found);

            axios.get(`${baseUrl}/get/chat/msg/${user_id}/${id}`).then(res => {
                  // let senderMsg = res.data.filter((value, index) => (value.mySelf === true));
                  // let receiverMsg = res.data.filter((value, index) => (value.mySelf === false));
                  // setsender(senderMsg);
                  // setreceiver(receiverMsg);
                  console.log(res.data);
                  setgetMessage(res.data);
            }).catch(err => {
                  console.log(err);
            });
      }, [id, user_id, user]);

      const handleBackArr = () => {
            navigate('/portal/chat/');
      }
      // const handleEmoji = () => {
      //       setemoji(!emoji)
      // };

      const onEmojiClick = (event, emojiObject) => {
            setinputStr(prevInput => prevInput + emojiObject.emoji);
            setshowPicker(false);
      };

      const handleSend = (e) => {
            e.preventDefault();
            // const messg = {
            //       mySelf: true,
            //       message: msgChatsClients
            // };
          axios.post(baseUrl + '/msg', {fro: user_id, to:id, message: msgChatsClients}).then(res => {
            console.log(res);
            axios.get(`${baseUrl}/get/chat/msg/${user_id}/${id}`).then(res => {
                  console.log(res.data);
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


  return (
    <div className='w-full h-full'>
            <div className="text   h-screen overflow-auto" style={{backgroundImage: `url(${img2})`}}>
                  <>
                  <nav className="text-white bg-blue-900 px-8 py-2 fixed w-3/4 flex justify-between">
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
                                    <p className="text">
                                    Message are end-to-end encrypted. No one outside of this chat, not even WhatsApp , can read or listen to them.
                                    </p>
                              </div>
                              <div className="text w-full">
                                    <div className="text pb-20 w-full">
                                          {getMessage.map((value, index) => (
                                                <>
                                                      <>
                                                      {value.mySelf?
                                                      <>
                                                      <div className="text px-5 w-2/5 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl  ml-auto  bg-blue-200 py-3  my-1  border">{value.message}</div>
                                                      </>:
                                                      <>
                                                      <div className="text px-5 w-2/5 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl bg-slate-200 py-3  mt-1  border">{value.message}</div>
                                                      </>
                                                      }
                                                      </>
                                                </>
                                          ))}
                                    </div>
                                    {/* <div className="text">
                                    {hi.map((value, index) => (
                                                <>
                                                <div className="text">{value}</div>
                                                </>
                                          ))}
                                    </div> */}
                              </div>

                        </div>

                  </div>
                  <div 
                  // className={`${emoji? '' : 'hidden'}`}
                  >
                        {showPicker && 
                        <Emojis onEmojiClick={onEmojiClick}/>
                        }
                  </div>
                  <div className="text w-full relative">
                        <nav className="text-center px-5 bg-blue-900 w-3/4 py-3 bottom-0 flex fixed">
                              <div className="text-center flex justify-center items-center w-1/12">
                                    <BsEmojiLaughing onClick={(e) => setinputStr(e.target.value)} className='text-xl text-white cursor-pointer' title='emoji'/>
                              </div>
                              <form action="" className="text w-10/12 flex" onSubmit={handleSend}>
                                    <div className="text w-11/12">
                                          <input type="text" className="text w-full py-2 rounded-lg px-5" placeholder='Type a message' value={msgChatsClients} onChange={(e) =>setmsgChatsClients(e.target.value)} />
                                    </div>
                                    <button  className="text-center flex justify-center items-center w-1/12 bg-green-600 rounded-full mx-1 hover:bg-green-500">
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
