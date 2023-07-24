import React, {useState} from 'react';
import img from '../images2/coursesList2.jpg'
import Programs from './Programs';
import { BsChevronDown} from "react-icons/bs";

const Courses = () => {
const [open, setOpen] = useState(false);
const [current, setcurrent] = useState(null);

const showEach = (e) => {
  if(current === e) return setcurrent(null);
  setcurrent(e);
}

  return (
    <div>
       <div className="text px-8 w-full h-screen bg-cover bg-no-repeat flex  items-center justify-center bg-black/60 bg-blend-overlay " style={{backgroundImage: `url(${img})`}}>
        <div className="text">
            <h1 className="text-6xl flex justify-center text-white font-bold">Programs We Offer</h1>
            <p className="text-white lg:w-2/3 mx-auto text-xl my-8 text-center">
            Our programs are created to provide students the information and abilities they need to thrive in the quickly evolving work economy of today. In addition to business and management, we also provide degrees in engineering, the health sciences, and other areas. Our knowledgeable faculty members are leaders in their professions and dedicated to giving students an engaging learning environment.
            </p>
        </div>
      </div>
      <section className="text ">
          <div className="hidden lg:grid cursor-pointer text-center translate-y-20 bg-green-600 w-28 p-3  text-white rounded-full animate-bounce sticky lg:top-24 top-20 lg:rotate-0 rotate-180 mr-10 ml-auto mt-20 font-bold" onClick={() =>setOpen(!open)}>Show All</div>
          <div className="text-center w-full lg:w-1/2 mx-auto">
                <h1 className="text-center text-5xl font-bold mt-10 lg:mb-5">Our Programs</h1>
          <div className="lg:hidden cursor-pointer text-center bg-green-600 w-10 p-3  text-white rounded-full animate-bounce sticky lg:top-10 top-20 lg:rotate-0 rotate-180 ml-auto lg:mt-20 font-bold" onClick={() =>setOpen(!open)} title='Display all'><BsChevronDown className={` ${open?  "rotate-180 duration-300 ease-in-out": "duration-300 ease-in-out"}`}/></div>
                <div className="text w-full px-8 mx-auto">
                  {/* For intermediate */}
               <div className="text">
                <h1 className="text-center text-4xl lg:mt-20">Intermediate</h1>
                {Programs.map((value, index) => (
                  <>
                  {value.intermediate && 
                   <div className={`text border px-8 grid ${current === index && 'shadow-lg'} ${open && 'shadow-lg'} py-4 my-5`}>
                    <div className="text flex justify-between">
                   <div className={`text ${current === index && ' font-bold text-2xl text-blue-600'} ${open && 'font-bold text-2xl text-blue-600'} `}> {value.faculty}</div>
                   <div className="text" onClick={() => showEach(index)}><BsChevronDown className={`${current === index? "rotate-180 duration-300 ease-in-out": "duration-300 ease-in-out"} ${open?  "rotate-180 duration-300 ease-in-out": "duration-300 ease-in-out"}`}/></div>
                    </div>
                    <div className={`text-center ${current !== index && !open && ' hidden'} flex flex-wrap gap-8 justify-evenly mt-10`}>
                        {value.courses.map((v, i) => (
                          <>

                                <div className={`text-white text-center border bg-slate-800 w-2/5  lg:w-1/3  rounded-lg   ${current !== index && !open && ' hidden'} px-2 `}>
                              <div className={`text font-bold py-3 w-full lg:w-1/2  h-14 ${value.color[i]} rounded-lg mx-auto -translate-y-5`}>{value.unit[i]}</div>
                              <div className="text">{v}</div>
                              <div className="text-xs py-2">{value.chapter[i]} Chapters</div>
                              </div>
                          </>
                        ))}
                    </div>
                   </div>
                  }
                  </>
                ))}
               </div>


                {/* For Degree */}
               <div className="text-center">
                <h1 className="text-center text-4xl mt-20">Degree</h1>
                {Programs.map((value, index) => (
                  <>
                  {value.degree && 
                   <div className={`text border ${current === index && 'shadow-lg'} ${open && 'shadow-lg'} px-8  py-4 my-5`}>
                   <div className="text flex justify-between">
                   <div className={`text ${current === index && 'font-bold text-2xl text-blue-600'} ${open && 'font-bold text-2xl  text-blue-600'} `}> {value.faculty}</div>
                   <div className="text" onClick={() => showEach(index)}><BsChevronDown className={`${current === index? "rotate-180 duration-300 ease-in-out": "duration-300 ease-in-out"} ${open?  "rotate-180 duration-300 ease-in-out": "duration-300 ease-in-out"}`}/></div>
                    </div>
                    <div className={`text-center ${current !== index && !open && ' hidden'} flex flex-wrap gap-8 justify-evenly mt-10`}>
                        {value.courses.map((v, i) => (
                          <>

                                <div className={`text-white text-center border bg-slate-800 w-2/5  lg:w-1/3  rounded-lg   ${current !== index && !open && ' hidden'} px-2 `}>
                              <div className={`text font-bold py-3 w-full lg:w-1/2  h-14 ${value.color[i]} rounded-lg mx-auto -translate-y-5`}>{value.unit[i]}</div>
                              <div className="text">{v}</div>
                              <div className="text-xs py-2">{value.chapter[i]} Chapters</div>
                              </div>
                          </>
                        ))}
                    </div>
                   </div>
                }
                  </>
                ))}
               </div>


                {/* For Post Graduate */}
               <div className="text-center">
                <h1 className="text-center text-4xl mt-20">Post Graduate</h1>
                {Programs.map((value, index) => (
                  <>
                  {value.postGraduate && 
                  <div className={`text border ${current === index && 'shadow-lg'} ${open && 'shadow-lg'} px-8 py-4 my-5`}>
                   <div className="text flex justify-between">
                   <div className={`text ${current === index && 'font-bold text-2xl text-blue-600'} ${open && 'font-bold text-2xl  text-blue-600'} `}> {value.faculty}</div>
                   <div className="text" onClick={() => showEach(index)}><BsChevronDown className={`${current === index? "rotate-180 duration-300 ease-in-out": "duration-300 ease-in-out"} ${open?  "rotate-180 duration-300 ease-in-out": "duration-300 ease-in-out"}`}/></div>
                    </div>
                    <div className={`text-center ${current !== index && !open && ' hidden'} flex flex-wrap gap-8 justify-evenly mt-10`}>
                        {value.courses.map((v, i) => (
                          <>
                                <div className={`text-white text-center border bg-slate-800 w-2/5  lg:w-1/3  rounded-lg   ${current !== index && !open && ' hidden'} px-2 `}>
                              <div className={`text font-bold py-3 w-full lg:w-1/2  h-14 ${value.color[i]} rounded-lg mx-auto -translate-y-5`}>{value.unit[i]}</div>
                              <div className="text">{v}</div>
                              <div className="text-xs py-2">{value.chapter[i]} Chapters</div>
                              </div>
                          </>
                        ))}
                    </div>
                    </div>
                  }
                  </>
                ))}
               </div>
                  

                </div>
          </div>
      </section>
      <footer class="text-gray-600 bg-gray-100 body-font mx-auto">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-64 border flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a href='##' class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Tailwind Snippets</span>
          </a>
          <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
        </div>
        <div class="flex-grow border flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
              <li>
                <a href='##' class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a href='##' class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a href='##' class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a href='##' class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 border w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
              <li>
                <a href='##' class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a href='##' class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a href='##' class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a href='##' class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 border w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav class="list-none mb-10">
              <li>
                <a href='##' class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a href='##' class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a href='##' class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a href='##' class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="bg-gray-200">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">© 2021 Tailwind Snippets —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href='##' class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href='##' class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href='##' class="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href='##' class="ml-3 text-gray-500">
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

export default Courses
