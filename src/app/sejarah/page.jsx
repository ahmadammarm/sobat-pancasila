'use client';

import React, { useState, useEffect } from 'react';
import HomeButton from '../components/HomeButton';
import Loading from '../components/Loading';
import EmbedVideo from '../components/EmbedVideo';

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
      <HomeButton />
      <div className="flex flex-col justify-center items-center">
        <EmbedVideo />
        <div className="rounded-md bg-yellow-500 mt-5 p-5 w-full max-w-2xl">
          <p className="text-center font-bold text-lg">Penjelasan</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates voluptatem eius quidem veniam nemo dolorem explicabo ut perferendis iste.
          </p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates voluptatem eius quidem veniam nemo dolorem explicabo ut perferendis iste.
          </p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates voluptatem eius quidem veniam nemo dolorem explicabo ut perferendis iste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
