import { Button } from '@/components/ui/button'
import { ArrowBigLeftDashIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const BackButton = () => {
  return (
    <div className="p-5">
        <Button>
            <Link href="/sejarah"><ArrowBigLeftDashIcon /></Link>
        </Button>
    </div>
  )
}

export default BackButton
