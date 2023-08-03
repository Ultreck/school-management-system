import React, {useState} from 'react';
import { BsArrowLeft, BsSearch} from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { MdDashboard , MdFeedback, MdMedicalInformation} from "react-icons/md";
import { FaDiscourse, FaUserCircle } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { SiAddthis } from "react-icons/si";
import { TbLogout} from "react-icons/tb";
import { NavLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const OptionsBar = ({setOpOpen, opOpen}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);  

  const navigate = useNavigate();

      const navLinkStyles = ({isActive}) => {
            return {
              fontWeight: isActive? 'bold' : "normal",
              textDecoration: isActive? "underline" : "none",
              color: isActive? 'white' : 'rgb(229 231 235)',
              backgroundColor: isActive? '#0369a1' : 'none',
            }
            }
            const  handleLogout = () => {
              sessionStorage.removeItem("user_id");
              setIsOpen(false);
              navigate("/")
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
            // {path:"contact", title:'Contacts',  icon:<RiContactsFill className='text-white'/>},
            {path:"logout", title:'Log out', last:true,  icon:<TbLogout/>},
          ]

          const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid red',
            boxShadow: 24,
            p: 4,
          };
  return (
    <div>
             <div className={`text  bg-blue-900 h-screen duration-500 ease-in-out ${opOpen? 'w-80 px-8' : 'w-0' } text pt-10 relative`}>
            <div className={`text inline-flex`}>
                <IoMdSchool className={` ${opOpen && 'rotate-[360deg]'}  ${!opOpen && 'scale-0'} duration-500 block text-4xl bg-amber-500 rounded-lg float-left text-white  mr-2`}/>
                <h1 className={`text-2xl text-white font-semibold duration-200 ease-in ${!opOpen && 'scale-0'}`}>Edutech</h1>
            </div>
            <div className={`text flex items-center ${opOpen? 'px-4' : 'px-0'} my-6 rounded-md bg-sky-700 py-2`}>
              <BsSearch className={`block text-white text-lg ${opOpen? 'float-left transition delay-300 duration-300 ease-in-out': 'mx-auto scale-0'}`}/>
              <input type="search" className={`text-base bg-transparent w-full text-white focus:outline-none px-2 ${!opOpen && 'hidden'}`} placeholder='search...' />
            </div>
            <ul className="text">
              {menus.map((menu, index) => (
                <div className='' key={menu.path}>
                   {menu.last? 
                <button onClick={handleOpen} className={` ${!opOpen? ' scale-0': ' transition delay-300 duration-300 ease-in-out '} items-center  gap-x-4 cursor-pointer mt-2 my-4 hover:bg-red-600 p-2 text-sm text-white flex rounded-md bg-red-500 px-5  underline underline-offset-2`}>
                    <div className={` ${!opOpen? 'mx-auto text-xl hidden': 'text-lg'} float-left block `}>   {menu.icon}</div>
                    <div className={`text-base flex-1 duration-200 ${!opOpen && 'scale-0'} `}>{menu.title}</div>
                  </button>:
                <NavLink to={menu.path} style={navLinkStyles} onClick={() => setOpOpen(!opOpen)}>
                <li title={menu.title} className={` ${opOpen? '': 'hidden'} items-center duration-500  gap-x-4 cursor-pointer mt-2 my-2 hover:bg-sky-600 p-2 text-sm flex rounded-md  `} key={index}>
                  <div className={` ${!opOpen? 'mx-auto text-xl': 'text-lg'} float-left block text-white`}>
                      {menu.icon}
                  </div>
                  <span className={`text-base flex-1 duration-200 ${!opOpen && 'hidden'} `}>{menu.title}</span>
  
                </li>
                  </NavLink>
}
                </div>
              ))}
            </ul>
        </div>
        <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You're about to log out!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to log out?
          </Typography>
          <div className="text-end mt-3 ">
              <Button variant="contained" color="error" onClick={handleLogout}>Log Out</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default OptionsBar
