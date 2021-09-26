import React, { useEffect, useState } from "react";
import DashboardCard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import "./Home.css"

function Home() {
  // fetching fake data from public folder
  const [blogData, setBlogsData] = useState([]);
  useEffect(() => {
    fetch('./blogs.json')
      .then(Response => Response.json())
      .then(data => setBlogsData(data))
  }, [])
  return (
    <>
      <Header></Header>

        <h2 style={{textAlign:"center"}}>Top 10 Developer Blog I follow</h2>
      <section className="container home-container">
        <div className="dashboard-container">
          {/* all blogs data map heare and send to DashboardCard as object */}
        {
          blogData.map(blog => <DashboardCard
                               key={blog.id} 
                               blogObject={blog}>
                              </DashboardCard>)
        }

        </div>
      </section>
    </>
  )
}

export default Home;