"use client"

import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading';
import SejarahLink from '../components/SejarahLink';

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
      <h1 className="text-4xl font-bold text-center mt-10 mb-5">
        SEJARAH WILAYAH INDONESIA
      </h1>
      <SejarahLink />
    </div>
  )
}

export default Page
