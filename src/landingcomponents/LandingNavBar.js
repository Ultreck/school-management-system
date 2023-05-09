import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'

const LandingNavBar = () => {
  const [active, setactive] = useState('')
  return (
    <div>

            
<nav className="bg-transparent hidden z-40 md:flex px-2 sm:px-4 py-2.5 dark:bg-transparent absolute w-full  top-0 left-0   ">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
  <Link to="/" className="flex items-center ">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">EduTech</span>
  </Link>
  <div className=" flex justify-between" id="navbar-sticky">
      <ul className="">
          <li>
            <NavLink to='/' className="mx-10 font-bold text-sky-400 text-xl " exact activeclassName={active} >Home</NavLink>
          </li>
      </ul>
      <ul className="flex">
          <li>
            <NavLink to='/signup'  className="mx-10 font-bold text-sky-400 text-xl" exact activeclassName={active}>Register</NavLink>
          </li>
          <li>
            <NavLink to='/signin'  className="mx-10 font-bold text-sky-400 text-xl" exact activeclassName={active}>Sign in</NavLink>
          </li>
      </ul>
  </div>
 
  </div>
</nav>

    </div>
  )
}

export default LandingNavBar
