"use client"

import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading';
import SejarahLink from '../components/SejarahLink';
import HomeButton from '../components/HomeButton';
import Copyright from '../components/Copyright';

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
    <div className="p-4">
    <HomeButton />
      <h1 className="text-4xl font-bold text-center mt-10 mb-5">
        SEJARAH WILAYAH INDONESIA
      </h1>
      <p
        className="text-lg lg:text-xl text-center mb-[6rem]">
        
        Yuk kenali lebih dekat sejarah wilayah di Indonesia.
      </p>
      <SejarahLink />
      <Copyright />
    </div>
  )
}

export default Page
