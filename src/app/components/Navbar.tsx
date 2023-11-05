import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-stone-50 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image src="/LogoFinal.png" alt="Descripción de la imagen" width={200} height={150} />
          <span className="font-semibold text-xl tracking-tight">Rondero</span>
        </div>
        
        <div className="block lg:hidden">
          <button id='boton' className="flex items-center px-3 py-2 border rounded text-neutral-400 border-neutral-400 hover:text-black hover:border-black">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>

      
        <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right">
          <div className="text-base lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-black mr-8">
              Registrarse
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-black mr-8">
              Entrar
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-black mr-8">
              Registrar Crimen
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-neutral-500 hover:text-black mr-8">
              Blog
            </a>
          </div>

          <div className="relative inline-block ml-6 mt-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar Ciudad"/>
          </div>
        </div>
    </nav>

  </div>
  )
}

export default Navbar