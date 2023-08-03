import React from 'react';
import { IoMdSchool } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { TbLogout} from "react-icons/tb";
import { MdDashboard , MdFeedback, MdMedicalInformation} from "react-icons/md";
import { FaDiscourse, FaUserCircle } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { SiAddthis } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {

  const menus = [
    {path:"/portal/home", title:'Dashboard', icon:<MdDashboard/>},
    {path:"/portal/about", title:'About', icon:<MdMedicalInformation/>},
    {path:"/portal/course", title:'Courses',  icon:<FaDiscourse/>},
    {
      path:"/portal/users",
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
    {path:"/portal/blog", title:'News Feed',  icon:<MdFeedback/>},
    {path:"/portal/addblog", title:'Add Blog',  icon:<SiAddthis/>},
    // {path:"/portal/contact", title:'Contacts',  icon:<RiContactsFill className='text-white'/>},
    {path:"/portal/logout", title:'Log out', last:true,  icon:<TbLogout/>},
  ]
  return (
    <div>
       
      <footer class="text-gray-600 body-font bg-gray-100">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="/portal/home" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <IoMdSchool className='text-amber-500 text-4xl'/>
              <span class="ml-3 text-xl">EduTech</span>
            </a>
            <p class="mt-2 text-sm text-gray-500">is a comprehensive solution designed to streamline administrative tasks and enhance communication within educational institutions.</p>
          </div>
          <div class="flex-grow flex flex-wrap justify-around md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* Navigation Links */}
          <div className={`my-2 ${sessionStorage.user_id ? " " : "hidden"}`}>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="list-none">
              {menus.map((value, index) => (
              <li>
                <Link to={value.path} key={value.path} className="hover:text-gray-300">{value.title}</Link>
              </li>
              ))}
            </ul>
          </div>
          

           {/* Social Media Links */}
           <div className="my-2">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/emmanuel.oluwatayese" className="hover:text-gray-300">
                <FaFacebookSquare size={20} />
              </a>
              <a href="https://twitter.com/Ultreck1?t=E-MLkhqlvCkZoi5QS6DWMg&s=09" className="hover:text-gray-300">
                <FaTwitterSquare size={20} />
              </a>
              <a href="https://instagram.com/emmanuel_oluwatayese?igshid=NGExMmI2YTkyZg==" className="hover:text-gray-300">
                <FaInstagramSquare size={20} />
              </a>
              <a href="https://www.linkedin.com/in/a-emmanuel-oluwatayese-39254b218" className="hover:text-gray-300">
                <BsLinkedin size={20} />
              </a>
            </div>
          </div>

          </div>
        </div>
        <div class="bg-gray-200">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">© 2021 Edutech school management app—
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@edutech</a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a  href="https://www.facebook.com/emmanuel.oluwatayese" class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a  href="https://twitter.com/Ultreck1?t=E-MLkhqlvCkZoi5QS6DWMg&s=09" class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a  href="https://instagram.com/emmanuel_oluwatayese?igshid=NGExMmI2YTkyZg==" class="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a  href="https://www.linkedin.com/in/a-emmanuel-oluwatayese-39254b218" class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
       
    </div>
  )
}

export default Footer
