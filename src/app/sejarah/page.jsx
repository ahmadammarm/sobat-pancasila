"use client"

import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading';
import SejarahLink from '../components/SejarahLink';
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
    <HomeButton />
    <div className="ml-5 mb-10">
    <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/"><span className="text-lg">Beranda</span></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage><span className="text-lg">Sejarah</span></BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
    </div>
    <div className="p-4">
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
    </>
  )
}

export default Page
