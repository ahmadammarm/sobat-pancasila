'use client';

import React, { useState, useEffect } from 'react';
import HomeButton from '../components/HomeButton';
import Loading from '../components/Loading';

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
        <iframe
          className="rounded-md w-full h-[200px] sm:w-[400px] sm:h-[200px] md:w-[600px] md:h-[300px] lg:w-[1000px] lg:h-[500px]"
          src="https://www.youtube.com/embed/Ogj7O0B03l8?si=KPNSesDPlQH8meMW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
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
