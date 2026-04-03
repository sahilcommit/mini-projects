import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import HeroText from './HeroText'
const LeftContent = () => {
  return (
    <div className='h-full w-2/5 flex flex-col justify-between ml-8'>

        <HeroText/>
      <ArrowUpRight className='size-20 mb-3.5 ' />
      
    </div>
  )
}

export default LeftContent
