import {useQuery} from "@tanstack/react-query";
import {getAllWeapons} from "../../lib/appwrite.js";
import Loading from "../loading/Loading.jsx";
import classes from "../../styles/WeaponsList.module.css";

const WeaponsList = () => {
    const {isPending, data} = useQuery({
        queryKey: ['weapons'],
        queryFn: () => getAllWeapons()
            .then(response => response.documents)
    })

    if (isPending) return <Loading/>

    return (
        <div className='flex flex-wrap gap-x-7 gap-y-3'>
            {
                data.map(weapon => (
                    <div className={`rounded-t-lg ${classes.card}`}>

                        <div className={`flex justify-between items-center rounded-t-lg pr-3 ${classes.cardTitle}`}
                             style={{backgroundColor: weapon.rarity == 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}}
                        >
                            <img src={weapon.image} alt=""/>

                            <div className='text-lg font-medium'>
                                <p className='text-xl'>{weapon.name}</p>
                                <p className='font-semibold text-xl'>{weapon.rarity}&#9733;</p>
                                <p>ATK <p className='text-2xl font-semibold inline'> {weapon.atk}</p></p>
                                <p>{weapon.mainStat[0]}</p>
                                <p className='text-2xl font-semibold'>{weapon.mainStat[1]}</p>
                            </div>
                        </div>

                        <div className={`overflow-auto p-3 ${classes.cardDesc}`}>
                            <p>{weapon.description}</p>
                        </div>
                    </div>
                ))
            }
            {
                data.map(weapon => (
                    <div className={`rounded-t-lg ${classes.card}`}>

                        <div className={`flex justify-between items-center rounded-t-lg pr-3 ${classes.cardTitle}`}
                             style={{backgroundColor: weapon.rarity == 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}}
                        >
                            <img src={weapon.image} alt=""/>

                            <div className='text-lg font-medium'>
                                <p className='text-xl'>{weapon.name}</p>
                                <p className='font-semibold text-xl'>{weapon.rarity}&#9733;</p>
                                <p>ATK <p className='text-2xl font-semibold inline'> {weapon.atk}</p></p>
                                <p>{weapon.mainStat[0]}</p>
                                <p className='text-2xl font-semibold'>{weapon.mainStat[1]}</p>
                            </div>
                        </div>

                        <div className={`overflow-auto p-3 ${classes.cardDesc}`}>
                            <p>{weapon.description}</p>
                        </div>
                    </div>
                ))
            }
            {
                data.map(weapon => (
                    <div className={`rounded-t-lg ${classes.card}`}>

                        <div className={`flex justify-between items-center rounded-t-lg pr-3 ${classes.cardTitle}`}
                             style={{backgroundColor: weapon.rarity == 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}}
                        >
                            <img src={weapon.image} alt=""/>

                            <div className='text-lg font-medium'>
                                <p className='text-xl'>{weapon.name}</p>
                                <p className='font-semibold text-xl'>{weapon.rarity}&#9733;</p>
                                <p>ATK <p className='text-2xl font-semibold inline'> {weapon.atk}</p></p>
                                <p>{weapon.mainStat[0]}</p>
                                <p className='text-2xl font-semibold'>{weapon.mainStat[1]}</p>
                            </div>
                        </div>

                        <div className={`overflow-auto p-3 ${classes.cardDesc}`}>
                            <p>{weapon.description}</p>
                        </div>
                    </div>
                ))
            }
            {
                data.map(weapon => (
                    <div className={`rounded-t-lg ${classes.card}`}>

                        <div className={`flex justify-between items-center rounded-t-lg pr-3 ${classes.cardTitle}`}
                             style={{backgroundColor: weapon.rarity == 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}}
                        >
                            <img src={weapon.image} alt=""/>

                            <div className='text-lg font-medium'>
                                <p className='text-xl'>{weapon.name}</p>
                                <p className='font-semibold text-xl'>{weapon.rarity}&#9733;</p>
                                <p>ATK <p className='text-2xl font-semibold inline'> {weapon.atk}</p></p>
                                <p>{weapon.mainStat[0]}</p>
                                <p className='text-2xl font-semibold'>{weapon.mainStat[1]}</p>
                            </div>
                        </div>

                        <div className={`overflow-auto p-3 ${classes.cardDesc}`}>
                            <p>{weapon.description}</p>
                        </div>
                    </div>
                ))
            }
            {
                data.map(weapon => (
                    <div className={`rounded-t-lg ${classes.card}`}>

                        <div className={`flex justify-between items-center rounded-t-lg pr-3 ${classes.cardTitle}`}
                             style={{backgroundColor: weapon.rarity == 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}}
                        >
                            <img src={weapon.image} alt=""/>

                            <div className='text-lg font-medium'>
                                <p className='text-xl'>{weapon.name}</p>
                                <p className='font-semibold text-xl'>{weapon.rarity}&#9733;</p>
                                <p>ATK <p className='text-2xl font-semibold inline'> {weapon.atk}</p></p>
                                <p>{weapon.mainStat[0]}</p>
                                <p className='text-2xl font-semibold'>{weapon.mainStat[1]}</p>
                            </div>
                        </div>

                        <div className={`overflow-auto p-3 ${classes.cardDesc}`}>
                            <p>{weapon.description}</p>
                        </div>
                    </div>
                ))
            }
            {
                data.map(weapon => (
                    <div className={`rounded-t-lg ${classes.card}`}>

                        <div className={`flex justify-between items-center rounded-t-lg pr-3 ${classes.cardTitle}`}
                             style={{backgroundColor: weapon.rarity == 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}}
                        >
                            <img src={weapon.image} alt=""/>

                            <div className='text-lg font-medium'>
                                <p className='text-xl'>{weapon.name}</p>
                                <p className='font-semibold text-xl'>{weapon.rarity}&#9733;</p>
                                <p>ATK <p className='text-2xl font-semibold inline'> {weapon.atk}</p></p>
                                <p>{weapon.mainStat[0]}</p>
                                <p className='text-2xl font-semibold'>{weapon.mainStat[1]}</p>
                            </div>
                        </div>

                        <div className={`overflow-auto p-3 ${classes.cardDesc}`}>
                            <p>{weapon.description}</p>
                        </div>
                    </div>
                ))
            }
            {
                data.map(weapon => (
                    <div className={`rounded-t-lg ${classes.card}`}>

                        <div className={`flex justify-between items-center rounded-t-lg pr-3 ${classes.cardTitle}`}
                             style={{backgroundColor: weapon.rarity == 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}}
                        >
                            <img src={weapon.image} alt=""/>

                            <div className='text-lg font-medium'>
                                <p className='text-xl'>{weapon.name}</p>
                                <p className='font-semibold text-xl'>{weapon.rarity}&#9733;</p>
                                <p>ATK <p className='text-2xl font-semibold inline'> {weapon.atk}</p></p>
                                <p>{weapon.mainStat[0]}</p>
                                <p className='text-2xl font-semibold'>{weapon.mainStat[1]}</p>
                            </div>
                        </div>

                        <div className={`overflow-auto p-3 ${classes.cardDesc}`}>
                            <p>{weapon.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default WeaponsList;