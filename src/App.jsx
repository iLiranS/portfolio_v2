import { useEffect, useRef, useState } from "react";
import TopNav from "./Header/TopNav";
import MainContent from "./Projects_section/MainContent";
import HeadContent from "./Head_Content/HeadContent";
import Contact from "./Footer/Contact";
let hasEffectAdded = false;

function App() {
  const [maxHeight , setMaxHeight] = useState(window.innerHeight);
  const [focusedPage , setFocusedPage] = useState(0);
  const mainRef = useRef();

  const setVisiblePage = () =>{
    const page = mainRef.current;
    const height = page.offsetHeight *3;
    console.log(height , page.scrollTop)
    let focused = 1;
    // check : if 0 then 0 .  if equal to height of page then 2 , otherwise its 1
    if (page.scrollTop < 200) focused =0;
    else if (page.scrollTop *2 >= height-200) focused =2;

    setFocusedPage(focused);
  }

  
  useEffect(()=>{
    if (!hasEffectAdded && mainRef.current){
    window.addEventListener('resize', ()=>{ setMaxHeight(window.innerHeight)});
    mainRef.current.addEventListener('scroll',setVisiblePage)
    hasEffectAdded = true;
    }
  
  },[mainRef.current])

  const scrollToContent = () =>{
    mainRef.current.scrollTop = window.innerHeight;
  }

  // check which part is visible :


  return (
    <div ref={mainRef} id='page' className={ `relative  snap-mandatory snap-y overflow-y-scroll grid grid-rows-[repeat(3,100vh)] md:grid-rows-[repeat(3,100dvh)] overflow-x-hidden max-w-screen
     scroll-smooth gap-0 p-0 m-0 max-h-[100vh] md:max-h-[100dvh]
     bg-lightBg text-gray-900
    dark:bg-darkBg dark:text-gray-100
     duration-500
      uw:text-2xl
     `}>

      <TopNav/>
      <HeadContent visible={focusedPage ===0} scrollToContent={scrollToContent}/>
      <MainContent visible={focusedPage ===1}/>
      <Contact visible={focusedPage ===2}/>
    </div>
  )
}

export default App
