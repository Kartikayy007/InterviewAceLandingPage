'use client';

import React, { useState, useEffect } from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import { Urbanist } from 'next/font/google';
import Image from 'next/image';
import BlurText from '@/components/BlurText';
// import { Sparkles } from '../components/Sparkles';

// Initialize Urbanist font  
const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-urbanist',
});

export default function Home() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [canvasVisible, setCanvasVisible] = useState(false);

  useEffect(() => {
    // Delay loading the canvas by 500ms
    const timer = setTimeout(() => {
      setShowCanvas(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Add effect to fade in the canvas after it's loaded
  useEffect(() => {
    if (showCanvas) {
      // Short delay to ensure canvas is rendered before starting fade-in
      const fadeTimer = setTimeout(() => {
        setCanvasVisible(true);
      }, 100);

      return () => clearTimeout(fadeTimer);
    }
  }, [showCanvas]);

  return (
    <div className={`relative h-screen w-screen ${urbanist.className}`}>
      {/* Simple background gradient as placeholder before canvas loads */}
      <div
        className={`absolute bg-black  ${
          showCanvas ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {showCanvas && (
        <div
          className={`transition-opacity duration-1000 ease-in h-screen ${
            canvasVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ShaderGradientCanvas
            style={{
              width: '100%',
              height: '100%',
            }}
            lazyLoad={true}
            fov={undefined}
            pixelDensity={1}
            pointerEvents="none"
          >
            <ShaderGradient
              animate="on"
              type="sphere"
              wireframe={false}
              shader="defaults"
              uTime={0}
              uSpeed={0.3}
              uStrength={0.3}
              uDensity={0.8}
              uFrequency={5.5}
              uAmplitude={3.2}
              positionX={-0.1}
              positionY={0}
              positionZ={0}
              rotationX={0}
              rotationY={130}
              rotationZ={70}
              color1="#47B6FF"
              color2="#F96C6C"
              color3="#EA5D9F"
              reflection={0.4}
              cAzimuthAngle={270}
              cPolarAngle={180}
              cDistance={0.5}
              cameraZoom={15.1}
              lightType="env"
              brightness={0.8}
              envPreset="city"
              grain="on"
              toggleAxis={false}
              zoomOut={false}
              hoverState=""
              enableTransition={false}
            />
          </ShaderGradientCanvas>
        </div>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-between mt-32 z-10">
        <div className="flex items-center space-y-6">
          <Image
            src="/InterviewAceLogoLight.png"
            alt="Interviewace Logo"
            width={200}
            height={48}
            priority
          />
          <BlurText
            text="InterviewAce"
            delay={50}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-8xl font-bold text-white tracking-wider font-urbanist"
          />
        </div>
        {/* <div className='relative -mt-32 h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#163474] after:bg-[#08132b]'>
          <Sparkles
            density={800}
            speed={1.2}
            size={1.2}
            direction='top'
            opacitySpeed={2}
            color='#32A7FF'
            className='absolute inset-x-0 bottom-0 h-full w-full '
          />
        </div> */}
      </div>
    </div>
  );
}


