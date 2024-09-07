import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { CircleAlert } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Papua = () => {
  return (
    <div className="flex flex-col justify-center items-center">

      {/* Container dengan Grid 3 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 w-11/12">
        
        {/* Card Pengantar Awal Konflik Papua */}
        <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
        <Image src="/papua/1.jpg" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
          <h3 className="text-xl font-semibold text-white">1. Pasca Konferensi Meja Bundar (KMB)</h3>
          <p className="text-white mt-2">
          Awal kemunculan Papua ketika Konferensi Meja Bundar (KMB) pada tanggal 27 Desember 1949. Namun, KMB menyisakan...
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-auto text-yellow-900 text-lg" variant="outline"><CircleAlert className="mr-5"/>Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-yellow-900">
              <DialogHeader>
                <DialogTitle className="text-white">1. Pasca Konferensi Meja Bundar (KMB)</DialogTitle>
              </DialogHeader>
              <p className="text-white">Awal kemunculan Papua ketika Konferensi Meja Bundar (KMB) pada tanggal 27 Desember 1949. Namun, KMB menyisakan konflik antara Indonesia dan Belanda. Kedua negara tersebut merasa berhak akan tanah Papua atau Irian Barat. Belanda menginginkan Papua berdiri menjadi negara sendiri di bawah kekuasaan Kerajaan Belanda. Alasannya karena penduduk asli Papua memiliki perbedaan etnis dan ras dengan penduduk Indonesia umumnya yaitu Melanesia. Sebaliknya, Indonesia menginginkan bekas wilayah jajahan Belanda diserahkan. Untuk mengatasi konflik tersebut, telah dilakukan beberapa kali perundingan tetapi masih belum juga menemukan kesepakatan. Karena belanda bersikukuh ingin mempertahankan Papua, akhirnya masalah ini dibawa ke forum Perserikatan Bangsa-Bangsa (PBB).</p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Perundingan dan Konflik */}
        <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
        <Image src="/papua/2.jpg" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
          <h3 className="text-xl font-semibold text-white">2. Usulan Belanda di PBB dan Pembentukan Komando Mandala</h3>
          <p className="text-white mt-2">
          Dalam Sidang Umum PBB bulan September 1961, Menteri Luar Negeri Belanda, Joseph Antonine Hubert Luns mengajukan usulan...
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-auto text-yellow-900 text-lg" variant="outline"><CircleAlert className="mr-5"/>Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-yellow-900">
              <DialogHeader>
                <DialogTitle className="text-white">2. Usulan Belanda di PBB dan Pembentukan Komando Mandala</DialogTitle>
              </DialogHeader>
              <p className="text-white">
              Dalam Sidang Umum PBB bulan September 1961, Menteri Luar Negeri Belanda, Joseph Antonine Hubert Luns mengajukan usulan agar Papua atau Irian Barat berada di bawah naungan PBB. Namun, usulan tersebut ditolak oleh Majelis Umum PBB. Presiden Soekarno kemudian membentuk Komando Mandala untuk merebut Papua pada 2 Januari 1962. Dia menunjuk Mayor Jenderal Soeharto sebagai komandan operasi militer tersebut. Setelah berbagai upaya dilakukan, Belanda akhirnya bersedia untuk berunding kembali dengan Indonesia. 
              </p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Komando Mandala dan Perjanjian New York */}
        <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
        <Image src="/papua/3.jpg" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
          <h3 className="text-xl font-semibold text-white">3. Perjanjian New York dan Penyerahan Papua ke UNTEA</h3>
          <p className="text-white mt-2">
          Pada 15 Agustus 1962, disepakati Perjanjian New York antara Belanda dan Indonesia yang menyatakan bahwa Belanda akan...
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-10 text-lg text-yellow-900" variant="outline"><CircleAlert className="mr-5"/>Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-yellow-900">
              <DialogHeader>
                <DialogTitle className="text-white">3. Perjanjian New York dan Penyerahan Papua ke UNTEA</DialogTitle>
              </DialogHeader>
              <p className="text-white">Pada 15 Agustus 1962, disepakati Perjanjian New York antara Belanda dan Indonesia yang menyatakan bahwa Belanda akan menyerahkan kekuasaannya atas Papua kepada United nation Temporary Executive Authority (UNTEA). UNTEA adalah badan pelaksana sementara PBB yang berada dibawah kekuasaan Sekretaris Jenderal PBB. UNTEA dibentuk karena terjadinya konflik antara Indonesia dengan Belanda dalam permasalahan perebutan status Papua Barat. </p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Penentuan Pendapat Rakyat (Pepera) */}
        <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
        <Image src="/papua/4.jpg" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
          <h3 className="text-xl font-semibold text-white">4. Pelaksanaan Pepera dan Bergabungnya Papua ke Indonesia</h3>
          <p className="text-white mt-2">
          Dalam perjanjian New York, Indonesia disyaratkan untuk melaksanakan Penentuan Pendapat Rakyat atau Pepera. Pepera merupakan...
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-16 text-lg text-yellow-900" variant="outline"><CircleAlert className="mr-5"/>Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-yellow-900">
              <DialogHeader>
                <DialogTitle className="text-white">4. Pelaksanaan Pepera dan Bergabungnya Papua ke Indonesia</DialogTitle>
              </DialogHeader>
              <p className="text-white">Dalam perjanjian New York, Indonesia disyaratkan untuk melaksanakan Penentuan Pendapat Rakyat atau Pepera. Pepera merupakan pemilihan umum yang diadakan pada 14 Juli hingga 2 Agustus 1969. Melalui Pepera, rakyat Papua dapat memutuskan sendiri untuk bergabung atau tidak dengan wilayah Indonesia. Pada 1 Oktober 1962, Belanda menyerahkan otoritas administrasi Papua kepada UNTEA. Akhirnya pada 31 Desember 1962, kekuasaan de jure Indonesia atas tanah Papua pun dimulai dengan pengawasan PBB. Bendera Belanda juga diganti dengan Bendera Indonesia. Kedudukan Papua semakin pasti setelah dilaksanakannya Pepera pada 969. Hasil Pepera membuktikan bahwa sebanyak 1.025 rakyat Papua atau Irian Barat memilih untuk menjadi bagian dari wilayah Indonesia. Kemudian, hasil Pepera dibawa ke Sidang Umum PBB pada 19 Desember 1969 dan Sidang Umum PBB menerima dan menyetujui hasil Pepera. Setelah itu, Soeharto mengubah nama Irian Barat menjadi Irian Jaya. Irian merupakan singkatan dari Ikut Republik Indonesia Anti Netherland. </p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Pepera dan Hasilnya */}
        <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
        <Image src="/papua/5.jpg" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
          <h3 className="text-xl font-semibold text-white">5. Otonomi Khusus Papua dan Pemekaran Wilayah</h3>
          <p className="text-white mt-2">
          Sesuai dengan Undang-Undang Nomor 21 Tahun 2001 tentang Otonomi Khusus Papua, Provinsi Irian Jaya diganti menjadi Provinsi Papua. Pada tahun 2004...
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-auto text-yellow-900 text-lg" variant="outline"><CircleAlert className="mr-5"/>Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-yellow-900">
              <DialogHeader>
                <DialogTitle className="text-white">5. Otonomi Khusus Papua dan Pemekaran Wilayah</DialogTitle>
              </DialogHeader>
              <p className="text-white">Sesuai dengan Undang-Undang Nomor 21 Tahun 2001 tentang Otonomi Khusus Papua, Provinsi Irian Jaya diganti menjadi Provinsi Papua. Pada tahun 2004, Papua dibagi menjadi dua provinsi yaitu di sebelah timur adalah provinsi Papua dan di sebelah barat merupakan provinsi Papua Barat. Dan pada tahun 2022, Papua dimekarkan menjadi 4 provinsi, maka terbentuklah 6 provinsi di pulau Papua yaitu provinsi Papua, provinsi Papua Barat, provinsi Papua Selatan, provinsi Papua Tengah, provinsi Papua Pegunungan, dan provinsi Papua Barat Daya. </p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Otonomi Khusus dan Pemekaran Papua */}
        {/* <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
          <h3 className="text-xl font-semibold text-white">6. Otonomi Khusus dan Pemekaran Papua</h3>
          <p className="text-white mt-2">
            Papua mengalami perkembangan lebih lanjut dengan diberlakukannya otonomi khusus dan pemekaran wilayah.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-auto text-yellow-900 text-lg" variant="outline"><CircleAlert className="mr-5"/>Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-yellow-900">
              <DialogHeader>
                <DialogTitle className="text-white">6. Otonomi Khusus dan Pemekaran Papua</DialogTitle>
              </DialogHeader>
              <p className="text-white">• Otonomi Khusus Papua diberlakukan melalui Undang-Undang Nomor 21 Tahun 2001.</p>
              <p className="text-white">• Pemekaran wilayah Papua dilakukan, membentuk beberapa provinsi baru seperti Papua Barat.</p>
              <p className="text-white">• Papua mengalami tantangan dalam implementasi otonomi khusus dan pemekaran, termasuk dalam bidang ekonomi, politik, dan keamanan.</p>
            </DialogContent>
          </Dialog>
        </div> */}

        {/* Card Fun Fact */}
      </div>
    </div>
  )
}

export default Papua
