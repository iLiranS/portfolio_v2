import bg1 from '../images/1.webp'
import bg2 from '../images/2.webp'
import bg3 from '../images/3.webp'
import bg4 from '../images/4.webp'
import bg5 from '../images/5.webp'
import bg6 from '../images/6.webp'
import {React_icon , TW_icon , JS_icon , CSS_icon} from '../Content_and_UI/Icons'




export const projects_content = [
    // each object contains : bg , desc component , images , title , icons .
    {
        bg : bg1,
        desc :
            <section className='gap-4 flex flex-col'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut massa magna. Nullam felis velit, rutrum id eros quis, gravida facilisis enim. Integer in quam hendrerit, hendrerit leo eget, commodo mauris. Aenean luctus neque ut lacus placerat facilisis. Quisque venenatis massa ut metus malesuada, sit amet sollicitudin tortor sodales. Nam dignissim risus id augue hendrerit, non lacinia turpis venenatis. Aenean dapibus ac tellus eu gravida. Sed nec neque sed urna hendrerit rutrum vel vitae neque. Nulla blandit, quam sit amet consectetur sagittis, sem quam lacinia nunc, non rhoncus risus nunc et arcu. Nulla commodo lectus ex. Nam dignissim mi sed turpis euismod ultrices. Nullam eros sapien, porttitor vel sapien at, aliquet varius lacus. Proin nulla orci, semper in auctor id, rutrum sit amet risus. Maecenas tempor venenatis nibh in porta. Phasellus eget libero sed sem varius dapibus non quis lorem. Duis vitae finibus tortor.</p>
            <p>paragraph 2 , this is a random text to use as a template to test functionality .</p>
            </section> 
        ,
        images : [
        'https://storage.googleapis.com/pai-images/a34bd56bf738489abece48b97d550683.png',
        'https://storage.googleapis.com/pai-images/a34bd56bf738489abece48b97d550683.png'],
        title : 'P1',
        link : 'https://picsum.photos/1920/1080',
        icons: [ <React_icon key={1}/> , <TW_icon key={2}/> , <JS_icon key={3}/> , <CSS_icon key={4}/> ]
    },
    {
        bg: bg2,
        title:'P2',
        desc :
        <section className='gap-4 flex flex-col'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut massa magna. Nullam felis velit, rutrum id eros quis, gravida facilisis enim. Integer in quam hendrerit, hendrerit leo eget, commodo mauris. Aenean luctus neque ut lacus placerat facilisis. Quisque venenatis massa ut metus malesuada, sit amet sollicitudin tortor sodales. Nam dignissim risus id augue hendrerit, non lacinia turpis venenatis. Aenean dapibus ac tellus eu gravida. Sed nec neque sed urna hendrerit rutrum vel vitae neque. Nulla blandit, quam sit amet consectetur sagittis, sem quam lacinia nunc, non rhoncus risus nunc et arcu. Nulla commodo lectus ex. Nam dignissim mi sed turpis euismod ultrices. Nullam eros sapien, porttitor vel sapien at, aliquet varius lacus. Proin nulla orci, semper in auctor id, rutrum sit amet risus. Maecenas tempor venenatis nibh in porta. Phasellus eget libero sed sem varius dapibus non quis lorem. Duis vitae finibus tortor.</p>
        <p>paragraph 2 , this is a random text to use as a template to test functionality .</p>
        </section> 
    ,
    images : [
    'https://storage.googleapis.com/pai-images/a34bd56bf738489abece48b97d550683.png',
    'https://storage.googleapis.com/pai-images/a34bd56bf738489abece48b97d550683.png'],
        icons: [ <React_icon key={1}/> , <TW_icon key={2}/> , <JS_icon key={3}/> , <CSS_icon key={4}/> ]

    },
    {
        bg: bg3,
        desc :
        <section className='gap-4 flex flex-col'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut massa magna. Nullam felis velit, rutrum id eros quis, gravida facilisis enim. Integer in quam hendrerit, hendrerit leo eget, commodo mauris. Aenean luctus neque ut lacus placerat facilisis. Quisque venenatis massa ut metus malesuada, sit amet sollicitudin tortor sodales. Nam dignissim risus id augue hendrerit, non lacinia turpis venenatis. Aenean dapibus ac tellus eu gravida. Sed nec neque sed urna hendrerit rutrum vel vitae neque. Nulla blandit, quam sit amet consectetur sagittis, sem quam lacinia nunc, non rhoncus risus nunc et arcu. Nulla commodo lectus ex. Nam dignissim mi sed turpis euismod ultrices. Nullam eros sapien, porttitor vel sapien at, aliquet varius lacus. Proin nulla orci, semper in auctor id, rutrum sit amet risus. Maecenas tempor venenatis nibh in porta. Phasellus eget libero sed sem varius dapibus non quis lorem. Duis vitae finibus tortor.</p>
        <p>paragraph 2 , this is a random text to use as a template to test functionality .</p>
        </section> 
    ,
    images : [
    'https://storage.googleapis.com/pai-images/a34bd56bf738489abece48b97d550683.png',
    'https://storage.googleapis.com/pai-images/a34bd56bf738489abece48b97d550683.png'],
        title:'P3'
    },
    {
        bg: bg4,
        desc :
        <section className='gap-4 flex flex-col'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut massa magna. Nullam felis velit, rutrum id eros quis, gravida facilisis enim. Integer in quam hendrerit, hendrerit leo eget, commodo mauris. Aenean luctus neque ut lacus placerat facilisis. Quisque venenatis massa ut metus malesuada, sit amet sollicitudin tortor sodales. Nam dignissim risus id augue hendrerit, non lacinia turpis venenatis. Aenean dapibus ac tellus eu gravida. Sed nec neque sed urna hendrerit rutrum vel vitae neque. Nulla blandit, quam sit amet consectetur sagittis, sem quam lacinia nunc, non rhoncus risus nunc et arcu. Nulla commodo lectus ex. Nam dignissim mi sed turpis euismod ultrices. Nullam eros sapien, porttitor vel sapien at, aliquet varius lacus. Proin nulla orci, semper in auctor id, rutrum sit amet risus. Maecenas tempor venenatis nibh in porta. Phasellus eget libero sed sem varius dapibus non quis lorem. Duis vitae finibus tortor.</p>
        <p>paragraph 2 , this is a random text to use as a template to test functionality .</p>
        </section> 
    ,
    images : [
    'https://storage.googleapis.com/pai-images/a34bd56bf738489abece48b97d550683.png',
    'https://storage.googleapis.com/pai-images/a34bd56bf738489abece48b97d550683.png'],
        title:'P4'
    },
    {
        bg: bg5,
        desc :
        <section className='gap-4 flex flex-col'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut massa magna. Nullam felis velit, rutrum id eros quis, gravida facilisis enim. Integer in quam hendrerit, hendrerit leo eget, commodo mauris. Aenean luctus neque ut lacus placerat facilisis. Quisque venenatis massa ut metus malesuada, sit amet sollicitudin tortor sodales. Nam dignissim risus id augue hendrerit, non lacinia turpis venenatis. Aenean dapibus ac tellus eu gravida. Sed nec neque sed urna hendrerit rutrum vel vitae neque. Nulla blandit, quam sit amet consectetur sagittis, sem quam lacinia nunc, non rhoncus risus nunc et arcu. Nulla commodo lectus ex. Nam dignissim mi sed turpis euismod ultrices. Nullam eros sapien, porttitor vel sapien at, aliquet varius lacus. Proin nulla orci, semper in auctor id, rutrum sit amet risus. Maecenas tempor venenatis nibh in porta. Phasellus eget libero sed sem varius dapibus non quis lorem. Duis vitae finibus tortor.</p>
        <p>paragraph 2 , this is a random text to use as a template to test functionality .</p>
        </section> 
    ,
    images : [
    'https://storage.googleapis.com/pai-images/a34bd56bf738489abece48b97d550683.png',
    'https://storage.googleapis.com/pai-images/a34bd56bf738489abece48b97d550683.png'],
        title:'P5'
    },
    {
        bg: bg6,
        desc :
        <section className='gap-4 flex flex-col'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut massa magna. Nullam felis velit, rutrum id eros quis, gravida facilisis enim. Integer in quam hendrerit, hendrerit leo eget, commodo mauris. Aenean luctus neque ut lacus placerat facilisis. Quisque venenatis massa ut metus malesuada, sit amet sollicitudin tortor sodales. Nam dignissim risus id augue hendrerit, non lacinia turpis venenatis. Aenean dapibus ac tellus eu gravida. Sed nec neque sed urna hendrerit rutrum vel vitae neque. Nulla blandit, quam sit amet consectetur sagittis, sem quam lacinia nunc, non rhoncus risus nunc et arcu. Nulla commodo lectus ex. Nam dignissim mi sed turpis euismod ultrices. Nullam eros sapien, porttitor vel sapien at, aliquet varius lacus. Proin nulla orci, semper in auctor id, rutrum sit amet risus. Maecenas tempor venenatis nibh in porta. Phasellus eget libero sed sem varius dapibus non quis lorem. Duis vitae finibus tortor.</p>
        <p>paragraph 2 , this is a random text to use as a template to test functionality .</p>
        </section> 
    ,
    images : [
    'https://storage.googleapis.com/pai-images/a34bd56bf738489abece48b97d550683.png',
    'https://storage.googleapis.com/pai-images/a34bd56bf738489abece48b97d550683.png'],
        title:'P6'
    },
    
    
]

export const backgrounds =[
    bg1,
    bg2,
    bg3,
    bg4,
    bg5,
    bg6,
    
]






