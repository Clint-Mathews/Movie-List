import axios from 'axios';
import React, { useCallback, useEffect, useState, useRef } from 'react'
import { MovieDetails } from '../../Interfaces/Movie';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { actions } from '../../utils/movie-redux';
import Loader from '../loader';
import MovieCard from '../movieCard';

// Main Movie List
function MovieList() {
    const url = window.location.href;
    const movies = useAppSelector((state) => state.movieList.movies);
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [perPage, setPerPage] = useState(0);
    const [toggleSearch, setToggleSearch] = useState(false);
    const observer: any = useRef();
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const [heading, setHeading] = useState('');

    // Used for infinte srool api call before reaching the end using the buffer. Page updated.
    const finalMovieElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(page => page + 1);
            }
        })
        if (node) observer.current?.observe(node)
    }, [loading, hasMore])

    // Search input with timeout (let's user type, waiting for 1 sec before calling API) to load the whole data and filter out the required result
    useEffect(() => {
        if (!loading) {
            const delayFn = setTimeout(() => {
                getAllMovieData();
            }, 1000);
            return () => clearTimeout(delayFn);
        }
    }, [searchTerm]);


    // On Page change the movie API is called.
    useEffect(() => {
        getMovieData();
    }, [page]);

    // Updating conditions for checking further loading.
    useEffect(() => {
        if (!searchTerm) {
            setLoading(false);
            setHasMore(movies.length < total);
        }
    }, [movies]);

    // Get Movies Data based on the page and saves data in state and redux
    const getMovieData = () => {
        setLoading(true);
        axios.get(`${url}/assets/API/CONTENTLISTINGPAGE-PAGE${page}.json`)
            .then((res) => {
                setHeading(res.data.page["title"]);
                setTotal(res.data.page["total-content-items"]);
                setPerPage(res.data.page["page-size-requested"]);
                dispatch(actions.update(res?.data?.page["content-items"]?.content ? res.data.page["content-items"].content : []));
            }).catch((err) => {
                setLoading(false);
                setHasMore(false);
            });
    }

    // Generate the all pages to get the data from API since we dont have a search API (FE filtering)
    function generatePageArray() {
        let i = 1;
        let returnData = [];
        while (i * perPage - total < perPage) {
            returnData.push(i);
            i++;
        }
        return returnData;
    }
    // Get all pages to do filtering based on search
    const getAllMovieData = async () => {
        setLoading(true);
        dispatch(actions.reset());
        const pageArray = generatePageArray();
        await Promise.all(
            pageArray.map(async (pageNumber: number) => {
                await axios.get(`${url}/assets/API/CONTENTLISTINGPAGE-PAGE${pageNumber}.json`)
                    .then((res) => {
                        dispatch(actions.update(res?.data?.page["content-items"]?.content ? res.data.page["content-items"].content : []));
                    }).catch((err) => {
                        setLoading(false);
                        setHasMore(false);
                    });
            })
        );
        dispatch(actions.searchUpdate(searchTerm));
        setLoading(false);
        setHasMore(false);
    }

    // Reset case on back button and on search close
    const resetMovieList = (resetOnBack: boolean = false) => {
        if (toggleSearch || resetOnBack) {
            setLoading(true);
            setSearchTerm('');
            if (resetOnBack) setToggleSearch(false);
            dispatch(actions.reset());
            page === 1 ? getMovieData() : setPage(1);
        }
    }

    return (
        <div className=" h-screen w-screen relative text-white font-body" style={{ backgroundColor: "#171717" }}>
            <div style={{ backgroundImage: `url(${url}/assets/Slices/nav_bar.png)` }} className="absolute inset-x-0 top-0 flex justify-between p-4 bg-no-repeat bg-contain bg-top w-full h-16" >
                <div className="flex items-center w-3/5">
                    <button className="w-5" onClick={() => resetMovieList(true)}>
                        <img alt="Back" className="object-contain h-5 w-5" src={`${url}/assets/Slices/Back.png`} />
                    </button>
                    <span className="ml-1 text-xl font-light whitespace-nowrap">{heading}</span>
                </div>
                <div className={`flex items-center w-3/5 ml-1  text-gray-300 relative rounded-full p-2 border-2 ${toggleSearch ? 'bg-black border-white' : 'border-transparent'}`}>
                    <input type="text" placeholder="Search..." value={searchTerm} className={`ml-2 w-full bg-transparent outline-none  transition ease-linear ${toggleSearch ? 'opacity-1' : 'opacity-0'}`} onChange={e => setSearchTerm(e.target.value)} />
                    <button className="absolute right-0 mr-3 outline-none" onClick={() => { resetMovieList(); setToggleSearch(!toggleSearch); }}>
                        <img alt="Search" className={`object-contain h-5 w-5`} src={`${url}/assets/Slices/search.png`} />
                    </button>
                </div>
            </div>
            {/* Conditional cases based on following cases
            1. When No data is there
                1. On Search
                2. On Loading
                3. When No Data is there
            2.When Data is there */}
            {movies.length === 0 ?
                searchTerm ?
                    <div className="flex align-middle px-4 h-screen w-auto justify-center pt-20">No Movies Found</div>
                    : loading ? <Loader /> : <div className="flex align-middle px-4 h-screen w-auto justify-center pt-20">No Movies Available</div>
                : <div className="grid grid-cols-3 gap-4 px-4 h-screen w-auto overflow-y-auto overflow-x-hidden pt-14">
                    {
                        movies.map((data: MovieDetails, index: number) => {
                            return (
                                <MovieCard url={url} length={movies.length} index={index} finalMovieElementRef={finalMovieElementRef} movieData={data} />
                            )
                        })
                    }
                </div>
            }
        </div>
    );
}

export default MovieList;

