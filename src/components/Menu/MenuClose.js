import React from 'react';

const MenuClose = (props) => {
    const menuClose = () =>{
        props.setMenuOpen(false)
    }
    return (
        <div onClick={menuClose} className='uppercase font-[a4] cursor-pointer text-right hover:opacity-75 active:scale-y-95'>
            close
        </div>
    );
};

export default MenuClose;