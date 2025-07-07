'use client';

import React, { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { FaApple, FaWindows, FaArrowRight } from 'react-icons/fa';
import { ContainerScroll } from '../components/container-scroll-animation';
import Aurora from '@/components/Aurora';
import Footer from '@/components/footer';
import ScrollVelocity from '@/components/ScrollVelocity';
import Navbar from '@/components/Navbar';
import { Carousel, Card } from '../components/apple-cards-carousel';
import {GlowingEffect} from '@/components/glowing-effect';
import { LampContainer } from '../components/lamp';
import Grid from '../components/Grid';
import { AuthModal } from '@/components/AuthModal';
import { DownloadButton } from '@/components/DownloadButton';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export default function Home() {
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'waitlist'>('signin')
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const openAuthModal = (mode: 'signin' | 'signup' | 'waitlist') => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  // ...existing code...

  return (
    <div className={`${poppins.className}`}>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <Navbar />

      {/* hero section */}

      <div className='absolute inset-0 overflow-hidden h-full w-full -z-10 opacity-0 animate-[fadeIn_1s_ease-in-out_0s_forwards]'>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <ContainerScroll
        titleComponent={
          <>
            <div className='flex flex-col items-center justify-center space-y-6 px-4'>
              <div className='flex items-center justify-center '>
               
                <h1 className="text-4xl md:text-7xl font-bold text-white tracking-wider font-poppins mt-12">
                  Ace the Living Sh*t Out of Your Interviews
                </h1>
              </div>

              <p className="text-lg md:text-md text-white/90 text-center max-w-3xl leading-relaxed font-light mt-2">
                InterviewAce is an invisible AI assistant that helps you prepare for interviews by offering real-time support for coding and conceptual questions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <DownloadButton onNeedAuth={() => openAuthModal('signin')}>
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl space-x-2">
                      <FaApple className="text-2xl" />
                      <span>Download for Mac</span>
                    </span>
                  </button>
                </DownloadButton>

                <AuthModal defaultMode="waitlist">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl space-x-2">
                      <FaWindows className="text-lg" />
                      <span>Join Waiting List</span>
                      <FaArrowRight className="text-sm" />
                    </span>
                  </button>
                </AuthModal>
              </div>

              {/* Auth Modal controlled by state */}
              <AuthModal 
                key={authMode} 
                defaultMode={authMode}
              >
                <div style={{ display: 'none' }} />
              </AuthModal>
            </div>
          </>
        }
      >
        <div className='flex justify-center items-center '>
          <Image
            src="/hero.png"
            alt="Interviewace Logo"
            width={1000}
            height={480}
            priority
          />
        </div>
      </ContainerScroll>


        <h2 className="text-3xl font-bold text-center text-white mb-8">How It Works</h2>

        <div className="mt-10 w-full max-w-7xl mx-auto">
          <Grid />
        </div>

      <ScrollVelocity
        texts={[ 'Free Invisible AI Assistant']}
        velocity={50}
        className="custom-scroll-text"
      />

      <Footer />
    </div>
  );
}


