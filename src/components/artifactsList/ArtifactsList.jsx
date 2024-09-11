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
        <div className='grid xl:grid-cols-4 md:grid-cols-3 auto-rows-auto justify-evenly items-stretch gap-4 '>
            {
                data.map(artifact => (
                    <div key={artifact.$id} className={`rounded-t-lg ${classes.card}`}>

                        <div className={`grid grid-cols-[160px_minmax(0,_1fr)] items-center gap-x-2 rounded-t-lg pr-3 ${classes.cardTitle}`}
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
            {
                data.map(artifact => (
                    <div key={artifact.$id} className={`rounded-t-lg ${classes.card}`}>

                        <div className={`grid grid-cols-2 items-center gap-x-2 rounded-t-lg pr-3 ${classes.cardTitle}`}
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
            {
                data.map(artifact => (
                    <div key={artifact.$id} className={`rounded-t-lg ${classes.card}`}>

                        <div className={`grid grid-cols-2 items-center gap-x-2 rounded-t-lg pr-3 ${classes.cardTitle}`}
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
            {
                data.map(artifact => (
                    <div key={artifact.$id} className={`rounded-t-lg ${classes.card}`}>

                        <div className={`grid grid-cols-2 items-center gap-x-2 rounded-t-lg pr-3 ${classes.cardTitle}`}
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
            {
                data.map(artifact => (
                    <div key={artifact.$id} className={`rounded-t-lg ${classes.card}`}>

                        <div className={`grid grid-cols-2 items-center gap-x-2 rounded-t-lg pr-3 ${classes.cardTitle}`}
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
            {
                data.map(artifact => (
                    <div key={artifact.$id} className={`rounded-t-lg ${classes.card}`}>

                        <div className={`grid grid-cols-2 items-center gap-x-2 rounded-t-lg pr-3 ${classes.cardTitle}`}
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