"use client";

import Copyright from '@/app/components/Copyright';
import HeaderBanner from '@/app/components/HeaderBanner';
import Loading from '@/app/components/Loading';
import Navbar from '@/app/components/Navbar';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeline, setSelectedTimeline] = useState('2010-sekarang');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const islands = {
    sumatera: { img: '/pulau/SUMATERA.png', nama: 'Sumatera', description: 'Sumatera adalah pulau terbesar keenam di dunia, terkenal dengan hutan hujan tropisnya.' },
    sulawesi: { img: '/pulau/SULAWESI.png', nama: 'Sulawesi', description: 'Sulawesi dikenal dengan bentuknya yang unik dan kekayaan budaya.' },
    bali: { img: '/pulau/bali.png', nama: 'Bali adalah destinasi wisata terkenal dengan pantai dan budayanya.' },
    nusaTenggaraBarat: { img: '/pulau/ntb.png', nama: 'Nusa Tenggara Barat', description: 'Nusa Tenggara Barat memiliki pantai yang indah dan gunung berapi aktif.' },
    nusaTenggaraTimur: { img: '/pulau/ntt.png', nama: 'Nusa Tenggara Timur', description: 'Nusa Tenggara Timur dikenal dengan keanekaragaman hayati dan budaya.' },
    maluku: { img: '/pulau/MALUKU.png', nama: 'Maluku', description: 'Maluku adalah wilayah kepulauan dengan sejarah perdagangan rempah-rempah.' },
    papua: { img: '/pulau/PAPUA.png', nama: 'Papua', description: 'Papua memiliki hutan tropis dan budaya yang sangat beragam.' },
    kalimantan: { img: '/pulau/KALIMANTAN.png', nama: 'Kalimantan', description: 'Kalimantan adalah pulau yang sebagian besar tertutup hutan hujan tropis.' },
    jawa: { img: '/pulau/JAWA.png', nama: 'Jawa', description: 'Jawa adalah pulau dengan kepadatan penduduk tertinggi di Indonesia.' },
  };

  const handleTimelineClick = (timeline) => {
    setSelectedTimeline(timeline);
  };

  return (
    <>
      <Navbar />
      <HeaderBanner
        title={"PETA WILAYAH INDONESIA"}
        subtitle="Peta"
        link="Kembali"
        href="/peta"
      />
      <h1 className="text-4xl font-bold text-center mt-24">
        Peta Wilayah Indonesia
      </h1>

      <div className="flex justify-center my-6 space-x-4">
        {['1945-1957', '1957-1969', '1969-1998', '1998-2010', '2010-sekarang'].map((period) => (
          <button
            key={period}
            className={`p-2 rounded-md ${selectedTimeline === period ? 'bg-yellow-700 text-white' : 'bg-gray-300'}`}
            onClick={() => handleTimelineClick(period)}
          >
            {period}
          </button>
        ))}
      </div>

      <div className={`flex items-center justify-center min-h-screen p-4 transition-opacity duration-500`}>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col mt-16 md:mb-0 relative group">
            <div className={`transition-transform duration-700 transform hover:scale-110`}>
              <img
                src={islands.sumatera.img}
                alt={islands.sumatera.nama}
                width="300"
                height="200"
                className="cursor-pointer rounded-md"
                onClick={() => handleIslandClick('sumatera')}
              />
            </div>
          </div>
          <div className="flex flex-col mt-16">
            {['kalimantan', 'jawa'].map((island) => (
              <div key={island} className="flex justify-center relative group">
                <div className={`transition-transform duration-700 transform hover:scale-110`}>
                  <img
                    src={islands[island].img}
                    alt={islands[island].nama}
                    width="230"
                    height="200"
                    className="cursor-pointer rounded-md"
                    onClick={() => handleIslandClick(island)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col mt-[8rem] ml-4 space-y-4">
            <div className="relative group">
              <div className={`transition-transform duration-700 transform hover:scale-110`}>
                <img
                  src={islands.sulawesi.img}
                  alt={islands.sulawesi.nama}
                  width="200"
                  height="100"
                  className="cursor-pointer rounded-md"
                  onClick={() => handleIslandClick('sulawesi')}
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className={`transition-transform duration-700 transform hover:scale-110`}>
                <img
                  src={islands.bali.img}
                  alt={islands.bali.nama}
                  width="30"
                  height="30"
                  className="cursor-pointer rounded-md"
                  onClick={() => handleIslandClick('bali')}
                />
              </div>
              <div className={`transition-transform duration-700 transform hover:scale-110`}>
                <img
                  src={islands.nusaTenggaraBarat.img}
                  alt={islands.nusaTenggaraBarat.nama}
                  width="100"
                  height="100"
                  className="cursor-pointer rounded-md"
                  onClick={() => handleIslandClick('nusaTenggaraBarat')}
                />
              </div>
              <div className={`transition-transform duration-700 transform hover:scale-110`}>
                <img
                  src={islands.nusaTenggaraTimur.img}
                  alt={islands.nusaTenggaraTimur.nama}
                  width="100"
                  height="100"
                  className="cursor-pointer rounded-md"
                  onClick={() => handleIslandClick('nusaTenggaraTimur')}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-24">
            <div className="">
              <div className={`transition-transform duration-700 transform hover:scale-110`}>
                <img
                  src={islands.maluku.img}
                  alt={islands.maluku.nama}
                  width="200"
                  height="150"
                  className="cursor-pointer rounded-md"
                  onClick={() => handleIslandClick('maluku')}
                />
              </div>
            </div>
            {(selectedTimeline === '1969-1998' || selectedTimeline === '1998-2010' || selectedTimeline === '2010-sekarang') && (
              <div className="flex flex-col mt-10">
                <div className={`transition-transform duration-700 transform hover:scale-110`}>
                  <img
                    src={islands.papua.img}
                    alt={islands.papua.nama}
                    width="300"
                    height="120"
                    className="cursor-pointer rounded-md"
                    onClick={() => handleIslandClick('papua')}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-4">
        <a
          href={`/peta/sejarah/${selectedTimeline}`}
          className="text-lg font-bold text-white bg-yellow-700 px-4 py-2 rounded-md"
        >
          Sejarah
        </a>
      </div>

      <Copyright />
    </>
  );
};

export default Page;
