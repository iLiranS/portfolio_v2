import useDarkMode from '../hooks/useDarkMode';
import { useEffect , useRef } from 'react';
import {Github_icon , Sun_icon , Moon_icon} from '../Content_and_UI/Icons'
import img from '../images/face_illu.webp'
import logo from '../images/logo.webp'

let hasEventAdded = false;

const TopNav = () => {
    const darkMode = useDarkMode();
    const darkModeHandler = () =>{
        darkMode.toggleTheme();
    }


    const eyeL = useRef(), eyeR = useRef();


    const eyeMouseMoveHandler = (e) =>{
      const maxTranslate = 8; // in px units.
      const maxWidth = window.innerWidth;
      const maxHeight = window.innerHeight;
      const currentX = e.clientX , currentY = e.clientY;
      let xPerrcent = currentX / maxWidth ;
      const yPercent = currentY / maxHeight ;
      // e.x , now i have number between 0 to 1
    
      // max 4 min -4
      let xTranslateValue = xPerrcent * 4 -2; 
      let yTranslateValue =  yPercent * 2 -1;
      eyeL.current.style.transform = `translate(${4 + xTranslateValue}px ,${-9 + yTranslateValue}px)`
      eyeR.current.style.transform = `translate(${-9 + xTranslateValue}px ,${-9 + yTranslateValue}px)`
  
  
      // setXTranslate(xTranslateValue);
    }
  
  
   
      
      useEffect(()=>{
  
        if (!hasEventAdded){
          hasEventAdded = true;
          window.addEventListener('mousemove',eyeMouseMoveHandler);
        }
  
        return() => { window.removeEventListener('mousemove',eyeMouseMoveHandler); hasEventAdded = false; }
      })
    
  return (
    <nav className=' absolute top-0 z-10  overflow-hidden  w-full h-20 flex items-center justify-between px-8 select-none
    md:px-3 '>

      <UL>
      {/* <img  src={logo} alt='logo' className='avoidClick cursor-pointer h-10 w-8 md:left-3'/> */}
      <div  className={` absolute hover:scale-105 transition-all duration-300 ease-in
         top-0 left-0 aspect-square h-full `}>
          <img src={img} alt='illustration' className='w-full h-full'/>
          <section ref={eyeL} className={`w-1 h-1 bg-black absolute top-[45%] left-1/2 -translate-x-[9px] -translate-y-[9px] rounded-full `}></section>
          <section ref={eyeR} className={`w-1 h-1 bg-black absolute top-[45%] left-1/2 translate-x-[4px] -translate-y-[9px] rounded-full `}></section>
        </div>
      </UL>
      

        <UL className='gap-2'>
            

            <li onClick={darkModeHandler} className={` ${!darkMode.darkMode ? '-rotate-180' : 'rotate-0'} flex flex-col
            transition-all text-white rounded-full select-none  gap-7 h-max-content overflow-hidden self-start mt-5  duration-500 relative`}>
                <ThemeSection className=' opacity-0 dark:opacity-100 transition-all   bg-gradient-to-l from-gray-700 to-blue-500' icon={<Moon_icon className='h-4' />}/>
                <ThemeSection className=' dark:opacity-0 transition-all bg-gradient-to-r from-amber-200 to-red-400 ' icon={<Sun_icon className='h-4'/>}/>
            </li>
        </UL>
    </nav>
  )
}

const UL = props =>(
    <ul className={` ${props.className} relative flex justify-center items-center h-full max-h-full`}>
        {props.children}
    </ul>
)
const ThemeSection = ({icon,className}) =>(
    <section className={`${className} p-5 py-3 cursor-pointer h-full rounded-md avoidClick`}>
        {icon}
    </section>
)

export default TopNav