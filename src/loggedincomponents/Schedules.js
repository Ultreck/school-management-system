import React, {useState, useEffect} from 'react';
import { RiTodoFill } from "react-icons/ri";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BsFillCalendarDateFill, BsArrowDownCircleFill } from "react-icons/bs";
import { baseUrl } from '../baseUrl';
import axios from 'axios';
import { FiEdit, FiDelete } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Schedules = () => {
  const [todoArray, settodoArray] = useState([]);
  // const [chechedState, setchechedState] = useState(null);
  const [showInput, setshowInput] = useState();
  // const [isChecked, setIsChecked] = useState(JSON.parse( localStorage.getItem('checkboxState')));
  const [todoList, settodoList] = useState({
    user_id: JSON.parse(sessionStorage.getItem('user_id')),
    item: " ",
    date: " ",
    time: " ",
  });
  
  let user_id = JSON.parse(sessionStorage.getItem('user_id'));
let i = 1;

  useEffect(() => {
    setshowInput(JSON.parse(localStorage.getItem("showTable2")));
    axios.get(baseUrl + '/gettodo').then((res) => {
      settodoArray(res.data.result);
    });
  }, [])
  

  // handle changes function
  const handleChanges = (e) => {
    const {name, value} = e.target;
    settodoList({...todoList, [name]:value});
  };


  // handle delete function
  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this?")){
      // delete axios
      axios.post(baseUrl + '/deleteTodo', {id}).then((res) => {
        alert("Deleted")
        // fetch axios
        axios.get(baseUrl + '/gettodo').then((res) => {
          settodoArray(res.data.result)
         })
      }).catch((error) => {
        console.log(error);
      })
    }else{
      alert("Delete Cancelled")
    }
  }

  // handle edit function
  const handleEdit = (e) => {
    const {name, value} = e.target;
    settodoList({...todoList, [name]:value});
  }

  // handle show table function for to do list.
  const handleShowTable  = () => {
    localStorage.setItem('showTable2', JSON.stringify(!showInput));
    setshowInput(JSON.parse(localStorage.getItem("showTable2")));
  }

  // Handle submit function
  const handleSubmit = () => {
    if(todoList.item === " " || todoList.date === " " || todoList.time === " "  ){
      alert("All fields are required");
    }else{
      axios.post(baseUrl + '/todo', todoList).then(res =>{
        axios.get(baseUrl + '/gettodo').then((res) => {
          settodoArray(res.data.result)
         });
      }).catch(err => {
        console.log(err);
      });
    }
    let newTodo = {user_id:JSON.parse(sessionStorage.getItem('user_id')), item: '', date: '', time: ''};
    settodoList(newTodo);

    // get todo Api from the backend 
  }

  return (
    <div className='my-10 w-full h-full'>
      {/* <div className="text w-full h-full mx-auto justify-center items-center fixed bg-slate-700"></div> */}
        <h1 className="text-lg text-center text-slate-800 my-1">My To Do List</h1>
      <div className="text my-8">
        <h1 className="text-lg text-slate-800 my-1">Introduction:</h1>
        <p className="text-slate-600">
        Welcome to your own to-do list, a helpful resource created to assist you in maintaining organization and successfully managing your activities. Your to-do list serves as a central hub where you can monitor all of your outstanding tasks, projects, and critical deadlines. You may prioritize your work, guarantee timely completion, and lessen the stress brought on by juggling several obligations by making use of this function.
        </p>
      </div>
      <div className="text my-8">
        <h1 className="text-lg text-slate-800 my-1">Purpose of the To-Do List::</h1>
        <p className="text-slate-600">
        The main goal of the to-do list is to give you a methodical way to manage your tasks. It enables you to create priorities, divide your task into reasonable portions, and keep track of your advancement. You can simply see and amend your list as required by storing all of your chores in one location, ensuring nothing gets missed.
        </p>
      </div>
      
      <div className="text">  
      <div onClick={handleShowTable} className={`text-white top-24 sticky right-0 bg-blue-900 cursor-pointer z-40`}>
            <div className={`text  flex justify-center ${!showInput? "bg-green-700 px-5 " : "bg-red-700 px-2"}  animate-pulse items-center py-1 gap-4`}>
              <span className="text">{!showInput? "Click Here To Add Task" : "Click Here To Close"}</span>
              <div className={`text ${showInput? "rotate-180": " "}`}>
                  <BsArrowDownCircleFill className={`animate-bounce mt-1 `}/>
              </div>
            </div>
          </div>   
       <div className={`relative ${showInput? " " : "hidden"}`}>
        <h1 className="text-3xl  my-2 ml-5">TodoInput</h1>
        <div className="text border border-blue-600 w-full rounded-lg py-4 mb-10 lg:px-20  px-5">
          <div className="text relative my-5 focus:outline-none w-full">
            <label htmlFor="" className="text">Your Item : </label>
            <input onChange={handleChanges} name='item' value={todoList.item} type="text" className="text w-full border rounded-tl-lg rounded-bl-lg focus:outline-blue-900 py-1 px-14 focus:border-blue-900" />
            <RiTodoFill className='absolute -translate-y-8 p-2 bg-blue-900 h-8 rounded-tl-lg rounded-bl-lg text-white w-12'/>
          </div>
          <div className="text relative my-5 focus:outline-none  w-full">
            <label htmlFor="" className="text">The Date : </label>
            <input onChange={handleChanges} name='date' value={todoList.date} type="date" className="text w-full border rounded-tl-lg rounded-bl-lg  focus:outline-blue-900 py-1 px-14 focus:border-blue-900" />
            <BsFillCalendarDateFill className='absolute -translate-y-9 p-2 bg-blue-900 h-9 rounded-tl-lg rounded-bl-lg text-white w-12'/>
          </div>
          <div className="text relative my-5 focus:outline-none  w-full">
            <label htmlFor="" className="text">The Time : </label>
            <input onChange={handleChanges} name='time' value={todoList.time} type="time" className="text w-full border rounded-tl-lg rounded-bl-lg  focus:outline-blue-900 py-1 px-14 focus:border-blue-900" />
            <MdOutlineAccessTimeFilled className='absolute -translate-y-9 p-2 bg-blue-900 h-9 rounded-tl-lg rounded-bl-lg text-white w-12'/>
          </div>
          <div className="text w-full">
            <button onClick={handleSubmit} className="text w-full bg-blue-900 hover:bg-blue-800 py-2 text-center text-white font-semibold">Add Task</button>
          </div>
        </div>
      </div>

        <h1 className="text-3xl  my-2 ml-5 font-medium">TodoList</h1>
        <div className="text lg:text-md w-full mx-auto">
              <table className="text w-full border-collapse border border-slate-600" align='center'>
                <thead className="text-white bg-blue-900 py-2">
                  <tr className="text-sm lg:text-lg">
                    <th className="text border border-white px-1 lg:px-5">S/n</th>
                    <th className="text border border-white px-1 lg:px-5">Date</th>
                    <th className="text border border-white px-1 lg:px-5">Time</th>
                    <th className="text border border-white px-1 lg:px-5">Tasks</th>
                    <th className="text border border-white px-1 lg:px-5">Action</th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-md text-center">
                  {todoArray.map((value, index) => (
                    <>
                    {value.user_id === user_id &&
                      <tr className="text-xs lg:text-lg text-center" key={value._id}>
                        <th className="text-white bg-blue-900 text-center  border border-white px-1 py-2 lg:px-5">{i++}. </th>
                        <td className="text  border border-slate-600 px-1 py-2 lg:px-5">{value.date}</td>
                        <td className="text  border border-slate-600 px-1 py-2 lg:px-5">
                        {value.time < '12:00' ? value.time + ' am': value.time + " pm"}
                        </td>
                        <td className="text  border border-slate-600 px-1 py-2 lg:px-5">{value.item}</td>
                        <td className="text-center text-sm lg:text-xl  border border-slate-600">
                          <Link to={`/portal/users/schedules/edit-todo/${value._id}`}>
                            <button onClick={() =>handleEdit(value._id, index)} className="text-green-600 hover:bg-green-600 hover:text-white hover:rounded mx-1 px-1 "><FiEdit/></button>
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
    </div>
  )
}

export default Schedules
