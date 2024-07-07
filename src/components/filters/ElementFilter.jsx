import {useContext} from "react";

import classes from '../../styles/filters/ElementFilter.module.css'

import pyro from '../../assets/img/pyro.svg'
import gidro from '../../assets/img/gidro.svg'
import anemo from '../../assets/img/anemo.svg'
import electro from '../../assets/img/electro.svg'
import dendro from '../../assets/img/dendro.svg'
import cryo from '../../assets/img/cryo.svg'
import geo from '../../assets/img/geo.svg'

import FiltersContext from "../../context/FiltersContext.js";

const ElementFilter = () => {
    const {elements, setElements} = useContext(FiltersContext)

    const elementsList = [
        {elem: 'pyro', img: pyro},
        {elem: 'gidro', img: gidro},
        {elem: 'anemo', img: anemo},
        {elem: 'electro', img: electro},
        {elem: 'dendro', img: dendro},
        {elem: 'cryo', img: cryo},
        {elem: 'geo', img: geo}
    ]

    const toggleElement = (elem) => {
        if (elements.includes(elem)) {
            setElements(state => state.filter(item => item !== elem))
        } else {
            setElements(state => [...state, elem])
        }
    }

    return (
        <div className='flex gap-x-4'>
            {
                elementsList.map(({elem, img}) => (
                    <button key={elem} className={`${classes.elementBtn}`} style={elements.includes(elem) ? {transform: 'scale(1.1)'} : {}} onClick={() => toggleElement(elem)}>
                        <img src={img} alt={elem}/>
                    </button>
                ))
            }
        </div>
    );
};

export default ElementFilter;