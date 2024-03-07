import React from 'react'
import Card from '../ui/Card'

const WhatIKnow = () => {
  return (
    <div className=' flex flex-col items-center mt-60'>
      <div className="flex items-center">
        <h1 className='text-6xl font-extrabold text-white'>
          What I Know
          <span className='text-emerald-300'>.</span>
        </h1>
        <div className="border flex h-0 w-[750px] ml-10 border-slate-600  "></div>
      </div>
      <div className="mt-20 grid grid-flow-col gap-28">   
        <Card heading = "Front-End" languages={["HTML" , "CSS" , "Tailwind" , "Javascript" ,"Typescript" ,"React" , "NextJS"] }/>
        <Card heading = "Back-End" languages={["GO" , "NodeJS" , "ExpressJS" , "C++" , "Rust" , "Python"] }/>
        <Card heading = "Database" languages={["MongoDB" , "MySQL" , "PHP" , "PostgressSQL" ] }/>
      </div>
    </div>
  )
}

export default WhatIKnow