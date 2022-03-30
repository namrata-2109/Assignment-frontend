import React from 'react'
import LeftFrame from './components/LeftFrame'
import TopBar from './components/TopBar'
import Middle from './components/Middle'
import './Home.css'

const Home = () => {
  return (
    <div className='screen'>
      <div className='home-top'>
        <TopBar />
      </div>
      <div className='home-bottom'>
          <LeftFrame />
          <Middle />
      </div>

    </div>
  )
}

export default Home