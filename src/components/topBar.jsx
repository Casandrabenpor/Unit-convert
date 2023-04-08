import "./topBar.css";
import  icons_arrow from "../assets/icons_arrow.png";


export const TopBar = () => {
  return (
    
    <div className="nav">
    <img className="iconsArrow" src={icons_arrow} alt="icons arrow" />
      <h3>unit converter</h3>
    </div>

  );
};
