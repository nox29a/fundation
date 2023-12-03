import React from 'react';
import HeroImg from '../img/hero.png';

const PDF_RESUME_URL = 'https://nox29a.pythonanywhere.com/static/assets/img/Łukasz-Adamczyk_CV.pdf';

const Hero = () => {

  const downloadFileAtURL = (url) => {
    fetch(url).then(response=>response.blob()).then(blob => {
      const blobURL = window.URL.createObjectURL(new Blob([blob]));
      const fileName = url.split('/').pop();
      const aTag = document.createElement('a');
      aTag.href = blobURL;
      aTag.setAttribute('download', fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
  })
}
  const lookAtFileAtURL = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
<div id="Hero" className='grid h-screen place-items-center bg-hero'>
  <div className='container mx-auto flex flex-col justify-center'>
    <div className='absolute font-semibold flex items-center uppercase'>
      <h1 className='text-[50px] sm:text-[70px] leading-[1.1] font-light'> 
      <span data-aos="zoom-out-down" className='font-semibold'>
      Adamczyk Łukasz<br />
      </span> 
      <span data-aos="zoom-out-right" className='text-[40px] sm:text-[60px] text-purple-900'>Frontend Developer<br /></span>
      <span data-aos="zoom-in-left" className='text-[30px] sm:text-[50px] '>
      Open to work
      </span></h1>
    </div>
    <div className='z-1 animate-in md:flex-rows flex justify-end    mt-96 lg:mt-20'>

          <button className='bg-purple-500 hover:bg-purple-700 text-white py-4 px-8 border border-purple-800 rounded-full mx-2 ' onClick={()=>{downloadFileAtURL(PDF_RESUME_URL)}}>DOWNLOAD CV</button>
          <button className='bg-purple-500 hover:bg-purple-700 text-white py-4 px-8 border border-purple-800 rounded-full mx-2' onClick={()=>{lookAtFileAtURL(PDF_RESUME_URL)}}>VIEW CV</button>
        

      </div>
  </div>
</div>
    );
};

export default Hero;
