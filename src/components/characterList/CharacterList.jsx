import {useContext, useEffect, useState} from "react";
import {getAllCharacters} from "../../lib/appwrite.js";
import CharacterListCard from "../characterListCard/CharacterListCard.jsx";
import {useQuery} from "@tanstack/react-query";
import Loading from "../loading/Loading.jsx";
import FiltersContext from "../../context/FiltersContext.js";

const CharacterList = () => {

    const [characters, setCharacters] = useState([])

    // useEffect(() => {
    //     getAllCharacters()
    //         .then(data => setCharacters(data.documents))
    // }, []);

    const {elements, search} = useContext(FiltersContext)

    const {isError, data, isLoading, error} = useQuery({
        queryKey: ['characters'],
        queryFn: () => getAllCharacters()
            .then(data => data.documents)
    })

    useEffect(() => {
        setCharacters(filtering)
    }, [isLoading, elements, search]);

    const filtering = () => {
        if (!elements.length && !search)
            return data

        if (elements.length ) {
            return data?.filter(({element}) => elements.includes(element.name.toLowerCase()))
                .filter(({name}) => name.toLowerCase().includes(search.toLowerCase()))
        } else {
            return data?.filter(({name}) => name.toLowerCase().includes(search.toLowerCase()))
        }
    }

    if (isLoading) return <Loading/>

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div className='flex flex-wrap gap-5 '>
            {characters?.map(char => (
                    <CharacterListCard
                        key={char.$id}
                        id={char.$id}
                        name={char.name}
                        element={char.element}
                        img={char.listImage}
                        rarity={char.rarity}
                        weapon={char.weaponType}
                    />
            ))}
        </div>
    )
};

export default CharacterList;