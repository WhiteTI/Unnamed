import {useCallback, useContext, useState} from "react";
import {useLocation} from "react-router-dom";

import FiltersContext from "../../context/FiltersContext.js";

import classes from '../../styles/filters/Search.module.css'
import searchIcon from "../../assets/img/search.svg"
import {debounce} from "lodash";

const Search = ({grid}) => {
    const [value, setValue] = useState({characters: '', weapons: '', artifacts: ''})
    const {search, setSearch} = useContext(FiltersContext)
    const location = useLocation()

    const callbackDebounce = useCallback(debounce((str) => {
        setSearch(state => ({...state, [location.pathname.slice(1)]: str}))
    }, 500), [location.pathname])

    const handleInput = (event) => {
        setValue(state => ({...state, [location.pathname.slice(1)]: event.target.value}))
        callbackDebounce(event.target.value)
    }

    return (
        <div className={`${grid} flex items-center p-3 ${classes.searchWrapper}`}>
            <label htmlFor='search'>
                <img src={searchIcon} alt=""/>
            </label>

            <input
                className={`bg-transparent ml-3 ${classes.search}`}
                id='search'
                type="search"
                placeholder='Search'
                value={value[location.pathname.slice(1)]}
                onChange={handleInput}
            />
        </div>
    );
};

export default Search;