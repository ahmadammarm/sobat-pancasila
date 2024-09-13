import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { CircleAlert } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const Papua = () => {
  return (
    <div className="">
      <iframe
        src="https://papua.vercel.app/"
        title="Papua"
        className="mt-24 w-full h-[60rem] border-none rounded-lg"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Papua
