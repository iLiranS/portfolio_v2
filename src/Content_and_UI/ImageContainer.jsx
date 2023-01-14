import React, { useState } from 'react'


// requires img src , classname optional .
const ImageContainer = props => {
    const [isLoaded , setIsLoaded] = useState(false);
    const {className } = props;
    const loadHandler = () =>{
        setIsLoaded(true);
    }
  return (
    <section className={`${className ? className : ''} overflow-hidden ${!isLoaded ? ' animate-pulse bg-gray-700' : ' animate-none bg-none'}`}>
        <img draggable='false' onLoad={loadHandler} src={props.src} className={`${!isLoaded ? 'hidden' : 'block'} h-full w-full`}/>
    </section>
  )
}

export default ImageContainer