import React, { useState, useEffect } from 'react';
import img from '../images/pngimg.com - student_PNG72.png'
import SignInNavBar from './SignInNavBar';

const LandingSignin = () => {
  const [logInData, setlogInData] = useState({})

  const handleChanges = (e) =>{
        console.log(e);
  }
  const handleSideNavbar = () =>{

  }

  return (
    <div>
      <SignInNavBar/>
      <div className="text flex bg-white dark:bg-slate-900 dark:text-white overflow-hidden">
            <div className="text h-screen w-0 lg:w-1/2 bg-orange-500" style={{clipPath:"polygon(0 1%, 100% 0%, 75% 100%, 0% 100%)"}}>
              <img src={img} alt="" className="text w-2/3 mt-32 ml-10" />
              <h1 className="text-4xl font-bold  ml-8">EDUCATION IS POWER</h1>
            </div>
            <div className="text h-screen lg:px-20 xl:px-32 px-5 py-12 overflow-hidden w-full lg:w-1/2  mx-auto" 
            // style={{clipPath:"polygon(25% 0%, 100% 0%, 99% 100%, 0% 100%)"}}
            >
                        <div className="text mt-32">
                            <h1 className="text-center mb-3 mt-1 underline  text-xl font-bold">Sign In</h1>
                        </div>
                  <div className="text  rounded-lg border-dashed border-2 w-full h-1/2  lg:p-10 py-2 px-3 mx-auto  ">   
                  <form>
                  <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input name='email' value={logInData.email} onChange={handleChanges} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g name@wts.com" required/>
                  </div>
                  <div className="mb-4">
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input name='password' value={logInData.password} onChange={handleChanges} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
                  </div>
                  <button type="submit" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 w-1/2">Log In</button>
                  </form>

                  </div>
            </div>
      </div>
    </div>
  )
}

export default LandingSignin
