import React from 'react';
import 'remixicon/fonts/remixicon.svg';

const SubHeading = () => {
    return (
        <div className='flex items-center justify-between'>
           <div className=''>
            <i className='ri-play-mini-fill p-10'></i>
           <h2 className='uppercase font-[a4]'>Play <br /> the film</h2>
           </div>
           <div className='flex gap-24 font-[a4]'>
            <h3 className='uppercase'>Creator <br />Cruator</h3>
            <h3 className='uppercase'>New york <br />Los angeles</h3>
           </div>
        </div>
    );
};

export default SubHeading;