import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';
const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href = '/'  className = "flex items-center gap-1" >
      <Image
      src="/icons/logo.svg"
      height={40}
      width = {40}
      alt = "logo"
      />
      <p className='text-[26px] font-bold text-white max-sm:hidden'>WeMeet</p>
      
      </Link>
      <div className = "flex flex-between gap-5">
      <SignedIn>
              <UserButton />
            </SignedIn>
              <MobileNav/>
              </div>
    </nav>
  )
}

export default Navbar
