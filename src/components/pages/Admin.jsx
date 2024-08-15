import {Link, Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

import classes from '../../styles/Admin.module.css'

const Admin = ({isLogin}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) navigate('/login')
    }, [isLogin]);

    return (
        <div className={`${classes.admin}`}>
            <div className='container mx-auto min-h-screen' >
                <Outlet/>
            </div>
        </div>
    );
};

export default Admin;