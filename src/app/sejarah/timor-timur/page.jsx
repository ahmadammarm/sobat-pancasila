'use client';

import React, { useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
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
import EmbedVideoTimor from '@/app/components/EmbedVideoTimor';



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
                <BreadcrumbLink href="/"><span className="text-lg">Beranda</span></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/sejarah"><span className="text-lg">Sejarah</span></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage><span className="text-lg">Papua</span></BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col justify-center items-center mb-10 mt-20">
          <EmbedVideoTimor />
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
