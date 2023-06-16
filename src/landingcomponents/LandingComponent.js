import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import img from '../images2/banner.png';
import NewYork from '../images2/newyork.png';
import London from '../images2/london.png';
import Washington from '../images2/washington.png';
import cafeteria from '../images2/cafeteria.png';
import library from '../images2/library.png';
import basketball from '../images2/basketball.png';
import computer from '../images2/computer.jpg';
import hall from '../images2/hall.jpg';
import swim from '../images2/sport.jpg';
import { HiMoon } from 'react-icons/hi';
import { IoMdSchool } from "react-icons/io";
import HomeSideNavBar from './HomeSideNavBar';

const LandingComponent = () => {
  const [loader, setloader] = useState(false);
  useEffect(() => {
   setloader(false);
  }, [])
  
  return (
   <>
      {/* Loader */}
      <div className={`text w-full fixed ${!loader? 'hidden' : "fixed"}  h-screen bg-slate-700 z-50 `}>
        <div className="text w-full h-screen fixed  bg-slate-800">
          <div className="text-center  ">
            <div className="text mt-20">
                   <IoMdSchool className='text-amber-600  mt-6 mx-auto text-5xl'/>
                    <span className="text-white text-xl font-bold">Edutech</span>
            </div>
            <div className="text-center mx-auto abso relative rounded-full  animate-spin duration-300 p-4 mt-40 w-20 h-20 z-50  border-t-2"> </div>
          </div>
        </div>
      </div>
   <div className="text overflow-x-hidden w-full px-0">
    <HomeSideNavBar/>
    <div className="text " >
      {/* Hero section */}
      <div className="text lg:pt-28 pt-20 px-0 w-full h-screen bg-cover bg-no-repeat bg-black/75 bg-blend-overlay mx-0" style={{backgroundImage: `url(${img})`}}>
          <p className="text-white text-4xl lg:text-8xl text-center  font-extrabold px-5 lg:px-20 font-sans ">World's Biggest University of Technology</p>
          <p className="text w-3/4 text-center mx-auto text-white text-xl mt-10 lg:px-28">Creating a well equipped and an advanced technology available for all. Technology is one of the most crucial field today and to make your way through or to be able to meet up with your expectation Edutech is the choice.</p>
          <div className="text-center mt-10">
          <Link to={"/signin"}> 
          <button className="text-white  w-1/2 lg:w-1/4 py-3 border-blue-500 shadow-lg shadow-blue-400 wow fadeInLeft hover:bg-blue-200 rounded-lg hover:text-black font-semibold border-2">Visit Us To Know More</button>
          </Link>
          </div>
      </div>
{/* Programs we offer */}
      <div className="text-center text-slate-800  font-bold w-full my-20">
          <div className="text">
            <p className="text text-3xl my-7 animate__animated animate__backInLeft" >Programs We Offer</p>
            {/* <p className="text font-normal text-xl lg:text-2xl lg:text-center px-5 lg:px-28 my-10 font-serif w-full lg:w-4/5 lg:mx-auto overflow-x-hidden">
            Welcome to our administration system for schools! We take pride in providing a variety of programs that are tailored to the various requirements of our students. We provide options for you whether you want to get an undergraduate degree, expand your profession with a postgraduate degree, or hone your abilities with a diploma program.
            </p> */}
              
            <p className="text mt-3  font-normal text-xl lg:text-2xl lg:text-center px-5 lg:px-28 my-10 font-serif w-full lg:w-4/5 lg:mx-auto overflow-x-hidden">
            Our programs are created to provide students the information and abilities they need to thrive in the quickly evolving work economy of today. In addition to business and management, we also provide degrees in engineering, the health sciences, and other areas. Our knowledgeable faculty members are leaders in their professions and dedicated to giving students an engaging learning environment.
            </p>
            <div className="text-center lg:flex text-xl font-sans font-normal justify-around mx-auto grid">
                <div className="text w-5/6 mx-auto p-6 my-5 lg:my-0 lg:w-1/4 bg-blue-50 lg:px-10 py-3 text-start rounded-lg hover:shadow-lg hover:scale-105 hover:border">
                  <h1 className="text-center text-3xl font-semibold my-4">Intermediate</h1>
                  <p className="text">
                  At our institution, we provide students with a variety of intermediate-level study programs aimed at giving them the abilities and information they need to excel in the workforce or seek higher education.
                  </p>
                  <p className="text mt-3">
                  Our vocational and technical programs offer practical instruction in a range of vocations and talents, such as cosmetology, welding, and auto repair. These courses offer a solid foundation for additional education if desired, while also preparing students for entry-level jobs in their chosen fields.
                  </p>
                  
                </div>
                <div className="text w-5/6 mx-auto p-6 my-5 lg:my-0 lg:w-1/4 bg-blue-50 lg:px-10 py-3 text-start rounded-lg hover:shadow-lg hover:scale-105 hover:border">
                  <h1 className="text-center text-3xl font-semibold my-4">Degree</h1>
                  <p className="text">
                     A variety of academic programs are available at our university to help students get ready for successful jobs in a variety of sectors. After completing a four-year course of study, our undergraduate program grants a Bachelor's degree. Arts and humanities, social sciences, natural sciences, engineering, business administration, education, health sciences, and computer science are just a few of the majors available to students.
                  </p>
                  <p className="text mt-2">
                    We also provide graduate programs leading to a Master's degree for those wishing to deepen their studies. These courses usually add one or two years of study after earning a bachelor's degree and give students the chance to focus on a particular aspect of their field.
                  </p>
                  </div>
                <div className="text w-5/6 mx-auto p-6 my-5 lg:my-0 lg:w-1/4 bg-blue-50 lg:px-10 py-3 text-start rounded-lg hover:shadow-lg hover:scale-105 hover:border">
                  <h1 className="text text-3xl font-semibold my-4">Post graduate</h1>
                  <p className="text">
                  We provide students with a variety of postgraduate programs at our school that are created to give them increased knowledge and specialized skills in their area of study of choice.
                    </p>
                    <p className="text mt-3">
                  The duration of our Master's degree programs, which combine coursework and research, ranges from one to three years. These programs can prepare students for a variety of occupations in academia, research, and industry. They are created to give students an advanced understanding of their topic of study. Our Master's degree programs give students the chance to collaborate closely with professors and other experts in their industry, which can be beneficial for their future employment chances.
                  </p>
                  </div>
            </div>
          </div>
      </div>


      {/* Our Physical Campus */}
      <div className="text my-20">
        <h1 className="text-center font-bold text-3xl my-4">Our Physical Campus</h1>
        <p className="text-xl text-center w-3/4 lg:px-20 mx-auto mb-6 ">
          Our campuses are equipped with a variety of contemporary and welcoming amenities, including roomy lecture halls, cutting-edge research labs, and well-stocked computer facilities. We also provide kids with access to a library, a gym, sports courts, and other areas where they may rest and engage in physical exercise.
          </p>
        <div className="text-white font-bold text-3xl grid lg:flex gap-4 px-5">
          <div className="text  mx-auto w-full sm:w-3/4 md:w-3/5 lg:w-1/4 h-96  bg-cover bg-no-repeat lg:bg-inherit rounded-xl bg-blue-900/75 lg:hover:bg-blue-900/75 bg-blend-overlay" style={{backgroundImage: `url(${img})`}}>
            <div className="text flex justify-center lg:opacity-0 hover:opacity-100 items-stretch w-full h-full ">
              <h1 className="text   self-center">Nigeria</h1>
            </div>
          </div>
          <div className="text mx-auto w-full sm:w-3/4 md:w-3/5 lg:w-1/4 h-96  bg-cover bg-no-repeat lg:bg-inherit rounded-xl bg-blue-900/75 hover:bg-blue-900/75 bg-blend-overlay" style={{backgroundImage: `url(${NewYork})`}}>
              <div className="text   flex justify-center lg:opacity-0 hover:opacity-100 items-stretch w-full h-full">
                <h1 className="text self-center ">NewYork</h1>
              </div>
          </div>
          <div className="text mx-auto w-full sm:w-3/4 md:w-3/5 lg:w-1/4 h-96  bg-cover bg-no-repeat lg:bg-inherit rounded-xl bg-blue-900/75 hover:bg-blue-900/75 bg-blend-overlay" style={{backgroundImage: `url(${London})`}}>
              <div className="text  flex justify-center lg:opacity-0 hover:opacity-100 items-stretch w-full h-full">
                <h1 className="text self-center">London</h1>
              </div>
          </div>
          <div className="text mx-auto w-full sm:w-3/4 md:w-3/5 lg:w-1/4 h-96  bg-cover bg-no-repeat lg:bg-inherit rounded-xl bg-blue-900/75 hover:bg-blue-900/75 bg-blend-overlay" style={{backgroundImage: `url(${Washington})`}}>
              <div className="text  flex justify-center lg:opacity-0 hover:opacity-100 items-stretch w-full h-full">
                <h1 className="text self-center">Washington</h1>
              </div>
          </div>
        </div>
      </div>
      {/* Our Facilities */}
      <div className="text my-28">
        <div className="text">
          <h1 className="text-center font-bold text-3xl my-4">Our Facilities</h1>
          <p className="text-xl text-center w-3/4 lg:px-20 mx-auto mb-5">
            Modern facilities on our campus have been installed to provide you everything you need to succeed. We provide everything you need to succeed in your studies, from cutting-edge research labs and computer facilities to contemporary classrooms and lecture halls.
            </p>
          <div className="text px-7 lg:px-10  justify-around lg:gap-4 mx-auto">
            <div className="text lg:flex justify-around">
                  <div className="text w-full lg:w-96 grid justify-center">
                    <div className="text-center mx-auto mt-10 lg:mt-0">
                      <img src={library} alt="" className="text w-80 h-80 rounded-lg" />
                    </div>
                    <h1 className="text-2xl my-4 font-bold text-center">World Class Library</h1>
                    <p className="text sm:w-3/4 mx-auto lg:w-full px-2 mb-6">Our library is intended to give you a relaxing and inviting space where you may study, work with others, or just unwind and read. For your convenience, our facility has quiet places, group study rooms, computer workstations, and study areas.</p>
                  </div>
                  <div className="text w-full lg:w-96  grid justify-center">
                    <div className="text-center mx-auto mt-10 lg:mt-0">
                      <img src={basketball} alt="" className="text w-80 h-80 rounded-lg" />
                    </div>
                    <h1 className="text-2xl my-4 font-bold text-center">Largest Play Fround</h1>
                    <p className="text  sm:w-3/4 mx-auto lg:w-full px-2 mb-6">Our playground offers a variety of tools and amenities meant to encourage student interest, discovery, and physical growth. To accommodate a range of ages and abilities, we have a selection of play structures, swings, and climbing walls. Students can also enjoy various leisure spaces, basketball and volleyball courts, and outdoor sports grounds in our play area.</p>
                  </div>
                  <div className="text w-full lg:w-96  grid justify-center">
                    <div className="text-center mx-auto mt-10 lg:mt-0">
                        <img src={cafeteria} alt="" className="text w-80 h-80 rounded-lg" />
                    </div>
                    <h1 className="text-2xl my-4 font-bold text-center">Tasty & healthy Food</h1>
                    <p className="text sm:w-3/4 mx-auto lg:w-full px-2 mb-6">It has been demonstrated that eating a balanced diet of wholesome foods improves academic achievement, energy levels, and general health. We think that our cafeteria offers students a practical and cost-effective approach to get hold of high-quality food selections that support a balanced and healthy lifestyle.</p>
                  </div>
            </div>
            <div className="text lg:flex justify-around">
                    <div className="text w-full lg:w-96 grid justify-center">
                    <div className="text-center mx-auto mt-10 lg:mt-0">
                        <img src={hall} alt="" className="text w-80 h-80 rounded-lg" />
                    </div>
                      <h1 className="text-2xl my-4 font-bold text-center">Largest Hall</h1>
                      <p className="text  sm:w-3/4 mx-auto lg:w-full px-2 mb-6">
                      The hall is a crucial component of our school community because it offers a place for parents, teachers, and students to gather to celebrate successes, exchange ideas, and take in performances. We think that our hall is a busy place.
                      </p>
                    </div>
                    <div className="text w-full lg:w-96 grid justify-center">
                      <div className="text-center mx-auto mt-10 lg:mt-0">
                        <img src={swim} alt="" className="text w-80 h-80 rounded-lg" />
                      </div>
                      <h1 className="text-2xl my-4 font-bold text-center">Best Sports Facilities</h1>
                      <p className="text  sm:w-3/4 mx-auto lg:w-full px-2 mb-6">Swimming and other water-based exercises are great kinds of exercise that have been proved to improve cardiovascular health, physical fitness, and general well-being. We think that our swimming pool offers students an enjoyable and practical approach to maintain an active lifestyle.</p>
                    </div>
                    <div className="text w-full lg:w-96 grid justify-center">
                      <div className="text-center mx-auto mt-10 lg:mt-0">
                          <img src={computer} alt="" className="text w-80 h-80 rounded-lg" />
                      </div>
                      <h1 className="text-2xl my-4 font-bold text-center">Best Computer Lab</h1>
                      <p className="text  sm:w-3/4 mx-auto lg:w-full px-2 mb-6">The most recent hardware and software are installed in our computer lab, giving students access to a variety of tools and resources that assist learning across the curriculum. We have access to high-speed internet, a choice of multimedia programs, and a range of gadgets, including tablets, laptops, and desktop PCs.
                   </p>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
       
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href='##' class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Tailwind Snippets</span>
            </a>
            <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
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
          </div>
        </div>
        <div class="bg-gray-100">
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
   </div>
   </>
  )
}

export default LandingComponent
