'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY) {
          setIsVisible(false);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-4 transform -translate-x-1/2 left-1/2 z-50 bg-black/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg flex items-center justify-between w-full max-w-6xl"
        >
          <div className="flex items-center space-x-3">
            <Image
              src="/InterviewAceLogoLight.png"
              alt="InterviewAce Logo"
              width={40}
              height={40}
              priority
              className="drop-shadow-sm"
            />
            <span className="text-white font-semibold text-lg">InterviewAce</span>
          </div>
          
          <div className="ml-auto flex items-center space-x-4">
            <a href="#features" className="text-white hover:text-gray-300 transition-colors">Features</a>
            <a href="#pricing" className="text-white hover:text-gray-300 transition-colors">Pricing</a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
            <a href="#login" className="text-white hover:text-gray-300 transition-colors">Login</a>
            <a href="#signup" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">Sign Up</a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}