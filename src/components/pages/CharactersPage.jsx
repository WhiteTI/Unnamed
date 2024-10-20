import {Suspense, useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import {ErrorBoundary} from "react-error-boundary";

import ElementFilter from "../filters/ElementFilter.jsx";
import Search from "../filters/Search.jsx";
import RarityFilter from "../filters/RarityFilter.jsx";
import WeaponFilter from "../filters/WeaponFilter.jsx";
import Loading from "../loading/Loading.jsx";
import ErrorElement from "../error/ErrorElement.jsx";

import FiltersContext from "../../context/FiltersContext.js";

import classes from "../../styles/CharactersPage.module.css";

import arrow from '../../assets/img/arrow_upward_48dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg'
import {QueryErrorResetBoundary} from "@tanstack/react-query";
import {Helmet} from "react-helmet";

const CharactersPage = () => {
    const [elements, setElements] = useState([])
    const [search, setSearch] = useState({characters: '', weapons: '', artifacts: ''})
    const [rarityFilter, setRarityFilter] = useState({characters: [], weapons: [], artifacts: []})
    const [weaponFilter, setWeaponFilter] = useState({characters: 'All Weapons', weapons: 'All Weapons'})

    const [visible, setVisible] = useState('invisible')

    function checkToVisible() {
        if (window.pageYOffset > 400)
            setVisible('visible')
        else setVisible('invisible')
    }

    useEffect(() => {
        window.addEventListener('scroll', checkToVisible)

        return () => window.removeEventListener('scroll', checkToVisible)
    }, []);

    const location = useLocation()

    let title = location.pathname.replace('/', '')

    return (
        <>
            <Helmet>
                <title>{`${location.pathname.slice(1)} list`}</title>
            </Helmet>
            <FiltersContext.Provider value={{elements, setElements, search, setSearch, rarityFilter, setRarityFilter, weaponFilter, setWeaponFilter}}>
                <div className={`bg-fixed ${classes.mainBgImage}`}>
                    <div className='container mx-auto pt-56'>
                        <h1 className={`${classes.title} font-bold uppercase`}>{title} List</h1>
                        <div className='grid grid-cols-[160px_180px_470px_360px] justify-between'>
                            <WeaponFilter grid={'col-start-1 col-end-2'}/>
                            <RarityFilter grid={'col-start-2 col-end-3'}/>
                            <ElementFilter grid={'col-start-3 col-end-4'}/>
                            <Search grid={'col-start-4'}/>
                        </div>
                    </div>
                </div>

                <div className={`${classes.mainBgColor}`}>
                    <div className='container mx-auto py-8 min-h-screen'>
                        <QueryErrorResetBoundary>
                            {({reset}) => (
                                <ErrorBoundary onReset={reset} FallbackComponent={ErrorElement}>
                                    <Suspense fallback={<Loading/>}>
                                        <Outlet/>
                                    </Suspense>
                                </ErrorBoundary>
                            )}
                        </QueryErrorResetBoundary>
                    </div>
                    <div
                        style={{transition: 'ease-in .2s'}}
                        className={`fixed right-10 bottom-10 w-fit h-fit ${visible}`}
                    >
                        <button
                            style={{backgroundColor: '#363643', width: '64px', height: '64px'}}
                            className='rounded-full flex justify-center items-center hover:scale-110 active:opacity-50'
                            onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
                        >
                            <img src={arrow} alt="To Top"/>
                        </button>
                    </div>
                </div>
            </FiltersContext.Provider>
        </>
    );
};

export default CharactersPage;