'use client'

import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

import Sidebar from '@/components/sidebar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface MobileSidebarProps {
  isPro: boolean;
  apiLimitCount: number;
}

export const MobileSidebar = ({
  apiLimitCount = 0,
  isPro = false
}: MobileSidebarProps) => {
  
  /* Start: To fix hydration error */
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  /* End: To fix hydration error */

  return (
    <Sheet>
      <SheetTrigger className="md:hidden hover:bg-accent hover:text-accent-foreground p-1 rounded-md" >
          <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  )
}