import {useState} from "react";
import {useOutletContext} from "react-router-dom";

import classes from '../../styles/Overview.module.css'
import star from '../../assets/img/5star.svg'
import baseHP from '../../assets/img/baseHP.svg'
import baseATK from '../../assets/img/atk.svg'
import baseDEF from '../../assets/img/def.svg'
import ATK from '../../assets/img/ATKp.svg'
import bow from '../../assets/img/Icon_Bow.webp'

const Overview = () => {
    const [character, color, elemImg] = useOutletContext()

    const [characterLevel, setCharacterLevel] = useState(8)
    const [activeSkill, setActiveSkill] = useState(character.skills[0])

    const stars = []

    for (let i = 0; i < character.Rarity; i++) {
        stars.push(<img key={i} src={star} alt="Star"/>)
    }

    const desc = character.Description?.split(' ')

    return (
        <>
            <div className='flex justify-between mb-7'>
                <div className='flex gap-x-7'>
                    <div className={`${classes.imgBackground}`}>
                        <img src={character.Image} alt={character.CharacterName}/>
                    </div>
                    <div>
                        <p className='text-xl font-semibold mb-3'>{character.Title}</p>
                        <div className='flex justify-center'>
                            {stars}
                        </div>
                        <div className={classes.weapon}>
                            <div className={classes.weaponImg}>
                                <img src={bow} alt="bow"/>
                            </div>
                            <div className={classes.weaponText}>
                                {character.WeaponType}
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex gap-x-12'>
                    <div>
                        <p className={`${classes.elreText}`}>Element</p>
                        <div className={`flex items-center ${classes.elementLogo}`}>
                            {elemImg}
                            <p className='text-xl capitalize' style={{color: color}}>{character.Element}</p>
                        </div>
                    </div>
                    <div>
                        <p className={`${classes.elreText}`}>Region</p>
                        <p className='text-xl' style={{color: 'var(--anemo-color)'}}>{character.Region}</p>
                    </div>
                </div>
            </div>

            <p className={classes.description}>
                {desc?.map((text, i) => {
                    if (text === 'Pyro') return <span key={i} style={{color: color, fontWeight: 600}}>{text} </span>
                    if (text.includes('*')) return <span key={i} style={{color: 'var(--4-star-color)'}}>{text.replace('*', '')}&#9733; </span>
                    return <span key={i}>{text} </span>
                })}
            </p>

            <div className='w-full mt-6'>
                <div className={`flex items-center gap-x-5 p-4 ${classes.levelBackground}`}>
                    <p className='text-xl font-medium'>Level</p>
                    <div className={`w-12 h-12 text-xl font-medium flex justify-center items-center ${classes.level}`}>
                        {character.levelsAndStats[characterLevel - 1].Level}
                    </div>

                    <input style={{width: '312px'}} type="range" min={1} max={8} step={1} value={characterLevel} onChange={(event) => setCharacterLevel(event.target.value)}/>
                </div>
                <div className='flex gap-x-1'>
                    <div className={`py-5 pl-2 flex items-center ${classes.levelStats}`}>
                        <img src={baseHP} alt="HP"/>
                        <p className='text-lg font-light ml-1'>Base HP</p>
                        <span className='font-medium text-xl ml-9'>
                            {character.levelsAndStats[characterLevel - 1].Health}
                        </span>
                    </div>
                    <div className={`py-5 pl-2 flex items-center ${classes.levelStats}`}>
                        <img src={baseATK} alt="ATK"/>
                        <p className='text-lg font-light ml-1'>Base ATK</p>
                        <span className='font-medium text-xl ml-9'>
                            {character.levelsAndStats[characterLevel - 1].Attack}
                        </span>
                    </div>
                    <div className={`py-5 pl-2 flex items-center ${classes.levelStats}`}>
                        <img src={baseDEF} alt="DEF"/>
                        <p className='text-lg font-light ml-1'>Base DEF</p>
                        <span className='font-medium text-xl ml-9'>
                            {character.levelsAndStats[characterLevel - 1].Defense}
                        </span>
                    </div>
                    <div className={`py-5 pl-2 flex items-center ${classes.levelStats}`}>
                        <img src={ATK} alt="HP"/>
                        <p className='text-lg font-light ml-1'>
                            {character.levelsAndStats[characterLevel - 1].AdditionalStat.split(':')[0]}
                        </p>
                        <span className='font-medium text-xl ml-9'>
                            {character.levelsAndStats[characterLevel - 1].AdditionalStat.split(':')[1]}
                        </span>
                    </div>
                </div>
            </div>

            <div className={`w-full mt-6 ${classes.talents}`}>
                <h3 className='font-medium text-4xl mb-6'>Talent</h3>
                <div className='flex gap-x-10'>
                    {
                        character.skills.map(skill =>
                            <button key={skill.$id}
                                    onClick={() => setActiveSkill(skill)}><
                                img
                                src={skill.SkillImage}
                                alt={skill.SkillName}
                                style={skill.$id === activeSkill.$id ? {border: `2px solid ${color}`} : {}}/>
                            </button>)
                    }
                </div>
                <hr className='my-6'/>
                <div className='flex gap-x-5'>
                    <SkillInfo activeSkill={activeSkill}/>
                </div>
            </div>

            <div className='flex gap-x-4 mt-5'>
                {
                    character.passiveSkills.map(skill =>
                        <div key={skill.$id} className='basis-1/3'>
                            <div className='flex items-center py-2 px-4 text-lg font-semibold gap-x-5' style={{backgroundColor: '#191920', borderRadius: '4px 4px 0 0'}}>
                                <img src={skill.PassiveSkillImage} alt={skill.PassiveSkillName} className='w-16'/>
                                <span>{skill.PassiveSkillName}</span>
                            </div>
                            <hr/>
                            <div className='py-2 px-4' style={{backgroundColor: '#24242E', borderRadius: '0 0 4px 4px'}}>
                                <p>{skill.PassiveSkillDescription}</p>
                            </div>
                        </div>)
                }
            </div>
        </>
    );
};

const SkillInfo = ({activeSkill}) => {
    const [skillLevel, setSkillLevel] = useState(9)

    return (
        <>
            {activeSkill?.skillStats
                ? <>
                    <div className='w-6/12'>
                        <p>{activeSkill.SkillDescription.split('').map((text, i) => {
                            if (text === '*') return (<br key={i}/>)
                            return <span key={i}>{text}</span>
                        })}</p>
                    </div>
                    <div className='w-6/12'>
                        <div className='flex items-center gap-x-5 mb-2'>
                            <p className='text-xl font-medium'>Level</p>
                            <div className={`w-12 h-12 text-xl font-medium flex justify-center items-center ${classes.level}`}>
                                {skillLevel}
                            </div>
                            <input style={{width: '392px'}} type="range" min={1} max={15} step={1} value={skillLevel} onChange={(event) => setSkillLevel(event.target.value)}/>
                        </div>
                        <div>
                            {activeSkill.skillStats[skillLevel - 1].StatValue.map(stat => (
                                <div className='py-1.5 px-3 mb-0.5' style={{borderRadius: '4px', backgroundColor: '#191920'}} key={stat}>{stat}</div>
                            ))}
                        </div>
                    </div>
                </>
                : <p>{activeSkill.PassiveSkillDescription}</p>
            }
        </>
    )
}

export default Overview;