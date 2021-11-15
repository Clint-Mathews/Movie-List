import { configureStore } from '@reduxjs/toolkit'
import { name, reducer } from './utils/movie-redux';

// Store and reducer mapping
export default configureStore({
  reducer: {
    [name]: reducer,
  },
})