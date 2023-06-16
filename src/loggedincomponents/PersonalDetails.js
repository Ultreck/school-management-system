import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { baseUrl } from '../baseUrl';

const PersonalDetails = () => {
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
             <p className="text-slate-500  md:my-6 my-2">
                      <span className="text-slate-500">First Name : </span>
                      <span className="text-sm md:text-md">{state? state.firstname: 'Loading...'}</span>
                    </p>
                    <p className="text-slate-500  md:my-6 my-2">
                      <span className="text-slate-500">Last Name : </span>
                      <span className="text-sm md:text-md">{state? state.lastname: 'Loading...'}</span>
                    </p>
                    <p className="text-slate-500  md:my-6 my-2">
                      <span className="text-slate-500">Gender : </span>
                      <span className="text-sm md:text-md">{state? state.gender: 'Loading...'}</span>
                    </p>
                   
    </div>
  )
}

export default PersonalDetails
