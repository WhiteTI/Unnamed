import {useState} from "react";
import {useOutletContext} from "react-router-dom";
import parse from 'html-react-parser';

import classes from '../../styles/components/Overview.module.css'
import star from '../../assets/img/5star.svg'
import baseHP from '../../assets/img/baseHP.svg'
import baseATK from '../../assets/img/atk.svg'
import baseDEF from '../../assets/img/def.svg'

const Overview = () => {
    const [character, color, elemImg] = useOutletContext()

    const [characterLevel, setCharacterLevel] = useState(8)
    const [activeSkill, setActiveSkill] = useState(character.skill[0])

    const stars = []

    const regionColor = getRegionColor(character.region)

    function getRegionColor(region) {
        switch (region) {
            case 'Mondstadt':
                return 'var(--anemo-color)'

            case 'Liyue':
                return 'var(--geo-color)'

            case 'Inazuma':
                return 'var(--electro-color)'

            case 'Sumeru':
                return 'var(--dendro-color)'

            case 'Fontaine':
                return 'var(--hydro-color)'

            case 'Natlan':
                return 'var(--pyro-color)'

            case 'Snezhnaya':
                return 'var(--cryo-color)'
            default:
                return ''
        }
    }

    for (let i = 0; i < +character.rarity; i++) {
        stars.push(<img key={i} src={star} alt="Star"/>)
    }

    const desc = parse(character.description.replace('*', '&#9733;'))

    return (
        <>
            <div className='flex justify-between mb-7'>
                <div className='flex gap-x-7'>
                    <div className={`${classes.imgBackground}`} style={{backgroundColor: character.rarity == 5 ? 'var(--5-star-color)' : 'var(--4-star-color)'}}>
                        <img src={character.image} alt={character.name}/>
                    </div>
                    <div>
                        <p className='text-xl font-semibold mb-3'>{character.title}</p>
                        <div className='flex justify-start'>
                            {stars}
                        </div>
                        <div className={classes.weapon}>
                            <div className={classes.weaponImg}>
                                <img src={character.weaponType.image} alt={character.weaponType.name}/>
                            </div>
                            <div className={classes.weaponText}>
                                {character.weaponType.name}
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex gap-x-12'>
                    <div>
                        <p className={`${classes.elreText}`}>Element</p>
                        <div className={`flex items-center ${classes.elementLogo}`}>
                            <img src={elemImg} alt=""/>
                            <p className='text-xl capitalize' style={{color: `var(${color})`}}>{character.element.name}</p>
                        </div>
                    </div>
                    <div>
                        <p className={`${classes.elreText}`}>Region</p>
                        <p className='text-xl' style={{color: regionColor}}>{character.region}</p>
                    </div>
                </div>
            </div>

            <div className={classes.description} id='description'>
                {desc}
            </div>

            <div className='w-full mt-6'>
                <div className={`flex items-center gap-x-5 p-4 ${classes.levelBackground}`}>
                    <p className='text-xl font-medium'>Level</p>
                    <div className={`w-12 h-12 text-xl font-medium flex justify-center items-center ${classes.level}`}>
                        {character.level[characterLevel - 1].level}
                    </div>

                    <div style={{width: '332px'}} className={`flex items-center justify-center ${classes.inputWrapper}`}>
                        <input style={{width: '312px'}} type="range" min={1} max={8} step={1} value={characterLevel}
                               onChange={(event) => setCharacterLevel(event.target.value)}/>
                    </div>
                </div>
                <div className='flex gap-x-1'>
                    <div className={`py-5 pl-2 flex items-center ${classes.levelStats}`}>
                        <img src={baseHP} alt="HP"/>
                        <p className='text-lg font-light ml-1'>Base HP</p>
                        <span className='font-medium text-xl ml-9'>
                            {character.level[characterLevel - 1].health}
                        </span>
                    </div>
                    <div className={`py-5 pl-2 flex items-center ${classes.levelStats}`}>
                        <img src={baseATK} alt="ATK"/>
                        <p className='text-lg font-light ml-1'>Base ATK</p>
                        <span className='font-medium text-xl ml-9'>
                            {character.level[characterLevel - 1].attack}
                        </span>
                    </div>
                    <div className={`py-5 pl-2 flex items-center ${classes.levelStats}`}>
                        <img src={baseDEF} alt="DEF"/>
                        <p className='text-lg font-light ml-1'>Base DEF</p>
                        <span className='font-medium text-xl ml-9'>
                            {character.level[characterLevel - 1].defense}
                        </span>
                    </div>
                    <div className={`py-5 pl-2 flex items-center ${classes.levelStats}`}>
                        <img src={character.level[characterLevel - 1].additionalStat[0]} alt={character.level[characterLevel - 1].additionalStat[1]}/>
                        <p className='text-lg font-light ml-1'>
                            {character.level[characterLevel - 1].additionalStat[1]}
                        </p>
                        <span className='font-medium text-xl ml-9'>
                            {character.level[characterLevel - 1].additionalStat[2]}
                        </span>
                    </div>
                </div>
            </div>

            <div className={`w-full mt-6 ${classes.talents}`}>
                <h3 className='font-medium text-4xl mb-6'>Talent</h3>
                <div className='flex gap-x-10'>
                    {
                        character.skill.map(skill =>
                            <button key={skill.$id}
                                    onClick={() => setActiveSkill(skill)}
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    style={skill.$id === activeSkill.$id ? {border: `2px solid var(${color})`} : {}}
                                />
                            </button>)
                    }
                </div>
                <hr className='my-6'/>
                {
                    character.skill.map(item => (
                        <div key={item.$id} className='flex gap-x-14' style={{display: activeSkill.$id == item.$id ? 'flex' : 'none', height: '460px'}}>
                            <SkillInfo skill={item}/>
                        </div>
                        )
                    )
                }
            </div>

            <div className='flex gap-x-4 mt-5 content-stretch'>
                {
                    character.passiveSkill.map(skill =>
                        <div key={skill.$id} className='basis-1/3' style={{backgroundColor: '#24242E', borderRadius: '0 0 4px 4px'}}>
                            <div className='flex items-center py-2 px-4 text-lg font-semibold gap-x-5' style={{backgroundColor: '#191920', borderRadius: '4px 4px 0 0'}}>
                                <img src={skill.image} alt={skill.name} className='w-16'/>
                                <span>{skill.name}</span>
                            </div>
                            <hr/>
                            <div className='py-2 px-4 max-h-96 overflow-y-auto'>
                                <p>{parse(skill.description)}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

const SkillInfo = ({skill}) => {
    const [skillLevel, setSkillLevel] = useState(9)

    return (
        <>
            <div className='w-6/12 overflow-auto pr-4'>
                <p>{parse(skill.description)}</p>
            </div>
            <div className='w-6/12 overflow-auto'>
                {skill.skillStats[skillLevel - 1]
                    ? <div className='flex items-center gap-x-5 mb-2'>
                        <p className='text-xl font-medium'>Level</p>
                        <div
                            className={`w-12 h-12 text-xl font-medium flex justify-center items-center ${classes.level}`}>
                            {skillLevel}
                        </div>
                        <div style={{width: '412px'}}
                             className={`flex items-center justify-center ${classes.inputWrapper}`}>
                            <input style={{width: '392px'}} type="range" min={1} max={15} step={1} value={skillLevel}
                                   onChange={(event) => setSkillLevel(event.target.value)}/>
                        </div>
                    </div>
                    : null
                }

                <div>
                    {skill.skillStats[skillLevel - 1]
                        ? skill.skillStats[skillLevel - 1].value.map(stat => (
                            <div className='py-1.5 px-3 mb-0.5'
                                 style={{borderRadius: '4px', backgroundColor: '#191920'}}
                                 key={stat}
                            >
                                {stat.replace(':', ' : ')}
                            </div>
                        ))
                        : skill.skillStats[0].value.map(stat => (
                            <div className='py-1.5 px-3 mb-0.5'
                                 style={{borderRadius: '4px', backgroundColor: '#191920'}}
                                 key={stat}>{stat}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Overview;