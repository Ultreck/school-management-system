import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { baseUrl } from '../baseUrl';

const ContactDetails = () => {
      // const state = useSelector(state => state.users);
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
                      <span className="text-slate-500">Country : </span>
                      <span className="text-sm">{state? state.country:  'Loading...'}</span>
                    </p>
                    <p className="text-slate-500 md:my-6 my-2">
                      <span className="text-slate-500">State : </span>
                      <span className="text-sm">{state? state.region: 'Loading...'}</span>
                    </p>
                    <p className="text-slate-500 md:my-6 my-2">
                      <span className="text-slate-500">City : </span>
                      <span className="text-sm">{state? state.city: 'Loading...'}</span>
                  </p>
                    <p className="text-slate-500 md:my-6 my-2">
                      <span className="text-slate-500">Address : </span>
                      <span className="text-sm">{state? state.address:  'Loading...'}</span>
                   </p>
                   <p className="text-slate-500 md:my-6 my-2">
                      <span className="text-slate-500"> Email: </span>
                      <span className="text-sm md:text-md">{state? state.email: 'Loading...'}</span>
                    </p>
                    <p className="text-slate-500 md:my-6 my-2">
                      <span className="text-slate-500"> Contact: </span>
                      <span className="text-sm md:text-md">{state? state.contact: 'Loading...'}</span>
                    </p>
    </div>
  )
}

export default ContactDetails
