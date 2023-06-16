import React, {useState} from 'react'
import ChatsSideNav from '../loggedincomponents/ChatsSideNav'
// import Chats from '../loggedincomponents/Chats'
import { Outlet, Route, Routes } from 'react-router-dom'
import ChatsHome from '../loggedincomponents/ChatsHome';


const ChatsPage = () => {
      // const [isTrue, setisTrue] = useState(false);
      // console.log(isTrue);
  return (
    <div>
            <div className="text flex m-0 p-0 w-full bg-gray-200">
                  <div className="text border w-full sm:w-2/3  mx-auto lg:w-1/4 h-screen overflow-hidden"><ChatsSideNav/></div>
                  <div className="text border hidden lg:flex lg:w-3/4 h-screen overflow-hidden">
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
