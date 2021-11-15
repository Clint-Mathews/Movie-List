import React from 'react'
import { MovieCardData } from '../../Interfaces/Movie';
import { movieCardBuffer } from '../../utils/common-constant';

// Component memoized to remove unwanted rerendering
const MovieCard = ({length, index, finalMovieElementRef, movieData, url }: MovieCardData) =>  {
    // Added error function to replace with placeholder image
    const updateToDefaultImg = (e:any) => {
        e.target.src =  `${url}/assets/Slices/placeholder_for_missing_posters.png`;
    }
    return (
        <div key={index} ref={length  === index + movieCardBuffer ? finalMovieElementRef : null}>
        <img alt={movieData.name} src={`${url}/assets/Slices/${movieData.img}`} onError={(e)=> updateToDefaultImg(e)}/>
        <span className="font-thin text-base">{movieData.name}</span>
        </div>
    )
}
export default React.memo(MovieCard);