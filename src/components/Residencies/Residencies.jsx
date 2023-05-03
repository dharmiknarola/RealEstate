import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper.min.css";
import "./Residencies.css";
import { Virtual } from 'swiper';
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

function Residencies() {

  const [size, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {

    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


 function defineViews() {
    // var size = document.documentElement.clientWidth;
    console.log("define function called");
    if(size>=1100)
    {
      return 4;
      
    }
    else if(size>=750)
    {
      return 3;
    }
    else if(size>=600)
    {
      return 2;
    }
    else 
    {
      return 1;
    }

  }
  return (
    <section className="r-wrapper" name="recidencies">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText"> Popular Residencies</span>
        </div>
        <Swiper  slidesPerView={defineViews()} spaceBetween={50} >
          <SliderButtons/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flextColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                  <span className="orangeText">$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={()=> swiper.slidePrev()}>
        &lt;
      </button>
      <button onClick={()=> swiper.slideNext()}>
        &gt;
      </button>
    </div>
  )
}