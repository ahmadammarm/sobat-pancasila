'use client';

import React, { useState, useEffect } from 'react';
import HomeLink from './components/HomeLink';
import Loading from './components/Loading';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

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
      className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}  // Mulai dengan ukuran kecil
        animate={{ opacity: 1, scale: 1 }}    // Ukuran normal
        transition={{ duration: 4 }}
        className="text-[3rem] font-bold lg:text-[4rem] lg:font-extrabold text-center">
        SOBAT PANCASILA
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className="text-lg lg:text-xl text-center">
        <Typewriter
          options={{
            strings: 'Platform untuk berbagi informasi seputar NKRI',
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </motion.p>
      <HomeLink />
    </motion.main>
  );
}
