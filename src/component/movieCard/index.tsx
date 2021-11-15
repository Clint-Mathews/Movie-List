import React from 'react'
import { MovieCardData } from '../../Interfaces/Movie';
import { movieCardBuffer } from '../../utils/common-constant';

const MovieCard = ({length, index, finalMovieElementRef, movieData }: MovieCardData) =>  {
    const updateToDefaultImg = (e:any) => {
        e.target.src =  `/assets/Slices/placeholder_for_missing_posters.png`;
    }
    return (
        <div key={index} ref={length  === index + movieCardBuffer ? finalMovieElementRef : null}>
        <img alt={movieData.name} src={`/assets/Slices/${movieData.img}`} onError={(e)=> updateToDefaultImg(e)}/>
        <span className="font-thin text-base">{movieData.name}</span>
        </div>
    )
}
export default React.memo(MovieCard);