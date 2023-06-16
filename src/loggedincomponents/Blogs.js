import React, {useState, useEffect} from 'react';
import { AiFillLike, AiTwotoneLike, AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import axios from 'axios';
import { baseUrl } from '../baseUrl';
// import { AiTwotoneLike } from 'react-icons/bi';


const Blogs = () => {
  const [isTrue, setisTrue] = useState();
  const [likes, setlikes] = useState();
  const [isOptions, setisOptions] = useState(null);
  const [newsFeedArray, setnewsFeedArray] = useState([]);

  useEffect(() => {
    if(localStorage.isTrue){
      setisTrue(JSON.parse(localStorage.getItem("isTrue")));
    }
   axios.get(baseUrl + '/getNewsFeed').then(res => {
    setnewsFeedArray(res.data.result);
   })
  }, [])
  

  const handleLikes = (e) => {
    setlikes(e);
    localStorage.setItem("isTrue", JSON.stringify(!isTrue))
    setisTrue(JSON.parse(localStorage.getItem('isTrue')));
  }
  const handleComments = () => {
    
  }
  const handleOption = (e) => {
    if(isOptions === e) return setisOptions(null);
    setisOptions(e);
    
  };
  return (
    <div className="text bg-slate-200 py-8">
    <div className='w-full md:w-4/5 mx-auto lg:w-3/5 lg:px-20'>
       <div className="text mt-10">
        {newsFeedArray.map((value, index) => (
          <>
            <div className="text bg-white my-3 py-5 rounded-lg">
                <div className="text px-10 my-3 flex relative items-center  justify-between">
                  <div className="text  flex items-center">
                      <img src={value?.path}  alt="users_image" className="text w-10 h-10 rounded-full border" />
                      <span className="text mx-6">{ value?.firstname } {value?.lastname}</span>
                  </div>
                  <div  className="text  flex items-center" onClick={() =>handleOption(index)}>
                    <BiDotsHorizontalRounded title='options' className='text-2xl cursor-pointer '/>
                  <div className={`text-center ${isOptions === index?  '' : 'hidden'} w-1/2 lg:w-1/4 absolute -translate-x-28 mt-40 shadow-lg  bg-white rounded-lg border `}>
                        <ul className="text">
                          <li className="text cursor-pointer  py-2 hover:bg-slate-100 ">Follow</li>
                          <li className="text cursor-pointer my-2 py-2 hover:bg-slate-100 ">Save</li>
                          <li className="text cursor-pointer  py-2 hover:bg-slate-100 ">Delete</li>
                        </ul>
                  </div>
                  </div>
                </div>
               <hr />
                <div className="text px-10 mt-5">{value?.more}</div>
                <div className="text w-full md:h-96 h-80 mt-5">
                      <img src={value?.path}  alt="users_image" className="text w-full h-full  border" />
                </div>
                <div className="text px-10 flex justify-between py-3 items-center">
                    <div className="text flex items-center ">
                        <AiFillLike className='text-blue-500 text-xl'/>
                        <span className="text mx-5">{value?.likes}</span>
                    </div>
                  <div className="text px-10">
                    <span className="text">{value?.comments } Comments</span>
                  </div>
               </div>
               <hr />
               <div className="text flex justify-around items-center pt-3 gap-3 px-5">
                <button title='Like' onClick={() =>handleLikes(index, value._id)}  className="text-center hover:bg-gray-100 w-1/2 rounded-lg py-1 ">
                  {isTrue && likes === index? 
                  <div className="text-center text-blue-500 flex items-center justify-center gap-3">
                    <AiTwotoneLike className='text-2xl'/>
                    <span className="text">Like</span>
                  </div>:
                  <div className="text-center flex items-center justify-center gap-3">
                    <AiOutlineLike className='text-2xl'/>
                    <span className="text">Like</span>
                  </div>
                  }
                </button>
                <button title='Comment' onClick={() =>handleComments(value.comments)} className="text-center hover:bg-gray-100 w-1/2 rounded-lg py-1 ">
                <div className="text-center flex items-center justify-center gap-4">
                    <FaRegCommentAlt  className='text-xl  '/>
                    <span className="text">Comment</span>
                </div>
                </button>
               </div>
            </div>
          </>
        ))}

       </div>
    </div>
</div>
  )
}

export default Blogs
