import {useOutletContext} from "react-router-dom";
import classes from '../../styles/components/Build.module.css'
import head from '../../assets/img/Icon_Circlet_of_Logos.webp'
import cup from '../../assets/img/Icon_Goblet_of_Eonothem.webp'
import watch from '../../assets/img/Icon_Sands_of_Eon.webp'

const Build = () => {
    const [character] = useOutletContext()

    if (!character.build)
        return <p>Build currently does not exist...</p>

    const {skillPriority, weaponPriority, artifactPriority, statsPriority, substats} = character.build

    return (
        <>
            <div className='mb-3'>
                <h3 className={`font-semibold text-2xl p-4 mb-1 ${classes.title}`}>Skills priority</h3>

                <p className={`text-center p-2 text-lg ${classes.content}`}>{skillPriority}</p>
            </div>

            <div className='mb-3'>
                <h3 className={`font-semibold text-2xl p-4 mb-1 ${classes.title}`}>Weapon</h3>

                <div className={`pt-1 flex gap-1 flex-wrap ${classes.content}`}>

                    {weaponPriority.map(item => (
                        <div key={item.$id} className={`flex items-center gap-x-2 p-2 ${classes.card}`}>
                            <div className={`${classes.imgWrapper}`}
                                 style={{backgroundColor: item.weapon[0].rarity == 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}}>
                                <img src={item.weapon[0].image} alt={item.weapon[0].name}/>
                            </div>

                            <p className='text-lg mt-1  text-center '>{item.weapon[0].name}</p>
                        </div>
                    ))}

                </div>
            </div>

            <div>
                <h3 className={`font-semibold text-2xl p-4 mb-1 ${classes.title}`}>Artifacts</h3>

                <div className={`pt-1 flex gap-1 flex-wrap ${classes.content}`}>

                    {artifactPriority.map(item => (
                        <div key={item.$id} className={`flex items-center gap-x-2 p-2 ${classes.card}`}>
                            <div className={`${classes.imgWrapper}`}
                                 style={{backgroundColor: item.artifact[0].rarity == 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}}>
                                <img src={item.artifact[0].image} alt={item.artifact[0].name}/>
                            </div>

                            <p className='text-lg mt-1  text-center '>{item.artifact[0].name}</p>
                        </div>
                    ))}

                </div>

                <div className='flex justify-between mt-4'>
                    <div  className={`rounded-tl-lg ${classes.mainStatsCard}`}>
                        <img className='w-16' src={head} alt=""/>
                        <p>{statsPriority.head[0]} = {statsPriority.head[1]}</p>
                    </div>
                    <div className={`${classes.mainStatsCard}`}>
                        <img className='w-16' src={cup} alt=""/>
                        <p>{statsPriority.cup[0]}</p>
                    </div>
                    <div className={`rounded-tr-lg ${classes.mainStatsCard}`}>
                        <img className='w-16' src={watch} alt=""/>
                        <p>{statsPriority.watch[0]}, {statsPriority.watch[1]}</p>
                    </div>
                </div>
                <div className='mt-2 text-center p-2' style={{backgroundColor: '#191920'}}>
                    <p>Substats: {substats.join(' > ')}</p>
                </div>
            </div>
        </>
    );
};

export default Build;