'use client';

import React, { useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
import EmbedVideo from '@/app/components/EmbedVideo';
import BackButton from '@/app/components/BackButton';
import Papua from '@/app/components/Papua';
import Copyright from '@/app/components/Copyright';


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
    <div className="p-5">
      <BackButton />
      <div className="flex flex-col justify-center items-center mb-10">
        <EmbedVideo />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Papua />
      </div>
      <Copyright />
    </div>
  );
};

export default Page;
