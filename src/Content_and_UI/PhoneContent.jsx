import { React_icon , TW_icon , JS_icon , CSS_icon} from './Icons'

const iconsDiv = 
<div className='grid grid-cols-2 grid-rows-2 place-items-center gap-2 border-2 rounded-md border-dark dark:border-light border-dotted'>
    <section className='flex flex-col items-center'> <React_icon className='h-4'/> React </section>
    <section className='flex flex-col items-center'> <TW_icon className='h-4'/> TailWind </section>
    <section className='flex flex-col items-center'> <JS_icon className='h-4'/> JS </section>
    <section className='flex flex-col items-center'> <CSS_icon className='h-4'/> CSS </section>
</div>

export const content =[
    { title : 'Hi !', content1 : `my name is Liran and I'm a Front-End web develoepr` , content2:'Currently developing as a hobby in my free time :)', content3:`So.. I'm just looking for fun project and expanding my skills & knowledge at the moment`} ,
    { title : 'About Me' , content1 : `I've started my journy 2 years ago as a hobby` , content2: ' I fell in love quick enough with the concept of making ideas into websites' , content3 : 'So I started with the basics , as in everything in life 😄' } ,
    { title : 'What I work with', content1 : '', content2 : iconsDiv , content3 : ' I combine my knowledge to create the best I can offer with my unique touch :)'  } ,
    { title : 'My Future', content1 : ' - In the next year my c.s degree journy will begin' , content2 : `-Get a job during/after the degree and get to know the industry more` , content3 : '- Learn more about 3D enviorments as three js and more complex 3D UI & animations' },
    { title : 'Today', content1 : `studying Next JS and server side rendering & getting ready for university` , content2 : `UI & Animations: practicing those concepts as they are important as the functionality `, content3:'Challenge is the Key !'} ,

]