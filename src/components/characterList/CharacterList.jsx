import {useContext, useEffect, useState} from "react";
import {getAllCharacters} from "../../lib/appwrite.js";
import CharacterListCard from "../characterListCard/CharacterListCard.jsx";
import {useSuspenseQuery} from "@tanstack/react-query";
import FiltersContext from "../../context/FiltersContext.js";

const CharacterList = () => {
    const [characters, setCharacters] = useState([])

    // useEffect(() => {
    //     getAllCharacters()
    //         .then(data => setCharacters(data.documents))
    // }, []);

    const {elements, search, rarityFilter, weaponFilter} = useContext(FiltersContext)

    const {data, error, isFetching} = useSuspenseQuery({
        queryKey: ['characters'],
        queryFn: () => getAllCharacters()
            .then(data => data.documents)
    })

    if (error && !isFetching) {
        throw error
    }

    useEffect(() => {
        setCharacters(filtering)
    }, [elements, search.characters, rarityFilter.characters, weaponFilter.characters]);

    const filtering = () => {
        if (!elements.length && !search.characters && !rarityFilter.characters.length && (weaponFilter.characters === 'All Weapons'))
            return data

        let newData = data

        if (elements.length)
            newData =  newData.filter(({element}) => elements.includes(element.name.toLowerCase()))

        if (rarityFilter.characters.length)
            newData = newData.filter(({rarity}) => rarityFilter.characters.includes(+rarity))

        if (weaponFilter.characters !== 'All Weapons')
            newData = newData.filter(({weaponType}) => weaponFilter.characters.includes(weaponType.name))


        return newData.filter(({name}) => name.toLowerCase().includes(search.characters.toLowerCase()))
    }

    // if (isLoading) return <Loading/>

    // if (isError) {
    //     return <span>Error: {error.message}</span>
    // }

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