import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left Side */}
            <div className="flexColStart f-left">
                <div className='logoDiv'>
                <img src='./images/brandname.png' alt="Company logo" width={120}/>
                </div>
                <span className='secondaryText'>
                    Our Vision is to make all people <br/>
                    the best place to visit  live for them 
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>
                    Information
                </span>
                <span>145 Wilson Avenue , Kitchener, Canada</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer