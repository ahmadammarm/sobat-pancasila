'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const HomeLink = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    {
      href: '',
      text: 'PETA WILAYAH NKRI',
      imgSrc: '/peta.jpg',
      bgColor: 'bg-red-500',
    },
    {
      href: '',
      text: 'SEJARAH WILAYAH INDONESIA',
      imgSrc: '/prambanan.jpg',
      bgColor: 'bg-green-500',
    },
    {
      href: '',
      text: 'SUKU WILAYAH INDONESIA',
      imgSrc: '/suku.jpg',
      bgColor: 'bg-blue-500',
    },
    {
      href: '',
      text: 'KARAKTERISTIK PENDUDUK',
      imgSrc: '/karakteristik.jpg',
      bgColor: 'bg-yellow-500',
    },
  ];

  const handleMouseMove = e => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = -((x - centerX) / centerX) * 10;

    return {
      rotateX: `${rotateX}deg`,
      rotateY: `${rotateY}deg`,
    };
  };

  return (
    <div
      className="
        grid
        place-items-center
        w-full
        h-full
        grid-cols-1
        lg:grid-cols-2
        lg:gap-y-12
        p-0
        md:p-4
        mb-[5rem]
      ">
      {links.map((link, index) => (
        <Link key={index} href={link.href} passHref>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            onMouseMove={e => {
              if (!isMobile) {
                const { rotateX, rotateY } = handleMouseMove(e);
                setHoveredIndex(index);
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}) rotateY(${rotateY})`;
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                setHoveredIndex(null);
                e.currentTarget.style.transform =
                  'perspective(1000px) rotateX(0deg) rotateY(0deg)';
              }
            }}
            className={`relative flex items-center justify-center text-2xl lg:text-[2rem] uppercase rounded-lg py-8 px-12 ${link.bgColor} text-white w-full h-full max-w-lg`}
            style={{
              backgroundImage: `url(${link.imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
              width: '600px',
              height: '400px',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 2 }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <span className="text-xl lg:text-2xl">
                {hoveredIndex === index ? (
                  <Typewriter
                    options={{
                      strings: [link.text],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                    }}
                  />
                ) : (
                  link.text
                )}
              </span>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default HomeLink;
