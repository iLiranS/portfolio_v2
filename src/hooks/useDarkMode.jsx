import { useEffect, useState } from 'react';

const useDarkMode = () =>{
    const [darkMode,setDarkMode] = useState(undefined);

    // initial theme check .
    useEffect(()=>{

        // if exists already , use the existing theme.
        try{
        const currentTheme = JSON.parse(localStorage.getItem('dark'));
        // can be true , false or null .
        if (currentTheme === null) {
             setDarkMode(true);
             document.body.style.backgroundColor='#1f1f1f'
             return;
            }
        setDarkMode(currentTheme);

        
        }
        // if we get error set to initial perference
        catch(error){
            console.log(error);
            setDarkMode(true);
        }
    },[])

    // when theme changed handler effect.
    useEffect(()=>{
        if (darkMode !== undefined){
            localStorage.setItem('dark',darkMode);
            // need to update doc body classlist.
            const bodyClasses = document.body.classList;
            if (darkMode){
                if (!bodyClasses.contains('dark')) {bodyClasses.add('dark'); document.body.style.backgroundColor='#1f1f1f'}
            }
            else{
                if (bodyClasses.contains('dark'))  {bodyClasses.remove('dark'); document.body.style.backgroundColor='#FCEFD5'}
            }
        }
    },[darkMode])

    const toggleTheme = () =>{
        setDarkMode(prev => {
            // prev = 0 means it turning dark now .
            prev ? document.body.style.backgroundColor='#1f1f1f' : document.body.style.backgroundColor='#FCEFD5';
            return !prev;
         });
    }

    return {toggleTheme , darkMode};
}

export default useDarkMode;