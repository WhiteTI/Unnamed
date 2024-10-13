import classes from "./Loading.module.css";

import pyro from "../../assets/img/pyro.svg";
import gidro from "../../assets/img/gidro.svg";
import anemo from "../../assets/img/anemo.svg";
import electro from "../../assets/img/electro.svg";
import dendro from "../../assets/img/dendro.svg";
import cryo from "../../assets/img/cryo.svg";
import geo from "../../assets/img/geo.svg";
import {useEffect, useState} from "react";

const Loading = () => {
    const colors = ['--pyro-color', '--hydro-color', '--dendro-color', '--electro-color', '--anemo-color', '--cryo-color', '--geo-color']

    const [randomColor, setRandomColor] = useState('--pyro-color')

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
    }

    const elementsList = [
        {elem: 'pyro', img: pyro},
        {elem: 'hydro', img: gidro},
        {elem: 'anemo', img: anemo},
        {elem: 'electro', img: electro},
        {elem: 'dendro', img: dendro},
        {elem: 'cryo', img: cryo},
        {elem: 'geo', img: geo},
    ]

    useEffect(() => {
        setRandomColor(colors[getRandomInt(0, 8)])
    }, []);


    return (
        <div style={{backgroundColor: 'var(--primary-bg-color)'}} className='absolute w-full h-full inset-0 flex justify-center items-center text-white z-50'>
            <div className={`grid justify-items-center items-center gap-x-4 ${classes.circle}`}>
                {
                    elementsList.reverse().map(({elem, img}) => (
                        <div key={elem} style={{}}>
                            <img src={img} alt={elem}/>
                        </div>
                    ))
                }
            </div>
            <div className={`absolute grid content-end grid-rows-[330px_12px_260px] ${classes.slimeWrapper}`}>
                <div className={`${classes.slime}`} style={{borderColor: `var(${randomColor})`}}>
                    <div className={classes.eyes}>
                        <div style={{backgroundColor: `var(${randomColor})`}}></div>
                        <div style={{backgroundColor: `var(${randomColor})`}}></div>
                    </div>
                </div>
                <div className={`row-start-2 ${classes.line}`} style={{backgroundColor: `var(${randomColor})`}}></div>
                <div className={`row-start-3 ${classes.block}`}></div>
            </div>
        </div>
    )
};

export default Loading;