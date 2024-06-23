import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const Black = () => {
    const homeRef = useRef(null);
    useGSAP(() =>{
        gsap.to(homeRef.current, {
            y: "-100%",
            delay: 1.5,
            duration: 0.8
        })
    })
    return (
        <div>
            <div ref={homeRef} className="h-screen bg-[#111] w-full z-10 absolute"></div>
        </div>
    );
};

export default Black;