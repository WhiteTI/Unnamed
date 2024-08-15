import React from 'react';
import {Link} from "react-router-dom";

const Select = () => {
    return (
        <div className='w-full flex justify-evenly pt-5 font-bold uppercase text-3xl'>
            <Link to='create-character'>
                Create Character
            </Link>

            <Link to='create-weapon'>
                Create Weapon
            </Link>

            <Link to='create-artifact'>
                Create Artifact
            </Link>
        </div>
    );
};

export default Select;