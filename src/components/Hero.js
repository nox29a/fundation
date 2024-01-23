import React from 'react';
import Logo from '../img/logo.png';


const Hero = () => {

  return (
<div id="Hero" className='grid h-screen place-items-center bg-hero bg-cover'>
  <div className='container mx-auto flex justify-center'>
  <div className='w-1/2'>
    {/*
     <img className='h-1/2 mt-40 border-[20px] border-white rounded-full' src={Logo}></img>
    
     */} 
  </div>
<div className='flex'>

    <div className='flex  pl-40 text-center text-gray-800 mb-32 font-hero '>
    <div>

      <h1 className='text-[40px] leading-10 '> 
      <span data-aos="fade-up" className='shadow-sm'>
      "Jakże to ośmielacie się<br></br> prosić Boga o wybaczenie,<br></br> kiedy sami nie potraficie<br></br> wybaczyć?"<br />
      </span> </h1>
    </div>
</div>
    </div>

  </div>
</div>
    );
};

export default Hero;
