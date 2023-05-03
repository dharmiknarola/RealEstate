import React from 'react'
import './GetStarted.css'

function GetStarted() {
  return (
    <section className="g-wrapper get-started">
        <div className="padding innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Homyz</span>
                <span className='secondaryFontColor'>
                    Subscribe and find super attractive price quates from us
                <br/>
                Find your residence soon
                </span>     
                <button className="button">
                <a href="mailto:abc@gmail.com">Get Started</a>    
                </button>      
            </div>
        </div>
    </section>
  )
}

export default GetStarted