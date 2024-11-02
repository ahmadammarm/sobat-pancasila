'use client';

import React, { useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
import Copyright from '@/app/components/Copyright';
import Navbar from '@/app/components/Navbar';
import EmbedVideoAceh from '@/app/components/EmbedVideoAceh';
import HeaderSejarah from '@/app/components/HeaderSejarah';
import Sejarah3 from '@/app/components/Sejarah3';



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
      <HeaderSejarah title="SEJARAH 1969-1998" subtitle="1969-1998" link="Sejarah" href="/peta/sejarah" bgImage="/sejarah/aceh.jpg" />
      <div className="p-5">
        <div className="flex flex-col justify-center items-center mb-10 mt-20">
          <h1 className="text-4xl text-center font-bold mt-10 mb-10">Sejarah Wilayah Indonesia 1969-1998</h1>
        </div>
        <div>
          <Sejarah3 />
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default Page;
