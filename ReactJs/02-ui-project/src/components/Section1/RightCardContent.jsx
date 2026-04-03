import React from 'react'
import { ArrowRight } from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div >
                <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center font-semibold'>{props.id+1}</h2>
            <div>
                <p className='text-lg leading-relaxed text-white mb-14 text-shadow-2xs'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione deleniti cum quaerat ullam dolorem quis?
                    </p>
                <div className='justify-between items-center flex'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-7 py-3 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-semibold px-3 py-3 rounded-full'> <ArrowRight /></button>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default RightCardContent
