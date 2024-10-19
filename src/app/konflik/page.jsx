"use client"

import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';
import HeaderBanner from '../components/HeaderBanner';
import KonflikLink from '../components/KonflikLink';

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
      <HeaderBanner title="KONFLIK WILAYAH INDONESIA" subtitle="Konflik" link="Beranda" href="/" />
      <div className="p-4">
        <h1 className="text-4xl font-bold text-center mt-24 mb-5">
          Konflik Wilayah Indonesia
        </h1>
        <p
          className="text-lg lg:text-xl text-center mb-[6rem]">

          Yuk kenali lebih dekat konflik yang pernah terjadi wilayah di Indonesia.
        </p>
        <KonflikLink />
        <Copyright />
      </div>
    </>
  )
}

export default Page
