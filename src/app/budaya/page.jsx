"use client";

import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Copyright from '../components/Copyright';
import Navbar from '../components/Navbar';
import HeaderBanner from '../components/HeaderBanner';

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

  const islands = {
    sumatera: { img: '/pulau/SUMATERA.png', nama: 'Sumatera', description: 'Sumatera adalah pulau terbesar keenam di dunia, terkenal dengan hutan hujan tropisnya.' },
    sulawesi: { img: '/pulau/SULAWESI.png', nama: 'Sulawesi', description: 'Sulawesi dikenal dengan bentuknya yang unik dan kekayaan budaya.' },
    bali: { img: '/pulau/bali.png', nama: 'Bali', description: 'Bali adalah destinasi wisata terkenal dengan pantai dan budayanya.' },
    nusaTenggaraBarat: { img: '/pulau/ntb.png', nama: 'Nusa Tenggara Barat', description: 'Nusa Tenggara Barat memiliki pantai yang indah dan gunung berapi aktif.' },
    nusaTenggaraTimur: { img: '/pulau/ntt.png', nama: 'Nusa Tenggara Timur', description: 'Nusa Tenggara Timur dikenal dengan keanekaragaman hayati dan budaya.' },
    maluku: { img: '/pulau/MALUKU.png', nama: 'Maluku', description: 'Maluku adalah wilayah kepulauan dengan sejarah perdagangan rempah-rempah.' },
    papua: { img: '/pulau/PAPUA.png', nama: 'Papua', description: 'Papua memiliki hutan tropis dan budaya yang sangat beragam.' },
    kalimantan: { img: '/pulau/KALIMANTAN.png', nama: 'Kalimantan', description: 'Kalimantan adalah pulau yang sebagian besar tertutup hutan hujan tropis.' },
    jawa: { img: '/pulau/JAWA.png', nama: 'Jawa', description: 'Jawa adalah pulau dengan kepadatan penduduk tertinggi di Indonesia.' },
  };
  

  const handleIslandClick = (island) => {
    setSelectedIsland(island);
  };

  const handleBackClick = () => {
    setSelectedIsland(null);
  };

  return (
    <>
      <Navbar />
      <HeaderBanner 
        title={selectedIsland ? `Kebudayaan di ${islands[selectedIsland].nama}` : "KEBUDAYAAN DI INDONESIA"} 
        subtitle="Budaya" 
        link={selectedIsland ? "Kembali" : "Beranda"} 
        href="/" 
      />
      <h1 className="text-4xl font-bold text-center mt-24">
        Kebudayaan di Indonesia
      </h1>
      <div className={`flex items-center justify-center min-h-screen p-4 transition-opacity duration-500 ${selectedIsland ? 'opacity-100' : 'opacity-90'}`}>
        {selectedIsland ? (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <button
              onClick={handleBackClick}
              className="mb-10 p-2 bg-yellow-800 text-white rounded-md transition-transform duration-300 hover:scale-105"
            >
              Kembali ke Peta
            </button>
            <div className={`transition-transform duration-700 transform scale-105 ${selectedIsland ? 'opacity-100' : 'opacity-0'}`}>
              <img
                src={islands[selectedIsland].img}
                alt={islands[selectedIsland].nama}
                className="w-3/4 h-auto rounded-md"
              />
            </div>
            <div className="text-center left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md">
                {islands[selectedIsland].nama}
              </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mt-16 md:mb-0 relative group">
              <div className={`transition-transform duration-700 transform ${selectedIsland === 'sumatera' ? 'opacity-0 scale-90' : 'opacity-100 scale-100'} hover:scale-110`}>
                <img
                  src={islands.sumatera.img}
                  alt={islands.sumatera.nama}
                  width="250"
                  height="200"
                  className="cursor-pointer rounded-md"
                  onClick={() => handleIslandClick('sumatera')}
                />
              </div>
            </div>
            <div className="flex flex-col">
              {['kalimantan', 'jawa'].map((island) => (
                <div key={island} className="flex justify-center relative group">
                  <div className={`transition-transform duration-700 transform ${selectedIsland === island ? 'opacity-0 scale-90' : 'opacity-100 scale-100'} hover:scale-110`}>
                    <img
                      src={islands[island].img}
                      alt={islands[island].nama}
                      width="250"
                      height="200"
                      className="cursor-pointer rounded-md"
                      onClick={() => handleIslandClick(island)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col mt-5 ml-4 space-y-4">
              <div className="relative group">
                <div className={`transition-transform duration-700 transform ${selectedIsland === 'sulawesi' ? 'opacity-0 scale-90' : 'opacity-100 scale-100'} hover:scale-110`}>
                  <img
                    src={islands.sulawesi.img}
                    alt={islands.sulawesi.nama}
                    width="210"
                    height="100"
                    className="cursor-pointer rounded-md"
                    onClick={() => handleIslandClick('sulawesi')}
                  />
                </div>
              </div>
              <div className="flex flex-row">
                {['bali', 'nusaTenggaraBarat', 'nusaTenggaraTimur'].map((island) => (
                  <div key={island} className="relative group">
                    <div className={`transition-transform duration-700 transform ${selectedIsland === island ? 'opacity-0 scale-90' : 'opacity-100 scale-100'} hover:scale-110 ml-2 mt-12`}>
                      <img
                        src={islands[island].img}
                        alt={islands[island].nama}
                        width="50"
                        height="50"
                        className="cursor-pointer rounded-md"
                        onClick={() => handleIslandClick(island)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-10 relative group">
              <div className={`transition-transform duration-700 transform ${selectedIsland === 'maluku' ? 'opacity-0 scale-90' : 'opacity-100 scale-100'} hover:scale-110 mb-4`}>
                <img
                  src={islands.maluku.img}
                  alt={islands.maluku.nama}
                  width="150"
                  height="50"
                  className="cursor-pointer rounded-md"
                  onClick={() => handleIslandClick('maluku')}
                />
              </div>
            </div>
            <div className="flex flex-col mt-10 relative group">
              <div className={`transition-transform duration-700 transform ${selectedIsland === 'papua' ? 'opacity-0 scale-90' : 'opacity-100 scale-100'} hover:scale-110 mt-5`}>
                <img
                  src={islands.papua.img}
                  alt={islands.papua.nama}
                  width="300"
                  height="200"
                  className="cursor-pointer rounded-md"
                  onClick={() => handleIslandClick('papua')}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <Copyright />
    </>
  );
};

export default Page;
