import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const NavItems:string[] = ["Github" , "LinkedIn" , "Twitter"]
  return (
    <>
    <nav className='fixed  flex h-24 w-full items-center justify-between z-20 bg-inherit'>
      <div className=" flex h-24 items-center justify-center  ">
        <ul>
          {NavItems.map((item , index)=>(
            <Link href="https://github.com/Shazil-we" className=' text-white mx-6 hover:text-emerald-300 hover:font-semibold font-medium'>{item}</Link>
          ))}
        </ul>
      </div>
      <Link href="https://www.docdroid.net/WyjIuyO/fake-resume-pdf" className="">
        <Button variant={'outline'} className='hover:bg-emerald-300 border border-emerald-300 text-emerald-200 mx-6 text-lg font-medium h-12 hover:text-black'> My Resume</Button>
      </Link>
    </nav>
    </>
  )
}
export default Navbar