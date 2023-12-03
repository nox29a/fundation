import React from 'react';
import Github from '../img/25231.png';
import Vercel from '../img/25331.png';
import PaintingShop from '../img/paintingshop.PNG';
import BorniakShop from '../img/borniakshop.PNG';
import EditorWebsite from '../img/editorwebsite.PNG';
import Intrex from '../img/intrex.png';
import ForniRossi from '../img/forni.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Portfolio = () => {
  return (
<div id='Projects' className='grid place-items-center pt-32'>
  <div className='container mx-auto md:mx-0'>
    <h1 data-aos="flip-down" className='text-[70px] sm:text-[90px] text-center p-8 gap-4'>Portfolio</h1>
    <div className='text-lg grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8 gap-40 justify-center'>
        {/* borniak */}
        <div data-aos="flip-left" className='group w-72 sm:w-96 h-[500px] [perspective:1000px]'>
          <div className='bg-hero h-full border-2 border-purple-700 rounded-lg p-8 flex flex-col items-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='inset-0'>
    <div className='absolute text-purple-800 text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10 border-2 bg-yellow-400 border-purple-800'>new</div>
            <h1 className='text-3xl font-bold text-center mb-8'>Project for client</h1>
              <img className='h-[200px] w-full object-cover' src={BorniakShop} alt=""></img>
            <div className='pt-10 text-center'>
            - React <br />
            - FakeStoreApi <br />
                  - Tailwind CSS <br /></div>
            
            
            </div>
            
              <div className='absolute inset-0 h-full-w-full rounded-xl bg-white/90 px-12 text-center text-stale-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'> 
                <div className='flex min-h-full flex-col items-center justify-center'>
                  <h1 className='text-3xl font-bold text-black'>Borniak</h1>
                <div>
                  <div className='pt-10 text-black'>
                  Website design for renewal old look, not implemented full funcionality <br /></div>
                  <div className='flex flex-row justify-between mt-10 gap-10'>
                  <a href="https://github.com/nox29a/borniak"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Github} alt="github"></img></a>
                    <a href="https://borniak.vercel.app/"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Vercel} alt="vercel"></img></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    {/* intrex */}
    <div data-aos="flip-left" className='group w-72 sm:w-96 h-[500px] [perspective:1000px]'>
          <div className='bg-hero h-full border-2 border-purple-700 rounded-lg p-8 flex flex-col items-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='inset-0'>
    <div className='absolute text-purple-800 text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10 border-2 border-purple-800'>new</div>
            <h1 className='text-3xl font-bold text-center mb-8'>Copy of company website</h1>
              <img className='h-[200px] w-full object-cover' src={Intrex} alt=""></img>
            <div className='pt-10 text-center'>
            - React <br />
            - Tailwind CSS <br />
          </div>
            
            
            </div>
            
              <div className='absolute inset-0 h-full-w-full rounded-xl bg-white/90 px-12 text-center text-stale-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'> 
                <div className='flex min-h-full flex-col items-center justify-center'>
                  <h1 className='text-3xl font-bold text-black'>Intrex</h1>
                <div>
                  <div className='pt-10 text-black'>
                  I trying to make copy of main view of this company website<br /></div>
                  <div className='flex flex-row justify-between mt-10 gap-10'>
                  <a href="https://github.com/nox29a/intrex"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Github} alt="github"></img></a>
                    <a href="https://intrex.vercel.app"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Vercel} alt="vercel"></img></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    {/* forni */}
    <div data-aos="flip-left" className='group w-72 sm:w-96 h-[500px] [perspective:1000px]'>
          <div className='bg-hero h-full border-2 border-purple-700 rounded-lg p-8 flex flex-col items-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='inset-0'>
    <div className='absolute text-purple-800 text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10 border-2 border-purple-800'>new</div>
            <h1 className='text-3xl font-bold text-center mb-8'>Copy of company website</h1>
              <img className='h-[200px] w-full object-cover' src={ForniRossi} alt=""></img>
            <div className='pt-10 text-center'>
            - React <br />
            - Tailwind CSS <br />
          </div>
            
            
            </div>
            
              <div className='absolute inset-0 h-full-w-full rounded-xl bg-white/90 px-12 text-center text-stale-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'> 
                <div className='flex min-h-full flex-col items-center justify-center'>
                  <h1 className='text-3xl font-bold text-black'>Forni Rossi</h1>
                <div>
                  <div className='pt-10 text-black'>
                  I trying to make copy of main view of this company website<br /></div>
                  <div className='flex flex-row justify-between mt-10 gap-10'>
                  <a href="https://github.com/nox29a/forni-rossi"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Github} alt="github"></img></a>
                    <a href="https://fornirossi.vercel.app"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Vercel} alt="vercel"></img></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* editor */}
          <div data-aos="flip-left" className='group w-72 sm:w-96 h-[500px] [perspective:1000px]'>
          <div className='bg-hero h-full border-2 border-purple-700 rounded-lg p-8 flex flex-col items-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='inset-0'>

            <h1 className='text-3xl font-bold text-center mb-8'>Video editor <br /> website</h1>
              <img className='h-[200px] w-full object-cover' src={EditorWebsite} alt=""></img>
            <div className='pt-10 text-center'>
            My editor website</div> 
            
            
            </div>
            
              <div className='absolute inset-0 h-full-w-full rounded-xl bg-white/90 px-12 text-center text-stale-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'> 
                <div className='flex min-h-full flex-col items-center justify-center'>
                  <h1 className='text-3xl font-bold text-black'>Personal video website</h1>
                <div>
                  <div className='pt-10 text-black'>
                  I also working with videos and graphics. Making edits in Premiere Pro<br /></div>
                  <div className='flex flex-row justify-between mt-10 gap-10'>
                  <a href="https://github.com/nox29a/editor"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Github} alt="github"></img></a>
                    <a href="https://editor-nox.vercel.app/"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Vercel} alt="vercel"></img></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    {/* ecommerce */}
      <div  data-aos="flip-right" className='group w-72 sm:w-96 h-[500px] [perspective:1000px]'>
          <div className='bg-hero h-full border-2 border-purple-700 rounded-lg p-8 flex flex-col items-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='inset-0'>
              <h1 className='text-3xl font-bold text-center  mb-8'>Ecommerce Shop</h1>
              <img className='' src="http://nox29a.pythonanywhere.com/static/assets/img/0c81d715-48bf-439a-b952-f3b0038eda03.png" alt=""></img>
              <div className='pt-10 text-center'>
                  - ReactJS <br />
                  - Tailwind CSS <br />
                  - FakeStoreApi <br /></div>
            </div>
              <div className='absolute inset-0 h-full-w-full rounded-xl bg-white/90 px-12 text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]'> 
                <div className='flex min-h-full flex-col items-center justify-center'>
                  <h1 className='text-3xl font-bold '>Ecommerce Shop</h1>
                <div>
                  <div className='pt-10'>
                  Shop with electronic products, where you can add and remove products, in the future i will try to add payment function to it. <br />
</div>
                  <div className='flex flex-row justify-between mt-10 gap-10'>
                    <a href="https://github.com/nox29a/ecommerce-react-tailwind"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Github} alt="github"></img></a>
                    <a href="https://ecommerce-react-tailwind-gules.vercel.app/"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Vercel} alt="preview"></img></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    {/* countdown */}
      <div data-aos="flip-right" className='group w-72 sm:w-96 h-[500px] [perspective:1000px]'>
          <div className='bg-hero h-full border-2 border-purple-700 rounded-lg p-8 flex flex-col items-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='inset-0'>
              <h1 className='text-3xl font-bold text-center mb-8'>Countdown site</h1>
              <img className='' src="http://nox29a.pythonanywhere.com/static/assets/img/813e1fa0-bd35-4b0c-b732-f8fb12ecf8b4.png" alt=""></img>
              <div className='pt-10 text-center'>
                  - ReactJS <br />
                  - CSS <br /></div>
            </div>
              <div className='absolute inset-0 h-full-w-full rounded-xl bg-white/90 px-12 text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]'> 
                <div className='flex min-h-full flex-col items-center justify-center'>
                  <h1 className='text-3xl font-bold '>Countdown site</h1>
                <div>
                  <div className='pt-10'>
                  You can check here, how much time in this year we have got now. Also you can try with different date. <br />
</div>
                  <div className='flex flex-row justify-between mt-10 gap-10'>
                    <a href="https://github.com/nox29a/newyearcountdown-react"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Github} alt="github"></img></a>
                    <a href="https://newyearcountdown-react.vercel.app"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Vercel} alt="preview"></img></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>  
    {/* painting shop */}
      <div data-aos="flip-left" className='group w-72 sm:w-96 h-[500px] [perspective:1000px]'>
          <div className='bg-hero h-full border-2 border-purple-700 rounded-lg p-8 flex flex-col items-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
            <div className='inset-0'>
    <div className='absolute text-purple-800 text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10 border-2 border-purple-800'>new</div>
            <h1 className='text-3xl font-bold text-center mb-8'>Paintings shop</h1>
              <img className='h-[200px] w-full object-cover' src={PaintingShop} alt=""></img>
            <div className='pt-10 text-center'>
            - React <br />
            - Stripe <br />
                  - Strapi <br /></div>
            
            
            </div>
            
              <div className='absolute inset-0 h-full-w-full rounded-xl bg-white/90 px-12 text-center text-stale-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'> 
                <div className='flex min-h-full flex-col items-center justify-center'>
                  <h1 className='text-3xl font-bold text-black'>Paintings shop</h1>
                <div>
                  <div className='pt-10 text-black'>
                  Backend build with strapi, and payment method with stripe.<br /></div>
                  <div className='flex flex-row justify-between mt-10 gap-10'>
                  <a href="https://github.com/nox29a/mypaintingsshop"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Github} alt="github"></img></a>
                    <a href="https://mypaintingsshop.vercel.app"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Vercel} alt="vercel"></img></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    {/* simple django */}
      <div data-aos="flip-left" className='group w-72 sm:w-96 h-[500px] [perspective:1000px]'>
          <div className='bg-hero h-full border-2 border-purple-700 rounded-lg p-8 flex flex-col items-center transition-all duration-500 transform-custom group-hover:[transform:rotateY(180deg)]'>
            <div className='inset-0'>
            <h1 className='text-3xl font-bold text-center  mb-8'>My old portfolio website</h1>
              <img className='h-[200px] w-full object-cover' src="http://nox29a.pythonanywhere.com/static/assets/img/djanogsite.PNG" alt=""></img>
              <div className='pt-10 text-center'>
        - Python <br />
                  - Bootstrap <br />
                  - Django <br /></div>
            </div>
              <div className='absolute inset-0 h-full-w-full rounded-xl bg-white/90 px-12 text-center text-stale-200 [transform:rotateY(180deg)] backface-custom content-auto'> 
                <div className='flex min-h-full flex-col items-center justify-center'>
                  <h1 className='text-3xl font-bold text-black'>My portfolio site</h1>
                <div>
                  <div className='pt-10 text-black'>
                  This is my first made portfolio website, now with my more creative projects about videos, photos and images. <br /></div>
                  <div className='flex flex-row justify-between mt-10 gap-10'>
                    <a href="https://github.com/nox29a/cv"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Github} alt="github"></img></a>
                    <a href="https://nox29a.pythonanywhere.com/"><img className='max-w-[40px] max-h-[40px] cursor-pointer' src={Vercel} alt="vercel"></img></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
};

export default Portfolio;
