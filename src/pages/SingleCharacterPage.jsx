import classes from "../styles/pages/SingleCharacterPage.module.css";
import {getCharacter} from "../lib/appwrite.js";
import {NavLink, Outlet, useLocation, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import Loading from "../components/loading/Loading.jsx";
import {Helmet} from "react-helmet";

const SingleCharacterPage = () => {
    const {id} = useParams()

    const links = [
        {path: 'overview', text: 'Overview'},
        {path: 'builds', text: 'Builds'},
        {path: 'constellation', text: 'Constellation'},
        {path: 'teams', text: 'Teams'},
        {path: 'gallery', text: 'Gallery'},
    ]

    const {isPending, data} = useQuery({
        queryKey: ['character', id],
        queryFn: () => getCharacter(id)
            .then(data => data),
        enabled: !!id
    })

    let location = useLocation()
    location = location.pathname.split('/').at(-1)

    if (isPending) return <Loading/>

    return (
        <div className={`${classes.mainBgColor} relative`}>
            <Helmet>
                <title>{data.name}/{location}</title>
            </Helmet>

            <div className={`absolute z-0 w-full overflow-hidden ${classes.fullWish}`} style={{height: '800px', backgroundImage: `url(${data.bgImage})`}}></div>
            <div className={`${classes.imageShadow} absolute z-0`}></div>

            <div className='container mx-auto pt-64 relative z-10'>
                <h1 className={`${classes.name} font-bold uppercase mb-6`}>{data.name}</h1>
                <div className='flex'>
                    <nav className={`z-10 flex flex-col ${classes.menu}`}>
                        {
                            links.map(link => (
                                <NavLink key={link.path} style={({isActive}) => {
                                    return {
                                        fontWeight: isActive ? 600 : '',
                                        borderRight: isActive ? `4px solid var(${data.element.color})` : '',
                                        background: isActive ? `color(from var(${data.element.secondColor}) srgb r g b / 0.58)` : ''
                                    }
                                }} to={link.path}>{link.text}</NavLink>
                            ))
                        }
                    </nav>
                    <div className='w-full'>
                        <h2
                            style={{
                                color: `var(${data.element.color})`,
                                borderBottom: `1px solid var(${data.element.color})`,
                                background: `linear-gradient(90.00deg, color(from var(${data.element.secondColor}) srgb r g b / 0.78) 0%,rgba(0, 0, 0, 0) 50.929%),linear-gradient(270.00deg, rgb(31, 31, 39) 4.079%,rgba(31, 31, 39, 0.32) 74.152%)`
                            }}
                            className={`${classes.titleBlock}`}
                        >
                            {location.toUpperCase()}
                        </h2>

                        <main className={`${classes.wrapper} p-8 min-h-96`}>
                            <Outlet context={[data, data.element.color, data.element.image]}/>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCharacterPage;