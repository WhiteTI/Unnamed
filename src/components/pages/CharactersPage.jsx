import {useState} from "react";

import CharacterList from "../characterList/characterList.jsx";
import ElementFilter from "../filters/ElementFilter.jsx";

import FiltersContext from "../../context/FiltersContext.js";

import classes from "../../styles/CharactersPage.module.css";

const CharactersPage = () => {
    const [elements, setElements] = useState([])

    return (
        <>
            <FiltersContext.Provider value={{elements, setElements}}>
                <div className={`${classes.mainBgImage}`}>
                    <div className='container mx-auto pt-56'>
                        <h1 className={`${classes.title} font-bold uppercase`}>Characters List</h1>
                        <div className='flex justify-center'>
                            <ElementFilter/>
                        </div>
                    </div>
                </div>
                <div className={`${classes.mainBgColor} h-screen`}>
                    <div className='container mx-auto pt-8'>
                        <CharacterList/>
                    </div>
                </div>
            </FiltersContext.Provider>
        </>
    );
};

export default CharactersPage;