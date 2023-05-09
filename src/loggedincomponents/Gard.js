import React, {useState, useEffect} from 'react'
import LandingPage from '../pages/LandingPage';
import MainLoggedInPage from '../loggedinpage/MainLoggedInPage';

const Gard = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
    useEffect(() => {
      if(localStorage.user_id){
        let user_id = JSON.parse(localStorage.getItem("user_id"))
        setisLoggedIn(true);
        console.log(user_id);
      }else{
        setisLoggedIn(false);
      }
      
    }, [])
  
    if(isLoggedIn){
      return <MainLoggedInPage/>
    }else{
      return <LandingPage/>
    }
}

export default Gard
