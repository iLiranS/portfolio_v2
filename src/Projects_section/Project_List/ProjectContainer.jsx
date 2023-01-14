import React, { useState , useEffect, useRef } from 'react';
import Project from './Project'
import { Hold_Slide_Btn } from '../../Content_and_UI/Icons';

const ProjectContainer = props => {
   const page = props.page;
   const listRef = useRef();
  
   
   const ScrollHandler = () =>{
    if (!listRef.current) {console.log('error');return;}
   const ls = listRef.current;
  //  const selectedChild = ls.children[page+1];
   if(props.inView){
    //  selectedChild.scrollIntoView();
    if (page <0) {ls.scrollLeft = 0; return;}
    ls.scrollLeft = window.innerWidth * (page+1);
    console.log(window.innerWidth * (page+1))
   }
    // makes the projects page to be scrolled on load . use it only if in view already ? 
   }

   useEffect(()=>{
      ScrollHandler();

   },[page])

  
   
  return (

<div ref={listRef}  className={`h-auto w-full px-0 lg:scroll-smooth  select-none  overflow-hidden `}>
   
   <section  className='w-max flex  pt-4 md:pt-0 h-full'>
        <div className='w-screen  relative  h-full top-1/2 -translate-y-1/2 '> {page === -1 && <Hold_Slide_Btn/>} </div>
        <div className='w-screen relative  h-full  '> {page ===0 && <Project index={0}/>}</div>
        <div className='w-screen  relative  h-full  '> {page ===1 && <Project index={1}/>}</div>
        <div className='w-screen  relative  h-full  '> {page ===2 && <Project index={2}/>}</div>
        <div className='w-screen  relative  h-full  '> {page ===3 && <Project index={3}/>}</div>
        <div className='w-screen  relative  h-full  '> {page ===4 && <Project index={4}/>}</div>
        <div className='w-screen  relative  h-full  '> {page ===5 && <Project index={5}/>}</div>
    </section>

    </div>


    
  )
}

export default ProjectContainer