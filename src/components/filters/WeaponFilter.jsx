import {useContext} from "react";

import FiltersContext from "../../context/FiltersContext.js";

import classes from '../../styles/filters/WeaponFilter.module.css'

import bow from '../../assets/img/Icon_Bow.webp'
import sword from '../../assets/img/Icon_Sword.webp'
import catalyst from '../../assets/img/Icon_Catalyst.webp'
import claymore from '../../assets/img/Icon_Claymore.webp'
import polearm from '../../assets/img/Icon_Polearm.webp'
import {useLocation} from "react-router-dom";

const WeaponFilter = ({grid}) => {
    const location = useLocation()
    const show = (location.pathname === '/characters') || (location.pathname === '/weapons')

    const {weaponFilter, setWeaponFilter} = useContext(FiltersContext)

    const weaponsTypeList = [
        {name: 'All Weapons'},
        {name: 'Sword', img: sword},
        {name: 'Polearm', img: polearm},
        {name: 'Bow', img: bow},
        {name: 'Claymore', img: claymore},
        {name: 'Catalyst', img: catalyst},
    ]

    return show && (
        <div className={`${grid} ${classes.weaponSelect} overflow-hidden z-20 font-bold`}>
            <div className={`${classes.weaponSelectActive} flex justify-center items-center`}>{weaponFilter[location.pathname.slice(1)]}</div>
            <div className={`flex flex-col`}>
                {weaponsTypeList.map(type => (
                    <button
                        key={type.name}
                        style={type.name.includes(weaponFilter[location.pathname.slice(1)]) ? {color: 'var(--5-star-color)'} : null}
                        className={`grid grid-cols-[42px_1fr] items-center gap-3 px-2 text-start ${classes.weaponSelectOptions}`}
                        onClick={() => setWeaponFilter(state => ({...state, [location.pathname.slice(1)]: type.name}))}
                    >
                        {type.img ? <img src={type.img} alt=''/> : null}
                        {type.name.includes('All Weapons') ? <span className='col-start-1 col-end-3 text-center'>{type.name}</span> : <span>{type.name}</span>}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default WeaponFilter;