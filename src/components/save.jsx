
import "./save.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadFavorites } from "../features/buttonSlice/favoriteSlice";
import union from "../assets/Union.png";
import { deleteToFavorite } from "../features/buttonSlice/favoriteSlice";

export const Save = () => {
    const loaded = useSelector(state => state.favorite.loaded);
    const dispatch = useDispatch();
  
    const handleCross = (event,favorite) =>{
    event.preventDefault();
    
   
    dispatch(deleteToFavorite(favorite)); 
  };
  
  useEffect(()=>{
          // Verificamos si la lista de favoritos aún no ha sido cargada
        if(loaded === false){
              // Si aún no ha sido cargada, despachamos la acción "loadFavorites" para cargarla
            dispatch(loadFavorites());
        }
      // Especificamos que esta acción debe ejecutarse solo cuando los valores de dependencia "loaded" o "dispatch" cambian
    },[loaded, dispatch]);

  const conversion = useSelector((state) => state.favorite.list);
  const list = conversion.map((favorite) => {
    return(
<div className="column_save">
        <div className="save_list">
        
          <p>{favorite.parameterValue}</p>
          <p>{favorite.parameterUnit} → </p>
          <p>{favorite.resultValue}</p>
          <p>{favorite.resultUnit}</p>
          <img src={union} alt="union" id="convert" onClick={e=>handleCross(e,favorite)}/>
      </div>
      </div>
    )
  });

  return (
    <div className="save_height">
        <div>
            <p className="save">saved</p>
        </div>
      {list}

    </div>
  );
};
