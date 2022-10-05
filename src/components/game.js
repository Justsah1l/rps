import React from 'react'
import './game.css'
import { useEffect, useState } from 'react'

const Game = () => {
  const [userchoice,setuserchoice] = useState(null)
  const [botchoice,setbotchoice] = useState(null)
  const [result,setresult] = useState(0)
  const choices = ['rock','paper','scissor']
  const [highsc,sethighsc] = useState(0)


  const handleclick = (value) => {
    setuserchoice(value)
    genbotchoice()
    
  }

  
  const genbotchoice = () =>{
    const ranbotchoice = choices[Math.floor(Math.random()*3)]
    setbotchoice(ranbotchoice)

  }

  const reset = () => {
    setresult(0)
  }

  if(highsc < result)
  {
    sethighsc(result)
  }


  useEffect(() =>{
    {
      if(userchoice === 'paper' && botchoice === 'rock')
      {
        setresult(result+1)
      }    
       if(userchoice === 'paper' && botchoice === 'scissor') 
      {
        setresult(result-1)
      }
      if(userchoice === 'paper' && botchoice === 'paper') 
      {
        setresult(result+0)
      }
      if(userchoice === 'scissor' && botchoice === 'paper') 
      {
        setresult(result+1)
      }
      if(userchoice === 'scissor' && botchoice === 'rock') 
      {
        setresult(result-1)
      }
      if(userchoice === 'scissor' && botchoice === 'scissor') 
      {
        setresult(result+0)
      }
      if(userchoice === 'rock' && botchoice === 'scissor') 
      {
        setresult(result+1)
      }
      if(userchoice === 'rock' && botchoice === 'paper') 
      {
        setresult(result-1)
      }
      if(userchoice === 'rock' && botchoice === 'rock') 
      {
        setresult(result+0)
      }
     
      
  }
    
  },[userchoice,botchoice])


  
  

  return (
    <div className='gamediv'>
      <h1 className='score'>SCORE : {result}</h1>
      <div className='choice'>
      <h1 className='userch'>USER CHOICE : {userchoice}</h1>
      <h1 className='comch'>COMPUTER CHOICE : {botchoice}</h1>
      </div>
      <div className='buttons'>
      <button className='papers' onClick={() => handleclick('paper')}>paper</button>
      <button className='scissors' onClick={() => handleclick('scissor')}>scissors</button>
      <button className='rocks' onClick={() => handleclick('rock')}>stone</button>
      </div>
      <h1 className='highscr'>HIGH SCORE : {highsc} </h1>
      <button className='reset' onClick={() => reset()}>reset score</button>
    </div>
   
  )
}

export default Game