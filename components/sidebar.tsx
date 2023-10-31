'use client'

import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { LayoutDashboard, Settings } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { tools } from '@/constants'
import FreeCounter from '@/components/free-counter'

const poppins = Montserrat ({ weight: '600', subsets: ['latin'] })

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500"
  },
  ...tools,
  {
    label: 'Settings',
    icon: Settings,
    color: "",
    href: '/settings',
  },
]

interface SidebarProps {
  isPro: boolean;
  apiLimitCount: number;
}

const Sidebar = ({
  isPro = false,
  apiLimitCount = 0
}: SidebarProps) => {

  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#191924] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            Purple Box
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter
        isPro={isPro}
        apiLimitCount={apiLimitCount}
      />
    </div>
  )
}

export default Sidebar