import React from 'react';
import { BsArrowLeft, BsSearch} from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { MdDashboard , MdFeedback, MdMedicalInformation} from "react-icons/md";
import { FaDiscourse, FaUserCircle } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { SiAddthis } from "react-icons/si";
import { TbLogout} from "react-icons/tb";
import { NavLink } from 'react-router-dom';




const SideNav = ({setOpen, open}) => {
    
  const navLinkStyles = ({isActive}) => {
  return {
    fontWeight: isActive? 'bold' : "normal",
    textDecoration: isActive? "underline" : "none",
    color: isActive? 'white' : 'rgb(229 231 235)',
    backgroundColor: isActive? '#0369a1' : 'none',
  }
  }

      const menus = [
        {path:"home", title:'Dashboard', icon:<MdDashboard/>},
        {path:"about", title:'About', icon:<MdMedicalInformation/>},
        {path:"course", title:'Courses',  icon:<FaDiscourse/>},
        {
          path:"users",
          title:'Users',
          subMenu: true,
          icon:<FaUserCircle/>,
          submenuTitles:[
            {title:'Profile',  path:"profile",},
            {title:'Resourses', path:"resources",},
            {title:'Schedules', path:"schedules",},
            {title:'Notifications',path:"notification",},
          ]
        },
        {path:"/portal/chat", title:'Chats',  icon:<AiFillWechat/>},
        {path:"blog", title:'News Feed',  icon:<MdFeedback/>},
        {path:"addblog", title:'Add Blog',  icon:<SiAddthis/>},
        {path:"contact", title:'Contacts',  icon:<RiContactsFill className='text-white'/>},
        {path:"logout", title:'Log out', last:true,  icon:<TbLogout/>},
      ]
  return (
    <div className='fixed z-50'>
            <div className={`text  bg-blue-900 h-screen duration-500 ease-in-out ${open? 'w-60' : 'w-28' } px-8 text pt-10 relative`}>
              <div className="text">
                <BsArrowLeft className={`bg-orange-50 border-2 border-orange-600 w-8 h-8 rounded-full p-1 absolute -right-3 shadow-lg cursor-pointer ${!open && 'rotate-180'}`} onClick={() =>setOpen(!open)}/>
              </div>
            <div className={`text inline-flex`}>
                <IoMdSchool className={` ${open && 'rotate-[360deg]'}  ${!open && 'ml-3'} duration-500 block text-4xl bg-amber-500 rounded-lg float-left text-white  mr-2`}/>
                <h1 className={`text-2xl text-white font-semibold duration-200 ease-in ${!open && 'scale-0'}`}>Edutech</h1>
            </div>
            <div className={`text flex items-center ${open? 'px-4' : 'px-0'} my-6 rounded-md bg-sky-700 py-2`}>
              <BsSearch className={`block text-white text-lg ${open? 'float-left': 'mx-auto'}`}/>
              <input type="search" className={`text-base bg-transparent w-full text-white focus:outline-none px-2 ${!open && 'hidden'}`} placeholder='search...' />
            </div>
            <ul className="text">
              {menus.map((menu, index) => (
                <>
                <NavLink to={menu.path} style={navLinkStyles} >
                <li title={menu.title} className={` items-center  gap-x-4 cursor-pointer mt-2 my-4 hover:bg-sky-600 p-2 text-sm flex rounded-md  `} key={index}>
                  <div className={` ${!open? 'mx-auto text-xl': 'text-lg'} float-left block text-white`}>
                      {menu.icon}
                  </div>
                  <span className={`text-base flex-1 duration-200 ${!open && 'hidden'} `}>{menu.title}</span>
  
                </li>
                  </NavLink>
                </>
              ))}
            </ul>
        </div>
    </div>
  )
}

export default SideNav
