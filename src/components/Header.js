import React from 'react';
import Logo from '../img/logo.png';
const Header = () => {
  return (
    <header className='bg-white backdrop-blur-sm w-full z-10 shadow-xl  fixed'>
      <div className='container mx-0 flex items-center h-full  '>
      <div className='w-1/2'>

        <div className='cursor-pointer mx-5 ' >
          <a href='#Hero'>
          <div className=' flex text-xs font-semibold font-secondary  uppercase text-right'>Jak <br></br> być <br></br> katolikiem
          <img className='sm:flex max-w-[50px] max-h-[50px] border-8 border-white rounded-full ml-2 ' src={Logo} alt="hero"></img>
          </div>
          </a>
      </div>
        </div>
        <div className='text-lg flex justify-around w-1/2 text-gray-600 '>

            <div className='m-2 p-2 shadow-xl rounded-xl bg-opacity-60 cursor-pointer hover:bg-gray-200' >
            <a href='#About'>Misja</a></div>
            <div className='m-2 p-2 shadow-xl rounded-xl bg-opacity-60 cursor-pointer hover:bg-gray-200' >
            <a href='#Shop'>Sklep</a></div>
            <div className='m-2 p-2 shadow-xl rounded-xl bg-opacity-60 cursor-pointer hover:bg-gray-200' >
            <a href='#Support'>Wsparcie</a></div>
            <div className='m-2 p-2 shadow-xl  rounded-xl bg-opacity-60 cursor-pointer hover:bg-gray-200' >
            <a href='#Contact'>Kontakt</a></div>
          </div>    
      </div>
  </header>
  ); 
};

export default Header;
