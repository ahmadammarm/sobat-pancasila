'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const KonflikLink = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const links = [
        {
            href: '/konflik/papua',
            text: 'KONFLIK PAPUA',
            imgSrc: '/sejarah/papua.jpg',
            bgColor: 'bg-red-600',
        },
        {
            href: '/konflik/timor-timur',
            text: 'KONFLIK TIMOR TIMUR',
            imgSrc: '/sejarah/timor-timur.jpg',
            bgColor: 'bg-green-600',
        },
        {
            href: '/konflik/aceh',
            text: 'KONFLIK ACEH',
            imgSrc: '/sejarah/aceh.jpg',
            bgColor: 'bg-blue-600',
        },
        {
            href: '/konflik/ikn',
            text: 'SEPUTAR IKN',
            imgSrc: '/sejarah/ikn.jpg',
            bgColor: 'bg-yellow-600',
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
                            perspective: '1000px',
                            transformStyle: 'preserve-3d',
                            width: '600px',
                            height: '200px',
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 2 }}>
                        <img
                            src={link.imgSrc}
                            alt={link.text}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                            <Card>
                                <CardHeader>
                                    <CardTitle>{link.text}</CardTitle>
                                </CardHeader>
                            </Card>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
    );
};

export default KonflikLink;
