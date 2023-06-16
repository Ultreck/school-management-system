import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../baseUrl';
import { RiTodoFill } from "react-icons/ri";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

const ToDoModal = () => {
      const [selected, setselected] = useState({})
      const [allData, setallData] = useState([])
      const {_id} = useParams();
      const navigate = useNavigate();


      useEffect(() => {
            axios.get(baseUrl + '/gettodo').then((res) => {
                  setallData(res.data.result);
                  let result = res?.data.result.filter((value) => (value._id === _id));
                  setselected(result[0]);
            });
      }, []);

      // Handle changes Function
      const handleChanges = (e) => {
            const {name, value} = e.target;
            setselected({...selected, [name]:value});
            console.log(selected);
      }
      // Handle Update Function
      const handleSubmit = () => {
            axios.post(baseUrl + '/editTodo', {selected, _id}).then(res => {
                  console.log(res);
                  navigate('/portal/users/schedules');
            }).catch(err => {
                  console.log(err);
            })
            console.log(selected);
      };

      // Handle Cancle function
      const cancelledEdit = () => {
            navigate('/portal/users/schedules');
      }
      
  return (
    <div>
      <div className="text bg-slate-900 w-full h-screen">
            <div className="text w-11/12 sm:w-5/6 md:w-1/2 lg:w-1/3 mx-auto h-screen flex justify-center items-center">
                        <div className="text bg-white shadow-lg p-5 lg:p-10 relative rounded">
                        <div className="text-2xl text-red-600 absolute lg:right-10 lg:top-5 right-5 cursor-pointer" title='close' onClick={cancelledEdit}><ImCancelCircle/></div>
                        <h1 className="text-3xl  my-2 ml-5">Edit Todo</h1>
                        <div className="text border border-blue-600 w-full rounded-lg py-6 mb-10 lg:px-20  px-5">
                        <div className="text relative my-5 focus:outline-none w-full">
                              <label htmlFor="" className="text">Your Item : </label>
                              <input onChange={handleChanges} name='item' value={selected.item} type="text" className="text w-full border rounded-tl-lg rounded-bl-lg focus:outline-blue-900 py-1 px-14 focus:border-blue-900" />
                              <RiTodoFill className='absolute -translate-y-8 p-2 bg-blue-900 h-8 rounded-tl-lg rounded-bl-lg text-white w-12'/>
                        </div>
                        <div className="text relative my-5 focus:outline-none  w-full">
                              <label htmlFor="" className="text">The Date : </label>
                              <input onChange={handleChanges} name='date' value={selected.date} type="date" className="text w-full border rounded-tl-lg rounded-bl-lg  focus:outline-blue-900 py-1 px-14 focus:border-blue-900" />
                              <BsFillCalendarDateFill className='absolute -translate-y-9 p-2 bg-blue-900 h-9 rounded-tl-lg rounded-bl-lg text-white w-12'/>
                        </div>
                        <div className="text relative my-5 focus:outline-none  w-full">
                              <label htmlFor="" className="text">The Time : </label>
                              <input onChange={handleChanges} name='time' value={selected.time} type="time" className="text w-full border rounded-tl-lg rounded-bl-lg  focus:outline-blue-900 py-1 px-14 focus:border-blue-900" />
                              <MdOutlineAccessTimeFilled className='absolute -translate-y-9 p-2 bg-blue-900 h-9 rounded-tl-lg rounded-bl-lg text-white w-12'/>
          </div>
          <div className="text w-full">
            <button onClick={handleSubmit} className="text w-full bg-blue-900 hover:bg-blue-800 py-2 text-center text-white font-semibold">Update</button>
          </div>
        </div>
                        </div>
            </div>
      </div>
    </div>
  )
}

export default ToDoModal
