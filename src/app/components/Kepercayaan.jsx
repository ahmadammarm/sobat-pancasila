import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const Kepercayaan = () => {
  return (
    <div>
      <h1 className='text-center mt-24 text-4xl font-bold mb-16'>Contoh Kepercayaan di Indonesia</h1>
      <div className="*:
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-4
        mt-5
      ">
        <Card className="shadow-lg shadow-gray-400">
          <CardHeader>
            <div className="flex items-center justify-center">
                <Image src="/agama/kejawen.jpeg" alt="Kejawen" width={400} height={200} className="rounded-lg mb-5" />
            </div>
            <h3 className="text-xl font-semibold">Kejawen</h3>
          </CardHeader>
          <CardContent>
            <p>
              Kejawen adalah kepercayaan dan praktik spiritual masyarakat Jawa yang menggabungkan unsur-unsur Hindu, Buddha, Islam, dan animisme.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg shadow-gray-400">
          <CardHeader>
            <div className="flex items-center justify-center">
                <Image src="/agama/sundawiwitan.jpg" alt="Kejawen" width={400} height={200} className="rounded-lg mb-5" />
            </div>
            <h3 className="text-xl font-semibold">Sunda Wiwitan</h3>
          </CardHeader>
          <CardContent>
            <p>
            Kepercayaan asli masyarakat Sunda di Jawa Barat yang berfokus pada pemujaan terhadap leluhur dan kekuatan alam.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg shadow-gray-400">
          <CardHeader>
            <div className="flex items-center justify-center">
                <Image src="/agama/aluktodolo.jpg" alt="Kejawen" width={400} height={200} className="rounded-lg mb-5" />
            </div>
            <h3 className="text-xl font-semibold">Aluk To Dolo</h3>
          </CardHeader>
          <CardContent>
            <p>
            Aluk To Dolo adalah kepercayaan asli dari suku Toraja di Sulawesi Selatan yang mencakup ritual-ritual adat yang berkaitan dengan kehidupan dan kematian.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg shadow-gray-400">
          <CardHeader>
            <div className="flex items-center justify-center">
                <Image src="/agama/kaharingan.png" alt="Kejawen" width={400} height={200} className="rounded-lg mb-5" />
            </div>
            <h3 className="text-xl font-semibold">Kaharingan</h3>
          </CardHeader>
          <CardContent>
            <p>
            Kaharingan adalah agama asli suku Dayak di Kalimantan yang mencakup keyakinan terhadap roh leluhur dan kekuatan alam.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg shadow-gray-400">
          <CardHeader>
            <div className="flex items-center justify-center">
                <Image src="/agama/naurus.png" alt="Kejawen" width={400} height={200} className="rounded-lg mb-5" />
            </div>
            <h3 className="text-xl font-semibold">Naurus</h3>
          </CardHeader>
          <CardContent>
            <p>
            Naurus adalah kepercayaan asli masyarakat Pulau Seram di Maluku yang terkait dengan pemujaan terhadap roh leluhur dan alam.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg shadow-gray-400">
          <CardHeader>
            <div className="flex items-center justify-center">
                <Image src="/agama/parmalim.jpeg" alt="Kejawen" width={400} height={200} className="rounded-lg mb-5" />
            </div>
            <h3 className="text-xl font-semibold">Parmalim</h3>
          </CardHeader>
          <CardContent>
            <p>
            Parmalim adalah kepercayaan asli suku Batak Toba di Sumatra Utara yang berfokus pada pemujaan kepada Debata Mulajadi Na Bolon (Tuhan Yang Maha Esa) dan leluhur.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Kepercayaan
