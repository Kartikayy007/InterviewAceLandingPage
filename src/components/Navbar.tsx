'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { useUser } from '@/components/UserProvider';
import { AuthModal } from '@/components/AuthModal';
import { signOut } from '@/lib/auth-actions';
import { toast } from 'sonner';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, loading } = useUser();

  const handleSignOut = async () => {
    try {
      const result = await signOut();
      toast.success(result.message);
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to sign out');
    }
  };

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-4 transform -translate-x-1/2 left-1/2 z-50 bg-black/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-3 shadow-lg flex items-center justify-between w-[95%] max-w-6xl"
        >
          <div className="flex items-center space-x-2 md:space-x-3">
            <Image
              src="/InterviewAceLogoLight.png"
              alt="InterviewAce Logo"
              width={32}
              height={32}
              priority
              className="drop-shadow-sm md:w-10 md:h-10"
            />
            <span className="text-white font-semibold text-base md:text-lg">InterviewAce</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-white hover:text-gray-300 transition-colors">Features</a>
            <a href="#pricing" className="text-white hover:text-gray-300 transition-colors">Pricing</a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
            
            {loading ? (
              <div className="text-white">Loading...</div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <a href="/dashboard" className="text-white hover:text-gray-300 transition-colors flex items-center space-x-2">
                  <FaUser size={16} />
                  <span>{user.user_metadata?.full_name || user.email}</span>
                </a>
                <button 
                  onClick={handleSignOut}
                  className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <AuthModal defaultMode="signin">
                  <button className="text-white hover:text-gray-300 transition-colors">Login</button>
                </AuthModal>
                <AuthModal defaultMode="signup">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">Sign Up</button>
                </AuthModal>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:hidden"
              >
                <div className="flex flex-col space-y-3">
                  <a 
                    href="#features" 
                    className="text-white hover:text-gray-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a 
                    href="#pricing" 
                    className="text-white hover:text-gray-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </a>
                  <a 
                    href="#contact" 
                    className="text-white hover:text-gray-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                  
                  {user ? (
                    <>
                      <a 
                        href="/dashboard" 
                        className="text-white hover:text-gray-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/10 flex items-center space-x-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <FaUser size={16} />
                        <span>Dashboard</span>
                      </a>
                      <button 
                        onClick={() => {
                          handleSignOut();
                          setIsMobileMenuOpen(false);
                        }}
                        className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors text-center"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <AuthModal defaultMode="signin">
                        <button 
                          className="text-white hover:text-gray-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/10 text-left"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Login
                        </button>
                      </AuthModal>
                      <AuthModal defaultMode="signup">
                        <button 
                          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-center"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Sign Up
                        </button>
                      </AuthModal>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}