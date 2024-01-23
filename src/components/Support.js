import React from 'react';


import { AiFillHeart } from 'react-icons/ai';

const Support = () => {
  return (
    <div id="Support" className='pt-32 bg-body'>
      <div className='grid place-items-center'>
        <div className='container mx-auto'>
          <h1 data-aos="" className='text-5xl text-center py-8 text-black'>Wsparcie</h1>
          <div className='flex justify-center'>
          <AiFillHeart className='text-3xl mr-2 text-red-600' />Jeśli chcesz wesprzeć nasze działanie kliknij poniżej.
          <div>
            <button className='border-2 border-red-900 hover:bg-red-400 p-2 rounded-xl bg-red-700 text-white mt-16'>Wesprzyj</button>
          </div>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default Support;

