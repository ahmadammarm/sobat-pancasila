'use client';

import React, { useState, useEffect } from 'react';
import HomeButton from '../components/HomeButton';
import Loading from '../components/Loading';
import EmbedVideo from '../components/EmbedVideo';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowBigDownIcon } from 'lucide-react';


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

  return (
    <div className="p-5"><HomeButton /><div className="flex flex-col justify-center items-center"><EmbedVideo /></div><div className="flex flex-col justify-center items-center">
      {/* Kotak 1 */}
      <div className="flex flex-col items-center"><div className="rounded-md bg-yellow-500 mt-10 p-5 w-full cursor-pointer hover:scale-95 transition-all ease-in-out duration-200"><p className="text-center font-bold text-lg">Awal Konflik Papua</p><p className="mt-2">
        <p>• Papua pertama kali muncul dalam Konferensi Meja Bundar (KMB) pada 27 Desember 1949.</p>
        <p>• KMB meninggalkan konflik antara Indonesia dan Belanda mengenai hak atas Papua atau Irian Barat.</p>
        <p>• Belanda ingin Papua menjadi negara sendiri di bawah kekuasaan Kerajaan Belanda dengan alasan perbedaan etnis dan ras.</p>
        <p>• Indonesia menginginkan seluruh bekas wilayah jajahan Belanda, termasuk Papua, diserahkan.</p>
      </p></div>
      </div>

      {/* Icon Tanda Panah Bawah dari Lucide React */}
      <ArrowBigDownIcon className="w-10 h-20 text-yellow-500" />

      {/* Kotak 2 */}
      <div className="flex flex-col items-center"><div className="rounded-md bg-yellow-500 mt-5 p-5 w-full cursor-pointer hover:scale-95 transition-all ease-in-out duration-200"><p className="text-center font-bold text-lg">Perundingan dan Konflik</p><p className="mt-2">
        <p>• Beberapa perundingan dilakukan untuk mengatasi konflik, tetapi tidak mencapai kesepakatan.</p>
        <p>• Karena Belanda bersikukuh mempertahankan Papua, masalah ini dibawa ke Perserikatan Bangsa-Bangsa (PBB).</p>
        <p>• Dalam Sidang Umum PBB bulan September 1961, Belanda mengusulkan agar Papua berada di bawah naungan PBB, tetapi usulan tersebut ditolak.</p>
      </p></div>
      </div>

      {/* Icon Tanda Panah Bawah dari Lucide React */}
      <ArrowBigDownIcon className="w-10 h-20 text-yellow-500" />

      {/* Kotak 3 */}
      <div className="flex flex-col items-center"><div className="rounded-md bg-yellow-500 mt-5 p-5 w-full cursor-pointer hover:scale-95 transition-all ease-in-out duration-200"><p className="text-center font-bold text-lg">Komando Mandala dan Perjanjian New York</p><p className="mt-2">
        Presiden Soekarno membentuk Komando Mandala pada 2 Januari 1962 untuk merebut Papua, dipimpin oleh Mayor Jenderal Soeharto.
      </p></div>
      </div>

      {/* Icon Tanda Panah Bawah dari Lucide React */}
      <ArrowBigDownIcon className="w-10 h-20 text-yellow-500" />

      {/* Kotak 4 */}
      <div className="flex flex-col items-center"><div className="rounded-md bg-yellow-500 mt-5 p-5 w-full cursor-pointer hover:scale-95 transition-all ease-in-out duration-200"><p className="text-center font-bold text-lg">Penentuan Pendapat Rakyat (Pepera)</p><p className="mt-2">
        Indonesia diharuskan melaksanakan Penentuan Pendapat Rakyat (Pepera) untuk menentukan status Papua.
      </p></div>
      </div>

      {/* Icon Tanda Panah Bawah dari Lucide React */}
      <ArrowBigDownIcon className="w-10 h-20 text-yellow-500" />

      {/* Kotak 5 */}
      <div className="flex flex-col items-center"><div className="rounded-md bg-yellow-500 mt-5 p-5 w-full cursor-pointer hover:scale-95 transition-all ease-in-out duration-200"><p className="text-center font-bold text-lg">Pepera dan Hasilnya</p><p className="mt-2">
        Sebanyak 1.025 rakyat Papua memilih untuk bergabung dengan Indonesia melalui Pepera.
      </p></div>
      </div>

      {/* Icon Tanda Panah Bawah dari Lucide React */}
      <ArrowBigDownIcon className="w-10 h-20 text-yellow-500" />

      {/* Kotak 6 */}
      <div className="flex flex-col items-center"><div className="rounded-md bg-yellow-500 mt-5 p-5 w-full cursor-pointer hover:scale-95 transition-all ease-in-out duration-200"><p className="text-center font-bold text-lg">Otonomi Khusus dan Pemekaran Papua</p><p className="mt-2">
        Sesuai dengan Undang-Undang Nomor 21 Tahun 2001, Provinsi Irian Jaya diganti menjadi Provinsi Papua.
      </p></div></div>

      {/* Kotak Fun Fact */}
      <div className="rounded-md bg-yellow-500 mt-10 p-5 w-full"><p className="text-center font-bold text-lg">Fun Fact:</p><p className="mt-2">
        Terdapat perdebatan di antara pendiri Bangsa Indonesia dalam menyikapi Papua.
      </p></div></div></div>
  );
};

export default Page;
