import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice } from '../features/buttonSlice/favoriteSlice';


export const store = configureStore({
  reducer: {
   favorite: favoriteSlice.reducer
  },
});
