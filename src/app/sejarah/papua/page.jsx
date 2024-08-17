'use client';

import React, { useState, useEffect } from 'react';
import Loading from '@/app/components/Loading';
import EmbedVideo from '@/app/components/EmbedVideo';
import { ArrowBigDownIcon } from 'lucide-react';
import BackButton from '@/app/components/BackButton';


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
    <div className="p-5"><BackButton /><div className="flex flex-col justify-center items-center"><EmbedVideo /></div><div className="flex flex-col justify-center items-center">
      {/* Kotak 1 */}
      <div className="flex flex-col items-center"><div className="rounded-md bg-yellow-500 mt-10 p-5 w-full max-w-4xl cursor-pointer hover:scale-95 transition-all ease-in-out duration-200"><p className="text-center font-bold text-lg">Awal Konflik Papua</p><p className="mt-2">
        <p>• Papua pertama kali muncul dalam Konferensi Meja Bundar (KMB) pada 27 Desember 1949.</p>
        <p>• KMB meninggalkan konflik antara Indonesia dan Belanda mengenai hak atas Papua atau Irian Barat.</p>
        <p>• Belanda ingin Papua menjadi negara sendiri di bawah kekuasaan Kerajaan Belanda dengan alasan perbedaan etnis dan ras.</p>
        <p>• Indonesia menginginkan seluruh bekas wilayah jajahan Belanda, termasuk Papua, diserahkan.</p>
      </p></div>
      </div>

      {/* Icon Tanda Panah Bawah dari Lucide React */}
      <ArrowBigDownIcon className="w-10 h-20 text-yellow-500" />

      {/* Kotak 2 */}
      <div className="flex flex-col items-center"><div className="rounded-md bg-yellow-500 mt-5 p-5 w-full max-w-4xl cursor-pointer hover:scale-95 transition-all ease-in-out duration-200"><p className="text-center font-bold text-lg">Perundingan dan Konflik</p><p className="mt-2">
        <p>• Beberapa perundingan dilakukan untuk mengatasi konflik, tetapi tidak mencapai kesepakatan.</p>
        <p>• Karena Belanda bersikukuh mempertahankan Papua, masalah ini dibawa ke Perserikatan Bangsa-Bangsa (PBB).</p>
        <p>• Dalam Sidang Umum PBB bulan September 1961, Belanda mengusulkan agar Papua berada di bawah naungan PBB, tetapi usulan tersebut ditolak.</p>
      </p></div>
      </div>

      {/* Icon Tanda Panah Bawah dari Lucide React */}
      <ArrowBigDownIcon className="w-10 h-20 text-yellow-500" />

      {/* Kotak 3 */}
      <div className="flex flex-col items-center"><div className="rounded-md bg-yellow-500 mt-5 p-5 w-full max-w-4xl cursor-pointer hover:scale-95 transition-all ease-in-out duration-200"><p className="text-center font-bold text-lg">Komando Mandala dan Perjanjian New York</p><p className="mt-2">
        <p>• Presiden Soekarno membentuk Komando Mandala pada 2 Januari 1962 untuk merebut Papua, dipimpin oleh Mayor Jenderal Soeharto.</p>
        <p>• Pada 15 Agustus 1962, Belanda dan Indonesia menyepakati Perjanjian New York yang menyatakan Belanda akan menyerahkan Papua kepada United Nations Temporary Executive Authority (UNTEA).</p>
      </p></div>
      </div>

      {/* Icon Tanda Panah Bawah dari Lucide React */}
      <ArrowBigDownIcon className="w-10 h-20 text-yellow-500" />

      {/* Kotak 4 */}
      <div className="flex flex-col items-center"><div className="rounded-md bg-yellow-500 mt-5 p-5 w-full max-w-4xl cursor-pointer hover:scale-95 transition-all ease-in-out duration-200"><p className="text-center font-bold text-lg">Penentuan Pendapat Rakyat (Pepera)</p><p className="mt-2">
        <p>• Indonesia diharuskan melaksanakan Penentuan Pendapat Rakyat (Pepera) untuk menentukan status Papua.</p>
        <p>• Pepera diadakan dari 14 Juli hingga 2 Agustus 1969.</p>
        <p>• Pada 1 Oktober 1962, Belanda menyerahkan otoritas administrasi Papua kepada UNTEA.</p>
        <p>• Pada 31 Desember 1962, Indonesia secara de jure mulai menguasai Papua di bawah pengawasan PBB.</p>
      </p></div>
      </div>

      {/* Icon Tanda Panah Bawah dari Lucide React */}
      <ArrowBigDownIcon className="w-10 h-20 text-yellow-500" />

      {/* Kotak 5 */}
      <div className="flex flex-col items-center"><div className="rounded-md bg-yellow-500 mt-5 p-5 w-full max-w-4xl cursor-pointer hover:scale-95 transition-all ease-in-out duration-200"><p className="text-center font-bold text-lg">Pepera dan Hasilnya</p><p className="mt-2">
        <p>• Sebanyak 1.025 rakyat Papua memilih untuk bergabung dengan Indonesia melalui Pepera.</p>
        <p>• Hasil Pepera disetujui oleh Sidang Umum PBB pada 19 Desember 1969.</p>
        <p>• Nama Irian Barat diubah menjadi Irian Jaya oleh Soeharto.</p>
      </p></div>
      </div>

      {/* Icon Tanda Panah Bawah dari Lucide React */}
      <ArrowBigDownIcon className="w-10 h-20 text-yellow-500" />

      {/* Kotak 6 */}
      <div className="flex flex-col items-center"><div className="rounded-md bg-yellow-500 mt-5 p-5 w-full max-w-4xl cursor-pointer hover:scale-95 transition-all ease-in-out duration-200"><p className="text-center font-bold text-lg">Otonomi Khusus dan Pemekaran Papua</p><p className="mt-2">
        <p>• Sesuai dengan Undang-Undang Nomor 21 Tahun 2001 tentang Otonomi Khusus Papua, nama Provinsi Irian Jaya diganti menjadi Provinsi Papua.</p>
        <p>• Pada tahun 2004, Papua dibagi menjadi dua provinsi: Provinsi Papua dan Provinsi Papua Barat.</p>
        <p>• Pada tahun 2022, Papua dimekarkan menjadi 4 provinsi tambahan: Papua Selatan, Papua Tengah, Papua Pegunungan, dan Papua Barat Daya, sehingga terdapat total 6 provinsi di pulau Papua.</p>
      </p></div></div>

      {/* Kotak Fun Fact */}
      <div className="rounded-md bg-yellow-500 mt-10 p-5 w-full"><p className="text-center font-bold text-lg">Fun Fact:</p><p className="mt-2">
        <p>• Terdapat perbedaan pandangan di antara para pendiri bangsa mengenai status Papua.</p>
        <p>• Kahar Muzakkar dan Muh. Yamin mendukung Papua bergabung dengan Indonesia berdasarkan alasan historis, politik, dan geopolitik.</p>
        <p>• Yamin berargumen bahwa sebagian Papua merupakan bagian dari wilayah adat Kerajaan Tidore, sehingga secara otomatis menjadi bagian dari Indonesia.</p>
        <p>• Moh. Hatta tidak setuju dengan pandangan Yamin.</p>
        <p>• Hatta menekankan bahwa orang Papua adalah bangsa Melanesia, berbeda dengan mayoritas penduduk Indonesia yang merupakan Malayan Mongoloid.</p>
        <p>• Hatta berpendapat bahwa Indonesia belum siap untuk mendidik rakyat Papua menjadi bangsa yang merdeka, sehingga lebih baik masa depan Papua diserahkan kepada rakyat Papua sendiri.</p>
        <p>• Sukarno mendukung pandangan Yamin dan memperoleh banyak dukungan dari anggota lainnya.</p>
        <p>• Agus Salim dan Soetardjo mengingatkan agar permasalahan Papua tidak menjadi sumber pertikaian di antara para pendiri bangsa.</p>
        <p>• Suara Yamin dan Sukarno mendapat dukungan terbanyak, yang melahirkan istilah "Sabang sampai Merauke," menandakan kesatuan wilayah Indonesia dari ujung barat hingga timur.</p>
      </p></div></div></div>
  );
};

export default Page;
