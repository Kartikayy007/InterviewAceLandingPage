'use client';

import React, { useState, useEffect } from 'react';
import { Urbanist } from 'next/font/google';
import Image from 'next/image';
// import BlurText from '@/components/BlurText';
// import { Sparkles } from '../components/Sparkles';
import { ContainerScroll } from '../components/container-scroll-animation';
import { BackgroundBeams } from '../components/background-beams';

// Initialize Urbanist font  
const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-urbanist',
});

export default function Home() {
  return (
    <div className={`relative h-screen w-screen ${urbanist.className}`}>

      <BackgroundBeams />

      <ContainerScroll
        titleComponent={
          <>
          <div className='flex items-center justify-center'>
              <Image
                src="/InterviewAceLogoLight.png"
                alt="Interviewace Logo"
                width={200}
                height={48}
                priority
              />
              <h1 className="text-3xl md:text-7xl font-bold text-white tracking-wider font-urbanist">
                InterviewAce
              </h1>
            </div>
          </>
        }
      >
        <div className='flex justify-center items-center'>
          <Image
            src="/hero.png"
            alt="Interviewace Logo"
            width={1000}
            height={480}
            priority
          />
        </div>
      </ContainerScroll>


    </div>
  );
}


