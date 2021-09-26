import React from "react";
import "./Dashboard.css";
/* import react-bootstrap icon */
import { PeopleFill } from 'react-bootstrap-icons';


function DashboardCard(props) {
    /* using distructuring to recive blog object and clik event */
    const {websiteName, image, ceo, dailyUser, moto,type}=props.blogObject;
    const clickEvent = props.clickEvent; 

    return(
        <div className="dashboard-body">
            <div className="dashboard-img">
            <img src={image} alt="" />
            <h3>{websiteName}</h3>
            </div>
            <div className="dashboard-info">
               <h4 className="heading">C.E.O Name : {ceo}</h4>
               <h5>Mission : {moto}</h5>
               <h5>Website Type : {type}</h5>
               <h6>Daily User : <PeopleFill style={{fontSize:"2em",margin:"0 5px -2px 5px"}} />  {dailyUser} </h6>
            </div> 
               <button onClick={()=>clickEvent(props.blogObject)}>Show Data</button>
        </div>
    )
}
export default DashboardCard