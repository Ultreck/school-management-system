import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Contact = () => {
      const dispatch = useDispatch();

      const [usersData, setusersData] = useState({
            firstname: "",
            lastname: "", 
            age: ""
      })

      const handleChanges= (e) =>{
            const {value, name} = e.target;
            setusersData({...usersData, [name]:value});
            console.log(usersData);
        
      }
      const handleSubmit= () =>{
            console.log(usersData);
            
      }
  return (
    <div className="max-w-sm grid ">
      <input name='firstname' value={usersData.firstname} onChange={handleChanges} type="text" className="text h-6 mx-2 mt-10 focus:border-blue-700 rounded" />
      <input name='lastname' value={usersData.lastname} onChange={handleChanges} type="text" className="text h-6 mx-2 mt-10 focus:border-blue-700 rounded" />
      <input name='age' value={usersData.age} onChange={handleChanges} type="text" className="text h-6 mx-2 mt-10 focus:border-blue-700 rounded" />
      <button className="text bg-lime-500 px-3 py-1 rouded text-white mt-4" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Contact
