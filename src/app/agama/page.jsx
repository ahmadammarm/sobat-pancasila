"use client"

import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import HomeButton from '../components/HomeButton';
import ImageSlider from '../components/image-slider/ImageSlider';
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
    <HeaderBanner title="AGAMA & KEPERCAYAAN DI INDONESIA" subtitle="Agama" link="Beranda" href="/" />
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mt-24 mb-5">
        AGAMA & KEPERCAYAAN DI INDONESIA
      </h1>
      <p
        className="text-lg lg:text-xl text-center mb-[6rem]">
        
        Yuk kenali lebih dekat agama dan kepercayaan di Indonesia.
      </p>
        <ImageSlider />
        <Copyright />
    </div>
    </>
  )
}

export default Page
