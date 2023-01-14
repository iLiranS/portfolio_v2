import React, { useState } from 'react'
import { useEffect , useRef } from 'react'
import SliderProject from './FooterItem'
import {Corsair_icon , Arrow} from '../../Content_and_UI/Icons'
import { projects_content as projects} from '../../Content_and_UI/Content'

let listenerAdded = false;
let mouseDownAtStart = 0;
let prevPrecent = 0;
let nextPercentage =0;
// mobile problem : for some reason on every percent change it glitches to 0 first

const FooterSlider = props => {
    const ulRef = useRef();
    const [indexOn,setIndexOn] = useState(0);
    const {activePage , isMobile} = props;
    const selectorRef = useRef();
  
    const updateActiveIndex = (index=-1) =>{
         props.setPage(index);
    }

    const getMiddleItem = () =>{
         // Get selector minX maxX
         const selector = selectorRef.current.getBoundingClientRect();
         const xMax = selector.x + selector.width;
         let index = -1;
         let hasFound = false;
         // go through ul images and check which one closest .
         let selectedItem = undefined;
         for (const item of ulRef.current.getElementsByClassName('projectItem')){
             const pos = item.getBoundingClientRect();
             const itemMinX = pos.x;
             index++;
             const itemMaxX = pos.x + pos.width;
             if (itemMaxX > xMax && itemMinX < xMax) {
                selectedItem = item;
                hasFound = true;
                break;
             }
         }
         return(selectedItem ? index : false);
    }

    const mouseDownHandler = e =>{
        if (!props.isInViewPort()) return;
        if (e.button !==0 && !isMobile) return;
        if (e.target.classList.contains('avoidClick') || e.target instanceof SVGElement) {
            return;
        };

        if(!isMobile) mouseDownAtStart = e.clientX;
        else mouseDownAtStart = e.touches[0].clientX;
    }
    const mouseMoveHandler = e =>{
        if (mouseDownAtStart ===0) return;
        const ul = ulRef.current;
        let delta;
        if(!isMobile) delta = parseFloat(mouseDownAtStart) - e.clientX;
        else delta = parseFloat(mouseDownAtStart) - e.touches[0].clientX;

        const maxDelta = window.innerWidth/2;
        let CurrentAddedpercentage =(delta / maxDelta) *-100;
        if (isMobile) CurrentAddedpercentage *=0.5;
         nextPercentage = Math.round(parseFloat(Math.max(Math.min(CurrentAddedpercentage+prevPrecent, 0), -100)));
        ul.animate({
            transform: `translate(${nextPercentage}%, 0%)`
          }, { duration: 400, fill: "forwards" });
        //   ul.style.transform = `translate(${nextPercentage}%,0%)`

          for(const image of ul.getElementsByClassName("image")){
            image.style.objectPosition = `${nextPercentage+100}% 50%`;
          }

          const resultIndex = getMiddleItem();
          if(resultIndex || resultIndex===0)setIndexOn(resultIndex);
      
    }
    const mouseUpHandler = e =>{
       if (e.button !==0 && !isMobile) return;
       if (!props.isInViewPort()) return;
        mouseDownAtStart =0;
        prevPrecent =nextPercentage;
      


        const resultIndex = getMiddleItem();
       (resultIndex || resultIndex===0) && updateActiveIndex(resultIndex) 
    }
 
  
// listeneres handler 
    useEffect(()=>{
        if(ulRef.current && !listenerAdded && !isMobile){
            window.addEventListener('mousedown',mouseDownHandler);
            window.addEventListener('mousemove',mouseMoveHandler)
            window.addEventListener('mouseup',mouseUpHandler)
            listenerAdded = true;
        }
        else if (ulRef.current && isMobile && !listenerAdded){
            ulRef.current.addEventListener('touchstart',mouseDownHandler);
            ulRef.current.addEventListener('touchmove',mouseMoveHandler);
            ulRef.current.addEventListener('touchend',mouseUpHandler);
        }

        return()=>{
            if (!isMobile){
            window.removeEventListener('mousedown',mouseDownHandler);
            window.removeEventListener('mousemove',mouseMoveHandler);
            window.removeEventListener('mouseup',mouseUpHandler);
            }
            else{
            ulRef.current.removeEventListener('touchstart',mouseDownHandler);
            ulRef.current.removeEventListener('touchmove',mouseMoveHandler);
            ulRef.current.removeEventListener('touchend',mouseUpHandler);
            }
            listenerAdded = false;
        }
    },[ulRef.current , isMobile])


    

    const mappedProjects = projects.map((item,index)=> <SliderProject isMobile={isMobile} activePage={indexOn}  src={item.bg}  key={item.title} updateActiveIndex={updateActiveIndex} name={item.title} index={index}/>)
  return (
    <footer className={`relative  h-max transition-all w-screen   flex select-none 
        `}>
        <ul ref={ulRef} className={`left-1/2  flex gap-4 w-max  relative transition-[height] duration-500
        ${activePage >-1 ? 'h-[8rem]' : 'h-[16rem]'}
        `}>
        {mappedProjects}
        </ul>
    
             <div  onClick={updateActiveIndex} ref={selectorRef} className={`text-dark dark:text-light bg-light dark:bg-dark dark:bg-opacity-25 rounded-full p-1
              absolute cursor-pointer  avoidClick text-2xl duration-1000 transition-all ease-in-out left-1/2  -translate-x-1/2  flex items-center
                 backdrop-blur-md bg-opacity-25  ${activePage > -1 ? 'top-0 -translate-y-[65%] md:-translate-y-[50%] scale-125 rotate-90 p-2' : 'top-1/2 -translate-y-1/2'} `}><Corsair_icon className='rotate-90'/>
             </div>

    </footer>
  )
}






export default React.memo(FooterSlider);