import React from 'react'
import CardPro from './CardPro'
import { ProjectsItems } from '@/lib'
const Projects = () => {
  return (
    <div className=' flex flex-col items-center mt-60'  >
      <div className="flex items-center">
        <h1 className='text-6xl font-extrabold text-white'>
          Projects  
          <span className='text-emerald-300'>.</span>
        </h1>
        <div className="border flex h-0 w-[870px] ml-10 border-slate-600"></div>
      </div>
      <div className=" mt-32 grid grid-cols-2 pr-20">
        <CardPro 
        ImageSrc={ProjectsItems[0].src} 
        ProName={ProjectsItems[0].name}  
        ProLang={ProjectsItems[0].languages} 
        ProDesc={ProjectsItems[0].description}
        ProGit={ProjectsItems[0].github}
        />
        <CardPro
          ImageSrc={ProjectsItems[1].src} 
          ProName={ProjectsItems[1].name}  
          ProLang={ProjectsItems[1].languages} 
          ProDesc={ProjectsItems[1].description}
          ProGit={ProjectsItems[1].github}
        />
        <CardPro
          ImageSrc={ProjectsItems[2].src} 
          ProName={ProjectsItems[2].name}  
          ProLang={ProjectsItems[2].languages} 
          ProDesc={ProjectsItems[2].description}
          ProGit={ProjectsItems[2].github}
        />
        <CardPro
          ImageSrc={ProjectsItems[3].src} 
          ProName={ProjectsItems[3].name}  
          ProLang={ProjectsItems[3].languages} 
          ProDesc={ProjectsItems[3].description}
          ProGit={ProjectsItems[3].github}
        />
      </div>
    </div>
  )
}

export default Projects