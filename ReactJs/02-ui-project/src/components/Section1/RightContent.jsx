import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full flex flex-nowrap gap-12 w-3/4  overflow-x-auto no-scrollbar pr-8'  id='right' >
        {props.users.map(function(elem,idx){
            return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color} />
        })}
      
    </div>
  )
}

export default RightContent
