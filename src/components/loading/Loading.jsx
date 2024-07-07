
const Loading = () => {
    return (
        <div
            style={{backgroundColor: 'var(--primary-bg-color)'}}
            className='absolute w-full h-full inset-0 flex justify-center items-center text-white z-50'>
            <h1 className='font-mono text-6xl font-bold uppercase'>Loading...</h1>
        </div>
    );
};

export default Loading;