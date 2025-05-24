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

// Initialize Poppins font  
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export default function Home() {
  const cards = [
    {
      src: "/hero.png",
      title: "Real-time AI Assistance",
      category: "AI Powered",
      content: <p>Get instant help during your interviews with our invisible AI assistant that provides real-time coding solutions and answers.</p>
    },
    {
      src: "/hero.png", 
      title: "Undetectable Technology",
      category: "Stealth Mode",
      content: <p>Our advanced technology ensures your AI assistance remains completely invisible to interviewers and screen sharing software.</p>
    },
    {
      src: "/hero.png",
      title: "Practice Sessions",
      category: "Preparation",
      content: <p>Perfect your interview skills with our comprehensive practice sessions covering coding, system design, and behavioral questions.</p>
    }
  ];

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


                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl space-x-2">
                    <FaApple className="text-2xl" />
                    <span>Download for Mac</span>
                  </span>
                </button>

                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl space-x-2">
                    <FaWindows className="text-lg" />
                    <span>Join Waiting List</span>
                    <FaArrowRight className="text-sm" />
                  </span>
                </button>
              </div>
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

      {/* How It Works */}

        <h2 className="text-3xl font-bold text-center text-white mb-8">How It Works</h2>

        <div className="mt-10 w-full max-w-7xl mx-auto">
          <Grid />
        </div>


      {/* to been completed later  */}

      {/* <Carousel items={cards.map((card, index) => (
        <Card key={card.title} card={card} index={index} />
      ))} /> */}

      <ScrollVelocity
        texts={[ 'Free. Invisible. Ruthlessly Effective.']}
        velocity={50}
        className="custom-scroll-text"
      />

      <Footer />
    </div>
  );
}


