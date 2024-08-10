import React from 'react'
import waves from '../../assets/videos/waves-website.mp4'
import './Home.css'

function Home() {
  return (
    <div className='main'>
      <div className="overlay"></div>
      <video src={waves} autoPlay loop muted />
      <div className="content">
        <h1>Sentiment Analyzer</h1>
        <p>Lillian Xiao | Gillian Ong</p>
      </div>
    </div>
  )
}

export default Home
