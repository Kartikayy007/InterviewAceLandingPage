'use client';
import React, { FormEvent, useLayoutEffect, useRef, useState } from 'react';
import { MoveRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';

import Link from 'next/link';

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  const [openPopup, setOpenPopUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: (i: any) => ({
      translateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),

    hidden: { translateY: 200 },
  };
  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const clientEmail = formData.get('newsletter_email')!;

    setOpenPopUp(true);
    target.reset();
    if (setOpenPopUp) {
      setTimeout(() => {
        setOpenPopUp(false);
      }, 2000);
    }
  };

  return (
    <>
      <div
        className='relative h-full sm:pt-14 pt-8 bg-[#f7f7f7] text-black'
        ref={container}
      >
        <div className='sm:container  px-4 mx-auto'>
          <div className='md:flex justify-between w-full'>
            <div>
              <h1 className='md:text-4xl text-2xl font-semibold'>
                Ace Your Interviews with Confidence
              </h1>
              <div className='pt-2 pb-6 md:w-99  '>
                <p className='md:text-2xl text-xl  py-4'>
                  Get early access to InterviewAce
                </p>
                <div className=' hover-button relative bg-black flex justify-between items-center border-2 overflow-hidden  border-black rounded-full  text-white hover:text-black md:text-2xl'>
                  <form
                    onSubmit={(e) => handleNewsLetterData(e)}
                    className='relative z-2 grid grid-cols-6  w-full h-full'
                  >
                    <input
                      type='email'
                      name='newsletter_email'
                      className='border-none bg-transparent  py-3 px-6  col-span-5'
                      placeholder='Your Email * '
                    />{' '}
                    <button
                      type='submit'
                      className='cursor-pointer w-full hover:bg-primaryColor bg-white text-white h-full cols-span-1'
                    >
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        className='w-full h-[80%] '
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                          fill='#000'
                          fillRule='evenodd'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className='flex gap-10'>
              <ul>
                <li className='text-2xl pb-2 text-black font-semibold'>
                  QUICK LINKS
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='#features'>Features</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='#how-it-works'>How It Works</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='#pricing'>Pricing</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='#faq'>FAQ</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='#contact'>Contact</Link>
                </li>
              </ul>
              <ul>
                <li className='text-2xl pb-2 text-black font-semibold'>
                  RESOURCES
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/download'>Download</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/documentation'>Documentation</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/support'>Support</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/terms'>Terms of Service</Link>
                </li>
                <li className='text-xl font-medium'>
                  <Link href='/privacy'>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex md:flex-row flex-col-reverse gap-3 justify-between py-2'>
            <span className='font-medium'>
              &copy; 2025 InterviewAce. All Rights Reserved.
            </span>
            <a href='/privacy' className='font-semibold'>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;