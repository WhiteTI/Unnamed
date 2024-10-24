import {useOutletContext} from "react-router-dom";

import classes from '../../styles/components/Constellation.module.css'
import parse from "html-react-parser";

const Constellation = () => {
    const [character] = useOutletContext()

    return (
        <div>
            {
                character.constellation.map(obj =>
                    <div key={obj.$id} className='mb-5'>
                        <div className={`flex py-3 px-6 items-center text-2xl font-semibold gap-x-10 mb-1 ${classes.constellationTitle}`}>
                            <img className='w-16' src={obj.image} alt={obj.name}/>
                            <span>{obj.name}</span>
                        </div>
                        <div className={`py-3 px-6 ${classes.constellationDecs}`}>
                            <span>{parse(obj.description)}</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Constellation;