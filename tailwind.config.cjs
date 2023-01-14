/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
      backgroundColor:{
        darkBg:'#1f1f1f',
        lightBg:'#fcefd5'
      },
      backgroundImage:{
        'bg1': "url('./src/images/1.webp')",
        'bg2': "url('./src/images/2.webp')",
        'bg3': "url('./src/images/3.webp')",
        'bg4': "url('./src/images/4.webp')",
        'bg5': "url('./src/images/5.webp')",
        'bg6': "url('./src/images/6.webp')",
        'hero-pattern': "url('https://picsum.photos/1920/1080')",

      },
      colors:{
        light:'#fcefd5',
        dark:'#1f1f1f'
      },
      fontFamily:{
        sans: ['"Space Grotesk"','sans-serif']
      },
      screens:{
        'md': {'max': '767px'},
        'xs' : { 'max' : '530px'},
        'xl': {'max': '1280px', 'min' : '768px'},
        'uw' : {'min' : '2000px'},
      },
      //keyframes
      keyframes:{
        enterOpacityScale:{
          '0%' : {opacity: 0 , scale : 0},
          '50%' : {opacity: 0 , scale : 0},
          '100%' : { opacity : 1 , scale : 1}
        },
        entrance2:{
          '0%' : {opacity : 0 , scale : 0},
          '100%' : { opacity : 1 , scale : 1}
        },
        projectScaleDown:{
          '100%' : { width : '8rem' , height : '8rem'}
        },
        projectScaleUp:{
          '0%' : {width : '8rem' , height : '8rem'},
          '100%' : { width : '12rem' , height : '15rem'}
        },
   
        heightReset:{
          '0%': {height : '100%'},
          '50%' : {height : '0'},
          '100%' : {height : '100%'}
        },
        opacityPulse:{
          '0%' : {opacity:'0'},
          '40%' : {opacity:'0.4'},
          '60%' : {opacity:'0.4'},
          '100%' : {opacity:'0'}
        },
        projectEntrance:{
          '0%': {scale : 0},
          '100%' : {scale : 1}
        },
        bgTransition:{
          '0%' : {scale : '1'},
          '5%' : {scale : '1'},
          '100%': {scale: '1.25'}
        },
        btnScaleReset:{
          '0%' : { scale :'1 1'},
          '50%' : {scale: '1 0.85'},
          '100%' : {scale:'1 1'}
        },
        scaleX:{
          '0%,100%' : {width : '0%' },
          '60%' : {width : '100%'},
          '50%' : {width : '100%'},
        },
        bounce2:{
          '0%,100%' : {translate : '0 0%'},
          '50%' : {translate : '0 -5%'}
        },
        opacityBounce2:{
          '0%' : {opacity : '0.5'},
          '50%' : {opacity : '1'},
          '100%' : {opacity : '0.5'}
        },
        phoneTextEntrance:{
          '0%' : {translate : '-100% 0%' , opacity : '0'},
          '100%' : {translate : '0% 0%' , opacity : '1'},
        },
        spin360:{
          '0%' : {rotate : '0'},
          '100%' : {rotate : '360deg'}
        },
        spinMinus360:{
          '0%' : {rotate : '0'},
          '100%' : {rotate : '-360deg'}
        }

     
      },
      //animations
      animation:{
        'entrance' : 'enterOpacityScale 1s ease-out 1',
        'entrance2' : 'entrance2 1s ease 1',
        'scaleDown' : 'projectScaleDown 0.5s ease 1 forwards',
        'scaleUp' : 'projectScaleUp 0.5s ease 1 forwards',
        'resetHeight' : 'heightReset 1s ease 1',
        'fullPulse' : 'opacityPulse 3s linear infinite',
        'bgAnim' : 'bgTransition 2s ease-in-out 1 forwards',
        'project_entrance' : 'projectEntrance 1s ease 1',
        'btnReset' : 'btnScaleReset 0.8s ease 1',
        'scaleX' : 'scaleX 1.5s ease-in-out 1 forwards',
        'bounce2' : 'bounce2 5s ease-in-out infinite',
        'blurAnim' : 'opacityBounce2 5s ease-in-out infinite',
        'textEntrance' : 'phoneTextEntrance 1s ease-out 0.5s forwards',
        'spinAround' : 'spin360 5s linear infinite',
        'spinAroundMinus' : 'spinMinus360 5s linear infinite'
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
  darkMode:'class',
}
