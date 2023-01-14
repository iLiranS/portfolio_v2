import { Arrow} from '../Content_and_UI/Icons';
import Illustration from '../Content_and_UI/Illustration';
import PhoneHolder from './PhoneHolder';

const HeadContent = (props) => {
const { visible } = props;



  // handle scroll to projects btn
  const scrollToContent = () =>{
    props.scrollToContent();
  }

  return (
    <div className='h-full w-screen relative snap-center'>
    {visible &&
    <div className='h-full w-full grid relative  grid-cols-[1fr,1fr] md:items-center md:grid-cols-1 animate-entrance2'>
                {/* left side  , on mobile hidden . illustration */}

      <div className='flex lg:scale-125 flex-col items-center animate-bounce2 animation-delay-3000  justify-center  relative   w-full md:hidden uw:scale-150'>
        <section className='z-10 h-fit relative -skew-y-[30deg] -translate-y-[35px] -translate-x-[50px] uw:-translate-x-[60px] uw:-translate-y-[50px]'>
        <h3 className='opacity-0 animate-textEntrance text-xl text-violet-700 lol'><span className='lol'>Hello,</span></h3>
        <p className='opacity-0 animate-textEntrance animation-delay-500'>I'm Liran</p>
        <p className='opacity-0 animate-textEntrance animation-delay-1000'>a  <span className='text-violet-700 lol'>Front-End</span> Web</p>
        <p className='opacity-0 animate-textEntrance animation-delay-1500'>Developer</p>
        </section>
        <Illustration className=' absolute w-[400px] uw:w-[500px] aspect-square  ' />
      </div>



      {/* right side , on mobile only thing . carousel  */}
      <PhoneHolder/>


      {/* circle thingy  */}
      <section className='group md:hidden grid place-items-center absolute top-1/2 right-1/2 translate-x-1/2  -translate-y-1/2 w-16 h-16 bg-[#EF888A]  rounded-full'>
        <div className='w-full h-full absolute top-0 left-0  group-hover:pauseAnimation animate-spinAroundMinus'>
          <div className=' group-hover:activeItem  transition-all duration-300  absolute right-0 w-4 h-4 rounded-full bg-dark dark:bg-light'></div>
        </div>
            <p className='hidden group-hover:block rotate-0 group-hover:animate-entrance2 transition-all text-light dark:text-dark'>Hi 😁</p>
      </section>


     
      {/* scroll to projects  */}

      <section onClick={scrollToContent} className=' absolute bottom-[20px] left-1/2 gap-2 opacity-50 flex flex-col items-center -translate-x-1/2'>
        <p>Projects</p>
          <div  className=' avoidClick cursor-pointer z-[1]  animate-bounce
             h-8 w-8  grid place-items-center  rounded-full bg-dark dark:bg-light'>
             <Arrow className=' -rotate-90 h-5 w-5 fill-light dark:fill-dark stroke-lgiht dark:stroke-dark'/> 
             </div>
        </section>

   </div>
  }
    </div>
  )
}

export default HeadContent