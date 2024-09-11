import {useState} from "react";

import CharacterList from "../characterList/CharacterList.jsx";
import ElementFilter from "../filters/ElementFilter.jsx";

import FiltersContext from "../../context/FiltersContext.js";

import classes from "../../styles/CharactersPage.module.css";
import {Outlet, useLocation} from "react-router-dom";
import Search from "../filters/Search.jsx";

const CharactersPage = () => {
    const [elements, setElements] = useState([])
    const [search, setSearch] = useState('')

    const location = useLocation()

    let title = location.pathname.replace('/', '')

    return (
        <>
            <FiltersContext.Provider value={{elements, setElements, search, setSearch}}>
                <div className={`bg-fixed ${classes.mainBgImage}`}>
                    <div className='container mx-auto pt-56'>
                        <h1 className={`${classes.title} font-bold uppercase`}>{title} List</h1>
                        <div className='grid grid-cols-[130px_180px_470px_360px] justify-between'>
                            <ElementFilter grid={'col-start-3 col-end-4'}/>
                            <Search grid={'col-start-4'}/>
                        </div>
                    </div>
                </div>

                <div className={`${classes.mainBgColor} `}>
                    <div className='container mx-auto py-8 min-h-screen'>
                        <Outlet/>
                    </div>
                </div>
            </FiltersContext.Provider>
        </>
    );
};

export default CharactersPage;