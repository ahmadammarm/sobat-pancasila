"use client"

import React, { useState } from 'react';

const Book = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page < 2) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-600">
      <button
        onClick={prevPage}
        className="absolute left-0 bg-black text-white p-2 rounded-md"
      >
        previous page
      </button>

      <div className="relative w-[800px] h-[600px] bg-white shadow-lg flex">
        {/* Halaman kiri */}
        <div className={`w-1/2 p-8 ${page === 1 ? 'block' : 'hidden'}`}>
          <h2 className="text-xl font-bold">Heading for another section</h2>
          <p className="text-gray-500 mb-4">Wednesday, Sep 28</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ex
            ut odit, aliquam assumenda expedita maxime deserunt ipsa,
            laudantium et pariatur quia facilis totam fuga recusandae voluptates
            officia obcaecati beatae. Reiciendis natus, illo repellendus
            consequuntur non repellat asperiores, culpa necessitatibus
            laudantium minima explicabo atque nesciunt eum doloribus, odio ab
            enim modi quas. Aspernatur dolor, dignissimos odio culpa pariatur,
            veritatis dolore!
          </p>
        </div>

        {/* Divider */}
        <div className="w-1 border-r-2 border-gray-200"></div>

        {/* Halaman kanan */}
        <div className={`w-1/2 p-8 ${page === 2 ? 'block' : 'hidden'}`}>
          <h2 className="text-xl font-bold">A third section</h2>
          <p className="text-gray-500 mb-4">Friday, Sep 23</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ex
            ut odit, aliquam assumenda expedita maxime deserunt ipsa,
            laudantium et pariatur quia facilis totam fuga recusandae voluptates
            officia obcaecati beatae. Reiciendis natus, illo repellendus
            consequuntur non repellat asperiores, culpa necessitatibus
            laudantium minima explicabo atque nesciunt eum doloribus, odio ab
            enim modi quas. Aspernatur dolor, dignissimos odio culpa pariatur,
            veritatis dolore!
          </p>
        </div>
      </div>

      <button
        onClick={nextPage}
        className="absolute right-0 bg-black text-white p-2 rounded-md"
      >
        next page
      </button>
    </div>
  );
};

export default Book;

