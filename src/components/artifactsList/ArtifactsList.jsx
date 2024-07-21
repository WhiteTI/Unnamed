import {useQuery} from "@tanstack/react-query";
import {getAllArtifacts} from "../../lib/appwrite.js";
import Loading from "../loading/Loading.jsx";
import classes from "../../styles/ArtifactsList.module.css";


const ArtifactsList = () => {
    const {isPending, data} = useQuery({
        queryKey: ['artifacts'],
        queryFn: () => getAllArtifacts()
            .then(response => response.documents)
    })

    if (isPending) return <Loading/>

    return (
        <div>
            {
                data.map(artifact => (
                    <div className={`rounded-t-lg ${classes.card}`}>

                        <div className={`flex justify-between items-center rounded-t-lg pr-3 ${classes.cardTitle}`}
                             style={{backgroundColor: artifact.rarity == 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}}
                        >
                            <img src={artifact.image} alt=""/>

                            <div className='text-lg font-medium'>
                                <p className='text-xl'>{artifact.name}</p>
                                <p className='font-semibold text-xl'>{artifact.rarity}&#9733;</p>
                            </div>
                        </div>

                        <div className={`overflow-auto p-3 ${classes.cardDesc}`}>
                            <p>{artifact.effect}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ArtifactsList;