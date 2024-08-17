'use client';

import React, { useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
import EmbedVideo from '@/app/components/EmbedVideo';
import { ArrowBigDownIcon } from 'lucide-react';
import BackButton from '@/app/components/BackButton';
import Papua from '@/app/components/Papua';


const page = () => {
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
      <div className="flex flex-col justify-center items-center">
        <EmbedVideo />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Papua />
      </div>
    </div>
  );
};

export default page;
