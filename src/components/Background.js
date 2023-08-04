import React from 'react'
import waves from '../assets/waves-website.mp4'
import ".//Background.css"

function Background() {
  return (
    <div className='main'>
      <div className="overlay"></div>
      <video src={waves} autoPlay loop muted />
      <div className="content">
        <h1>LILLIAN XIAO</h1>
        <p>computer science</p>
      </div>
    </div>
  )
}

export default Background
