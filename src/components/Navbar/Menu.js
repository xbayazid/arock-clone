import React from 'react';

const Menu = (props) => {
    const menuBarOpens = () =>{
        props.setMenuOpen(true);
    }
    return (
        <div>
            <h1 onClick={menuBarOpens} className='font-[a4] uppercase opacity-80 cursor-pointer hover:opacity-75 active:scale-y-95'>Menu</h1>
        </div>
    );
};

export default Menu;