import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface PropType{
  ImageSrc:string,
  ProName:string,
  ProLang:string,
  ProDesc:string,
  ProGit:string
}
const CardPro = (props:PropType) => {
  return (
    <div className=' flex flex-col h-[480px] w-[450px] ml-20 mt-5 '>
      <div className=" h-[260px]">
        <Image src={props.ImageSrc} alt='Image' height={280} width={450}/>
      </div>
      <div className="flex flex-row items-center mt-2 mb-1 justify-between  max-h-[41px]">
        <h3 className='font-extrabold text-lg'>{props.ProName} </h3>
        <Link href={props.ProGit}>
          <Image 
          className='ml-5 opacity-60 hover:opacity-85'
          src="/assets/github-mark-white.svg" 
          alt='github-logo'
          height={40} 
          width={30}
          />
        </Link>
      </div>
      <h5 className=' text-emerald-300  '> {props.ProLang} </h5>
      <p className=" text-slate-400 mt-4">
        {props.ProDesc}
      </p>
    </div>
  )
}

export default CardPro