import React from 'react'

const NavBar2 = () => {
  return (
    <div>
      
      <nav class="bg-white px-2 z-40 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full md:hidden top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                  <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo"/>
                  <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                  </a>
 
            </div>
      </nav>
    </div>
  )
}

export default NavBar2
