import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Home.css"

function Home() {
    const [blogs,setBlogs] = useState([]);
  useEffect(()=>{
    fetch('./blogs.json')
    .then(Response => Response.json())
    .then(data => setBlogs(data))
  },[])
    return(
      <>
      <Header></Header>
        <section className="container home-container">
        <div className="dashbord-container">
              {/* all blog data map hear */}
        </div>
        </section>
        </>
    )
}

export default Home;