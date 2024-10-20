import {useOutletContext} from "react-router-dom";
import classes from '../../styles/Teams.module.css'

const Teams = () => {
    const [character] = useOutletContext()

    if (!character.build || !character.build.recommendedAllies)
        return <p>Build currently does not exist...</p>

    return (
        <div>
            {character.build.recommendedAllies.map((item) => (
                <div key={item.$id} className='mb-5'>
                    <div className={`flex py-3 px-6 items-center text-xl font-semibold gap-x-10 mb-1 ${classes.characterInfo}`}>
                        <img className='w-20' src={item.character[0].image} alt="Character image"/>
                        <div>
                            <span>{item.character[0].name}</span>
                            <div style={{color: item.character[0].rarity == 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}}>{item.character[0].rarity}&#9733;</div>
                        </div>
                    </div>
                    <div className={`py-3 px-6 ${classes.characterNotes}`}>
                        <p>{item.notes}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Teams;