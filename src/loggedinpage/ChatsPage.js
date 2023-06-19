import React, {useState, useEffect} from 'react'
import ChatsSideNav from '../loggedincomponents/ChatsSideNav'
// import Chats from '../loggedincomponents/Chats'
import { Outlet, Route, Routes } from 'react-router-dom'
import ChatsHome from '../loggedincomponents/ChatsHome';
import SmallScreenChatSideNav from '../loggedincomponents/SmallScreenChatSideNav';


const ChatsPage = () => {
      const [chatIsTrue, setchatIsTrue] = useState();
      // const [inputSearch, setinputSearch] = useState('');
      // const [searchData, setsearchData] = useState([]);

     
useEffect(() => {
            setchatIsTrue(JSON.parse(localStorage.getItem("chatIsTrue")));
}, [])


  return (
    <div>
            <div className="text flex m-0 p-0 w-full bg-white overflow-hidden fixed">
                  <div className="text border hidden lg:flex w-full sm:w-2/3  mx-auto lg:w-1/4 h-screen overflow-hidden">
                        <ChatsSideNav/>
                  </div>
                  <div className={`text border w-full lg:hidden ${chatIsTrue ? "hidden" : ""}  sm:w-2/3  mx-auto lg:w-1/4 h-screen overflow-hidden`}>
                        <SmallScreenChatSideNav setchatIsTrue={setchatIsTrue} chatIsTrue={chatIsTrue}/>
                  </div>
                  <div className="text border lg:w-3/4 h-screen overflow-hidden">
                        <Routes>
                              <Route path='/' element={<ChatsHome/>}/>
                        </Routes>
                        <Outlet/>
                  </div>
                 
            </div>
    </div>
  )
}

export default ChatsPage
