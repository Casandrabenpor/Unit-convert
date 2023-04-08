export const addConvertorToLocalStorage = (convert) =>{
    let convertData = readLocalStorage();
    if(!isContained(convert)){
        convertData.data.push(convert);
        let json = JSON.stringify(convertData);
        localStorage.setItem("favoriteConvert",json);
    }
};

export const readLocalStorage = () => {
    let convertArrayInLocalStorage = localStorage.getItem("favoriteConvert");
    if (convertArrayInLocalStorage != null) {
      let convertArrayToObject = JSON.parse(convertArrayInLocalStorage);
      return convertArrayToObject; 
    }
    return { data: []};
  };
  export const isContained = (convertorCandidate) => {
    let convertArrayInLocalStorage = readLocalStorage();

    return convertArrayInLocalStorage.data.some(convert => convert.id === convertorCandidate.id);
};
export const deletePhotoFromLocalStorage = (convertToDelete) => {
    let convertData = readLocalStorage();
    // elimina la foto que es igual al id
    let convert = convertData.data.filter(convert=> convertToDelete.id !== convert.id )
    //  para tener el valor de photos
    convertData = convert;
    let json = JSON.stringify(convertData);
    // variable que mete la clave y el valor de localstorage
    localStorage.setItem("favoriteConvert",json);
  };