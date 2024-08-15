import {useState} from "react";

import CharacterList from "../characterList/CharacterList.jsx";
import ElementFilter from "../filters/ElementFilter.jsx";

import FiltersContext from "../../context/FiltersContext.js";

import classes from "../../styles/CharactersPage.module.css";
import {Outlet, useLocation} from "react-router-dom";

const CharactersPage = () => {
    const [elements, setElements] = useState([])

    const location = useLocation()

    let title = location.pathname.replace('/', '')
    title = title.at(0).toUpperCase() + title.slice(1)

    return (
        <>
            <FiltersContext.Provider value={{elements, setElements}}>
                <div className={`bg-fixed ${classes.mainBgImage}`}>
                    <div className='container mx-auto pt-56'>
                        <h1 className={`${classes.title} font-bold uppercase`}>{title} List</h1>
                        <div className='flex justify-center'>
                            <ElementFilter/>
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