import { createSlice } from "@reduxjs/toolkit";
import { readLocalStorage ,addConvertorToLocalStorage,deletePhotoFromLocalStorage } from "../../data/localStorage";

export const favoriteSlice = createSlice ({
    name: "favorite",
    initialState:{
        list:[],
        loaded:false,
    },
    reducers:{
        addToFavorite:(state,action)=>{
            addConvertorToLocalStorage(action.payload)
            let localStorage= readLocalStorage();
            state.list = localStorage.data;
        },
        deleteToFavorite:(state,action)=>{
            deletePhotoFromLocalStorage(action.payload)
            let localStorage = readLocalStorage();
            state.list = localStorage.data;
        },
        loadFavorites:(state,action) =>{
            // Carga inicial de las fotos guardadas en la sesión
            let localStorage = readLocalStorage();
            state.list = localStorage.data;  
            state.loaded = true;
        }
    },
});
export const {addToFavorite , deleteToFavorite,loadFavorites} = favoriteSlice.actions;