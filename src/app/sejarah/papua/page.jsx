'use client';

import React, { useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
import Papua from '@/app/components/Papua';
import Copyright from '@/app/components/Copyright';
import Navbar from '@/app/components/Navbar';
import EmbedVideoPapua from '@/app/components/EmbedVideoPapua';
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
      <HeaderSejarah title="SEJARAH PAPUA" subtitle="Papua" link="Sejarah" href="/sejarah" bgImage="/sejarah/papua.jpg" />
      <div className="p-5">
        <div className="flex flex-col justify-center items-center mb-10 mt-20">
          <h1 className="text-4xl text-center font-bold mt-10 mb-10">Sejarah Papua di Indonesia</h1>
          <EmbedVideoPapua />
        </div>
        <div>
          <Papua />
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default Page;
