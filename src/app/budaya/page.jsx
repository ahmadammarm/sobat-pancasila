"use client";

import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';
import HeaderBanner from '../components/HeaderBanner';
import KebudayaanLink from '../components/KebudayaanLink';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIsland, setSelectedIsland] = useState(null);

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
      <HeaderBanner
        title={selectedIsland ? `Kebudayaan di ${islands[selectedIsland].nama}` : "KEBUDAYAAN DI INDONESIA"}
        subtitle="Budaya"
        link={selectedIsland ? "Kembali" : "Beranda"}
        href="/"
      />
      <h1 className="text-4xl font-bold text-center mt-24 mb-20">
        Kebudayaan di Indonesia
      </h1>
      <KebudayaanLink />
      <Copyright />
    </>
  );
};

export default Page;
