import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../baseUrl';
import { ImCancelCircle } from "react-icons/im";

const TimeTableModal = () => {
      const [selected, setselected] = useState({})
      const {_id} = useParams();
      const navigate = useNavigate();


      useEffect(() => {
            axios.get(baseUrl + '/each').then((res) => {
                  // setselected(res.data.result);
                  let result = res?.data.response.filter((value) => (value._id === _id));
                  console.log(res);
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
            axios.post(baseUrl + '/editTimeTable', {selected, _id}).then(res => {
                  console.log(res);
                  navigate('/portal/users/profile');
            }).catch(err => {
                  console.log(err);
            })
            console.log(selected);
      };

      // Handle Cancle function
      const cancelledEdit = () => {
            navigate('/portal/users/profile');
      }
  return (
    <div>
      <div className="text bg-slate-900 w-full h-screen">
            <div className="text w-11/12 sm:w-5/6  md:w-1/2 lg:w-2/5 mx-auto h-screen flex justify-center items-center">
            <div className="text bg-white w-3/4 shadow-lg p-5 lg:p-10 relative rounded">
            <div className="text-2xl text-red-600 absolute lg:right-10 lg:top-5 right-5 cursor-pointer" title='close' onClick={cancelledEdit}><ImCancelCircle/></div>
             <h1 className="text mx-auto w-3/4 py-2 font-bold text-xl">Edit TimeTable</h1>
              <div className="text my-3 grid " >
                <label htmlFor="" className="text-sm text-slate-500 ">Start time : </label>
                <input onChange={handleChanges} name="starttime" value={selected.starttime} type="time" className=" text border w-full focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text my-3 grid">
                <label htmlFor="" className="text-sm text-slate-500">End time : </label>
                <input onChange={handleChanges} name="endtime" value={selected.endtime} type="time" className=" text border w-full focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text my-3 grid">
                <label htmlFor="" className="text-sm text-slate-500 ">Monday : </label>
                <input placeholder='subject' onChange={handleChanges} name="monday" value={selected.monday} type="text" className=" text border focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text my-3 grid">
                <label htmlFor="" className="text-sm text-slate-500">Tuesday : </label>
                <input placeholder='subject' onChange={handleChanges} name="teusday" value={selected.teusday} type="text" className=" text border focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text my-3 grid">
                <label htmlFor="" className="text-sm text-slate-500">Wednesday : </label>
                <input placeholder='subject' onChange={handleChanges} name="wednesday" value={selected.wednesday} type="text" className=" text border focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text my-3 grid">
                <label htmlFor="" className="text-sm text-slate-500">Thursday : </label>
                <input placeholder='subject' onChange={handleChanges} name="thursday" value={selected.thursday} type="text" className=" text border focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text my-3 grid">
                <label htmlFor="" className="text-sm text-slate-500">Friday : </label>
                <input placeholder='subject' onChange={handleChanges} name="friday" value={selected.friday} type="text" className=" text border focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text">
                <button className="text-white bg-blue-900 font-semibold w-full py-1 hover:bg-blue-800 px-5" onClick={handleSubmit}>Update</button>
              </div>
            </div>
            </div>
      </div>
        </div>
  )
}

export default TimeTableModal
