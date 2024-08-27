"use client";

import React, {useState, useEffect} from 'react';
import HomeButton from '../components/HomeButton';
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

  const imgSumatera = '/pulau/SUMATERA.png';
  const namaSumatera = 'Sumatera';
  const descSumatera =
    'Sumatera adalah pulau terbesar keenam di dunia yang terletak di Indonesia. Pulau ini terbagi menjadi 10 provinsi.';

  const imgSulawesi = '/pulau/SULAWESI.png';
  const namaSulawesi = 'Sulawesi';
  const descSulawesi =
    'Sulawesi adalah pulau keempat terbesar di Indonesia dengan 6 provinsi yang berbeda.';

  const imgBaliNusa = '/pulau/BALI_NUSA_TENGGARA.png';
  const namaBaliNusa = 'Bali & Nusa Tenggara';
  const descBaliNusa =
    'Bali dan Nusa Tenggara terkenal dengan keindahan alam dan budaya yang kaya.';

  const imgMaluku = '/pulau/MALUKU.png';
  const namaMaluku = 'Maluku';
  const descMaluku =
    'Maluku adalah dua pulau di Indonesia bagian timur yang kaya akan sejarah dan budaya maritim.';

  const imgPapua = '/pulau/PAPUA.png';
  const namaPapua = 'Papua';
  const descPapua =
    'Papua adalah pulau terbesar kedua di dunia dengan keanekaragaman hayati yang luar biasa.';

  const jawaKalimantan = [
    {
      nama: 'Kalimantan',
      img: '/pulau/KALIMANTAN.png',
      desc: 'Kalimantan adalah pulau terbesar ketiga di dunia yang terkenal dengan hutan hujannya.',
    },
    {
      nama: 'Jawa',
      img: '/pulau/JAWA.png',
      desc: 'Jawa adalah pulau terpadat di Indonesia, pusat pemerintahan dan ekonomi negara ini.',
    },
  ];

  return (
    <>
    <Navbar />
      <HomeButton />
      <div className="ml-5 mb-20">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Peta</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      <h1 className="text-4xl font-bold text-center mt-10">
        PETA WILAYAH NKRI
      </h1>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col mb-4 md:mb-0 md:mr-4 relative group">
            <img
              src={imgSumatera}
              alt={namaSumatera}
              width="250"
              height="200"
              className="cursor-pointer rounded-md hover:shadow-md"
            />
            <div className="absolute top-0 left-0 right-0 invisible group-hover:visible p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg transform -translate-y-full">
              {descSumatera}
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {jawaKalimantan.map((data, index) => (
              <div key={index} className="flex justify-center relative group">
                <img
                  src={data.img}
                  alt={data.nama}
                  width="250"
                  height="200"
                  className="cursor-pointer rounded-md hover:shadow-md"
                />
                <div className="absolute top-0 left-0 right-0 invisible group-hover:visible p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg transform -translate-y-full">
                  {data.desc}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col mt-5 ml-4 space-y-4">
            <div className="relative group">
              <img
                src={imgSulawesi}
                alt={namaSulawesi}
                width="200"
                height="150"
                className="cursor-pointer rounded-md hover:shadow-md mb-4"
              />
              <div className="absolute top-0 left-0 right-0 invisible group-hover:visible p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg transform -translate-y-full">
                {descSulawesi}
              </div>
            </div>
            <div className="relative group">
              <img
                src={imgBaliNusa}
                alt={namaBaliNusa}
                width="250"
                height="200"
                className="cursor-pointer rounded-md hover:shadow-md"
              />
              <div className="absolute top-0 left-0 right-0 invisible group-hover:visible p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg transform -translate-y-full">
                {descBaliNusa}
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 relative group">
            <img
              src={imgMaluku}
              alt={namaMaluku}
              width="100"
              height="50"
              className="cursor-pointer rounded-md hover:shadow-md mb-4"
            />
            <div className="absolute top-0 left-0 right-0 invisible group-hover:visible p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg transform -translate-y-full w-[300px] h-[100px] z-10">
              {descMaluku}
            </div>
          </div>
          <div className="flex flex-col mt-10 relative group">
            <img
              src={imgPapua}
              alt={namaPapua}
              width="300"
              height="200"
              className="cursor-pointer rounded-md hover:shadow-md mb-4"
            />
            <div className="absolute top-0 left-0 right-0 invisible group-hover:visible p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg transform -translate-y-full">
              {descPapua}
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Page;


