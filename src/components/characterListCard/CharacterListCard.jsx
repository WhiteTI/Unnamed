import {Link} from "react-router-dom";
import classes from '../../styles/CharacterListCard.module.css'

import useElement from "../../hooks/useElement.jsx";

const CharacterListCard = ({name, element, img, weapon, rarity, id}) => {

    const rarityColor = rarity == 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'

    // const {elemImg} = useElement(element)

    return (
        <Link to={`${id}/overview`}>
            <div className={`flex flex-col justify-end px-2.5 py-2 ${classes.card}`} style={{backgroundImage: `url(${img})`, backgroundColor: rarityColor}}>
                <img src={element.image} alt="svg"/>
                <p className='text-xl font-semibold z-10'>{name}</p>
                <u className='text-xl z-10'>{weapon.name}</u>
            </div>
        </Link>
    );
};

export default CharacterListCard;