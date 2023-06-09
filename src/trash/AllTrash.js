import React from 'react'

const AllTrash = () => {
  return (
    <div>
      {/* Initial landing page code  */}
      <div className='lg:overflow-hidden h-auto '>
      {/* <HomeSideNavBar/> */}
      <div className="text  grid md:flex bg-white dark:bg-slate-900 dark:text-white lg:overflow-hidden">
          <div className="text  md:h-screen w-0 md:w-1/2 bg-orange-600  hidden md:grid md:-translate-x-5 -translate-x-16 lg:overflow-hidden py-20 pl-16 pr-20" style={{clipPath:"polygon(0 1%, 100% 0%, 75% 100%, 0% 100%)"}}>
            <div className="text-center mt-10">
            <h1 className="text-center pl-32 font-bold text-xl hidden lg:flex">  YOUR DOOR TO THE FUTURE</h1>
            <img src="" alt="" className="text mt-8" />
              
            </div>
          </div>
          {/* Second  side dive */}
          <div className="text md:h-screen py-10  md:py-20 w-full md:w-full lg:w-1/2 lg:pr-10" >
            <div className="text w-full lg:h-scree h-auto p-5 md:p-0 md:hidden">
              <img src="" alt="schorlars" className="text w-full h-4/5 hidden" />
            </div>
            <h1 className="text-center font-bold text-xl lg:hidden mt-10">  YOUR DOOR TO THE FUTURE</h1>
          <div
                    id="carouselExampleIndicators"
                    className="relative w-full mx-auto mt-5 px-6 md:px-0"
                    data-te-carousel-init
                    data-te-carousel-slide>
                    <div
                      className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                      data-te-carousel-indicators>
                      <button
                        type="button"
                        data-te-target="#carouselExampleIndicators"
                        data-te-slide-to="0"
                        data-te-carousel-active
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-current="true"
                        aria-label="Slide 1"></button>
                      <button
                        type="button"
                        data-te-target="#carouselExampleIndicators"
                        data-te-slide-to="1"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 2"></button>
                      <button
                        type="button"
                        data-te-target="#carouselExampleIndicators"
                        data-te-slide-to="2"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 3"></button>
                    </div>
                    <div
                      className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                      <div
                        className="relative float-left -mr-[100%]  h-2/5  w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item
                        data-te-carousel-active>
                        <img
                          src=""
                          className="block w-full h-60"
                          alt="Wild Landscape" />
                      </div>
                      <div
                        className="relative float-left -mr-[100%]  h-2/5 hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item>
                        <img
                          src=""
                          className="block w-full h-60"
                          alt="Camera" />
                      </div>
                      <div
                        className="relative float-left -mr-[100%]  h-2/5 hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item>
                        <img
                          src=""
                          className="block w-full h-60"
                          alt="Exotic Fruits" />
                      </div>
                    </div>
                    <button
                      className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                      type="button"
                      data-te-target="#carouselExampleIndicators"
                      data-te-slide="prev">
                      <span className="inline-block h-8 w-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                      </span>
                      <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Previous</span
                      >
                    </button>
                    <button
                      className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                      type="button"
                      data-te-target="#carouselExampleIndicators"
                      data-te-slide="next">
                      <span className="inline-block h-8 w-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                      <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Next</span
                      >
                    </button>
                  </div>
                <p className="text-sm md:text-lg px-6 mt-10">
              Thank you for visiting 
              <link to='/' className=" ml-1 font-bold  text-orange-400 underline underline-offset-2">WTS</link>  School Administration System! Our extensive web platform is made to improve learning for students, instructors, and administrators while streamlining school administration. You can easily manage student records, keep track of attendance, record grades, speak with parents, and do a lot more using our system. Our intuitive design and features allow for easy navigation and customization to meet the unique requirements of each and every users. To access your customized dashboard and get started,
              <link to='/signin' className='underline text-blue-500 mx-1'>log in</link>or <link to='/signup' className='underline text-orange-500 mx-1'>register</link> right away!
              </p>
          </div>
          <div className="text mx-auto mb-10 lg:hidden">
            <link className="text mx-6 bg-blue-500 px-10 h-6 rounded py-2 " to='/signup'>
                <button className="text">Register</button>
            </link>
            <link  className="text mx-6 bg-orange-500 px-10 h-6 rounded py-2 " to='/signin'>
                  <button className="text">Log in</button>
            </link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default AllTrash
