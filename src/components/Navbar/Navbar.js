import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

const Navbar = () => {
    return (
        <div className='flex w-full items-center justify-between px-7 py-3'>
            <Logo/>
            <Menu/>
        </div>
    );
};

export default Navbar;