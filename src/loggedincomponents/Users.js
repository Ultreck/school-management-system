import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { BsArrowDownCircleFill } from "react-icons/bs";
import { IoIosInformationCircle } from "react-icons/io";
import { FiEdit, FiDelete } from "react-icons/fi";
import { baseUrl } from '../baseUrl';
import { Link } from 'react-router-dom';


const Users = () => {
  const [dataBaseMessage, setdataBaseMessage] = useState([]);
  const [showInput, setshowInput] = useState();
  const [tableObj, settableObj] = useState({
    user_id: JSON.parse(sessionStorage.getItem("user_id")), 
    starttime: " ", 
    endtime: " ", 
    monday: " ", 
    teusday: " ",
     wednesday: " ", 
     thursday: " ",
      friday: " ",
  });

let user_id = JSON.parse(sessionStorage.getItem("user_id"));

useEffect(() => {
  setshowInput(JSON.parse(localStorage.getItem("showTable")));
    axios.get(baseUrl + '/each').then(res => {
      setdataBaseMessage(res.data.response);
    }).catch(err => {
      console.log(err);
    });
}, [])

const handleShowTable  = () => {
  localStorage.setItem('showTable', JSON.stringify(!showInput));
  setshowInput(JSON.parse(localStorage.getItem("showTable")));
}


  const handleChanges = (e, index, nam) => {
    const {name, value} = e.target;
    settableObj({...tableObj, [name]:value});
  //  const newData = [...tableData];
  //  newData[index][nam] = e.target.value;
  //  settableData(newData);
  }


  // Handle delete function
  const handleDelete = (index) => {
   if( window.confirm("Are you sure you want to delete this?")){
      axios.post(baseUrl + '/delete', {index}).then(res => {
       alert(`${res.data.deletedCount} item(s) deleted`);
       let user_id = JSON.parse(sessionStorage.getItem("user_id"));
       axios.post(baseUrl + '/subject', user_id).then(res => {
         setdataBaseMessage(res.data.response);
       }).catch(err => {
         console.log(err);
       })
      }).catch(err => {
       console.log(err);
      });
   }else{
    alert("Delete Cancelled");
   }
 
  };

  const handleSubmit = () => {
    if(tableObj.starttime === " " || tableObj.endtime === " " || tableObj.monday === " " || tableObj.teusday === " " || tableObj.wednesday === " " || tableObj.thursday === " " || tableObj.friday === " "){
      alert("Please fill all fields")
    }else{
      axios.post(baseUrl + '/timeTable', tableObj).then(res => {
        axios.get(baseUrl + '/each').then(res => {
          setdataBaseMessage(res.data.response);
        }).catch(err => {
        });
          }).catch(err => {
          });


    }
  };




  return (
    <div className=' w-full mb-16 text-slate-700'>
      <div className="text my-10">
        <h1 className="text-black text-lg underline underline-offset-2 my-1 text-center">My Timetable</h1>
        <p className="text-sm">
        Welcome to your own schedule, an essential tool for keeping you focused and organized during your academic career. Your timetable gives you a thorough overview of your class schedule and makes sure you attend the appropriate classes at the appropriate times. You may efficiently arrange your study regimen, manage your time, and increase your academic achievement by often consulting your timetable.
        </p>
        <h1 className="text-black mt-6 mb-3 text-lg underline underline-offset-2 my-1">Usage Tips:</h1>
        <ul className="text-sm text-slate-800 list-disc ">
          <li className="text my-2">
            <span className="text font-semibold"> Day: </span>
          The days of the week that each course is scheduled for particular time are listed as the day of the week.
          </li>
          <li className="text my-2">
            <span className="text font-semibold">Time: </span>
           You may plan your daily routine by using the time column, which lists the start and end timings for each lesson.
          </li>
          <li className="text my-2">
            <span className="text font-semibold">Add Row: </span>
           You may want to add row to your table and to do that you'll have to  press "add row" button
          </li>
          <li className="text my-2">
            <span className="text font-semibold">Finish Button: </span>
         Once you finished creating your table to save your work then you'll have to press "Finish" button
          </li>
          <mark className=" mt-6  py-2">If you still have any question concerning this please refer to the <span className="text underline text-blue-700"> FAQ </span>  page.</mark>
        </ul>
      </div>
      <div className="text bg-blue-200 py-4 lg:px-8 px-2 border-l-8 mb-10 border-blue-900 rounded-lg w-full ">
        <p className="text-blue-700 flex text-sm">
          <span className="text">
          <IoIosInformationCircle className='text-blue-900 mx-2 w-5 h-5'/>
          </span>
          <span className="text-slate-800 font-semibold mr-2">Note: </span>
            You've to be aware that the day of the week's input like "Monday to Friday" required
            each subject you gonna have and the time like "Start_time and End_time" denoted your time range, for instance 7:00am - 8:00am respectively .
        </p>
      </div>


        <div className={`relative ${showInput}`}>
          <div onClick={handleShowTable} className={`text-white top-24 sticky right-0 bg-blue-900 cursor-pointer z-40`}>
            <div className={`text  flex justify-center ${!showInput? "bg-green-700 px-5 " : "bg-red-700 px-2"}  animate-pulse items-center py-1 gap-4`}>
              <span className="text">{!showInput? "Click Here To Create Timetable" : "Click Here To Close"}</span>
              <div className={`text ${showInput? "rotate-180": " "}`}>
                  <BsArrowDownCircleFill className={`animate-bounce mt-1 `}/>
              </div>
            </div>
          </div>
          <div className={`relative ${showInput? " " : "hidden"}`}>
          <h1 className="text mx-auto w-3/4 py-2 font-bold text-xl">Create TimeTable</h1>
            <div className={`text border px-5 lg:px-16 py-7 lg:py-10 w-full lg:w-3/4 mx-auto`}>
              <div className="text my-3 grid " >
                <label htmlFor="" className="text ">Start time : </label>
                <input onChange={handleChanges} name="starttime" value={tableObj.starttime} type="time" className=" text border w-full focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text my-3 grid">
                <label htmlFor="" className="text">End time : </label>
                <input onChange={handleChanges} name="endtime" value={tableObj.endtime} type="time" className=" text border w-full focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text my-3 grid">
                <label htmlFor="" className="text ">Monday : </label>
                <input placeholder='subject' onChange={handleChanges} name="monday" value={tableObj.monday} type="text" className=" text border focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text my-3 grid">
                <label htmlFor="" className="text">Tuesday : </label>
                <input placeholder='subject' onChange={handleChanges} name="teusday" value={tableObj.teusday} type="text" className=" text border focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text my-3 grid">
                <label htmlFor="" className="text">Wednesday : </label>
                <input placeholder='subject' onChange={handleChanges} name="wednesday" value={tableObj.wednesday} type="text" className=" text border focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text my-3 grid">
                <label htmlFor="" className="text">Thursday : </label>
                <input placeholder='subject' onChange={handleChanges} name="thursday" value={tableObj.thursday} type="text" className=" text border focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text my-3 grid">
                <label htmlFor="" className="text">Friday : </label>
                <input placeholder='subject' onChange={handleChanges} name="friday" value={tableObj.friday} type="text" className=" text border focus:outline-blue-600 lg:px-5 px-5 py-1 focus:border-blue-600" />
              </div>
              <div className="text">
                <button className="text-white bg-blue-900 font-semibold w-full py-1 hover:bg-blue-800 px-5" onClick={handleSubmit}>Save</button>
              </div>
            </div>
        </div>
      </div>

        <div className="text my-16">
          <div className="text-sm lg:text-md w-full mx-auto">
              <table className="w-full border-collapse border border-slate-600" align='center'>
                  <thead className="text-white  bg-blue-900">
                      <tr className="text border border-white px-2 lg:px-5 py-1">
                          <th className="text border border-white px-1 lg:px-3 py-1">Actions</th>
                          <th className="text border border-white px-1 lg:px-3 py-1">Time</th>
                          <th className="text border border-white px-1 lg:px-3 py-1">Mon</th>
                          <th className="text border border-white px-1 lg:px-3 py-1">Tue</th>
                          <th className="text border border-white px-1 lg:px-3 py-1">Wed</th>
                          <th className="text border border-white px-1 lg:px-3 py-1">Thu</th>
                          <th className="text border border-white px-1 lg:px-3 py-1">Fri</th>
                      </tr>
                  </thead>
                  <tbody className="text">
                    {dataBaseMessage.map((value, index) => (
                      <>
                      {value.user_id === user_id &&
                      <tr className="text">
                          <th className="text-white text-center border border-white px-1 lg:px-5  bg-blue-900">{value.starttime} - {value.endtime}</th>
                          <td className="text border border-slate-600 px-1 lg:px-5">{value.monday}</td>
                          <td className="text border border-slate-600 px-1 lg:px-5">{value.teusday}</td>
                          <td className="text border border-slate-600 px-1 lg:px-5">{value.wednesday}</td>
                          <td className="text border border-slate-600 px-1 lg:px-5">{value.thursday}</td>
                          <td className="text border border-slate-600 px-1 lg:px-5">{value.friday}</td>
                          <td className="text-center text-sm lg:text-xl  border border-slate-600">
                          <Link to={`/portal/users/schedules/edit-timetable/${value._id}`}>
                            <button className="text-green-600 hover:bg-green-600 hover:text-white hover:rounded mx-1 px-1 "><FiEdit/></button>
                          </Link>
                        <button onClick={() =>handleDelete(value._id)} className="text-red-600 hover:bg-red-600 hover:text-white hover:rounded mx-1 px-1 "><FiDelete/></button>
                      </td>
                      </tr>
                      }
                      </>
                    ))}
                  </tbody>
              </table>
          </div>
        </div>
        
          {/* <div className="text-white relative w-full flex justify-between items-center mt-5">
            <button className="flex items-center invisible bg-red-500 gap-2 px-3 rounded-tr-full rounded-br-full" onClick={handleRemoveRow}>
                <AiOutlineMinusSquare className='' />
                Remove Row
            </button>
            <button className="flex items-center bg-green-500 gap-4 p-3 lg:p-0 lg:px-2 lg:rounded-tl-full lg:rounded-bl-full rounded-full lg:rounded-none mx-2 lg:mx-0" onClick={handleAddRow}>
              <span className="text hidden lg:flex">Add Row</span>
              <BsPlusSquare className='a' title='add row'/>
            </button>
          </div> */}
    </div>
  )
}

export default Users
