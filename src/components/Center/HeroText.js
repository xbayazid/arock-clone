import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const HeroText = () => {
    const heroRef = useRef(null);
    useGSAP(()=>{ 
        let clutter = ""
        const spilttedText = heroRef.current.textContent.split("")
        spilttedText.forEach(function(e){
            clutter += `<span>${e}</span>`
        })
        heroRef.current.innerHTML = clutter
        gsap.from("h1 span", {
            y: 100,
            opacity: 0,
            delay: 2.15,
            stagger: 0.12
        })
    })
    return (
        <div>
            <h1 ref={heroRef} className='whitespace-nowrap font-black text-center font-[u8] leading-[16vw] uppercase text-[21vw]'>Arock</h1>
        </div>
    );
};

export default HeroText;