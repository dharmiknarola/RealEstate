import React from 'react'
import "./Hero.css"
import { HiLocationMarker } from "react-icons/hi";
import { CountUp } from 'use-count-up';
import{motion} from 'framer-motion';
import { type } from '@testing-library/user-event/dist/type';

function Hero() {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth hero-container flexCenter">
            {/* left side */}
            <div className="flexColStart hero-left">   
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1
                    initial={{y:"2rem", opacity: 0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration: 2,type: "spring"}}
                    >
                        Explore <br/> 
                        Your Dream <br/>  
                        Homes</motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Explore a wide variety of property listing</span>
                    <span className='secondaryText'>Finding best properties with ease and comfort - we are here!!</span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" /> 
                    <button className="button">Search</button>
                </div>

                <div className='flexCenter stats'>
                    <div className="flexColCenter stat">
                        <span>
                        <CountUp isCounting end={320} duration={3.2} />
                            <span> +</span>
                        </span>
                        <span className='secondaryText'>
                           Premium Products
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                        <CountUp isCounting end={2000} duration={3.2} />
                            <span> +</span>
                        </span>
                        <span className='secondaryText'>
                           Happy Customers
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                        <CountUp isCounting end={110} duration={3.2} />
                            <span> +</span>
                        </span>
                        <span className='secondaryText'>
                          Award Winning
                        </span>
                    </div>

                </div>
              </div>
            {/* right side */}
            <div className="flexCenter right-section">
                <motion.div 
                initial={{x: "7rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                    duration: 2,
                    type: "spring",
                }}
                className="image-container">
                    <img src={require('../../images/hero-image.jpg')} /> 
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero