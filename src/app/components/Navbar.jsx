"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
// 
const NavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    className="text-white hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    className="text-white hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-yellow-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex flex-row">
              <Link href="/" className="text-white font-bold text-xl" style={{fontFamily: 'Pacifico, cursive'}}>
                <Image src="/logo2.png" alt="logo" width={60} height={60} />
              </Link>
              <Link href="/" className="text-white mt-3 font-bold text-2xl" style={{fontFamily: 'Pacifico, cursive'}}>
                Lentara
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Beranda</NavLink>
              <NavLink href="/#about">Tentang Kami</NavLink>
              <NavLink href="/#pembelajaran">Pembelajaran</NavLink>
              {/* <NavLink href="/ai">Lentara AI</NavLink> */}
              {/* <ModeToggle /> */}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-yellow-800">
            <MobileNavLink href="/" onClick={closeMenu}>
              Beranda
            </MobileNavLink>
            <MobileNavLink href="/#about" onClick={closeMenu}>
              Tentang Kami
            </MobileNavLink>
            <MobileNavLink href="/#pembelajaran" onClick={closeMenu}>
              Pembelajaran
            </MobileNavLink>
            {/* <MobileNavLink href="/ai" onClick={closeMenu}>
              Lentara AI
            </MobileNavLink> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
