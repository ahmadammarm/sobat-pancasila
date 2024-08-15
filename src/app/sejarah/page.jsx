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
        <HomeButton/>
        <div className="flex flex-col justify-center items-center min-h-screen">
            <iframe className="rounded-md" width="1000" height="500" src="https://www.youtube.com/embed/Ogj7O0B03l8?si=KPNSesDPlQH8meMW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className="rounded-md bg-yellow-500 mt-5 p-5">
                <p>Penjelasan</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates voluptatem eius quidem veniam nemo dolorem explicabo ut perferendis iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates voluptatem eius quidem veniam nemo dolorem explicabo ut perferendis iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates voluptatem eius quidem veniam nemo dolorem explicabo ut perferendis iste.</p>
            </div>
        </div>
    </div>
  )
};

export default Page;
