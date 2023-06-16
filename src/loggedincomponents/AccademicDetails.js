import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { baseUrl } from '../baseUrl';

const AccademicDetails = () => {
      const [state, setstate] = useState({});

  // start on use effect
  useEffect(() => {
        let user_id;
        if(sessionStorage.user_id){
           user_id = JSON.parse(sessionStorage.getItem('user_id'))
         }
     
         axios.get(baseUrl + "/datas").then(res =>{
           let found = res.data.find((val, index) => (val._id === user_id));
            setstate(found);
           }).catch(err => {
             // alert("Network error : error occur while  connecting to the internet. check your internet connection");
           });
  }, [])
// end of use effect 
    
  return (
    <div className='my-10'>
                  <p className="text-slate-500 md:my-6 my-2">
                      <span className="text-slate-500">Program : </span>
                      <span className="text-sm md:text-md">{state? state.program: 'Loading...'}</span>
                    </p>
                    <p className="text-slate-500 md:my-6 my-2">
                      <span className="text-slate-500">Faculty : </span>
                      <span className="text-sm md:text-md">{state? state.faculty: 'Loading...'}</span>
                    </p>
                    <p className="text-slate-500 md:my-6 my-2">
                      <span className="text-slate-500">Course : </span>
                      <span className="text-sm md:text-md">{state? state.courses: 'Loading...'}</span>
                    </p>
                    <p className="text-slate-500 md:my-6 my-2">
                      <span className="text-slate-500">Student Id: </span>
                      <span className="text-sm md:text-md">{state? state.matric: 'Loading...'}</span>
                    </p>
                    <p className="text-slate-500 md:my-6 my-2">
                      <span className="text-slate-500">Level : </span>
                      <span className="text-sm md:text-md">{state? state.level: 'Loading...'}</span>
                    </p>
    </div>
  )
}

export default AccademicDetails
