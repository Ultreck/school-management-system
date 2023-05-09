import React, {useState, useEffect} from 'react';
import axios from 'axios'

const LandingAbout = () => {
  const [allData, setallData] = useState([])
  const url = "https://api.github.com/users";

  useEffect(() => {
    getData()
  }, [])
  
  const getData = () =>{
    axios.get(url).then(res => setallData(res.data)).catch(err => {console.log(err);})
  }

  return (
    <div className="pt-20 lg:w-1/4 w-5/6 mx-auto">
      <div className="text">
        
        {!allData.length?<div className="text-5xl font-bold ">Loading...</div>:
        allData.map((value, index) => (
          <div class="flex justify-center">
          <div
            class="block max-w-sm my-5 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                class="rounded-t-lg"
                src={value.avatar_url}
                alt="" />
            </a>
            <div class="p-6">
              <h5
                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
               {value.login}
              </h5>
              <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light">
                Button
              </button>
            </div>
          </div>
        </div>
         ))}
      
      </div>
      <button className="text bg-blue-500 px-8 py-1 rounded text-white" onClick={getData}>Get Data</button>
    </div>
  )
}

export default LandingAbout
