import React, { useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import CenterText from '../Center/CenterText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Black from './Black/Black';

const Home = () => {
    const pageRef = useRef(null);
    useGSAP(() =>{
        gsap.to(pageRef.current,{
            opacity: 1,
            delay: 1.2, 
            duration: 1,
            scale: 1
        })
    })
    return (
        <div className='h-screen'>
            <Black/>
            <div ref={pageRef} className="opacity-0 h-screen w-full bg-cover bg-center bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)]">
            <Navbar />
            <CenterText />
        </div>
        </div>
    );
};

export default Home;