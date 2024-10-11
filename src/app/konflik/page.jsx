"use client"

import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading';
import SejarahLink from '../components/SejarahLink';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';
import HeaderBanner from '../components/HeaderBanner';

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
      {/* <HomeButton /> */}
      <HeaderBanner title="SEJARAH WILAYAH INDONESIA" subtitle="Sejarah" link="Beranda" href="/" />
      <div className="p-4">
        <h1 className="text-4xl font-bold text-center mt-24 mb-5">
          Sejarah Wilayah Indonesia
        </h1>
        <p
          className="text-lg lg:text-xl text-center mb-[6rem]">

          Yuk kenali lebih dekat sejarah wilayah di Indonesia.
        </p>
        <SejarahLink />
        <Copyright />
      </div>
    </>
  )
}

export default Page
