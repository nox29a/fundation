import React from 'react';


import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Contact = () => {
  return (
    <div id="Contact" className='pt-32 bg-body text-black'>
      <div className='grid place-items-center'>
        <div className='container mx-auto'>
          <h1 data-aos="" className='text-5xl text-center py-8 text-black'>Kontakt</h1>
          <div className='flex flex-col sm:flex-row text-center justify-center my-10'>
            <div className='w-full sm:w-1/2 flex items-center mb-4 sm:mb-0'>
              <AiOutlineMail className='text-3xl mr-2' />
              <p className='text-lg'>Możesz się z nami skontaktować pisząc na adres mailowy:</p>
            </div>
            <p className='w-full sm:w-1/2 text-lg mb-4 sm:mb-0'>example@example.com</p>
          </div>
          <div className='flex flex-col sm:flex-row text-center justify-center my-5'>
            <div className='w-full sm:w-1/2 flex items-center mb-4 sm:mb-0'>
              <AiOutlinePhone className='text-3xl mr-2' />
              <p className='text-lg'>Skontaktuj się z nami telefonicznie pod numerem:</p>
            </div>
            <p className='w-full sm:w-1/2 text-lg'>+48 123 456 789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

