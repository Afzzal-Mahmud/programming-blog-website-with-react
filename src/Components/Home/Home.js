import React, { useEffect, useState } from "react";
import DashboardCard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import StoreData from "../StoreData/StoreData";
import "./Home.css"

function Home() {
  /* fetching fake data from public folder */
  const [blogData, setBlogsData] = useState([]);

  useEffect(() => {
    fetch('./blogs.json')
      .then(Response => Response.json())
      .then(data => setBlogsData(data))
  }, [])

  /* store each card data on click by useing state */
  const [deshboardData,setDeshboardData] = useState([])

  const clickToShowBlog = (blog)=>{
 
    const clickedBlog = [...deshboardData,blog];
    setDeshboardData(clickedBlog)
  }


  /* using for loop to update total user data on StoreData components */
  let totalDailyUser = 0
  for(const user of deshboardData){
    totalDailyUser = totalDailyUser + user.dailyUser
  }

  return (
    <>
    {/* navigation is Header components */}
      <Header></Header>

        <h2 style={{textAlign:"center"}}>Top 10 Developer Blog I follow</h2>
      <section className="container home-container">
        <div className="dashboard-container">

          {/* all blogs data map heare and send to DashboardCard as object */}
        {
          blogData.map(blog => <DashboardCard
                               key={blog.id} 
                               blogObject={blog}
                               clickEvent={clickToShowBlog}>
                              </DashboardCard>)
        }

        </div>

        {/* second half of the main Home component */}
        <div style={{color:"#22202b"}}>

          <h3> Total Clicked : {deshboardData.length} </h3>
          <h3>Total Daily User : {totalDailyUser} </h3>

          {/* all clicked data is go to the Store Data components and also randomize the key because of same two click of the same button*/}
          {
            deshboardData.map(eachBlog =><StoreData
                              key={eachBlog.id + Math.random()}
                              clickedData={eachBlog}
                              ></StoreData>)
          }
        </div>
      </section>
    </>
  )
}

export default Home;