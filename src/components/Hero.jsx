import React from 'react';
import Typed from 'react-typed';
import Wave from './Wave';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => {
  return (
    <div className='text-white h-96'>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className='max-w-[800px] mt-[50px] w-full mx-auto text-center flex flex-col justify-center'>
      <motion.div variants={textVariant(1.1)} >
        <p className='text-[#00df9a] font-bold p-2'>
          Make your dream event a reality
        </p>
      </motion.div>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >

        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Elimol Event & Rentals.
        </h1>
        </motion.div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-4xl text-xl font-bold py-4'>
            Dream destination for your
          </p>
          <Typed
          className='md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500'
            strings={['Bachelorrette Party', 'Birthday Party', 'Wedding','Conferences', 'Naming Ceremony', 'Anniversary','Reception']}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Contact us for all your rental needs.</p>
        </motion.div>
      </div>
      </motion.div>
    </div>
  );
};

export default Hero;