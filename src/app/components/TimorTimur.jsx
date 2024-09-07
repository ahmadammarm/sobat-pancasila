import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import Image from 'next/image'
import { CircleAlert } from 'lucide-react'

const TimorTimur = () => {
  return (
    <div className="flex flex-col justify-center items-center">

      {/* Container dengan Grid 3 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 w-11/12">
        
        {/* Card Pengantar Awal Konflik TimorTimur */}
        <div className="p-5 bg-yellow-900 rounded-lg flex flex-col">
          <Image src="/timortimur/1.jpg" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
          <h3 className="text-xl font-semibold text-white">1. Integrasi Timor Timur ke Indonesia dan Sejarah Awalnya</h3>
          <p className="text-white mt-2 mb-5">
          Timor Timur awalnya bukan bagian dari Indonesia. Pada 17 Juli 1976, wilayah ini resmi menjadi bagian dari NKRI setelah melalui...
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-auto text-yellow-900 text-lg" variant="outline"><CircleAlert className="mr-5"/>Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-yellow-900 w-[1200px]">
              <DialogHeader>
                <DialogTitle className="text-white text-lg">1. Integrasi Timor Timur ke Indonesia dan Sejarah Awalnya</DialogTitle>
              </DialogHeader>
              <p className="text-white">
              Timor Timur awalnya bukan bagian dari Indonesia. Pada 17 Juli 1976, wilayah ini resmi menjadi bagian dari NKRI setelah melalui proses integrasi yang melibatkan Operasi Seroja dan dukungan dari AS. Sebelumnya, Timor Timur dikuasai oleh Portugis sejak abad ke-15, namun pada abad ke-17, Belanda menguasai bagian barat pulau Timor setelah perjanjian dengan Portugis. Timor Timur tetap terikat dengan NKRI hingga 30 Agustus 1999, ketika sejarahnya berubah.
              </p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Perundingan dan Konflik */}
        <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
        <Image src="/timortimur/2.jpg" alt="Timor Timur" width={400} height={300} className="rounded-lg mb-10" />
          <h3 className="text-xl font-semibold text-white">2. Dekolonisasi Portugal dan Dampaknya bagi Timor Timur</h3>
          <p className="text-white mt-2">
          Timor Timur merupakan wilayah bekas jajahan Portugis sejak abad ke-16 hingga abad ke-20 Masehi. Berakhirnya Revolusi Bunga...
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-auto text-yellow-900 text-lg" variant="outline"><CircleAlert className="mr-5"/>Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-yellow-900">
              <DialogHeader>
                <DialogTitle className="text-white">2. Dekolonisasi Portugal dan Dampaknya bagi Timor Timur</DialogTitle>
              </DialogHeader>
              <p className="text-white">
              Timor Timur merupakan wilayah bekas jajahan Portugis sejak abad ke-16 hingga abad ke-20 Masehi. Berakhirnya Revolusi Bunga di Portugal oleh rezim dictator di negara itu, menyebabkan berubahnya kebijakan kolonial. Kemudian Portugal memutuskan untuk memberikan kemerdekaan kepada wilayah-wilayah jajahannya, termasuk Timor Timur.
              </p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Komando Mandala dan Perjanjian New York */}
        <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
          <Image src="/timortimur/3.png" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
          <h3 className="text-xl font-semibold text-white">3. Deklarasi Kemerdekaan Fretilin dan Operasi Seroja</h3>
          <p className="text-white mt-2">
          Setelah mundurnya Portugal dari wilayah jajahannya, terjadi banyak persaingan politik yang hebat di Timor Timur dengan berbagai...
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-10 text-lg text-yellow-900" variant="outline"><CircleAlert className="mr-5"/>Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-yellow-900">
              <DialogHeader>
                <DialogTitle className="text-white">3. Deklarasi Kemerdekaan Fretilin dan Operasi Seroja</DialogTitle>
              </DialogHeader>
              <p className="text-white">Setelah mundurnya Portugal dari wilaah jajahannya, terjadi banyak persaingan politik yang hebat di Timor Timur dengan berbagai kelompok yang ingin menguasainya. Pada 28 November 1975, salah satu kelompok politik utama di Timor Timur, Fretilin (Frentte Revolucionária de Timor-Leste Independente) mendeklarasikan kemerdekaan Timor Timur secara sepihak. Dalam menanggapi deklarasi kemerdekaan oleh Fretilin dan kekhawatiran munculnya negara komunis di Timor Timur, Soeharto sebagai presiden pada masa itu melancarkan aksi invasi militer besar-besaran yang dikenal dengan Operasi Seroja pada 7 Desember 1975. Akhirnya Timor Timur jatuh ke wilayah Indonesia. Dan resmi menjadi provinsi ke-27 Indonesia pada 17 Juli 1976 setelah adanya Keputusan sepihak dari Indonesia. Akan tetapi, proses ini tidak diakui oleh Sebagian besar Masyarakat intternasional dan dianggap sebagai aneksasi ilegal.</p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Penentuan Pendapat Rakyat (Pepera) */}
        <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
          <Image src="/timortimur/4.jpg" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
          <h3 className="text-xl font-semibold text-white">4. Konflik dan Perlawanan di Timor Timur Pasca-Integrasi</h3>
          <p className="text-white mt-2">
          Setelah Timor Timur bergabung dengan Indonesia, Timor Timur banyak mengalami konflik, kekerasan hingga...
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-16 text-lg text-yellow-900" variant="outline"><CircleAlert className="mr-5"/>Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-yellow-900">
              <DialogHeader>
                <DialogTitle className="text-white">4. Konflik dan Perlawanan di Timor Timur Pasca-Integrasi</DialogTitle>
              </DialogHeader>
              <p className="text-white">
              Setelah Timor Timur bergabung dengan Indonesia, Timor Timur banyak mengalami konflik, kekerasan hingga pelanggaran hak asasi manusia yang diakui secara internasional. Terdapat perlawanan terhadap pemerintah Indonesia oleh kelompok-kelompok bersenjata yang didukung oleh Sebagian besar rakyat Timor Timur. 
              </p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Card Pengantar Pepera dan Hasilnya */}
        <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
          <Image src="/timortimur/5.webp" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
          <h3 className="text-xl font-semibold text-white">5. Referendum 1999 dan Kemerdekaan Timor Leste</h3>
          <p className="text-white mt-2">
          Setelah berakhirnya pemerintahan Orde Baru, pada tahun 1999, di bawah pengawasan PBB, diadakan...
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-auto text-yellow-900 text-lg" variant="outline"><CircleAlert className="mr-5"/>Selengkapnya</Button>
            </DialogTrigger>
            <DialogContent className="bg-yellow-900">
              <DialogHeader>
                <DialogTitle className="text-white">5. Referendum 1999 dan Kemerdekaan Timor Leste</DialogTitle>
              </DialogHeader>
              <p className="text-white">Setelah berakhirnya pemerintahan Orde Baru, pada tahun 1999, di bawah pengawasan PBB, diadakan referendum di Timor imur. Dan hasil dari referendum tersebut menyatakan banhwa kebanyakan rakyat Timor Timur memilih untuk Merdeka dari Indonesia. Dan pada 20 Mei 2002, Timor Timur resmi menjadi negara merdeka dengan nama Timor Leste. </p>
            </DialogContent>
          </Dialog>
        </div>
        {/* Card Fun Fact */}
      </div>
    </div>
  )
}

export default TimorTimur
