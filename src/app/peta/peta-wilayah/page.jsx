"use client"

import React, { useState, useEffect } from 'react';
import Copyright from '@/app/components/Copyright';
import HeaderBanner from '@/app/components/HeaderBanner';
import Loading from '@/app/components/Loading';
import Navbar from '@/app/components/Navbar';

// Data provinsi berdasarkan timeline (sama seperti sebelumnya)
const provincesByTimeline = {
  '1945-1957': {
    sumatera: ['Daerah Istimewa Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Jambi', 'Sumatera Selatan'],
    jawa: ['DKI Jakarta', 'Jawa Barat', 'Jawa Tengah',  'DI Yogyakarta', 'Jawa Timur'],
    kalimantan: ['Kalimantan Barat', 'Kalimantan Timur', 'Kalimantan Selatan'],
    sulawesi: ['Sulawesi'],
    bali: ['Sunda Kecil (mencakup Bali)'],
    nusaTenggaraBarat: ['Sunda Kecil (mencakup NTB)'],
    nusaTenggaraTimur: ['Sunda Kecil (mencakup NTT)'],
    maluku: ['Maluku'],
    papua: []
  },
  '1957-1969': {
    sumatera: ['Daerah Istimewa Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Jambi', 'Sumatera Selatan', 'Bengkulu', 'Lampung'],
    jawa: ['DKI Jakarta', 'Jawa Barat', 'Jawa Tengah',  'DI Yogyakarta', 'Jawa Timur'],
    kalimantan: ['Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur'],
    sulawesi: ['Sulawesi Utara', 'Sulawesi Tengah', 'Sulawesi Selatan', 'Sulawesi Tenggara'],
    bali: ['Bali'],
    nusaTenggaraBarat: ['Nusa Tenggara Barat'],
    nusaTenggaraTimur: ['Nusa Tenggara Timur'],
    maluku: ['Maluku'],
    papua: ['Irian Barat']
  },
  '1969-1998': {
    sumatera: ['Daerah Istimewa Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Jambi', 'Sumatera Selatan', 'Bengkulu', 'Lampung'],
    jawa: ['DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur'],
    kalimantan: ['Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur'],
    sulawesi: ['Sulawesi Utara', 'Sulawesi Tengah', 'Sulawesi Selatan', 'Sulawesi Tenggara'],
    bali: ['Bali'],
    nusaTenggaraBarat: ['Nusa Tenggara Barat'],
    nusaTenggaraTimur: ['Nusa Tenggara Timur', 'Timor Timur'],
    maluku: ['Maluku'],
    papua: ['Irian Barat', 'Irian Jaya']
  },
  '1998-2010': {
    sumatera: ['Daerah Istimewa Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kepulauan Riau', 'Jambi', 'Sumatera Selatan', 'Bangka Belitung', 'Bengkulu', 'Lampung'],
    jawa: ['Banten', 'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur'],
    kalimantan: ['Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur'],
    sulawesi: ['Sulawesi Utara', 'Gorontalo', 'Sulawesi Tengah', 'Sulawesi Selatan', 'Sulawesi Tenggara', 'Sulawesi Barat'],
    bali: ['Bali'],
    nusaTenggaraBarat: ['Nusa Tenggara Barat'],
    nusaTenggaraTimur: ['Nusa Tenggara Timur'],
    maluku: ['Maluku', 'Maluku Utara'],
    papua: ['Papua', 'Papua Barat', 'Papua Tengah', 'Papua Timur']
  },
  '2010-sekarang': {
    sumatera: ['Daerah Istimewa Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Riau', 'Kepulauan Riau', 'Jambi', 'Sumatera Selatan', 'Bangka Belitung', 'Bengkulu', 'Lampung'],
    jawa: ['Banten', 'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'DI Yogyakarta', 'Jawa Timur'],
    kalimantan: ['Kalimantan Barat', 'Kalimantan Tengah', 'Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Utara'],
    sulawesi: ['Sulawesi Utara', 'Gorontalo', 'Sulawesi Tengah', 'Sulawesi Selatan', 'Sulawesi Tenggara', 'Sulawesi Barat'],
    bali: ['Bali'],
    nusaTenggaraBarat: ['Nusa Tenggara Barat'],
    nusaTenggaraTimur: ['Nusa Tenggara Timur'],
    maluku: ['Maluku', 'Maluku Utara'],
    papua: ['Papua', 'Papua Barat', 'Papua Selatan', 'Papua Tengah', 'Papua Pegunungan', 'Papua Barat Daya']
  }
};

const Page = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedTimeline, setSelectedTimeline] = useState('2010-sekarang');
    const [hoveredIsland, setHoveredIsland] = useState(null);

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

    const tooltipPositions = {
      sumatera: { top: '-280px', left: '50%' },
      kalimantan: { top: '-240px', left: '50%' },
      jawa: { top: '-200px', left: '50%' },
      sulawesi: { top: '-220px', left: '50%' },
      bali: { top: '-150px', left: '50%' },
      nusaTenggaraBarat: { top: '-150px', left: '50%' },
      nusaTenggaraTimur: { top: '-150px', left: '50%' },
      maluku: { top: '-180px', left: '50%' },
      papua: { top: '-220px', left: '50%' }
    };

    const ProvinceTooltip = ({ provinces, isVisible, island }) => {
      if (!isVisible || !provinces || provinces.length === 0) return null;

      return (
        <div
          className="absolute z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          style={{
            ...tooltipPositions[island],
            transform: 'translate(-50%, 0)',
            width: 'max-content',
            maxWidth: '300px'
          }}
        >
          <h3 className="font-bold mb-2 text-yellow-700">{islands[island].nama}</h3>
          <ul className="space-y-1">
            {provinces.map((province, index) => (
              <li key={index} className="text-sm">{province}</li>
            ))}
          </ul>
        </div>
      );
    };

    const IslandImage = ({ island, width, height, className = "" }) => {
      return (
        <div className="relative inline-block">
          <div
            className={`group relative overflow-visible ${className}`}
            style={{ width: `${width}px`, height: `${height}px` }}
          >
            <img
              src={islands[island].img}
              alt={islands[island].nama}
              width={width}
              height={height}
              className="cursor-pointer rounded-md transition-transform duration-700 hover:scale-110"
              onMouseEnter={() => setHoveredIsland(island)}
              onMouseLeave={() => setHoveredIsland(null)}
            />
            <ProvinceTooltip
              provinces={provincesByTimeline[selectedTimeline][island]}
              isVisible={hoveredIsland === island}
              island={island}
            />
          </div>
        </div>
      );
    };

    const handleTimelineClick = (timeline) => {
      setSelectedTimeline(timeline);
    };

    const getHistoryUrl = () => {
      return `/peta/sejarah/${selectedTimeline}`;
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
            {['1945-1957', '1957-1969', '1969-1998', '1998-2010', '2010-sekarang'].map((timeline) => (
              <button
                key={timeline}
                className={`p-2 rounded-md ${selectedTimeline === timeline ? 'bg-yellow-700 text-white' : 'bg-gray-300'}`}
                onClick={() => handleTimelineClick(timeline)}
              >
                {timeline}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col mt-16 md:mb-0">
                <IslandImage island="sumatera" width={300} height={200} />
              </div>

              <div className="flex flex-col mt-24">
                <IslandImage island="kalimantan" width={230} height={200} />
                <div className="mt-8">
                  <IslandImage island="jawa" width={230} height={200} />
                </div>
              </div>

              <div className="flex flex-col mt-[6rem] ml-4">
                {/* Sulawesi */}
                <div className="mb-28"> {/* Menambahkan margin bottom yang besar */}
                  <IslandImage island="sulawesi" width={200} height={100} />
                </div>

                {/* Container untuk Bali dan Nusa Tenggara */}
                <div className=""> {/* Menambahkan padding top yang signifikan */}
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex-shrink-0">
                      <IslandImage island="bali" width={30} height={30} />
                    </div>
                    <div className="flex-shrink-0 mt-16">
                      <IslandImage island="nusaTenggaraBarat" width={100} height={100} />
                    </div>
                    <div className="flex-shrink-0 mt-16">
                      <IslandImage island="nusaTenggaraTimur" width={100} height={100} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row mt-24">
                <IslandImage island="maluku" width={100} height={50} />
                {(selectedTimeline === '1969-1998' || selectedTimeline === '1998-2010' || selectedTimeline === '2010-sekarang') && (
                  <div className="flex flex-col mt-10">
                    <IslandImage island="papua" width={300} height={120} />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-4">
            <a
              href={getHistoryUrl()}
              className="text-lg font-bold text-white bg-yellow-700 px-4 py-2 rounded-md"
            >
              Sejarah {selectedTimeline}
            </a>
          </div>

          <Copyright />
        </>
      );
  };

  export default Page;