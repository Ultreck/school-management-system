import React, {useState, useEffect} from 'react'
import LandingPage from '../pages/LandingPage';
import MainLoggedInPage from '../loggedinpage/MainLoggedInPage';

const Gard = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
    useEffect(() => {
      if(localStorage.user_id){
        setisLoggedIn(true);
      }else{
        setisLoggedIn(false);
      }
      
    }, [])
  
    if(isLoggedIn){
      return <MainLoggedInPage isLoggedIn={isLoggedIn}/>
    }else{
      return <LandingPage  isLoggedIn={isLoggedIn}/>
    }
}

export default Gard
