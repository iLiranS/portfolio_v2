import Illustration_contact from "../Content_and_UI/Illustration_contact";
import Illustration_contact_grey from "../Content_and_UI/illustration_contact_grey";
import { Github_icon , Linkedin_icon , Instagram_icon} from '../Content_and_UI/Icons'
import rgbBG from '../images/colorBG.png'

const Contact = (props) => {
 const { visible } = props;
  
if (!visible)
return(
  <div  className='h-full relative w-full grid grid-cols-[2fr,1fr] snap-center z-20 md:grid-cols-1'/>
)

  return (
    <div  className='h-full relative w-full grid grid-cols-[2fr,1fr] snap-center z-20 md:grid-cols-1'>

   


      <div className="h-full  w-full flex flex-col relative items-center justify-center gap-8 z-10">

        <section className="h-max bg-light dark:bg-opacity-30 backdrop-blur-sm bg-opacity-25 dark:bg-dark w-max flex flex-col items-center gap-8 border-dark dark:border-light border-2 p-4 rounded-lg">
        <div className="absolute w-full h-full animation-delay-700 origin-center top-0 bg-dark dark:bg-light bg-opacity-25 dark:bg-opacity-25 backdrop-blur-md  maskClass"></div>

      <h2 className='text-4xl'>Keep In Touch !</h2>
      <ul className="flex flex-col gap-4">
        <li className='Button  avoidClick after:bg-gradient-to-r  after:from-gray-700 after:to-black hover:text-white group after:origin-left'>
              <a href='https://github.com/iLiranS' target='_blank' className="flex items-center gap-2 justify-between w-full"> GitHub <Github_icon className='  dark:fill-light group-hover:fill-white'/></a> 
            </li>
            <li className='Button  avoidClick after:bg-gradient-to-r  after:from-cyan-600 after:to-gray-300 hover:text-white  group '>
              <a href='https://github.com/iLiranS' target='_blank' className="flex items-center gap-2 w-full justify-between"> Linkedin <Linkedin_icon className=' group-hover:fill-white dark:fill-light'/></a> 
            </li>
            <li className='Button  avoidClick after:origin-right after:bg-gradient-to-r  after:from-violet-600 after:to-red-500 hover:text-white  group'>
              <a href='https://github.com/iLiranS' target='_blank' className="flex items-center gap-2 w-full justify-between"> Instagram <Instagram_icon className='dark:fill-light group-hover:fill-white'/></a> 
            </li>
      </ul>
        </section>

      </div>

      <div className="w-full h-full justify-self-center  md:w-2/3 top-0 relative   md:absolute grid place-items-center">
      {/* <img className="absolute  top-0 w-full" src={rgbBG} alt='rgbBG'/> */}
      <Illustration_contact className='w-full h-full relative top-0 animate-bounce2 animation-delay-1500 '/>

        <div className="absolute top-1/2 w-full h-full -translate-y-1/2   maskClass md:top-0 md:-translate-y-0">
      <Illustration_contact_grey className='absolute w-full h-full top-0 left-0'/>
        </div>
      </div>
      


  
    
    </div>
  )
}

export default Contact