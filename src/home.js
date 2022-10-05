import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
const Home = () => {
  return (
    <div className='container'>
        
        
        <div className='box'>
        
          <h1 className='game-name'>Rock</h1>
          <h1 className='game-name1'>Paper</h1>
          <h1 className='game-name2'>Scissors</h1>
          {/*
          <button className='start-button' onClick={click}>Start</button>
          <button className='about-button'>About</button>
  */}
  <div>
 <Link to='/game'>
  <button className='but1'>
    Start
    <span className='span1'></span>
  </button>
  </Link>
 
  
 
</div>
<div>
<Link to="/about">
  <button className='but2'>
    About
    <span className='span2'></span>
  </button>
  </Link>
</div>
        </div>
       
        
      </div>
      
    
  )
}

export default Home