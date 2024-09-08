import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { CircleAlert } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Aceh = () => {
    return (
        <div className="flex flex-col justify-center items-center">

            {/* Container dengan Grid 3 Kolom */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 w-11/12">

                {/* Card Pengantar Awal Konflik Papua */}
                <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
                    <Image src="/aceh/1.png" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
                    <h3 className="text-xl font-semibold text-white">1. Sejarah Awal dan Kerajaan Sriwijaya</h3>
                    <p className="text-white mt-2">
                    Pada tahun 506-581 Masehi, terdapat kerajaan Poli yang meliputi Aceh Besar, yang juga dikenal sebagai...
                    </p>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mt-auto text-yellow-900 text-lg" variant="outline"><CircleAlert className="mr-5" />Selengkapnya</Button>
                        </DialogTrigger>
                        <DialogContent className="bg-yellow-900">
                            <DialogHeader>
                                <DialogTitle className="text-white text-xl">1. Sejarah Awal dan Kerajaan Sriwijaya</DialogTitle>
                            </DialogHeader>
                            <p className="text-white">
                                Pada tahun 506-581 Masehi, terdapat kerajaan Poli yang meliputi Aceh Besar, yang juga dikenal sebagai Lamuri dalam Nagarakrtagama dan berbagai nama lain dalam sumber sejarah. Kerajaan ini berada di bawah pengaruh Sriwijaya, yang berpusat di Palembang dan mencapai puncak kejayaan di bawah raja Balaputradewa. Sriwijaya memiliki kekuasaan atas jalur perdagangan internasional di Selat Malaka. Pada 1025, Raja Rajendra Chola dari India selatan menyerang Sriwijaya dan pelabuhan-pelabuhannya, termasuk Lamuri, menyebabkan penurunan kewibawaan Sriwijaya yang berakhir pada 1377.
                            </p>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Card Pengantar Perundingan dan Konflik */}
                <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
                    <Image src="/aceh/2.jpg" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
                    <h3 className="text-xl font-semibold text-white">2. Kesultanan Samudera Pasai</h3>
                    <p className="text-white mt-2">
                    Kesultanan Samudera Pasai, yang didirikan oleh Malik al-Saleh sekitar 1267, terletak di pantai...
                    </p>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mt-auto text-yellow-900 text-lg" variant="outline"><CircleAlert className="mr-5" />Selengkapnya</Button>
                        </DialogTrigger>
                        <DialogContent className="bg-yellow-900">
                            <DialogHeader>
                                <DialogTitle className="text-white text-xl">2. Kesultanan Samudera Pasai</DialogTitle>
                            </DialogHeader>
                            <p className="text-white">
                                Kesultanan Samudera Pasai, yang didirikan oleh Malik al-Saleh sekitar 1267, terletak di pantai utara Sumatera. Kerajaan ini dikenal dalam sumber Arab dan Maroko dan mengalami puncak kejayaannya di bawah Sultan Malik az-Zahir pada abad ke-14. Samudera Pasai sering mengalami konflik dengan Majapahit dan Sriwijaya.
                            </p>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Card Pengantar Komando Mandala dan Perjanjian New York */}
                <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
                    <Image src="/aceh/3.jpg" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
                    <h3 className="text-xl font-semibold text-white">3. Kesultanan Aceh</h3>
                    <p className="text-white mt-2">
                    Aceh mencapai kejayaan di bawah Sultan Iskandar Muda pada abad ke-17, memperluas kekuasaan hingga wilayah-wilayah di...
                    </p>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mt-10 text-lg text-yellow-900" variant="outline"><CircleAlert className="mr-5" />Selengkapnya</Button>
                        </DialogTrigger>
                        <DialogContent className="bg-yellow-900">
                            <DialogHeader>
                                <DialogTitle className="text-white text-xl">3. Kesultanan Aceh</DialogTitle>
                            </DialogHeader>
                            <p className="text-white">
                                Aceh mencapai kejayaan di bawah Sultan Iskandar Muda pada abad ke-17, memperluas kekuasaan hingga wilayah-wilayah di Sumatera dan Semenanjung Melayu. Sultan Iskandar Muda dikenal karena pembangunan Gunongan untuk istrinya dan keterlibatannya dalam konflik dengan Portugis. Aceh berperang melawan Portugis dan Belanda, dan pada akhir abad ke-19, Belanda berhasil menaklukkan Aceh setelah perang panjang dan taktik gerilya dari para pejuang Aceh seperti Teuku Umar dan Cut Nya&apos; Dien.
                            </p>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Card Pengantar Penentuan Pendapat Rakyat (Pepera) */}
                <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
                    <Image src="/aceh/4.png" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
                    <h3 className="text-xl font-semibold text-white">4. Kedatangan Kolonial dan Perang Aceh</h3>
                    <p className="text-white mt-2">
                    Aceh menghadapi pendudukan Belanda pada akhir abad ke-19, dengan perang Aceh dimulai pada 1873. Selama perang, Aceh melawan...
                    </p>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mt-16 text-lg text-yellow-900" variant="outline"><CircleAlert className="mr-5" />Selengkapnya</Button>
                        </DialogTrigger>
                        <DialogContent className="bg-yellow-900">
                            <DialogHeader>
                                <DialogTitle className="text-white text-xl">4. Kedatangan Kolonial dan Perang Aceh</DialogTitle>
                            </DialogHeader>
                            <p className="text-white">
                                Aceh menghadapi pendudukan Belanda pada akhir abad ke-19, dengan perang Aceh dimulai pada 1873. Selama perang, Aceh melawan Belanda dengan perlawanan gerilya yang berlanjut hingga 1904. Setelah penyerahan Sultan M. Daud pada 1903, Belanda berhasil menguasai Aceh secara penuh.
                            </p>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Card Pengantar Pepera dan Hasilnya */}
                <div className="p-4 bg-yellow-900 rounded-lg flex flex-col">
                    <Image src="/aceh/5.webp" alt="Timor Timur" width={400} height={200} className="rounded-lg mb-10" />
                    <h3 className="text-xl font-semibold text-white">5. Bangkitnya Nasionalisme dan Masa Republik Indonesia</h3>
                    <p className="text-white mt-2">
                    Pada awal abad ke-20, Aceh mulai terlibat dalam gerakan nasionalis Indonesia dengan organisasi seperti...
                    </p>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="mt-auto text-yellow-900 text-lg" variant="outline"><CircleAlert className="mr-5" />Selengkapnya</Button>
                        </DialogTrigger>
                        <DialogContent className="bg-yellow-900">
                            <DialogHeader>
                                <DialogTitle className="text-white text-xl">5. Bangkitnya Nasionalisme dan Masa Republik Indonesia</DialogTitle>
                            </DialogHeader>
                            <p className="text-white">
                                Pada awal abad ke-20, Aceh mulai terlibat dalam gerakan nasionalis Indonesia dengan organisasi seperti Sarekat Islam dan Muhammadiyah. Selama Perang Dunia II, Aceh mengalami ketegangan dengan pemerintahan Jepang. Setelah kemerdekaan Indonesia pada 17 Agustus 1945, Aceh tidak termasuk dalam negara bagian RIS yang dibentuk oleh Van Mook, tetapi tetap aktif dalam perjuangan kemerdekaan Indonesia.
                            </p>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default Aceh
