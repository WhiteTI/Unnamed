import {useOutletContext} from "react-router-dom";

import classes from '../../styles/Constellation.module.css'

const Constellation = () => {
    const [character] = useOutletContext()

    return (
        <div>
            {
                character.constellations.map(obj =>
                    <div key={obj.$id} className='mb-5'>
                        <div className={`flex py-3 px-6 items-center text-2xl font-semibold gap-x-10 mb-1 ${classes.constellationTitle}`}>
                            <img className='w-16' src={obj.ConstellationImage} alt={obj.ConstellationName}/>
                            <span>{obj.ConstellationName}</span>
                        </div>
                        <div className={`py-3 px-6 ${classes.constellationDecs}`}>
                            <span>{obj.ConstellationDescription}</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Constellation;