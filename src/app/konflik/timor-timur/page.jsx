'use client';

import React, { useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
import Copyright from '@/app/components/Copyright';
import Navbar from '@/app/components/Navbar';
import EmbedVideoTimor from '@/app/components/EmbedVideoTimor';
import TimorTimur from '@/app/components/TimorTimur';
import HeaderSejarah from '@/app/components/HeaderSejarah';



const Page = () => {
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
    <>
      <Navbar />
      <HeaderSejarah title="KONLFIK DI TIMOR TIMUR" subtitle="Timor Timur" link="Konflik" href="/konflik" bgImage="/sejarah/timor-timur.jpg" />
      <div className="p-5">
        <div className="flex flex-col justify-center items-center mb-10 mt-20">
        <h1 className="text-4xl text-center font-bold mt-10 mb-10">Konflik di Wilayah Timor Timur</h1>
          <EmbedVideoTimor />
        </div>
        <div>
          <TimorTimur />
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default Page;
