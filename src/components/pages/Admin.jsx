import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Admin = ({isLogin}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) navigate('/login')
    }, [isLogin]);

    return (
        <div className='container mx-auto'>
            Admin
        </div>
    );
};

export default Admin;