import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ArrowBigDownIcon } from 'lucide-react'
import React from 'react'

const Papua = () => {
  return (
    <div className="flex flex-col justify-center items-center">

      {/* Judul Semua Konten */}
      <h1 className="text-4xl text-center font-bold mt-10 mb-5">Sejarah Papua di Indonesia</h1>

      {/* Container dengan Grid 3 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 w-11/12">
        
        {/* Card Pengantar Awal Konflik Papua */}
        <div className="p-4 bg-slate-900 rounded-lg flex flex-col">
          <h3 className="text-lg font-semibold text-white">Awal Konflik Papua</h3>
          <p className="text-white mt-2">
            Pada awalnya, konflik mengenai status Papua muncul di tingkat internasional setelah Konferensi Meja Bundar (KMB) tahun 1949.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-auto text-lg" variant="outline">Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900">
              <DialogHeader>
                <DialogTitle className="text-white">Awal Konflik Papua</DialogTitle>
              </DialogHeader>
              <p className="text-white">• Papua pertama kali muncul dalam Konferensi Meja Bundar (KMB) pada 27 Desember 1949.</p>
              <p className="text-white">• KMB meninggalkan konflik antara Indonesia dan Belanda mengenai hak atas Papua atau Irian Barat.</p>
              <p className="text-white">• Belanda ingin Papua menjadi negara sendiri di bawah kekuasaan Kerajaan Belanda dengan alasan perbedaan etnis dan ras.</p>
              <p className="text-white">• Indonesia menginginkan seluruh bekas wilayah jajahan Belanda, termasuk Papua, diserahkan.</p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Perundingan dan Konflik */}
        <div className="p-4 bg-slate-900 rounded-lg flex flex-col">
          <h3 className="text-lg font-semibold text-white">Perundingan dan Konflik</h3>
          <p className="text-white mt-2">
            Ketegangan terus berlanjut, dengan berbagai perundingan internasional yang mencoba menyelesaikan masalah ini tanpa hasil.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-auto text-lg" variant="outline">Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900">
              <DialogHeader>
                <DialogTitle className="text-white">Perundingan dan Konflik</DialogTitle>
              </DialogHeader>
              <p className="text-white">• Beberapa perundingan dilakukan untuk mengatasi konflik, tetapi tidak mencapai kesepakatan.</p>
              <p className="text-white">• Karena Belanda bersikukuh mempertahankan Papua, masalah ini dibawa ke Perserikatan Bangsa-Bangsa (PBB).</p>
              <p className="text-white">• Dalam Sidang Umum PBB bulan September 1961, Belanda mengusulkan agar Papua berada di bawah naungan PBB, tetapi usulan tersebut ditolak.</p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Komando Mandala dan Perjanjian New York */}
        <div className="p-4 bg-slate-900 rounded-lg flex flex-col">
          <h3 className="text-lg font-semibold text-white">Komando Mandala dan Perjanjian New York</h3>
          <p className="text-white mt-2">
            Dengan situasi yang semakin genting, Indonesia membentuk Komando Mandala untuk merebut Papua, yang kemudian menghasilkan Perjanjian New York.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-10 text-lg" variant="outline">Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900">
              <DialogHeader>
                <DialogTitle className="text-white">Komando Mandala dan Perjanjian New York</DialogTitle>
              </DialogHeader>
              <p className="text-white">• Presiden Soekarno membentuk Komando Mandala pada 2 Januari 1962 untuk merebut Papua, dipimpin oleh Mayor Jenderal Soeharto.</p>
              <p className="text-white">• Pada 15 Agustus 1962, Belanda dan Indonesia menyepakati Perjanjian New York yang menyatakan Belanda akan menyerahkan Papua kepada United Nations Temporary Executive Authority (UNTEA).</p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Penentuan Pendapat Rakyat (Pepera) */}
        <div className="p-4 bg-slate-900 rounded-lg flex flex-col">
          <h3 className="text-lg font-semibold text-white">Penentuan Pendapat Rakyat (Pepera)</h3>
          <p className="text-white mt-2">
            Untuk menentukan masa depan Papua, Penentuan Pendapat Rakyat (Pepera) diadakan dengan pengawasan internasional.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-16 text-lg" variant="outline">Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900">
              <DialogHeader>
                <DialogTitle className="text-white">Penentuan Pendapat Rakyat (Pepera)</DialogTitle>
              </DialogHeader>
              <p className="text-white">• Indonesia diharuskan melaksanakan Penentuan Pendapat Rakyat (Pepera) untuk menentukan status Papua.</p>
              <p className="text-white">• Pepera diadakan dari 14 Juli hingga 2 Agustus 1969.</p>
              <p className="text-white">• Pada 1 Oktober 1962, Belanda menyerahkan otoritas administrasi Papua kepada UNTEA.</p>
              <p className="text-white">• Pada 31 Desember 1962, Indonesia secara de jure mulai menguasai Papua di bawah pengawasan PBB.</p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Pepera dan Hasilnya */}
        <div className="p-4 bg-slate-900 rounded-lg flex flex-col">
          <h3 className="text-lg font-semibold text-white">Pepera dan Hasilnya</h3>
          <p className="text-white mt-2">
            Hasil Pepera memutuskan nasib Papua, dengan sebagian besar memilih bergabung dengan Indonesia.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-auto text-lg" variant="outline">Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900">
              <DialogHeader>
                <DialogTitle className="text-white">Pepera dan Hasilnya</DialogTitle>
              </DialogHeader>
              <p className="text-white">• Sebanyak 1.025 rakyat Papua memilih untuk bergabung dengan Indonesia melalui Pepera.</p>
              <p className="text-white">• Hasil Pepera disetujui oleh Sidang Umum PBB pada 19 Desember 1969.</p>
              <p className="text-white">• Nama Irian Barat diubah menjadi Irian Jaya oleh Soeharto.</p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Otonomi Khusus dan Pemekaran Papua */}
        <div className="p-4 bg-slate-900 rounded-lg flex flex-col">
          <h3 className="text-lg font-semibold text-white">Otonomi Khusus dan Pemekaran Papua</h3>
          <p className="text-white mt-2">
            Papua mengalami perkembangan lebih lanjut dengan diberlakukannya otonomi khusus dan pemekaran wilayah.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-auto text-lg" variant="outline">Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900">
              <DialogHeader>
                <DialogTitle className="text-white">Otonomi Khusus dan Pemekaran Papua</DialogTitle>
              </DialogHeader>
              <p className="text-white">• Otonomi Khusus Papua diberlakukan melalui Undang-Undang Nomor 21 Tahun 2001.</p>
              <p className="text-white">• Pemekaran wilayah Papua dilakukan, membentuk beberapa provinsi baru seperti Papua Barat.</p>
              <p className="text-white">• Papua mengalami tantangan dalam implementasi otonomi khusus dan pemekaran, termasuk dalam bidang ekonomi, politik, dan keamanan.</p>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default Papua
