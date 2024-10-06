import {useLocation} from "react-router-dom";
import {useContext} from "react";

import FiltersContext from "../../context/FiltersContext.js";

import classes from '../../styles/filters/RarityFilter.module.css'

import FiveStar from '../../assets/img/5star.svg'
import FourStar from '../../assets/img/4star.svg'
import ThreeStar from '../../assets/img/3star.svg'

const RarityFilter = ({grid}) => {
    const {rarityFilter, setRarityFilter} = useContext(FiltersContext)
    const location = useLocation()

    const stars = location.pathname === '/characters'
        ? [
            {rar: 5, img: FiveStar},
            {rar: 4, img: FourStar},
        ]
        : [
            {rar: 5, img: FiveStar},
            {rar: 4, img: FourStar},
            {rar: 3, img: ThreeStar},
        ]

    const toggleRarity = (rar) => {
        if (rarityFilter[location.pathname.slice(1)].includes(rar)) {
            setRarityFilter(state => ({...state, [location.pathname.slice(1)]: state[location.pathname.slice(1)].filter(item => item !== rar)}))
        } else {
            setRarityFilter(state => ({...state, [location.pathname.slice(1)]: [...state[location.pathname.slice(1)], rar]}))
        }
    }

    return (
        <div className={`${grid} flex gap-x-4`}>
            {stars.map(({rar, img}) => (
                <button
                    key={rar}
                    className={`flex items-center justify-center ${classes.rarityBtn}`}
                    data-active={!rarityFilter[location.pathname.slice(1)].length ? 'default' : rarityFilter[location.pathname.slice(1)].includes(rar) ? 'true' : 'false'}
                    onClick={() => toggleRarity(rar)}
                >
                    <img src={img} alt={`${rar} Star`}/>
                </button>
            ))}
        </div>
    );
};

export default RarityFilter;