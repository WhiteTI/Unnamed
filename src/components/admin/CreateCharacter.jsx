import {Controller, useFieldArray, useForm} from "react-hook-form"
import {createCharacter, createFile} from "../../lib/appwrite.js";
import {useRef, useState} from "react";

const CreateCharacter = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [bgImagePreview, setBgImagePreview] = useState(null);
    const [listImagePreview, setListImagePreview] = useState(null);

    const handleImageChange = (event, setState) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setState(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setState(null);
        }
    };

    const {register, handleSubmit, control, setValue} = useForm({
        defaultValues: {
            level: Array(8).fill({level: 0, health: 0, attack: 0, defence: 0, additionalStat: ''}),
            skill: Array(3).fill({category: '', name: '', description: '', image: null, skillStats: Array(15).fill({level: 0, value: ''})}),
            passiveSkill: Array(3).fill({name: '', description: '', image: null}),
            constellation: Array(6).fill({name: '', description: '', image: null})
        }
    })

    const { fields} = useFieldArray({
        control,
        name: 'level'
    })
    const {fields: skillFields} = useFieldArray({
        control,
        name: 'skill'
    })
    const {fields: passiveSkillFields} = useFieldArray({
        control,
        name: 'passiveSkill'
    })
    const {fields: constellationFields} = useFieldArray({
        control,
        name: 'constellation'
    })

    const onSubmit = async (data) => {

        data.level = data.level.map(item => ({level: +item.level, health: +item.health, attack: +item.attack, defense: +item.defense, additionalStat: item.additionalStat.split(',')}))

        const files = [
            data.image[0],
            data.bgImage[0],
            data.listImage[0],
            data.skill[0].image[0],
            data.skill[1].image[0],
            data.skill[2].image[0],
            data.passiveSkill[0].image[0],
            data.passiveSkill[1].image[0],
            data.passiveSkill[2].image[0],
            data.constellation[0].image[0],
            data.constellation[1].image[0],
            data.constellation[2].image[0],
            data.constellation[3].image[0],
            data.constellation[4].image[0],
            data.constellation[5].image[0]
        ]
        let requests = files.map(file => createFile(file))

        Promise.all(requests).then(res => {
            data.image = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[0].$id}/view?project=663558730009dd7e2d34`
            data.bgImage = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[1].$id}/view?project=663558730009dd7e2d34`
            data.listImage = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[2].$id}/view?project=663558730009dd7e2d34`
            data.skill[0].image = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[3].$id}/view?project=663558730009dd7e2d34`
            data.skill[1].image = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[4].$id}/view?project=663558730009dd7e2d34`
            data.skill[2].image = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[5].$id}/view?project=663558730009dd7e2d34`
            data.passiveSkill[0].image = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[6].$id}/view?project=663558730009dd7e2d34`
            data.passiveSkill[1].image = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[7].$id}/view?project=663558730009dd7e2d34`
            data.passiveSkill[2].image = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[8].$id}/view?project=663558730009dd7e2d34`
            data.constellation[0].image = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[9].$id}/view?project=663558730009dd7e2d34`
            data.constellation[1].image = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[10].$id}/view?project=663558730009dd7e2d34`
            data.constellation[2].image = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[11].$id}/view?project=663558730009dd7e2d34`
            data.constellation[3].image = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[12].$id}/view?project=663558730009dd7e2d34`
            data.constellation[4].image = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[13].$id}/view?project=663558730009dd7e2d34`
            data.constellation[5].image = `https://cloud.appwrite.io/v1/storage/buckets/663696fa001bf13e70f0/files/${res[14].$id}/view?project=663558730009dd7e2d34`
            console.log(data)
        })
        // createCharacter(data)
    }

    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-5'>
                <h3>Базовая информация</h3>
                <div className='flex gap-x-3'>
                    <div className='h-56 mb-4'>
                        <p className='block'>Изображение профиля</p>
                        <input type="file" accept='image/*'
                               {...register('image')}
                               onChange={(event) => handleImageChange(event, setImagePreview)}
                        />

                        {imagePreview &&
                            <img src={imagePreview} alt="Preview"
                                 style={{maxWidth: '300px', maxHeight: '180px', marginTop: '10px'}}/>}
                    </div>
                    <div className='grow'>
                    <input className='block w-full mb-3' type="text" {...register('name', {required: true})}
                               placeholder='Character name'/>
                        <input className='block w-full' type="text" {...register('title', {required: true})}
                               placeholder='Character title'/>

                        <div className='mt-3 flex gap-x-3'>
                            <select {...register('rarity', {required: true})}>
                                <option value=''>Rarity</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <select {...register('region', {required: true})}>
                                <option value=''>Region</option>
                                <option value="Mondstadt">Mondstadt</option>
                                <option value="Liyue">Liyue</option>
                                <option value="Inazuma">Inazuma</option>
                                <option value="Sumeru">Sumeru</option>
                                <option value="Fontaine">Fontaine</option>
                                <option value="Natlan">Natlan</option>
                                <option value="Snezhnaya">Snezhnaya</option>
                            </select>
                        </div>
                    </div>
                </div>

                <textarea {...register('description', {required: true})} placeholder='Character description'/>

                <h2>Загрузка изображений</h2>
                <div className='flex gap-3 mb-8'>
                    <div>
                        <div className='h-56 mb-4'>
                            <p className='block'>Сплэш арт</p>
                            <input type="file" accept='image/*'
                                   {...register('bgImage')}
                                   onChange={(event) => handleImageChange(event, setBgImagePreview)}
                            />
                            {bgImagePreview &&
                                <img src={bgImagePreview} alt="Preview"
                                     style={{maxWidth: '300px', maxHeight: '200px', marginTop: '10px'}}/>}
                        </div>
                    </div>

                    <div>
                        <div className='h-56 mb-4'>
                            <p className='block'>Изображение для списка персонажей</p>
                            <input type="file" accept='image/*'
                                   {...register('listImage')}
                                   onChange={(event) => handleImageChange(event, setListImagePreview)}
                            />
                            {listImagePreview &&
                                <img src={listImagePreview} alt="Preview"
                                     style={{maxWidth: '300px', maxHeight: '200px', marginTop: '10px'}}/>}
                        </div>
                    </div>
                </div>

                <h3>Выбор элемента и типа оружия</h3>
                <div className='flex gap-x-3 items-center'>
                    <label htmlFor="element">Select Element</label>
                    <select className='w-44' id='element'  {...register('element', {required: true})}>
                        <option value=''>Element</option>
                        <option value='669403c40037da99aa3b'>Pyro</option>
                        <option value='66940412001eee5d1d12'>Hydro</option>
                        <option value='669404380004a02e80dc'>Dendro</option>
                        <option value='6694045e002d73b11a93'>Electro</option>
                        <option value='6694048400288ee7dceb'>Anemo</option>
                        <option value='669404a700011cff56b1'>Cryo</option>
                        <option value='669404c000009ede0dca'>Geo</option>
                    </select>

                    <label htmlFor="weapon type">Select Weapon type</label>
                    <select className='w-44' id='weapon type'  {...register('weaponType', {required: true})}>
                        <option value=''>Weapon Type</option>
                        <option value='669404e9001c19e3c835'>Sword</option>
                        <option value='6694050a00247de40a8a'>Polearm</option>
                        <option value='6694051b0037a5fe6b12'>Claymore</option>
                        <option value='6694052d003df8831111'>Catalyst</option>
                        <option value='669405400023de1266aa'>Bow</option>
                    </select>
                </div>

                <h3>Характеристики</h3>
                {fields.map((item, i) => (
                    <div key={item.id} className='flex gap-x-5'>
                        <label>
                            Level:
                            <input
                                className='w-24'
                                type="text"
                                {...register(`level.${i}.level`)}
                            />
                        </label>
                        <label>
                            Health:
                            <input
                                className='w-32'
                                type="text"
                                {...register(`level.${i}.health`)}
                            />
                        </label>
                        <label>
                            Attack:
                            <input
                                className='w-32'
                                type="text"
                                {...register(`level.${i}.attack`)}
                            />
                        </label>
                        <label>
                            Defence:
                            <input
                                className='w-32'
                                type="text"
                                {...register(`level.${i}.defense`)}
                            />
                        </label>
                        <label>
                            Additional Stat:
                            <input
                                className='w-96'
                                type="text"
                                {...register(`level.${i}.additionalStat`)}
                            />
                        </label>
                    </div>
                ))}

                <h3>Скилы</h3>
                {skillFields.map((item, i) => (
                    <div key={i}>
                        <h3>Skill: {i + 1}</h3>
                        <div className='flex flex-col gap-y-3'>
                            <label>
                                Category:
                                <select {...register(`skill.${i}.category`)}>
                                    <option value='Normal Attack'>Normal attack</option>
                                    <option value='Elemental skill'>Elemental skill</option>
                                    <option value='Ultimate'>Ultimate</option>
                                </select>
                            </label>
                            <label>
                                Name:
                                <input
                                    className='block w-full'
                                    type="text"
                                    {...register(`skill.${i}.name`)}
                                />
                            </label>
                            <label>
                                Description:
                                <textarea
                                    className='block w-full'
                                    {...register(`skill.${i}.description`)}
                                />
                            </label>
                            <label>
                                Image:
                                <input
                                    type="file" accept='image/*'
                                    {...register(`skill.${i}.image`)}
                                />
                            </label>
                        </div>
                        <div>
                            Skill Stats:
                            {item.skillStats.map((stat, k) => (
                                <div key={k}>
                                    <label>
                                        Level:
                                        <input
                                            className='w-32 mr-4'
                                            type="text"
                                            {...register(`skill.${i}.skillStats.${k}.level`)}
                                        />
                                    </label>
                                    <label>
                                        Value:
                                        <input
                                            type="text"
                                            {...register(`skill.${i}.skillStats.${k}.value`)}
                                        />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <h3>Пассивные скилы</h3>
                {passiveSkillFields.map((item, i) => (
                    <div key={item.id}>
                        <label>
                            Name:
                            <input
                                className='block w-full'
                                type="text"
                                {...register(`passiveSkill.${i}.name`)}
                            />
                        </label>
                        <label>
                            Description:
                            <textarea
                                className='block w-full'
                                {...register(`passiveSkill.${i}.description`)}
                            />
                        </label>
                        <label>
                            Image:
                            <input
                                type="file" accept='image/*'
                                {...register(`passiveSkill.${i}.image`)}
                            />
                        </label>
                    </div>
                ))}

                <h3>Созвездия</h3>
                {constellationFields.map((item, i) => (
                    <div key={item.id}>
                        <label>
                            Name:
                            <input
                                className='block w-full'
                                type="text"
                                {...register(`constellation.${i}.name`)}
                            />
                        </label>
                        <label>
                            Description:
                            <textarea
                                className='block w-full'
                                {...register(`constellation.${i}.description`)}
                            />
                        </label>
                        <label>
                            Image:
                            <input
                                type="file" accept='image/*'
                                {...register(`constellation.${i}.image`)}
                            />
                        </label>
                    </div>
                ))}


                <button>Submit</button>
            </form>
        </div>
    );
};

export default CreateCharacter;