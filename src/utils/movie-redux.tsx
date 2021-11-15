import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieDetails } from '../Interfaces/Movie';

// Redux functionalities with movie state and reducer handle changes

const initialState : { movies :MovieDetails[]}  = {
  movies : [],
};

export const name = 'movieList';

const modifyData = (movieData:any) => {
  return movieData ? movieData.map((data:any)=> { return {name:data.name,img:data["poster-image"]}}) : [];
}

const movieRedux = createSlice({
  name,
  initialState,
  reducers: {
    update: (state, action: PayloadAction<MovieDetails[]>) => {
      state.movies =  [...state.movies,...modifyData(action.payload)];
    },
    searchUpdate: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.filter((data:MovieDetails) => data.name.toLowerCase().includes(action.payload.toLowerCase()));
    },
    reset: (state) => {
      state.movies = [];
    },
  },
});

export const { actions, reducer } = movieRedux;