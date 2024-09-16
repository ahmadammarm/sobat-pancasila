'use client';

import React, { useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
import Copyright from '@/app/components/Copyright';
import Navbar from '@/app/components/Navbar';
import EmbedVideoIkn from '@/app/components/EmbedVideoIkn';
import HeaderSejarah from '@/app/components/HeaderSejarah';
import IKN from '@/app/components/Ikn';



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
      <HeaderSejarah title="SEJARAH IBUKOTA NUSANTARA" subtitle="IKN" link="Sejarah" href="/sejarah" bgImage="/sejarah/ikn.jpg" />
      <div className="p-5">
        <div className="flex flex-col justify-center items-center mb-10 mt-20">
          <h1 className="text-4xl text-center font-bold mt-10 mb-10">Sejarah IKN di Indonesia</h1>
          <EmbedVideoIkn />
        </div>
        <div>
          <IKN />
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default Page;
