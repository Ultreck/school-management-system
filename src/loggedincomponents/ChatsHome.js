import React from 'react';
import img2 from '../images2/Online world-amico.png';

const ChatsHome = () => {
  return (
    <div className='bg-slate-200'>
        <div className="text w-0 lg:w-3/4 mx-auto hidden lg:flex justify-center items-center  h-screen ">
                        <div className="text-center w-full h-full px-36 py-32 mx-auto">
                              <img src={img2} alt="" className="text w-full h-full " />
                              <div className="text">
                                    <h1 className="text-3xl font-bold text-slate-600">EduTech Web Chat</h1>
                                    <p className="text-slate-600">Send and receive messages with end to end encription any time anywhere.</p>
                              </div>
                        </div>
                  </div>
    </div>
  )
}

export default ChatsHome
