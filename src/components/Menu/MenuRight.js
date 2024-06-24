import React from 'react';
import MenuClose from './MenuClose';

const MenuRight = (props) => {
    return (
        <div className='w-1/3 py-14 px-32 relative h-full'>
            <MenuClose menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen}/>
        </div>
    );
};

export default MenuRight;