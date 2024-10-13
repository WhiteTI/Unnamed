import {useContext} from "react";
import {useLocation} from "react-router-dom";
import FiltersContext from "../../context/FiltersContext.js";

import classes from '../../styles/filters/Search.module.css'
import searchIcon from "../../assets/img/search.svg"

const Search = ({grid}) => {
    const {search, setSearch} = useContext(FiltersContext)
    const location = useLocation()

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
                value={search[location.pathname.slice(1)]}
                onChange={event => setSearch(state => ({...state, [location.pathname.slice(1)]: event.target.value}))}
            />
        </div>
    );
};

export default Search;