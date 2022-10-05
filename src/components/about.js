import React from 'react'
import {Link as Link1} from 'react-scroll'
import './about.css'
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { HiCode } from "react-icons/hi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";



const About = () => {
  return (
    
      <div className='wrapper'>
        <div className='upper'>
          <Link1
          activeClass="active"
          to="about"
         spy={true}
         smooth={true}
         offset={-100}
         duration={500} >
        <button className='button1'>
        About game
    <span></span>
  </button>
  </Link1>


  <Link1
          activeClass="active"
          to="lang"
         spy={true}
         smooth={true}
         offset={-100}
         duration={1100} >
  <button className='button2'>
  Language used
    <span></span>
  </button>
  </Link1>
        </div>
        <div className='main'>
            <h1>ABOUT GAME</h1>
            <hr/>
            <p id='about'>
            Rock paper scissors also known by other orderings of the three items, with "rock" sometimes being called "stone," or as Rochambeau, roshambo, or ro-sham-bo is a hand game originating from China, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V). "Scissors" is identical to the two-fingered V sign (also indicating "victory" or "peace") except that it is pointed horizontally instead of being held upright in the air.

A simultaneous, zero-sum game, it has three possible outcomes: a draw, a win or a loss. A player who decides to play rock will beat another player who has chosen scissors ("rock crushes scissors" or "breaks scissors" or sometimes "blunts scissors"), but will lose to one who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors ("scissors cuts paper"). If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie. The game spread from China while developing different variants in signs over time.

Rock paper scissors is often used as a fair choosing method between two people, similar to coin flipping, drawing straws, or throwing dice in order to settle a dispute or make an unbiased group decision. Unlike truly random selection methods, however, rock paper scissors can be played with a degree of skill by recognizing and exploiting non-random behavior in opponents.
            </p>
            <br/>
            
            <h1>LANGUAGE USED <HiCode className='lg'/></h1>
            <hr/>
            <h1 id='lang'>HTML <AiFillHtml5 className='ht'/></h1>
            <h1>CSS <DiCss3 className='cs'/></h1>
            <h1>JAVASCRIPT <TbBrandJavascript className='js'/> </h1>
            <br/>

            <h1>FRAMWORK USED</h1>
            <hr/>
            <h1>REACT JS <FaReact className='rj'/></h1>


        </div>


      </div>
        
     
   
    
    
  )
}

export default About