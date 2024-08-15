import { Button } from '@/components/ui/button'
import { House } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HomeButton = () => {
  return (
    <div className="p-5">
      <Button>
        <Link href="/"><House/></Link>
      </Button>
    </div>
  )
}

export default HomeButton
