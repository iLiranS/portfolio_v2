import React from 'react'

const SingleDot = props => {
    const isActive = props.active === props.index
  return (
    <div onClick={()=>{props.updateSlide(props.index)}} className={`${isActive ? 'bg-opacity-60' : 'bg-opacity-30'} cursor-pointer rounded-full bg-white w-4 h-4 grid place-items-center`}>
    <p className='text-xs'>{props.index+1}</p>
    </div>
  )
}

export default SingleDot