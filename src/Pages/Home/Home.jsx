import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Explore from '../../Components/Explore/Explore'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {

  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar === false ? "large-container" : ""}`} >
        <Explore category={category} setCategory={setCategory}/>
        <Feed category={category}/>
      </div>
      
    </>
  )
}

export default Home