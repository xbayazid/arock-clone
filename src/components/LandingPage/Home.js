import React, { useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import CenterText from '../Center/CenterText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Home = () => {
    const homeRef = useRef(null)
    useGSAP(() =>{
        gsap.to(homeRef.current, {
            y: "-100%",
            delay: 2,
            duration: 0.5
        })
    })
    return (
        <div className='h-screen'>
            <div ref={homeRef} className="h-screen bg-[#111] w-full z-10 fixed"></div>
            <div className="h-screen w-full bg-cover bg-center bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)]">
            <Navbar />
            <CenterText />
        </div>
        </div>
    );
};

export default Home;