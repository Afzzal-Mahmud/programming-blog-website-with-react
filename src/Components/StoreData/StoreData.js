import React from "react";
import "./StoreData.css"

function StoreData(props) {
    const {websiteName,image} =props.clickedData;

  
    return(
        <>
          <div className="overview">
          <img className="imgStyle" src={image} alt="" />
          <h5 className="nameStyle">{websiteName}</h5>
          </div>
        </>
    )
}
export default StoreData;