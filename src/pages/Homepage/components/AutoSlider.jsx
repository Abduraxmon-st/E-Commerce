import React, { useEffect, useRef, useState } from 'react';
import { AppleIcon } from '../../../assets/icons/AppleIcon';
import  PhoneImg  from '../../../assets/img/iphoneImg.png';

export const IphoneSlider = () => {
  const slidescontainerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSilides = 5

  useEffect(()=> {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSilides)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (slidescontainerRef.current) {
      slidescontainerRef.current.style.transform = `translateX(-${currentIndex * 100}%)` 
    }
  }, [currentIndex])

  const handleClick = (index) => {
    setCurrentIndex(index)
  }



  return (
    <div className='relative w-[77%] mt-10 overflow-hidden'>
      <div className='h-full'>
        <div ref={slidescontainerRef} className='flex items-center h-full text-white transition-transform duration-500' style={{width: `${totalSilides * 20}%`}}>
          {[...Array(totalSilides)].map((_, index) => (
            <div key={index} className='relative flex min-w-full h-full bg-black'>
              <div className='pt-[58px] pb-12 pl-[64px]'>
                <div className='flex items-center gap-6'>
                  <AppleIcon/>
                  <p>iPhone 14 Series</p>
                </div>
                <p className='mt-5 font-[Inter] text-[48px] font-semibold leading-[60px] tracking-wider'>Up to 10% <br /> off Voucher</p>
                <div className='flex gap-2 mt-[22px]'>
                <a className='border-b-1 border-white ' href="#">Shop Now</a><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <img className='absolute top-4 -right-10' src={PhoneImg} alt="Iphone" />
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-3 items-center absolute bottom-3 left-[50%] -translate-x-2/4 '>
        {[...Array(totalSilides)].map((_, index) => (
            <button onClick={() => handleClick(index)} key={index} className={`w-[14px] h-[14px] border-2 border-black rounded-2xl cursor-pointer 
            ${currentIndex === index ? 'bg-[#DB4444] border-white' : 'bg-[#808080]'}`}></button>
          ))}
      </div>
    </div>
  );
};

// Tojixojayev Abduraxmon U7