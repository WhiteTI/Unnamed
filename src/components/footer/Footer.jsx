import classes from "../../styles/Footer.module.css";
import reactLogo from '../../assets/img/react.png'

const Footer = () => {
    return (
        <footer className={`bg-fixed ${classes.footerBgImage}`}>
            <div className='container mx-auto flex justify-between'>
                <div className='pt-10 text-2xl'>
                    <p> FireFly.Base is a fan-made website for Genshin Impact players </p>
                    <p> Website is not affiliated with miHoYo, all assets files are property of their original
                        owners </p>
                </div>
                <div className='mt-4 w-auto flex items-center gap-x-5'>
                    <div className='w-24'>
                        <a href='https://react.dev/' target='_blank'>
                            <img src={reactLogo} alt="react logo"/>
                        </a>
                    </div>

                    <div className='w-16'>
                        <a href='https://tailwindcss.com/' target='_blank'>
                            <img src='https://cdn.worldvectorlogo.com/logos/tailwindcss.svg' alt="react logo"/>
                        </a>
                    </div>

                    <div className='w-16'>
                        <a href='https://tanstack.com/query/latest' target='_blank'>
                            <img src='https://i2.wp.com/miro.medium.com/1*elhu-42TzQEdsFjKDbQhhA.png' alt="react logo"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;