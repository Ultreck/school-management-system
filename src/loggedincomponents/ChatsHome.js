import React from 'react';
import img2 from '../images2/Online world-amico.png';

const ChatsHome = () => {
  return (
    <div>
        <div className="text w-full h-full flex justify-center items-center">
                        <div className="text-center w-full h-full lg:ml-5 p-32 xl:ml-28 mx-auto">
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
