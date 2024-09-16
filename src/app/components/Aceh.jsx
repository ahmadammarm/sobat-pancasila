import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { CircleAlert } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const Aceh = () => {
  return (
    <div className="">
      <iframe
        src="https://aceh.vercel.app/"
        title="Aceh"
        className="mt-24 w-full h-[50rem] border-none rounded-lg"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Aceh