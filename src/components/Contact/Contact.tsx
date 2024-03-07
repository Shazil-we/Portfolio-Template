import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className=' mt-48 flex flex-col items-center '>
      <h1 className='text-9xl font-extrabold text-white mb-4'>
        Contact
        <span className='text-emerald-300'>.</span>
      </h1>
      <p className="text-xl text-slate-300 mb-2">
        Shoot me an email if you want to connect!
      </p>
      <Link href='mailto:shazilahmed2021@gmail.com'>
        <h3 className="text-xl hover:text-emerald-300">
          shazilahmed2021@gmail.com
        </h3>
      </Link>
    </div>
  )
}

export default Contact