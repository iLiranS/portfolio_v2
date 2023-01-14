 import { projects_content as projects } from '../../Content_and_UI/Content';
 import ImageContainer from '../../Content_and_UI/ImageContainer';
 import { Arrow, Hold_Slide_Btn } from '../../Content_and_UI/Icons';
import { useRef } from 'react';


const Test = props => {
  const index = props.index;

    const project = projects[index];
    const container = useRef();

    const scrollToContent = () =>{
      const height = container.current.offsetHeight;
      container.current.scrollTop = height;
    }

    const imagesContainer = () =>(
      <div className={`h-max-content  justify-evenly w-full  relative grid grid-cols-[repeat(auto-fill,300px)] gap-4`}>
        {project.images.map((src,index) => <ImageContainer key={index} src={src} className='w-[min(100%,300px)]  rounded-md aspect-video md:w-full'/>)}
      </div>
    )

    
      return (
        <div key={Math.random()} ref={container} className={`overflow-x-hidden scroll-smooth m-auto  h-full  overflow-y-auto  relative 
         rounded-md  md:mt-0 w-4/5 md:w-full  z-10 md:rounded-t-none
            after:absolute after:bottom-[0] after:w-full after:h-[40px] after:bg-gradient-to-b
            after:left-0 after:content-[""] after:bg-opacity-30  after:from-transparent after:to-light
            dark:after:to-dark 
         `}>          

            <section className='relative flex h-full flex-col top-[105%] gap-4 px-2'>
              {project.desc}
              {project.images &&  imagesContainer() }
            {project.icons && <section className='flex border-dark dark:border-white border-opacity-50   items-center justify-start border-solid border-t-[1px] w-full gap-2  h-8 py-1'>Tech : {project.icons}</section>}
  
           </section>

           {/* background */}
           <div className={`h-full  w-full absolute bg${index+1} top-0 left-0 bg-fixed bg-bottom bg-no-repeat bg-cover`}>
          </div>

           {/* title */}
           <h1 className='absolute top-1/2 w-max text-4xl bg-light text-dark dark:bg-dark dark:text-light  left-1/2 -translate-x-1/2
              p-2 rounded-md bg-opacity-70 backdrop-blur-md dark:bg-opacity-70'> 
              {project.title} </h1>
              
              
           {/* circle button */}
           <div onClick={scrollToContent} className=' avoidClick opacity-50 cursor-pointer z-[1] absolute animate-bounce
            bottom-[20px] h-8 w-8 left-1/2 grid place-items-center  rounded-full bg-dark dark:bg-light'>
             <Arrow className=' -rotate-90 h-5 w-5 fill-light dark:fill-dark stroke-lgiht dark:stroke-dark'/> 
             </div>
        </div>
  )
}

export default Test