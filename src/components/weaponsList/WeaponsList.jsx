import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {getAllWeapons} from "../../lib/appwrite.js";
import Loading from "../loading/Loading.jsx";
import classes from "../../styles/WeaponsList.module.css";
import parse from "html-react-parser";
import {Fragment, useEffect, useRef} from "react";

const WeaponsList = () => {
    const PAGE_SIZE = 25

    const loadMoreDiv = useRef(null);

    const getWeapons = async ({pageParam}) => {
        const offset = pageParam * PAGE_SIZE
        const response = await getAllWeapons(offset)
        return response.documents
    }

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status
    } = useInfiniteQuery({
        queryKey: ['weapons'],
        queryFn: getWeapons,
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPage.length < PAGE_SIZE) {
                return undefined
            }
            return allPages.length
        }
    })

    // const {isPending, data} = useQuery({
    //     queryKey: ['weapons'],
    //     queryFn: () => getAllWeapons()
    //         .then(response => response.documents)
    // })

    // if (isPending) return <Loading/>

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
                    console.log('I am here')
                    fetchNextPage()
                }
            })
        }, {root: null, threshold: 0.5})

        if (loadMoreDiv.current)
            observer.observe(loadMoreDiv.current)

        return () => {
            if (loadMoreDiv.current)
                observer.unobserve(loadMoreDiv.current)
        }
    }, [isFetching, isFetchingNextPage]);
    
    return status === 'pending' ? (
        <Loading/>
    ) : status === 'error' ? (
        <p>Error: {error.message}</p>
    ) :  (
        <>
            <div className='grid xl:grid-cols-4 md:grid-cols-3 auto-rows-auto  gap-4'>
                {data.pages.map((group, index) => (
                    <Fragment key={index}>
                        {group.map(weapon => (
                            <div key={weapon.$id} className={`rounded-t-lg ${classes.card}`}>

                                <div
                                    className={`grid grid-cols-[160px_minmax(0,_1fr)] items-center gap-x-2 rounded-t-lg ${classes.cardTitle}`}
                                    style={{
                                        backgroundColor: weapon.rarity == 5 ? 'var(--5-star-color)'
                                            : weapon.rarity == 4 ? 'var(--4-star-color)'
                                                : weapon.rarity == 3 ? 'var(--3-star-color)'
                                                    : weapon.rarity == 2 ? 'var(--2-star-color)'
                                                        : 'var(--1-star-color)'
                                    }}
                                >
                                    <img src={weapon.image} alt=""/>

                                    <div className='text-lg font-medium'>
                                        <p className='text-xl'>{weapon.name}</p>
                                        <p className='font-semibold text-xl'>{weapon.rarity}&#9733;</p>
                                        <p>ATK <span className='text-2xl font-semibold inline'> {weapon.atk}</span></p>
                                        {weapon.mainStat &&
                                            <>
                                                <p>{weapon.mainStat[0]}</p>
                                                <p className='text-2xl font-semibold'>{weapon.mainStat[1]}</p>
                                            </>
                                        }
                                    </div>
                                </div>

                                <div className={`overflow-y-auto p-3 ${classes.cardDesc}`}>
                                    {weapon.description && <p>{parse(weapon.description.replace('\n', '<br/>'))}</p>}
                                </div>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
            <div className='flex justify-center pt-5 relative'>
                <div ref={loadMoreDiv} className='absolute h-32 w-full -top-5'></div>
                <button className={`${classes.loadMore}`}
                    onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'
                    }
                </button>
            </div>
        </>
    );
};

export default WeaponsList;