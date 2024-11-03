"use client";

import React, { useState, useEffect } from "react";
import Copyright from "@/app/components/Copyright";
import HeaderBanner from "@/app/components/HeaderBanner";
import Loading from "@/app/components/Loading";
import Navbar from "@/app/components/Navbar";

const Page = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedIsland, setSelectedIsland] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const islands = {
        sumatera: {
            img: "/kebudayaan/sumatra.png",
            nama: "Kebudayaan Sumatera",
            imgModal: "/kebudayaan/kebudayaan_sumatera.png",
        },
        sulawesi: {
            img: "/kebudayaan/sulawesi.png",
            nama: "Kebudayaan Sulawesi",
            imgModal: "/kebudayaan/kebudayaan_sulawesi.png",
        },
        bali: {
            img: "/kebudayaan/bali.png",
            nama: "Kebudayaan Bali",
            imgModal: "/kebudayaan/kebudayaan_bali.png",
        },
        nusaTenggaraBarat: {
            img: "/kebudayaan/ntb.png",
            nama: "Kebudayaan Nusa Tenggara Barat",
            imgModal: "/kebudayaan/kebudayaan_ntb.png",
        },
        nusaTenggaraTimur: {
            img: "/kebudayaan/ntt.png",
            nama: "Kebudayaan Nusa Tenggara Timur",
            imgModal: "/kebudayaan/kebudayaan_ntt.png",
        },
        maluku: {
            img: "/kebudayaan/maluku.png",
            nama: "Kebudayaan Maluku",
            imgModal: "/kebudayaan/kebudayaan_maluku.png",
        },
        papua: {
            img: "/kebudayaan/papua.png",
            nama: "Kebudayaan Papua",
            imgModal: "/kebudayaan/kebudayaan_papua.png",
        },
        kalimantan: {
            img: "/kebudayaan/kalimantan.png",
            nama: "Kebudayaan Kalimantan",
            imgModal: "/kebudayaan/kebudayaan_kalimantan.png",
        },
        jawa: {
            img: "/kebudayaan/jawa.png",
            nama: "Kebudayaan Jawa",
            imgModal: "/kebudayaan/kebudayaan_jawa.png",
        },
    };

    const handleCloseModal = () => {
        setSelectedIsland(null);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Navbar />
            <HeaderBanner
                title={"KEBUDAYAAN WILAYAH INDONESIA"}
                subtitle="Kebudayaan"
                link="Beranda"
                href="/"
            />
            <h1 className="text-4xl font-bold text-center mt-24">
                Kebudayaan di Wilayah Indonesia
            </h1>

            <div
                className={`flex items-center justify-center min-h-screen p-4 transition-opacity duration-500`}
            >
                <div className="flex flex-col md:flex-row">
                    {/* Pulau Sumatera */}
                    <div className="flex flex-col mt-16 md:mb-0 relative group">
                        <div
                            className={`transition-transform duration-700 transform hover:scale-110`}
                            onClick={() => setSelectedIsland(islands.sumatera)}
                        >
                            <img
                                src={islands.sumatera.img}
                                alt={islands.sumatera.nama}
                                width="330"
                                height="200"
                                className="cursor-pointer rounded-md"
                            />
                        </div>
                    </div>

                    {/* Pulau Kalimantan dan Jawa */}
                    <div className="flex flex-col mt-16">
                        {["kalimantan", "jawa"].map((island) => (
                            <div
                                key={island}
                                className="flex justify-center relative group"
                                onClick={() => setSelectedIsland(islands[island])}
                            >
                                <div
                                    className={`transition-transform duration-700 transform hover:scale-110`}
                                >
                                    <img
                                        src={islands[island].img}
                                        alt={islands[island].nama}
                                        width="230"
                                        height="200"
                                        className="cursor-pointer rounded-md"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pulau Sulawesi, Bali, Nusa Tenggara Barat, Nusa Tenggara Timur */}
                    <div className="flex flex-col mt-[5.5rem] ml-4 space-y-4">
                        <div
                            className="relative group"
                            onClick={() => setSelectedIsland(islands.sulawesi)}
                        >
                            <div
                                className={`transition-transform duration-700 transform hover:scale-110`}
                            >
                                <img
                                    src={islands.sulawesi.img}
                                    alt={islands.sulawesi.nama}
                                    width="200"
                                    height="100"
                                    className="cursor-pointer rounded-md"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row"> {/* Menambahkan margin top disini */}
                            {["bali", "nusaTenggaraBarat", "nusaTenggaraTimur"].map(
                                (island) => (
                                    <div
                                        key={island}
                                        className={`transition-transform duration-700 transform hover:scale-110 mt-4`}
                                        onClick={() => setSelectedIsland(islands[island])}
                                    >
                                        <img
                                            src={islands[island].img}
                                            alt={islands[island].nama}
                                            width={island === "bali" ? "30" : "100"}
                                            height={island === "bali" ? "30" : "100"}
                                            className="cursor-pointer rounded-md"
                                        />
                                    </div>
                                )
                            )}
                        </div>

                    </div>

                    {/* Pulau Maluku dan Papua */}
                    <div className="flex flex-row mt-24">
                        <div onClick={() => setSelectedIsland(islands.maluku)}>
                            <div
                                className={`transition-transform duration-700 transform hover:scale-110`}
                            >
                                <img
                                    src={islands.maluku.img}
                                    alt={islands.maluku.nama}
                                    width="200"
                                    height="150"
                                    className="cursor-pointer rounded-md"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mt-10">
                            <div
                                className={`transition-transform duration-700 transform hover:scale-110`}
                                onClick={() => setSelectedIsland(islands.papua)}
                            >
                                <img
                                    src={islands.papua.img}
                                    alt={islands.papua.nama}
                                    width="300"
                                    height="120"
                                    className="cursor-pointer rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedIsland && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 w-1/3 max-w-sm mx-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">{selectedIsland.nama}</h2>
                            <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={handleCloseModal}
                            >
                                ✖
                            </button>
                        </div>
                        <img
                            src={selectedIsland.imgModal}
                            alt={selectedIsland.nama}
                            className="rounded-md w-full"
                        />
                    </div>
                </div>
            )}

            <Copyright />
        </>
    );
};

export default Page;
