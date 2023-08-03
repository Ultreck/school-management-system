import React, {useState} from 'react';
import img from '../images2/coursesList2.jpg'
import Programs from './Programs';
import { BsChevronDown} from "react-icons/bs";
import Footer from './Footer';

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
<Footer/>
    </div>
  )
}

export default Courses
