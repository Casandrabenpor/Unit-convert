
import "./convert.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../features/buttonSlice/favoriteSlice";
import { v4 as uuidv4 } from 'uuid';
import  icon from "../assets/Icon.png";



export const Convert = (props) => {
  const [convertedValue, setConvertedValue] = useState(0);
  const [selectedValue, setSelectedValue] = useState("metres");
  const [inputValue, setInputValue] = useState(100);
  const [inputResult, setInputResult] = useState("miles");
  const dispatch = useDispatch();

  const handleSelect = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange = (e) => {
    let result;
    setInputValue(e.target.value);
   
    switch (selectedValue) {
      case "km":
        result = KmToMiles(e.target.value);
        setConvertedValue(result);
        setInputResult("miles");
        break;
      case "miles":
        result = MilesToKm(e.target.value);
        setConvertedValue(result);
        setInputResult("km");
        break;
      case "feet":
        result = feetToMetres(e.target.value);
        setConvertedValue(result);
        setInputResult("metres");
        break;
      case "metres":
        result = MetresToFeet(e.target.value);
        setConvertedValue(result);
        setInputResult("feet");
        break;
      case "cm":
        result = CmToInches(e.target.value);
        setConvertedValue(result);
        setInputResult("inches");
        break;
      case "inches":
        result = InchesToCm(e.target.value);
        setConvertedValue(result);
        setInputResult("cm");
        break;
      default:
        result = 0;
    }
  };

  const KmToMiles = (km) => {
    return (km / 1.609).toFixed(2);
  };
  const MilesToKm = (miles) => {
    return (miles * 1.609).toFixed(2);
  };
  const feetToMetres = (feet) => {
    return (feet / 3.281).toFixed(2);
  };
  const MetresToFeet = (metres) => {
    return (metres * 3.281).toFixed(2);
  };
  const CmToInches = (cm) => {
    return (cm / 2.54).toFixed(2);
  };
  const InchesToCm = (inches) => {
    return (inches * 2.54).toFixed(2);
  };
  
  const handleHeart = (event) => {
     
    event.preventDefault();
    
    let convert = {
      id: uuidv4(),
      parameterUnit: selectedValue,
      parameterValue: inputValue,
      resultUnit: inputResult,
      resultValue: convertedValue,
    };

    dispatch(addToFavorite(convert));
  };

  return (
    <div className="rectangle">
      <h2>Convert</h2>
      <div className="selectInput">
        <div className="selector">
          <select
            name="convert"
            value={selectedValue}
            className="select"
            onChange={handleSelect}
          >
            <option value="km">km → miles</option>
            <option value="miles">miles → km</option>
            <option value="feet">feet → metres</option>
            <option value="metres">metres → feet</option>
            <option value="cm">cm → inches</option>
            <option value="inches">inches → cm</option>
           
          </select>
          <img className="icon" src={icon} alt="icon" />
        </div>
        
        <div className="input">
          <input type="number" name="text" id="convert" onChange={handleChange} />
        </div>
      </div>
      <div className="heart-outline" onClick={handleHeart}>
        <ion-icon name="heart-outline"></ion-icon>
        <div className="unitConverter">
        <p>{convertedValue} </p>
        <p>{inputResult}</p>
        </div>
      </div>
      
    </div>
  );
};
