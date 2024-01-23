import React from 'react';
import {BsYoutube, BsInstagram, BsTiktok} from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const About = () => {
  return (
  <div id="About" className=' pt-32 bg-body text-black'>
    <div className='place-items-center'>
      <div className='container mx-auto'>
        <h1 data-aos="" className='text-[90px] text-center p-8 gap-4 text-black'>Misja</h1>
            <div className='text-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-20 p-5'>
             <p className='p-5'>🌿 Nasza MISJA 🌿 <br></br>
Dążymy do zachowania i promowania autentycznych tradycji katolickich, które stanowią fundament naszej wspólnoty wiary. Pragniemy podtrzymać dziedzictwo przekazywane z pokolenia na pokolenie, inspirując naszych współwyznawców do zanurzenia się w bogactwie naszej religijnej historii.
</p>
<p className='p-5'>

💖 Dlaczego Oryginalne Tradycje? 💖<br></br>
Wierzymy, że w korzeniach naszej wiary kryje się siła, która kształtuje naszą tożsamość katolicką. Oryginalne tradycje, od modlitw po obrzędy, stanowią niezastąpiony skarb, który łączy nas z dziejami Kościoła. Pragniemy, aby każdy wierny mógł doświadczyć piękna i znaczenia tych dążeń.
</p>
<p className='p-5'>

🌍 Nasza Praca w Społeczności 🌍<br></br>
Organizujemy wydarzenia edukacyjne, seminaria i rekolekcje, by głębiej zrozumieć nasze dziedzictwo. Wspieramy duszpasterzy, parafie i szkoły w odkrywaniu piękna katolickiej tradycji. Nasze projekty mają na celu zbudowanie silniejszej wspólnoty, opartej na wspólnocie, modlitwie i poszanowaniu dla naszych korzeni.
</p>
<p className='p-5'>
🤝 Dołącz do Nas! 🤝<br></br>
Zapraszamy wszystkich, którzy pragną być częścią tej pięknej podróży przez historię, wiarę i wspólnotę. Razem możemy pielęgnować nasze tradycje, by przekazać je kolejnym pokoleniom. Dołączcie do naszej rodziny wiarą zanurzoną w oryginalnych tradycjach katolickich!</p>
             </div>
             <h1 data-aos="" className='text-[32px] text-center p-8 gap-4 text-black mt-4'>Zapraszamy na nasze social media:</h1>
             <div className='flex justify-between lg:mx-32 mx-0'>

             <div className='grid mx-2 cursor-pointer'>
      <div><BsYoutube className='text-6xl lg:ml-12 text-red-700'></BsYoutube></div>
      
      </div>
      <div className='grid mx-2 cursor-pointer'>
      <div><BsInstagram className='text-6xl ml-12 text-purple-700'></BsInstagram></div>
      
      </div>
      <div className='grid mx-2 cursor-pointer'>
      <div><BsTiktok className='text-6xl ml-12 text-blue-600'></BsTiktok></div>
      
      </div>
             </div>
      </div>
    </div>

    
  </div>
  )
};

export default About;
