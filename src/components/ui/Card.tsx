import React from 'react' 
import { Badge } from './badge'
interface CardProps{
  heading:string,
  languages:string[]
}
const Card = (props:CardProps) => {

  return (
    <div className=' flex flex-col h-[310px] w-[250px] bg-midnight border-2  border-emerald-300 rounded-xl'>
      <h1 className='text-center text-2xl font-extrabold pt-4 text-gray-400'> {props.heading} </h1> 
      <div className="flex">
        <ul>
          {props.languages.map((language , index)=>(
            <Badge className=' ml-6 mt-6 px-4 py-2 w-[90px] items-center justify-center font-semibold bg-royalgreen rounded-xl text-gray-200 hover:text-emerald-400' key={index}>
              {language}
            </Badge>
          ))}
        </ul>
      </div> 
    </div>
  )
}

export default Card