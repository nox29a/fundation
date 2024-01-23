import React from 'react';
import ProductSlider from './ProductSlider';
import Logo from '../img/logo2.png';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Shop = () => {
  return (
    <div id="Contact" className='pt-32 bg-body'>
      <div className='grid place-items-center'>
        <div className='container mx-auto'>
        <div className='flex items-center text-center justify-center'>

          <h1 data-aos="" className='text-5xl text-center py-8 text-black'>Sklep</h1>
          <img className='sm:flex max-w-[100px] max-h-[100px] border-8 border-white rounded-full ml-2 ' src={Logo} alt="hero"></img>
        </div>
        <h2 className='text-black text-center mb-4'>Najpopularniejsze produkty:</h2>
            <ProductSlider />
        </div>
        <div>
            <button className='border-2 border-blue-900 hover:bg-blue-400 p-2 rounded-xl bg-primary text-white mt-4 text-end'>Zobacz więcej</button>
          </div>
      </div>
    </div>
  );
};

export default Shop;

