import React, {useEffect, useState} from 'react'
import {  getStorage, ref,  getDownloadURL, uploadBytesResumable  } from 'firebase/storage';
import { initializeApp } from "firebase/app";
// import { getAuth, signOut } from "firebase/auth";
import { MdCancel} from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const UploadProfile = () => {
      const [count, setcount] = useState(5);
      const [profileUpload, setprofileUpload] = useState(null)
      const [progress, setprogress] = useState(null)
       // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
      const navigate = useNavigate();
      

      let user_id = JSON.parse(sessionStorage.getItem("user_id"));
      useEffect(() => {
        const downloadUrl = ref(storage, `profilePics/${user_id}`);
            getDownloadURL(downloadUrl).then((url) => {
            });
      }, [])

      const handleCloce = () => {
            navigate('/portal/users/')
          }


// function handling profile picture.
const handleProfilePic = () => {
      if(profileUpload === null) return;
      const imageRef = ref(storage, `profilePics/${user_id}`);
      const uploadTask = uploadBytesResumable(imageRef, profileUpload);
      uploadTask.on('state_changed', (snapshot) => {
        const progrreess = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setprogress(progrreess);
        getDownloadURL(snapshot.ref).then((url) => {
          if(progrreess === 100){
          
          }
        });
      })
    }

//     redirecting function
    setTimeout(() => {
          if(progress === 100 && count > 0){
                setcount(count - 1);
            }

            if(count === 0){
                  navigate('/portal/users/')
            }
    }, 1000)
      
  return (
    <div>
      <div className="text w-full bg-slate-50 h-screen flex justify-center items-center">
            <div className="text lg:w-1/2 md:w-3/4 w-11/12 px-5 lg:px-0 flex justify-center items-center  bg-white border rounded-lg mt-10 shadow-lg z-50 py-10 relative">
                   <MdCancel className='absolute right-5 top-5 text-red-500 text-xl cursor-pointer' onClick={handleCloce} title='Close'/>
                  <div className="text">
                        <div className={`text-center py-2 my-4 text-2xl font-semibold font-mono ${progress === null ? 'hidden' : ''}`}>{progress} %</div>
                        <div className={`text-center py-2 my-4 ${progress === null ? 'hidden' : ''}`}>{progress < 100? 'Uploading...' : 'Successfully uploaded.'}</div>
                        <input type="file" className={`text w-full rounded-full border text-center my-4 py-2 px-6 ${progress === 100 && 'hidden'}`}  onChange={(e) =>setprofileUpload(e.target.files[0])}/>
                        <div className={`text-center py-2 my-4 bg-green-800 text-white font-semibold px-8 ${progress < 100 || progress === null? 'hidden' : ''}`}>You'll be redirected to profile page {count} seconds</div>
                        <button onClick={handleProfilePic} className={`text-center w-1/2 bg-blue-400 hover:bg-blue-600 ease-in-out delay-75 hover:text-white my-6 font-bold text-xl py-1 rounded-full lg:translate-x-32 translate-x-16  ${progress === 100 && 'hidden'}`}>Upload</button>
                  </div>
                </div>
      </div>
    </div>
  )
}

export default UploadProfile
