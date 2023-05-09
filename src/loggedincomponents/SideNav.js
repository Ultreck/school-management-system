import React, {useState} from 'react'
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

const SideNav = () => {
      const [open, setOpen] = useState(true);
      const [subMenuOpen, setSubMenuOpen] = useState(false);
      const menus = [
        {path:"home", title:'Dashboard', icon:<MdDashboard/>},
        {path:"about", title:'About', icon:<FcAbout/>},
        {path:"course", title:'Courses',  icon:<FaDiscourse/>},
        {
          path:"profile",
          title:'Profile',
          subMenu: true,
          icon:<CgProfile/>,
          submenuTitles:[
            {title:'My profile',  icon:<AiOutlineProfile/>},
            {title:'Courses list', icon:<MdGolfCourse/>},
            {title:'Todo list', icon:<FcTodoList/>},
            {title:'Time table', icon:<TbFileTime/>},
            
          ]
        },
        {path:"blog", title:'Blogs',  icon:<ImBlog/>},
        {path:"contact", title:'Contacts',  icon:<RiContactsLine className='text-white'/>},
        {path:"logout", title:'Log out', last:true,  icon:<TbLogout/>},
      ]
  return (
    <div className='fixed'>
            <div className={`text  bg-blue-900 h-screen ${open? 'w-72' : 'w-28' } px-8 text pt-10 relative`}>
          <BsArrowLeft className={`bg-orange-50 border-2 border-orange-600 w-8 h-8 rounded-full p-1 absolute -right-3 shadow-lg cursor-pointer ${!open && 'rotate-180'}`} onClick={() =>setOpen(!open)}/>
            <div className="text inline-flex">
                <IoMdSchool className={` ${open && 'rotate-[360deg]'} duration-500 block text-4xl bg-amber-500 rounded-lg float-left text-white  mr-2`}/>
                <h1 className={`text-2xl text-white font-semibold duration-200 ease-in ${!open && 'scale-0'}`}>Edutech</h1>
            </div>
            <div className={`text flex items-center ${open? 'px-4' : 'px-0'} mt-6 rounded-md bg-slate-200 py-2`}>
              <BsSearch className={`block text text-lg ${open? 'float-left': 'mx-auto'}`}/>
              <input type="search" className={`text-base bg-transparent w-full text-white focus:outline-none px-2 ${!open && 'hidden'}`} placeholder='search...' />
            </div>
            <ul className="text">
              {menus.map((menu, index) => (
                <>
                <Link to={menu.path}>
                <li className={`text-white items-center gap-x-4 cursor-pointer mt-2 my-4 hover:bg-sky-600 p-2 text-sm flex rounded-md  ${menu.last && 'pt-4 border-t text-red-400 underline'} `} key={index}>
                  <span className="text-2xl float-left block text-white">
                      {menu.icon}
                  </span>
                  <span className={`text-base flex-1 duration-200 ${!open && 'hidden'} `}>{menu.title}</span>
                  {menu.subMenu && open && (
                        <BsChevronDown className={`${subMenuOpen && 'rotate-180'}`} onClick={() =>setSubMenuOpen(!subMenuOpen)}/>
                    )
                  }
                </li>
                  </Link>
                {menu.subMenu && subMenuOpen && (
                      <ul className="text">
                        {menu.submenuTitles.map((subm, index) =>(
                          <li className={`text-white items-center gap-x-2 cursor-pointer mt-2 hover:bg-sky-600 p-1 px-5 text-sm flex rounded-md  ${!open && 'hidden'}`} key={index}>
                            {/* <span className="text-2xl float-left block text-white">
                                 {subm.icon}
                          </span> */}
                          <span className="text px-6">
                              {subm.title}
                          </span>
                          </li>
                        ))}
                      </ul>
                )}
               
                </>
              ))}
            </ul>
        </div>
    </div>
  )
}

export default SideNav
