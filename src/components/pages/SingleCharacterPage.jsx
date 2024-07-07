import classes from "../../styles/SingleCharacterPage.module.css";
// import {useEffect, useState} from "react";
import {getCharacter} from "../../lib/appwrite.js";
import {NavLink, Outlet, useLocation, useParams} from "react-router-dom";
import useElement from "../../hooks/useElement.jsx";
import {useQuery} from "@tanstack/react-query";
import Loading from "../loading/Loading.jsx";
import {Helmet} from "react-helmet";

const SingleCharacterPage = () => {
    // const [character, setCharacter] = useState({})

    const {id} = useParams()

    const links = [
        {path: 'overview', text: 'Overview'},
        {path: 'builds', text: 'Builds'},
        {path: 'constellation', text: 'Constellation'},
        {path: 'teams', text: 'Teams'},
        {path: 'gallery', text: 'Gallery'},
    ]

    // useEffect(() => {
    //     getCharacter(id)
    //         .then(data => setCharacter(data))
    // }, []);

    const {isPending, data} = useQuery({
        queryKey: ['character', id],
        queryFn: () => getCharacter(id)
            .then(data => data),
        enabled: !!id
    })

    let location = useLocation()
    location = location.pathname.split('/').at(-1)

    if (isPending) return <Loading/>

    const {color, elemImg} = useElement(data.Element);

    return (
        <div className={`${classes.mainBgColor} relative`}>
            <Helmet>
                <title>{data.CharacterName}/{location}</title>
            </Helmet>

            <img className={`${classes.fullWish} absolute z-0`} src={data.FullWish} alt=""/>
            <div className={`${classes.imageShadow} absolute z-0`}></div>

            <div className='container mx-auto pt-64'>
                <h1 className={`${classes.name} font-bold uppercase z-10 relative mb-6`}>{data.CharacterName}</h1>
                <div className='flex'>
                    <nav className={`z-10 flex flex-col ${classes.menu}`}>
                        {
                            links.map(link => (
                                <NavLink key={link.path} style={({isActive}) => {
                                    return {
                                        fontWeight: isActive ? 600 : '',
                                        borderRight: isActive ? `4px solid ${color}` : '',
                                        borderRadius: isActive ? '4px 0px 0px 4px' : '',
                                        background: isActive ? 'rgba(61, 24, 24, 0.58)' : ''
                                    }
                                }} to={link.path}>{link.text}</NavLink>
                            ))
                        }
                    </nav>
                    <div className='z-10 w-full'>
                        <h2 style={{color: color, borderBottom: `1px solid ${color}`}} className={`${classes.titleBlock}`}>{location.toUpperCase()}</h2>

                        <div className={`${classes.wrapper} p-8`}>
                            <Outlet context={[data, color, elemImg]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCharacterPage;