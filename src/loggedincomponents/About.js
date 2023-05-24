import React from 'react';
import img from '../images2/secondBackgroundjpg.jpg'
import img2 from '../images2/kids wearing masks at school-amico.png'
import img3 from '../images2/Graduation-bro.png'
import img4 from '../images2/Library-amico.png';
import img5 from '../images2/Conversation-amico.png'
import img6 from '../images2/House Halloween decorations-bro.png'

const About = () => {
  return (
    <div className='text'>
      <div className="text w-full h-screen bg-cover bg-no-repeat flex items-center justify-center bg-black/50 bg-blend-overlay " style={{backgroundImage: `url(${img})`}}>
            <h1 className="text-6xl flex justify-center text-white font-bold">About Us</h1>
      </div>
      <section className="text lg:px-32 px-5">
          <div className="text">
            <div className="text py-16">
              <h1 className="text-center font-bold text-4xl mt-8">What we do</h1>
              <div className="text lg:flex gap-10 justify-center items-center py-5 "> 
                <div className="text w-5/6 mb-7 lg:hidden mx-auto">
                    <img src={img2} alt="" className="text rounded-lg" />
                </div>
                <p className="text-slate-600 w-full lg:w-3/5 lg:px-16 text-xl">
                Welcome to our administration system for schools! We are a vibrant, forward-thinking organization committed to giving students from all ages and socioeconomic backgrounds a top-notch education. Our goal is to provide students with the tools they need to realize their full potential and to get them ready for a world that is changing quickly.
                </p>
                <div className="text hidden mx-auto lg:flex lg:w-2/5">
                    <img src={img2} alt="" className="text rounded-lg" />
                </div>
              </div>
            </div>
            <div className="text">
              <h1 className="text-center font-bold text-4xl mt-8">Our goals</h1>
              <div className="text lg:flex gap-10 justify-center items-center py-5 "> 
                <div className="text w-5/6 mb-7 lg:hidden mx-auto">
                    <img src={img3} alt="" className="text rounded-lg" />
                </div>
                <div className="text hidden mx-auto lg:flex lg:w-2/5">
                    <img src={img3} alt="" className="text rounded-lg" />
                </div>
                <p className="text-slate-600 w-full lg:w-3/5 lg:px-16 px-5 text-xl">
                    At our school, we think that learning should be about more than merely memorizing data. We think it's about encouraging critical thinking, stimulating curiosity, and creating a lifelong love of learning. Our skilled and committed instructors put forth endless effort to provide a safe and stimulating learning environment that inspires kids to explore and find their interests.
                </p>
              </div>
            </div>
            <div className="text py-16">
              <h1 className="text-center font-bold text-4xl my-8">Our Facilities</h1>
                <p className="lg:text-center text-slate-700 w-full lg:px-28 text-xl mb-10">
                    Modern facilities on our campus have been installed to provide you everything you need to succeed. We provide everything you need to succeed in your studies, from cutting-edge research labs and computer facilities to contemporary classrooms and lecture halls.
                </p>
              <div className="text w-full lg:flex gap-10 justify-center items-center py-5 "> 
                      <h1 className="text-2xl lg:hidden text-center my-4 font-bold">1. Library</h1>
                <div className="text w-5/6 mb-7 lg:hidden mx-auto">
                    <img src={img4} alt="" className="text rounded-lg" />
                </div>
                <div className="text w-full lg:w-3/5">
                      <h1 className="text-2xl hidden lg:grid text-center my-4 font-bold">1. Library</h1>
                    <p className="lg:text-center  lg:px-16 text-xl text-slate-600">
                    Our library is intended to give you a relaxing and inviting space where you may study, work with others, or just unwind and read. For your convenience, our facility has quiet places, group study rooms, computer workstations, and study areas.
                    </p>
                </div>
                <div className="text hidden mx-auto lg:flex lg:w-2/5">
                    <img src={img4} alt="" className="text rounded-lg" />
                </div>
              </div>
              <div className="text lg:flex w-full gap-10 justify-center items-center py-5 "> 
                <div className="text w-2/5 mb-7 hidden lg:flex  mx-auto">
                    <img src={img5} alt="" className="text rounded-lg" />
                </div>
                  <h1 className="text-2xl lg:hidden text-center my-4 font-bold">2. Caferia</h1>
                <div className="text w-5/6 mb-7 lg:hidden  mx-auto">
                    <img src={img5} alt="" className="text rounded-lg" />
                </div>
                <div className="text w-full lg:w-3/5 text-xl">
                  <h1 className="text-2xl hidden lg:grid text-center my-4 font-bold">2. Caferia</h1>
                    <p className="lg:text-center  w-11/12 lg:px-16 lg:w-full px-2 mb-6 text-slate-600">It has been demonstrated that eating a balanced diet of wholesome foods improves academic achievement, energy levels, and general health. We think that our cafeteria offers students a practical and cost-effective approach to get hold of high-quality food selections that support a balanced and healthy lifestyle.</p>
                </div>
              </div>
              <div className="text lg:flex w-full gap-10 justify-center items-center py-5 "> 
                  <h1 className="text-2xl lg:hidden text-center my-4 font-bold mx-auto">3. Hall</h1>
                <div className="text w-5/6 mb-7  lg:hidden  mx-auto">
                    <img src={img6} alt="" className="text rounded-lg" />
                </div>
                <div className="text w-full lg:w-3/5 text-xl">
                  <h1 className="text-2xl hidden lg:grid text-center my-4 font-bold mx-auto">3. Hall</h1>
                    <p className="lg:text-center  w-11/12 lg:w-full px-2 mb-6 lg:px-16 text-slate-600"> The hall is a crucial component of our school community because it offers a place for parents, teachers, and students to gather to celebrate successes, exchange ideas, and take in performances. We think that our hall is a busy place.</p>
                </div>
                <div className="text hidden mx-auto lg:flex lg:w-2/5">
                    <img src={img6} alt="" className="text rounded-lg" />
                </div>
              </div>
          
            </div>
          </div>
      </section>
      <footer class="text-gray-600 mx-auto body-font">
        <div class="container px-5 py-24  mx-auto flex md:items-center lg:items-center md:flex-row md:flex-nowrap flex-wrap lg:px-32 flex-col">
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
  )
}

export default About
