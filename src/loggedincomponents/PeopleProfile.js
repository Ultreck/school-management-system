import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import img from "../images2/about.jpg";
import {  getStorage, ref, getDownloadURL , listAll } from 'firebase/storage';
import { initializeApp } from "firebase/app";

const PeopleProfile = () => {
      const [imageName, setimageName] = useState()
      const [male, setmale] = useState()
      const [female, setfemale] = useState()
      const [profileUrl, setprofileUrl] = useState([])
      const state =  useSelector(state => state.datas);
      // const [cuorseMate, setcuorseMate] = useState([]);
      const users = useSelector(state => state.users);
      const userAvatar = useSelector(state => state.boolean);


      const firebaseConfig = {
            apiKey: "AIzaSyBb2-qXcZBqq60_Z9lQ1ObDHuZjnC9WG5s",
            authDomain: "school-management-system-cb2fa.firebaseapp.com",
            projectId: "school-management-system-cb2fa",
            storageBucket: "school-management-system-cb2fa.appspot.com",
            messagingSenderId: "22595629780",
            appId: "1:22595629780:web:68347ab777679570744141",
            measurementId: "G-BJYV6EF6E1"
          };
          
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          const storage = getStorage(app);

      // const user_id = JSON.parse(sessionStorage.getItem("user_id"));
      useEffect(() => {
            // console.log(state);
            // let [found] =  state.filter((value, index) => (value));
            // console.log(found);
            // console.log(imageName);
            const downloadUrl = ref(storage, `profilePics`);
            listAll(downloadUrl).then(res => {
                res.items.map((value ) => {
                  return console.log(value);
                })
                  
                  // setprofileUrl(value);
            })
            const downloadUrl2 = ref(storage, `profilePics/male.png`);
            const downloadUrl3 = ref(storage, `profilePics/female.png`);
            if(downloadUrl){
                  setimageName(downloadUrl.name);
                  getDownloadURL(downloadUrl2).then((url) => {
                        setmale(url);
                        //  console.log(url);
                  });
                  getDownloadURL(downloadUrl3).then((url) => {
                        setfemale(url);
                        //  console.log(url);
                  });
            }
      //       setcuorseMate(state.find((value, index) => (value.program === users.program && value.courses === users.courses && value.level === users.level)));
      //      console.log(cuorseMate);
      }, [])
      
  return (
    <div className='w-full '>
      <div className="text border shadow-md hidden  ml-10 w-full lg:flex h-auto mt-40 sticky top-12">
            <div className="text-sm w-full sticky top-0">
                  <h1 className="text-center py-5 border-b text-3xl font-bold underline underline-offset-4">Course Mates</h1>
            {state.map((value, index ) => (
                  <>
                  {value.program === users.program && value.courses === users.courses && value.level === users.level?
                        <div className="text cursor-pointer hover:bg-slate-100 ">
                        {value._id === users._id?
                        <div className="text hidden"></div>:
                        <div className='flex  mx-auto items-center border-b border-l border-r py-1 px-6 w-full' key={index}>
                              <div className="text border w-12 h-12 rounded-full relative">
                              <span className="text absolute p-1 w-1 h-1 rounded-full right-1 bg-green-500"></span>
                              {value._id !== imageName?
                                    <>
                                    {value.gender === 'male' || value.gender === 'Male' || value.gender === 'MALE' ? 
                                    <img src={male} alt="" className="text w-full h-full rounded-full" />:
                                    <img src={female} alt="" className="text w-full h-full rounded-full" />
                              }
                                    </>:
                                    <img src={userAvatar} alt="" className="text w-full h-full rounded-full" />
                              }
                              </div>
                              <p className="text ml-10">{value.firstname} {value.lastname}</p>
                        </div>
                        }
                  </div>:
                  <span className="text hidden"></span>
            }
                  </>
                        ))}
           </div>
      </div>
    </div>
  )
}

export default PeopleProfile
