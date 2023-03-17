import React , {useState, useEffect} from 'react'
import Dashboard from '../components/Dashboard'
import SideNavbar from '../components/SideNavbar'

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
