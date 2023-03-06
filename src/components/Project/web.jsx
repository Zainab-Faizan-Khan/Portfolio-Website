import React, { useState, useEffect } from 'react';

import "./web.css";

import tour1 from "../../assets/images/tour1.png"
import tour2 from "../../assets/images/tour2.png"
import tour3 from "../../assets/images/tour3.png"
import tour4 from "../../assets/images/tour4.png"
import tour5 from "../../assets/images/tour5.png"
import dw1 from "../../assets/images/dw1.png"
import dw2 from "../../assets/images/dw2.png"
import dw3 from "../../assets/images/dw3.png"
import dw4 from "../../assets/images/dw4.png"
import dw5 from "../../assets/images/dw5.png"
import dw6 from "../../assets/images/dw6.png"
import pix1 from "../../assets/images/pix1.png"
import pix2 from "../../assets/images/pix2.png"
import pix3 from "../../assets/images/pix3.png"
import pix4 from "../../assets/images/pix4.png"
import pix5 from "../../assets/images/pix5.png"
const Slider = ({ images, title, description,code }) => {
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((currentImage + 1) % images.length);
      }, 1500);
  
      return () => clearInterval(interval);
    }, [currentImage, images]);
  
    const handleClick = (index) => {
      setCurrentImage(index);
    };
  
    return (
      <div className="slider">
        <img src={images[currentImage]} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a
              className="code-btn button"
              target="_blank"
              href={code}
              rel="noreferrer"
            >Code</a>
        <div className="slider-buttons">
          {images.map((_, index) => (
            <button
              key={index}
              className={`slider-button ${currentImage === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
      
    );
  };
  

function Web  ()  {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderData, setSliderData] = useState([
    {
      images: [
        dw1,dw2,dw3,dw4,dw5,dw6
      ],
      title: 'Regsiteration Website',
      description: 'Hospitals, pharmacies and blood banks to register themselves and manage departmental doctor schedules and information'
      ,code:"https://github.com/Zainab-Faizan-Khan/daktersaab-web"
    },
    {
      images: [
        tour1,tour2,tour3,tour4,tour5
      ],
      title: 'Touristooze',
      description: 'Touristooze, a travel website through which one can plan its whole tour to Pakistan via a single click.',
      code:"https://github.com/Zainab-Faizan-Khan/touristooze"    },
   
    {
      images: [
       pix1,pix2,pix3,pix4,pix5
      ],
      title: 'PixBay',
      description: 'This website help users to apply different transformation to images like Sketch, Saturation, Colorization,Grey Scale, Mirror, Contrast, Transpose etc.'
      ,code:"https://github.com/Zainab-Faizan-Khan/PixBay"
    },
  
  ]);


  return (
   <section>
      <div className="slider-container">
        {sliderData.slice(sliderIndex, sliderIndex + 3).map((slider, index) => (
          <Slider
            key={index}
            images={slider.images}
            title={slider.title}
            description={slider.description}
            code={slider.code}
          />
        ))}
      </div>
     
    </section>
  )
};

export default Web;