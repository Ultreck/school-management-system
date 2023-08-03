import React from 'react';
import img from '../images2/secondBackgroundjpg.jpg'
import img2 from '../images2/kids wearing masks at school-amico.png'
import img3 from '../images2/Graduation-bro.png'
import img4 from '../images2/Library-amico.png';
import img5 from '../images2/Conversation-amico.png'
import img6 from '../images2/House Halloween decorations-bro.png'
import Footer from './Footer';

const About = () => {
  return (
    <div className='text w-full'>
      <div className="text w-full h-screen bg-cover bg-no-repeat flex items-center justify-center bg-black/60 bg-blend-overlay " style={{backgroundImage: `url(${img})`}}>
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
                    <p className="lg:text  lg:px-16 text-xl text-slate-600">
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
                    <p className="lg:text  w-11/12 lg:px-16 lg:w-full px-2 mb-6 text-slate-600">It has been demonstrated that eating a balanced diet of wholesome foods improves academic achievement, energy levels, and general health. We think that our cafeteria offers students a practical and cost-effective approach to get hold of high-quality food selections that support a balanced and healthy lifestyle.</p>
                </div>
              </div>
              <div className="text lg:flex w-full gap-10 justify-center items-center py-5 "> 
                  <h1 className="text-2xl lg:hidden text-center my-4 font-bold mx-auto">3. Hall</h1>
                <div className="text w-5/6 mb-7  lg:hidden  mx-auto">
                    <img src={img6} alt="" className="text rounded-lg" />
                </div>
                <div className="text w-full lg:w-3/5 text-xl">
                  <h1 className="text-2xl hidden lg:grid text-center my-4 font-bold mx-auto">3. Hall</h1>
                    <p className="lg:text  w-11/12 lg:w-full px-2 mb-6 lg:px-16 text-slate-600"> The hall is a crucial component of our school community because it offers a place for parents, teachers, and students to gather to celebrate successes, exchange ideas, and take in performances. We think that our hall is a busy place.</p>
                </div>
                <div className="text hidden mx-auto lg:flex lg:w-2/5">
                    <img src={img6} alt="" className="text rounded-lg" />
                </div>
              </div>
          
            </div>
          </div>
      </section>
      <Footer/>
    </div>
  )
}

export default About
