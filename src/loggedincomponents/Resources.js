import React, {useEffect, useState} from 'react'
import { baseUrl } from '../baseUrl';
import axios from 'axios';
import img from '../images2/Windows-pana.png';
import { IoIosInformationCircle } from "react-icons/io";


const Resources = () => {
  const [newsFeedArray, setnewsFeedArray] = useState([])
  const [hovers, sethovers] = useState(null)
  const [limiter, setlimiter] = useState(0)
  const [postId, setpostId] = useState([])

  const user_id = JSON.parse(sessionStorage.getItem("user_id"));

  useEffect(() => {
    axios.get(baseUrl + '/getNewsFeed').then(res => {
      setnewsFeedArray(res.data.result);
      let found = res.data.result.filter((value, index) => (value.user_id === user_id));
      setpostId(found);
     });

  }, [])
  

  const handleHover = (e) => {
    if(hovers === e) return sethovers(null);
    sethovers(e);
  }

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this?")){
        axios.post(baseUrl + "/deletePost", {id}).then(res => {
          alert(`${ res.data.result.deletedCount  } Item(s) Deleted`)
          axios.get(baseUrl + '/getNewsFeed').then(res => {
            setnewsFeedArray(res.data.result);
          });
    })
    }else{
      alert("Delete Canclled")
    }
  }
  return (
    <div>
        <div className="text w-full">
              <p className={`text-sm bg-blue-100 text-blue-900 pr-5 py-5 border-l-8 border-blue-900 ${postId.length > 0? '' : 'hidden'}  mt-7 flex rounded-lg`}>
                <span className="text">
                <IoIosInformationCircle className='text-blue-900 mx-2 w-5 h-5'/>
                </span>
                <span className="text">
                     If you on a smaller devices, you'll have to click each post for more options
                </span>
              </p>
          <div className={`text w-full ${postId.length === 0? '' : 'columns-2'}   mb-12 mt-5`}>
              {newsFeedArray.map((value, index) => (
                <>
                {value.user_id === user_id ?
                <div className={`text  w-full border rounded-lg mr-5 mb-5`} key={value._id}>
                    <div className={`bg-cover relative aspect-square rounded-lg ${hovers === index && 'hover:bg-blue-900/75 bg-no-repeat  bg-blend-overlay'}`} onTouchTap={() =>handleHover(index)} onMouseEnter={() =>handleHover(index)}  style={{backgroundImage: `url(${value.path})`}}>
                    <button className={`text-center ${hovers === index?  'z-20 shadow-xl' : 'hidden'} w-1/2  right-0 absolute py-1 shadow-lg animate-bounce mt-5 mr-5 bg-red-500 text-white font-bold rounded-lg hover-scale-105`} onClick={() =>handleDelete(value._id)}>Delete</button>
                    </div>
                  </div>:
                  <>
                  {
                    index ===  limiter &&
                    <div className="text grid px-20">
                      <div className="text-center mx-auto mt-10">
                          <h1 className="text-center font-bold text-red-500 animate-bounce animate-pulse">Nothing to show here</h1>
                          <img src={img} alt="" className="text" />
                      </div>
                  </div>
                  }
                  </>
                }
                </>
              ))}
          </div>
        </div>
    </div>
  )
}

export default Resources
