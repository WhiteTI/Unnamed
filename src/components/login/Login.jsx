import {account} from "../../lib/appwrite.js";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Login = ({isLogin, setIsLogin}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) navigate('/admin')
    }, [isLogin]);

    async function login() {
        try {
            const result = await account.createEmailPasswordSession(
                'email@example.com', // email
                'test1234' // password
            );

            console.log(result);

            setIsLogin(true)
        } catch (e) {

        }
    }

    const checkUser = async () => {
        try {
            const user = await account.get()
            console.log(user);
        } catch (e) {
            console.log(e);
            setIsLogin(false)
        }
    }

    return (
        <div className='h-screen container mx-auto'>
            <button onClick={() => login()}>Login</button>
        </div>
    );
};

export default Login;