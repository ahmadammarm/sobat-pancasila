'use client';

import React, { useState, useEffect } from 'react';
import HomeLink from '../components/HomeLink';
import Loading from '../components/Loading';
import { motion } from 'framer-motion';
import BannerCarousel from '../components/BannerCarousel';
import Navbar from '../components/Navbar';
import Copyright from '../components/Copyright';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <motion.main
      className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }}   
        className="text-[3rem] font-bold lg:text-[4rem] lg:font-extrabold text-center mt-[7rem]">
        SOBAT PANCASILA
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className="text-lg lg:text-xl text-center mb-[6rem]">
        Platform belajar seputar sejarah Indonesia yang menyenangkan dan interaktif.
      </motion.p>
      <HomeLink/>
      <Copyright />
    </motion.main>
  );
}
