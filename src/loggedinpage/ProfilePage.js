import React, {useState, useEffect} from 'react'
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Users from '../loggedincomponents/Users'

const ProfilePage = ({open}) => {
  const [proAct, setProAct] = useState(0);

useEffect(() => {
  if(sessionStorage.proact){
    setProAct(JSON.parse(localStorage.getItem('proact')));
  }else{
    localStorage.setItem('proact', JSON.stringify(0));
  }
}, [])


  const profileNavActive = (e) => {
    localStorage.setItem('proact', JSON.stringify(e));
    sessionStorage.setItem('proact', e.toString());
    setProAct(JSON.parse(localStorage.getItem('proact')));
   
    // setProAct(parseInt(sessionStorage.getItem('proact')));

  }
  const profileNav = [
    {item: 'Profile', path: 'profile'},
    {item: 'Resourses', path: 'resources'},
    {item: 'Schedules', path: 'schedules'},
    {item: 'Notification', path: 'notification'},
  ]
  return (
    <div className=' justify-end flex relative'>
      <div className="text">
          <div className={`textmx-auto ${open? 'lg:w-5/6' : "lg:w-11/12"} fixed right-0`}>
              <nav className="text-gray-200  bg-sky-600 py-3 ">
                <ul className="text flex gap-20 justify-center">
                {profileNav.map((value, index) => (
                      <Link key={index} to={value.path} onClick={() =>profileNavActive(index)}>
                      <li className={`${proAct === index ? 'text-white font-semibold italic underline underline-offset-8 bg-transparent' : ''}`}>{value.item}</li>
                      </Link>
             ))}
        </ul>
              </nav>
          </div>
          <div className="text  flex lg:w-5/6 justify-end w-full absolute px-10 right-0">
            <Routes>
                  <Route path='/' element={<Users/>}/>
            </Routes>
            {/* <Users/> */}
            <Outlet/>
          </div>
      </div>
    </div>
  )
}

export default ProfilePage
