import React, {useState, useEffect} from 'react'
import LogggedInNavBar from '../loggedincomponents/LogggedInNavBar'
import { BsArrowLeft, BsSearch, BsChevronDown} from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { MdDashboard, MdGolfCourse } from "react-icons/md";
import { FcAbout, FcTodoList } from "react-icons/fc";
import { FaDiscourse } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { RiContactsLine } from "react-icons/ri";
import { TbLogout, TbFileTime } from "react-icons/tb";
import { AiOutlineProfile } from "react-icons/ai";
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

const SideNav = ({setOpen, open}) => {
      const [isActive, setisActive] = useState(0);
      const [subMenuOpen, setSubMenuOpen] = useState(false);
      // const dispatch = useDispatch()
   
    useEffect(() => {
     if(sessionStorage.proact){
      setisActive(JSON.parse(localStorage.getItem('active')))
     }else{
      setisActive(0)
     }
    }, [])
    

    const selectNav = (e) => {
      localStorage.setItem('active', JSON.stringify(e));
      setisActive(JSON.parse(localStorage.getItem("active")));
 
    }

      const menus = [
        {path:"home", title:'Dashboard', icon:<MdDashboard/>},
        {path:"about", title:'About', icon:<FcAbout/>},
        {path:"course", title:'Courses',  icon:<FaDiscourse/>},
        {
          path:"users/profile",
          title:'Users',
          subMenu: true,
          icon:<CgProfile/>,
          submenuTitles:[
            {title:'Profile',  path:"profile",},
            {title:'Resourses', path:"resources",},
            {title:'Schedules', path:"schedules",},
            {title:'Notifications',path:"notification",},
          ]
        },
        {path:"blog", title:'Blogs',  icon:<ImBlog/>},
        {path:"contact", title:'Contacts',  icon:<RiContactsLine className='text-white'/>},
        {path:"logout", title:'Log out', last:true,  icon:<TbLogout/>},
      ]
  return (
    <div className='fixed z-30'>
            <div className={`text  bg-blue-900 h-screen duration-500 ease-in-out ${open? 'w-72' : 'w-32' } px-8 text pt-10 relative`}>
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
                <Link to={menu.path} onClick={() =>selectNav(index)}>
                <li className={`text-gray-200 items-center ${isActive === index? 'bg-sky-500 text-white font-semibold' : ''} gap-x-4 cursor-pointer mt-2 my-6 hover:bg-sky-600 p-2 text-sm flex rounded-md  ${menu.last && 'pt-4 border-t text-red-400 underline'} `} key={index}>
                  <div className={`text-2xl ${!open && 'mx-auto'} float-left block text-white`}>
                      {menu.icon}
                  </div>
                  <span className={`text-base flex-1 duration-200 ${!open && 'hidden'} `}>{menu.title}</span>
                  {/* {menu.subMenu && open && (
                        <BsChevronDown className={`${subMenuOpen && 'rotate-180'}`} onClick={() =>setSubMenuOpen(!subMenuOpen)}/>
                    )
                  } */}
                </li>
                  </Link>
                {/* {menu.subMenu && subMenuOpen && (
                      <ul className="text">
                        {menu.submenuTitles.map((subm, index) =>(
                          <Link to={` ${subm.path}`}>
                          <li className={`text-white items-center gap-x-2 cursor-pointer mt-2 hover:bg-sky-600 p-1 px-5 text-sm flex rounded-md  ${!open && 'hidden'}`} key={index}>
                          <span className="text px-6">
                              {subm.title}
                          </span>
                          </li>
                                </Link>
                        ))}
                      </ul>
                )} */}
               
                </>
              ))}
            </ul>
        </div>
    </div>
  )
}

export default SideNav
