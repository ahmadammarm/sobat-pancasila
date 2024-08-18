'use client';

import React, { useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
import EmbedVideo from '@/app/components/EmbedVideo';
import Papua from '@/app/components/Papua';
import Copyright from '@/app/components/Copyright';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Navbar from '@/app/components/Navbar';



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
      <div className="p-5">
        <div className="mt-16">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/sejarah">Sejarah</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Papua</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col justify-center items-center mb-10 mt-20">
          <EmbedVideo />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Papua />
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default Page;
