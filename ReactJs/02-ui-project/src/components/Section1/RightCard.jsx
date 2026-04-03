import React from 'react'

import RightCardContent from './RightCardContent'
const RightCard = (props) => {
  return (
    <div className='h-full w-80 bg-red-500 rounded-3xl overflow-hidden relative shrink-0 '>
        <img src={props.img} alt="img"
                 className='h-full w-full object-cover' />
        <RightCardContent tag={props.tag} id={props.id} color={props.color}/>
      
    </div>
  )
}

export default RightCard
