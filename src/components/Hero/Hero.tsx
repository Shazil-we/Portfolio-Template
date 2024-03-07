import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className=' flex  flex-col mt-40 w-[800px] left-6'>
      <div className="flex flex-row">
        <h1 className="font-extrabold text-8xl my-2">
          Shazil Ahmed
        </h1>
      </div>
      <h2 className="text-emerald-300 text-5xl font-bold my-4 ">
        Full-Stack Web Developer
        <span className='text-white text-6xl'>.</span>
      </h2>
      <div className="my-4">
        <p className='font-light text-lg'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Dolor voluptates maiores doloribus itaque consequuntur tenetur 
        sed modi! Magnam odit cumque voluptatem, commodi, corrupti, 
        </p>
      </div>
      <Link href="/#contact">
        <Button variant={'default'} className='h-10 w-32 font-semibold border-emerald-400  text-black bg-emerald-300 hover:bg-emerald-300 hover:bg-opacity-75'>
          Contact Me 
        </Button>
      </Link>
    </div>
  )
}

export default Hero