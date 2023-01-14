import React, { useEffect, useRef, useState } from 'react'
import PhoneDesign from './PhoneDesign';

const PhoneHolder = (props) => {
    const [phoneIndex,setPhoneIndex] = useState(0);
    const [hovered,setHovered] = useState(false);
    const carouselRef = useRef();

      // effect for auto page change with timer .
  useEffect(()=>{
    let timeout;
    timeout = setTimeout(() => {
      if (hovered) return;
      setPhoneIndex(prev =>{
        if (prev === 4) return 0;
        return prev+1;
      })
    }, 8000);

    return()=>{ clearTimeout(timeout);}
  },[phoneIndex,hovered])

  // effect to update carousel
  useEffect(()=>{
    if (!carouselRef.current) return
    const carousel = carouselRef.current;
    const newTransform = `translateZ(-145px) rotateY(${phoneIndex * 72 * -1}deg)`
    carousel.animate({
      transform: `translateZ(-145px) rotateY(${phoneIndex * 72 * -1}deg)`
    },{ duration : 1000 , fill : 'forwards'});

  },[phoneIndex])


  // option to pause 
  const togglePause = () =>setHovered(prev => !prev);
  // pause on hover
  const pauseHandler = () =>setHovered(true);
  // unpause on hover exit
  const resumeHandler = () => setHovered(false);

  // handle screenSelect
  const selectScreenHandler = index =>{
    setPhoneIndex(index);
  }


// 3 parts : first is the 3D list the class carousel handle it .
// second : dots as indicator / switch page . also includes the shadow.
// third :  pause toggle indicator .
  return (
    <div onMouseEnter={pauseHandler} onMouseLeave={resumeHandler} onClick={togglePause}  className='w-[210px] lg:scale-125 uw:scale-[2] self-center justify-self-center aspect-[9/16] relative carouselHolder'>

    <div  ref={carouselRef} className='w-full hover:pauseAnimation animate-bounce2 animation-delay-500 absolute h-full text-2xl md:text-2xl carousel'>
      <PhoneDesign updateScreen={selectScreenHandler} active={phoneIndex}  index={0}/>
      <PhoneDesign updateScreen={selectScreenHandler} active={phoneIndex}  index={1}/>
      <PhoneDesign updateScreen={selectScreenHandler} active={phoneIndex}  index={2}/>
      <PhoneDesign updateScreen={selectScreenHandler} active={phoneIndex}  index={3}/>
      <PhoneDesign updateScreen={selectScreenHandler} active={phoneIndex}  index={4}/>
    </div>

  <section className='flex bottom-0 left-1/2 -translate-x-1/2 gap-2 absolute translate-y-8 z-[10]'>
  <div className='absolute -bottom-4 w-full h-4 rounded-md left-1/2 -translate-x-1/2 bg-black blur-md animate-blurAnim  dark:bg-light'></div>

    <div onClick={()=>{selectScreenHandler(0)}} className={`dot ${phoneIndex === 0 && 'activeDot'}`}>1</div>
    <div onClick={()=>{selectScreenHandler(1)}} className={`dot ${phoneIndex === 1 && 'activeDot'}`}>2</div>
    <div onClick={()=>{selectScreenHandler(2)}} className={`dot ${phoneIndex === 2 && 'activeDot'}`}>3</div>
    <div onClick={()=>{selectScreenHandler(3)}} className={`dot ${phoneIndex === 3 && 'activeDot'}`}>4</div>
    <div onClick={()=>{selectScreenHandler(4)}} className={`dot ${phoneIndex === 4 && 'activeDot'}`}>5</div>
  </section>

      {/* mobile pause indicator / button */}
      <section onClick={togglePause} className='animate-fullPulse md:block hidden top-0 absolute  z-10 left-1/2  -translate-x-1/2
      -translate-y-[60px]'>
        <p className={`${hovered ? 'hidden' :'block'} w-max`}>Tap to pause</p>
        <p className={`${hovered ? 'block' :'hidden'} w-max`}>Tap to resume</p>
      </section>

  </div>
  )
}

export default PhoneHolder