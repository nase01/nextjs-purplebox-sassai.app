import { UserButton } from '@clerk/nextjs'
import { MobileSidebar } from './mobile-sidebar'

interface NavbarProps {
  isPro: boolean;
  apiLimitCount: number;
}

const Navbar = ({
  isPro = false,
  apiLimitCount = 0
}: NavbarProps) => {
  return ( 
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
   )
}

export default Navbar