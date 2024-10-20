import errorImg from "../../assets/img/Icon_Emoji_Paimon's_Paintings_16_Fischl_1.png";

const ErrorElement = ({error, resetErrorBoundary }) => {
    return (
        <div className='w-full h-full flex justify-center items-center' style={{color: 'var(--text-color)'}}>
            <img className='h-72' src={errorImg} alt="Error Img"/>
            <div className='flex flex-col items-center'>
                <p className='text-xl'>
                    <strong>
                        Oh, it looks like an error.
                    </strong>
                </p>
                <button
                    onClick={resetErrorBoundary}
                    className='flex justify-center items-center text-xl w-36 h-12 rounded-lg mt-4'
                    style={{backgroundColor: 'rgba(54, 54, 67, .45)', backdropFilter: 'blur(12px)', boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.15)'}}
                >
                    Try again!
                </button>
            </div>
        </div>
    );
};

export default ErrorElement;