'use client';

import React, { useState, useEffect } from 'react';
import HomeLink from '../components/HomeLink';
import Loading from '../components/Loading';
import { motion } from 'framer-motion';
import BannerCarousel from '../components/BannerCarousel';
import Navbar from '../components/Navbar';
import Copyright from '../components/Copyright';
import About from '../components/About';

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
      <Navbar />
      <BannerCarousel />
      <About />
      <h1 className="text-center text-lg text-yellow-700" id="pembelajaran">──── Fitur Pembelajaran ────</h1>
      <h1 className="text-center text-4xl mb-16 font-bold text-slate-800">Ragam Fitur Pembelajaran</h1>
      <HomeLink/>
      <Copyright />
    </motion.main>
  );
}
