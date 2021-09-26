import React from "react";
import "./Dashboard.css";
function DashboardCard(props) {
    const {websiteName, image, ceo, dailyUser, moto}=props.blogObject
    return(
        <div className="dashboard-body">
            <div className="dashboard-img">
            <img src={image} alt="" />
            <h3 style={{color:"#352776"}}>{websiteName}</h3>
            </div>
            <div className="dashboard-info">
               <h4 className="heading">C.E.O Name : {ceo}</h4>
               <h5>Mission : {moto}</h5>
               <h6>Daily User : {dailyUser} </h6>
            </div> 
               <button>Show Data</button>
        </div>
    )
}
export default DashboardCard