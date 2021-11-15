import { configureStore } from '@reduxjs/toolkit'
import { name, reducer } from './utils/movie-redux';

export default configureStore({
  reducer: {
    [name]: reducer,
  },
})