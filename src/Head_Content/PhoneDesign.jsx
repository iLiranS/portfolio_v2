import React from 'react'
import { Signal_icon, Battery_icon} from '../Content_and_UI/Icons'
import {content} from '../Content_and_UI/PhoneContent'


let today = new Date();
let time =''
if (today.getHours() < 10) time+='0';
time += today.getHours();
time+= ':';
if (today.getMinutes() < 10) time+='0';
time+= today.getMinutes();

const PhoneDesign = (props) => {
    const { active , index } = props;
    const isActive = active === index;
    const p = content[index];

  const updateScreenHandler = () =>{
    props.updateScreen(index);
  }

  return (
    <section onClick={updateScreenHandler}  className={`w-full h-full  absolute carouselItem overflow-hidden overflow-x-hidden   border-opacity-75 border-black rounded-[20px] ${isActive ? 'opacity-100' : 'opacity-25'}`}>
      <div className='absolute -bottom-0 w-full h-4 rounded-md left-1/2 -translate-x-1/2 bg-black blur-md  '></div>
    <div  className={` w-full px-2 border-8 border-[#242B34]  h-full rounded-[20px] pt-10  bg-[#EF888A] bg-opacity-100`}>
       { isActive && <section className='text-sm'>
        {p.title && <h3 className='text-4xl animate-textEntrance opacity-0'>{p.title}</h3>}
        <br></br>
        {p.content1 ? <section className='animate-textEntrance opacity-0 animation-delay-500'>{p.content1}</section> : ''}
        <br></br>
        {p.content2 ? <section className='animate-textEntrance opacity-0 animation-delay-1000'>{p.content2}</section> : ''}
        <br></br>
        {p.content3 ? <section className='animate-textEntrance opacity-0 animation-delay-1500'>{p.content3}</section> : ''}
     
      </section>}
    </div>

    <div className='absolute w-full h-4 top-2 items-center grid grid-cols-[1fr,2fr,1fr]  justify-between px-4'>
      <p className=' text-xs self-center'>{time}</p>
      <div className='w-full bg-[#191F28] h-full rounded-md rounded-t-none'>
        
      </div>

      <div className='relative w-full items-center place-items-center grid grid-flow-col'>
        <div> <Signal_icon className='w-full h-4'/> </div>
        <div> <Battery_icon className='w-full h-4 fill-none'/> </div>
      </div>
    </div>
    
   </section>
  )
}

export default PhoneDesign