import {useSuspenseQuery} from "@tanstack/react-query";
import {getAllArtifacts} from "../../lib/appwrite.js";
import parse from "html-react-parser";
import {useContext, useEffect, useState} from "react";

import Loading from "../loading/Loading.jsx";
import FiltersContext from "../../context/FiltersContext.js";
import classes from "../../styles/ArtifactsList.module.css";

const ArtifactsList = () => {
    const [artifacts, setArtifacts] = useState([])

    const {search, rarityFilter} = useContext(FiltersContext)

    const {data, error, isFetching} = useSuspenseQuery({
        queryKey: ['artifacts'],
        queryFn: () => getAllArtifacts()
            .then(response => response.documents)
    })

    if (error && !isFetching) {
        throw error
    }

    useEffect(() => {
        setArtifacts(filtering)
    }, [search.artifacts, rarityFilter.artifacts]);

    function filtering() {
        if (!search.artifacts && !rarityFilter.artifacts.length)
            return data

        let newData = data

        if (rarityFilter.artifacts.length)
            newData = newData.filter(({rarity}) => rarityFilter.artifacts.includes(+rarity))

        return newData.filter(({name}) => name.toLowerCase().includes(search.artifacts.toLowerCase()))
    }

    return (
        <div className='grid xl:grid-cols-4 md:grid-cols-3 auto-rows-auto justify-evenly items-stretch gap-4 '>
            {
                artifacts.map(artifact => (
                    <div key={artifact.$id} className={`rounded-t-lg ${classes.card}`}>

                        <div className={`grid grid-cols-[160px_minmax(0,_1fr)] items-center gap-x-2 rounded-t-lg pr-3 ${classes.cardTitle}`}
                             style={{
                                 backgroundColor: artifact.rarity == 5
                                     ? 'var(--5-star-color)'
                                     : artifact.rarity == 4
                                     ? 'var(--4-star-color)'
                                         : 'var(--3-star-color)'
                            }}
                        >
                            <img src={artifact.image} alt=""/>

                            <div className='text-lg font-medium'>
                                <p className='text-xl'>{artifact.name}</p>
                                <p className='font-semibold text-xl'>{artifact.rarity}&#9733;</p>
                            </div>
                        </div>

                        <div className={`overflow-auto p-3 ${classes.cardDesc}`}>
                            <p>{parse(artifact.effect.replace('\n', '<br/>'))}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ArtifactsList;