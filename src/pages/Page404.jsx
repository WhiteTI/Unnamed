import React from 'react';
import {Link} from "react-router-dom";

const Page404 = () => {
    return (
        <div
            style={{backgroundColor: 'var(--primary-bg-color)'}}
            className='absolute w-full h-full flex justify-center items-center text-white z-50 flex-col'
        >
            <h1 className='font-mono text-5xl font-bold uppercase'>404 This page does not exist</h1>
            <Link to='/characters' className='mt-8 text-xl text-teal-500'>Home</Link>
        </div>
    );
};

export default Page404;