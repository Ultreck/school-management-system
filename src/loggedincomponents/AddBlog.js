import React, { useRef, useState, useEffect } from 'react'
import { baseUrl } from '../baseUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';



const AddBlog = () => {
      const [isLoading, setisLoading] = useState(false);
      // const [state, setstate] = useState();
    
      const [user_id, setuser_id] = useState();
      const more = useRef();
      const file = useRef();
      //     const state = useSelector(state => state.users);
      //     console.log(state);
      const navigate = useNavigate();
      
      
      

useEffect(() => {
        // Updating Image into user profile
       

}, []);

      const handleSubmit = () => {
        const form = new FormData();
        let user_id = JSON.parse(sessionStorage.getItem('user_id'));
        setisLoading(true); 

        axios.get(baseUrl + "/datas").then(res =>{
            let found = res.data.find((val, index) => (val._id === user_id));
            // axios for form and to post blog
            form.append("more", more.current.value);
            form.append("firstname", found.firstname);
            form.append("lastname", found.lastname);
            form.append("user_id", user_id);
            form.append('file', file.current.files[0]);
            axios.post(baseUrl + "/new-post", form).then(res => {
              if(res){
                setisLoading(false);
                if(!isLoading){
                  setTimeout(() => {
                    navigate('/portal/blog/');
                  }, 1000)
                }
              }

               }).catch(err =>{
                      console.log(err);
                 })
            }).catch(err => {
            });

      }

    
          
  return (
    <div>
      <div className="text">
            <div className="text flex justify-center items-center bg-slate-100 h-screen ">
                  <div className="text w-5/6 md:w-1/2 lg:w-1/3 bg-white border px-8 py-10 shadow-lg ">
                  <h1 className="text-4xl  ">New Post</h1>
                  <textarea placeholder="Contents" title="more" ref={more} name="more" type="text" className="text border w-full my-3  px-4 py-2" ></textarea>
                  <input  ref={file} name="file" type="file" className="text border w-full my-3  px-4 py-2"/>
                  <button className="text-white text-2xl bg-blue-500 px-4 py-1 w-full text-center" onClick={handleSubmit} disabled={isLoading}>{isLoading? "Savings Post...": "Submit"}</button>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default AddBlog
