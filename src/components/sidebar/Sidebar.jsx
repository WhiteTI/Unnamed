import {Link} from "react-router-dom";

import genshinIcon from '../../assets/img/genshin.png'
import hsrIcon from '../../assets/img/hsr.png'
import zzzIcon from '../../assets/img/zzz.png'
import characters from '../../assets/img/characters.svg'
import weapon from '../../assets/img/weapon.svg'
import artifacts from '../../assets/img/art.svg'

import classes from "../../styles/components/Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={`z-50 w-16 fixed h-screen py-3 ${classes.sidebarBg}`}>
            <div className='flex flex-col items-center'>
                <div className='mb-7'>
                    <p className='text-4xl'>F</p>
                </div>

                <div className='h-56'>
                    <div className={`${classes.gameSwitcher} px-1 py-2 flex flex-col gap-y-2`}>
                        <a href='#'>
                            <img src={genshinIcon} alt="geshin" className={classes.active}/>
                        </a>
                        <a>
                            <img src={hsrIcon} alt="honkai star rail"/>
                        </a>
                        <a>
                            <img src={zzzIcon} alt="zzz"/>
                        </a>
                    </div>
                </div>

                <nav className='flex flex-col gap-y-7'>
                    <Link to='/characters'>
                        <img src={characters} alt="characters"/>
                    </Link>
                    <Link to='/weapons'>
                        <img src={weapon} alt="weapon"/>
                    </Link>
                    <Link to='/artifacts'>
                        <img src={artifacts} alt="artifacts"/>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;