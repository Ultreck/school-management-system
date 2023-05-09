import React , {useState, useEffect} from 'react'
import SideNavbar from '../landingcomponents/SideNavbar';
import Dashboard from '../loggedincomponents/Dashboard';

const DashBoardPage = () => {
  const [getFunct, setgetFunct] = useState();

  useEffect(() => {
   
  }, [])
  
  return (
    <div className='flex'>
      <SideNavbar setgetFunct={setgetFunct}/>
      <Dashboard getFunct={getFunct} />
    </div>
  )
}

export default DashBoardPage
