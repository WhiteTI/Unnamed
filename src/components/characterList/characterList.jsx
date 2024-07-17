import {useContext, useEffect, useState} from "react";
import {getAllCharacters} from "../../lib/appwrite.js";
import CharacterListCard from "../characterListCard/CharacterListCard.jsx";
import {useQuery} from "@tanstack/react-query";
import Loading from "../loading/Loading.jsx";
import FiltersContext from "../../context/FiltersContext.js";

const CharacterList = () => {

    // const [characters, setCharacters] = useState([])
    //
    // useEffect(() => {
    //     getAllCharacters()
    //         .then(data => setCharacters(data.documents))
    // }, []);

    const {elements} = useContext(FiltersContext)

    const {isPending, data} = useQuery({
        queryKey: ['characters'],
        queryFn: () => getAllCharacters()
            .then(data => data.documents)
    })

    if (isPending) return <Loading/>

    return (
        <div className='flex flex-wrap gap-x-7 gap-y-3 '>
            {elements.length
                ? data?.filter(({Element}) => elements.includes(Element)).map(char => (
                    <CharacterListCard
                        key={char.$id}
                        id={char.$id}
                        name={char.name}
                        element={char.element}
                        img={char.listImage}
                        rarity={char.rarity}
                        weapon={char.weaponType}
                    />
                ))
                : data?.map(char => (
                    <CharacterListCard
                        key={char.$id}
                        id={char.$id}
                        name={char.name}
                        element={char.element}
                        img={char.listImage}
                        rarity={char.rarity}
                        weapon={char.weaponType}
                    />
                ))
            }
        </div>
    );
};

export default CharacterList;