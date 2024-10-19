"use client"

import { Chart } from '@/app/components/Chart';
import Copyright from '@/app/components/Copyright';
import HeaderBanner from '@/app/components/HeaderBanner';
import ImageSlider from '@/app/components/image-slider/ImageSlider';
import Kepercayaan from '@/app/components/Kepercayaan';
import Loading from '@/app/components/Loading';
import Navbar from '@/app/components/Navbar';
import React, { useState, useEffect } from 'react'

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
    <HeaderBanner title="AGAMA & KEPERCAYAAN DI INDONESIA" subtitle="Agama" link="Budaya" href="/budaya" />
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mt-24 mb-5">
        AGAMA & KEPERCAYAAN DI INDONESIA
      </h1>
      <p
        className="text-lg lg:text-xl text-center mb-[6rem]">

        Yuk kenali lebih dekat agama dan kepercayaan di Indonesia.
      </p>
        <ImageSlider />
        <Chart />
        <Kepercayaan />
        <Copyright />
    </div>
    </>
  )
}

export default Page
