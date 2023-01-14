import React, { useEffect, useRef, useState } from 'react'


const SliderProject = props => {
   const { name , index , activePage , isMobile} = props;
   const [ imgLoaded , setImgLoaded] = useState(false);
   const isActive = index === activePage;
   const hasActive = activePage>-1;
   const indexDistance = Math.abs(index - activePage);
   
   const updateIndexHandler = () =>{
        // props.updateActiveIndex(index);
   }

   const imgLoadHandler = ()=>{
    setImgLoaded(true);
   }


  return (
    <li onClick={updateIndexHandler} className={` projectItem 
    relative h-full min-w-[13rem] w-[13rem] origin-bottom  overflow-hidden rounded-xl grid place-items-center cursor-pointer transition-all duration-500 ease-in-out 
     ${!imgLoaded ? ' animate-pulse bg-gray-700 bg-opacity-60' : 'animate-entrance2 bg-none'}
     ${isActive && !isMobile && ' scale-[1.15] mx-3'}
     ${indexDistance === 1 && !isMobile && 'scale-[1.08] mx-1'}
     ${hasActive && 'w-[10rem] min-w-[10rem]'}
     `}>

      <h2 className=' p-2 z-[1] backdrop-blur-md backdrop-grayscale-[20%] text-white  relative  items-center flex flex-col gap-4 overflow-y-auto md:w-3/4
         rounded-md bg-dark bg-opacity-20
      '>{props.name}</h2>
   
      <img alt={name}  onLoad={imgLoadHandler}  draggable='false' src={props.src}
       className={`image  rounded-xl absolute w-full top-0 left-0 h-[100%] object-cover object-[100%,50%] transition-all ease-in-out duration-[0s]
      ${imgLoaded ? 'block' : 'hidden'}
      ${hasActive && 'h-[100%]' }
      `}></img>
    </li>
  )
}



export default SliderProject