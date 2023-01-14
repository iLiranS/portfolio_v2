import React, { useEffect, useRef } from 'react';
import FooterSlider from "./Project_Slider/FooterSlider";
import { useState } from "react";
import ProjectContainer from './Project_List/ProjectContainer';
import Project from './Project_List/Project'



let isMobile = false;
let hasTouchScreen = false;
let UA = navigator.userAgent;
        hasTouchScreen = (
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        ); 
if (hasTouchScreen) {
  isMobile = true;
}

function isInViewport() {
  const page = document.getElementById('page');
  if (isMobile){
    if (page.scrollTop >0) return true;
  }
  return (
      page.scrollTop >0 && page.scrollTop < window.innerHeight + 100
  );
}



const MainContent = () => {
    const [selectedPage , setSelectedPage] = useState(-1);
    const [inView,setInView] = useState(false);
    const mainRef = useRef();
    const pageSelectorHandler = (index=-1) => { if (typeof(index)==='number') setSelectedPage(index); else setSelectedPage(-1)}


    const isInViewPort = () =>{
      const isInView = isInViewport();
      setInView(isInView);
      return isInView;
    }

  return (
    <main ref={mainRef} className={`relative snap-start h-full w-screen grid grid-rows-[auto,max-content] gap-6`}>
    
    
    <ProjectContainer inView={inView} page={selectedPage}/>
    {/* <Project index={selectedPage}/> */}
    
     
    <FooterSlider isInViewPort={isInViewPort} isMobile={isMobile} activePage={selectedPage}  setPage={pageSelectorHandler}/>
     
    </main>
  )
}

export default MainContent