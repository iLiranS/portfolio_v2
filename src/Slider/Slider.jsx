import React from 'react'
import { useEffect , useState, useRef } from 'react';
import SingleDot from './SingleDot';
import {BsArrowLeftCircle} from 'react-icons/bs'

const Slider = props => {
    // slider requires sliders array. - has name and src
    useEffect(() => {
      console.log('slider mount')
    
      return () => {
        console.log('slider dismount')
      }
    }, [])
    
    const {sliders} =  props;
    const [slide,setSlide] = useState(0);
    const ulRef = useRef();
    const totalSlides = sliders.length;

    const updateSlide = (index) =>{
        setSlide(index)
    }
    const arrowHandler = dir =>{
      let indexToMove;
      if (dir === 1) {
         if(slide === sliders.length-1) indexToMove=0;
         else indexToMove = slide +1;
        }
     else{
        if (slide === 0) indexToMove = sliders.length-1;
        else indexToMove = slide-1;
     }
     updateSlide(indexToMove);

    }
    useEffect(()=>{
        if (ulRef.current){
            const ul = ulRef.current;
            const width = ul.offsetWidth;
            const xAmount = (slide) * width;
            ul.scrollTo(xAmount,0);
        }
    },[slide])

    useEffect(()=>{
        const timeout = setTimeout(() => {
            setSlide(current=>{
                if(current === sliders.length-1) return 0;
                const newVal = current + 1;
                return newVal; 
            })
        }, 9000);

        return() =>{
            clearTimeout(timeout);
        }
    },[slide])

    

    const Slides = sliders.map((slide,index) => <SingleSlide key={index} name={slide.title} src={slide.src}/>)
    const dotsMap = sliders.map((item,index)=> <SingleDot active={slide} key={index} index={index} updateSlide={updateSlide}/>)

  return (
    <section className='flex flex-col w-full h-full  relative gap-3 animate-entrance duration-300'>
    <BsArrowLeftCircle onClick={()=>{arrowHandler(-1)}} className='ArrowBtn left-2'/>
    <BsArrowLeftCircle onClick={()=>{arrowHandler(1)}} className='ArrowBtn rotate-180 right-2'/>
       <ul ref={ulRef} className='h-[90%] rounded-md w-full flex relative overflow-hidden snap-x rounded-tr-none rounded-br-none snap-mandatory gap-3 scroll-smooth'>
       {Slides}
       </ul>

       <section className='flex self-center gap-2'>
        {dotsMap}
       </section>


    </section>
  )
}

const SingleSlide = (props) =>(
    <li className='list-none shadow-black shadow-2xl overflow-hidden flex flex-col text-center min-w-full h-full w-full relative snap-start'
     key={props.name}>
    <img className='rounded-md rounded-br-none rounded-tr-none h-full w-full' src={props.src}></img>
    <p className='absolute bottom-3 left-[50%] translate-x-[-50%] bg-gray-900 p-2 rounded-md'>{props.name}</p>
    </li>
)



export default Slider