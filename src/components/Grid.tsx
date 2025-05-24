'use client';
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
interface ProjectsTypes {
  id: string;
  img: string;
  title: string;
  des: string;
}
const projects: ProjectsTypes[] = [
  {
    id: '01',
    img: 'https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/03-04-2025-075235-baijo1losehelibrta_photo1.jpg',
    title: 'Real-time AI Assistance',
    des: 'Get instant help during your interviews with our invisible AI assistant that provides real-time coding solutions and answers.',
  },
  {
    id: '02',
    img: 'https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/03-04-2025-075235-baijo1losehelibrta_photo1.jpg',
    title: 'Undetectable Technology',
    des: 'Our advanced technology ensures your AI assistance remains completely invisible to interviewers and screen sharing software.',
  },
  {
    id: '03',
    img: 'https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/03-04-2025-075235-baijo1losehelibrta_photo1.jpg',
    title: 'Practice Sessions',
    des: 'Perfect your interview skills with our comprehensive practice sessions covering coding, system design, and behavioral questions.',
  },
  {
    id: '04',
    img: 'https://cdn.shopify.com/s/files/1/0570/7389/3509/t/1/assets/03-04-2025-075235-baijo1losehelibrta_photo1.jpg',
    title: 'Smart Analytics',
    des: 'Track your progress and identify areas for improvement with detailed analytics and performance insights.',
  },
];

export default function Grid() {
  return (
    <>
      <div className='grid grid-cols-12  gap-4 overflow-hidden px-5 lg:pb-5 pb-2'>
        {projects.map((project, index) => {
          let colSpanClass = 'sm:col-span-6 col-span-12 ';
          if (index === 0) {
            colSpanClass = ' sm:col-span-5 col-span-12 ';
          } else if (index === 1) {
            colSpanClass = 'sm:col-span-7 col-span-12 ';
          } else if (index === projects.length - 2) {
            colSpanClass = 'sm:col-span-7 col-span-12 ';
          } else if (index === projects.length - 1) {
            colSpanClass = 'sm:col-span-5 col-span-12 ';
          }
          return (
            <>
              <motion.article
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: 'easeOut' }}
                viewport={{ once: false }}
                className={` relative  ${colSpanClass} `}
              >
                <div className='w-auto h-full'>
                  <Image
                    src={project?.img}
                    alt={project.title}
                    height={600}
                    width={1200}
                    className='h-full w-full object-cover rounded-xl'
                  />
                </div>
                <div className='absolute lg:bottom-2 bottom-0 text-black w-full p-4 flex justify-between items-start'>
                  <div className='flex-1'>
                    <h3 className='lg:text-xl text-sm bg-black text-white rounded-xl p-2 px-4 mb-2'>
                      {project.title}
                    </h3>
                    <p className='text-white text-sm lg:text-base bg-black/80 rounded-lg p-2 backdrop-blur-sm'>
                      {project.des}
                    </p>
                  </div>
                  <div className='lg:w-12 w-10 lg:h-12 h-10 text-white grid place-content-center rounded-full bg-black ml-2'>
                    <MoveUpRight />
                  </div>
                </div>
              </motion.article>
            </>
          );
        })}
      </div>
    </>
  );
}
