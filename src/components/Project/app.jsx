import React, { useState, useEffect } from 'react';
import "./app.css";


import pro1 from "../../assets/images/pro1.jpeg"
import pro2 from "../../assets/images/pro3.jpeg"
import pro3 from "../../assets/images/pro2.jpeg"
import pro4 from "../../assets/images/pro4.jpeg"
import pro5 from "../../assets/images/pro5.jpeg"
import pro6 from "../../assets/images/pro6.jpeg"
import pro7 from "../../assets/images/pro7.jpeg"
import pro8 from "../../assets/images/pro8.jpeg"
import pro9 from "../../assets/images/pro9.jpeg"
import pro10 from "../../assets/images/pro10.jpeg"
import doc1 from "../../assets/images/doc1.png"
import doc2 from "../../assets/images/doc2.png"
import doc3 from "../../assets/images/doc3.png"
import doc4 from "../../assets/images/doc4.png"
import doc5 from "../../assets/images/doc5.png"
import doc6 from "../../assets/images/doc6.png"
import doc7 from "../../assets/images/doc7.png"
import doc8 from "../../assets/images/doc8.png"
import doc9 from "../../assets/images/doc9.png"
const Slider1 = ({ images, title, description,code }) => {
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
      <div className="slider1">
        <img src={images[currentImage]} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a
              className="code-btn1 button"
              target="_blank"
              href={code}
              rel="noreferrer"
            >Code</a>
        <div className="slider1-buttons">
          {images.map((_, index) => (
            <button
              key={index}
              className={`slider1-button ${currentImage === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
      
    );
  };
  

function App  ()  {
  const [sliderIndex, setSliderIndex] = useState(0);
  
  const [sliderData1, setSliderData] = useState([
    {
      images: [
        pro1,pro2,pro3,pro4,pro5,pro6,pro7,pro8,pro9,pro10
      ],
      title: 'ProFit',
      description: 'The perfect assistant to help you reach your desired fitness goal',
      code: "https://github.com/Zainab-Faizan-Khan/ProFit"
    },
    {
      images: [
        doc1,doc2,doc3,doc4,doc5,doc6,doc7,doc8,doc9
      ],
      title: 'DakterSaab',
      description: 'Search, Find & Book on one Tap. An All in one Medical Health Application',
    }
  
  ]);




  return (
   <section>
      <div className="slider-container1">
        {sliderData1.slice(sliderIndex, sliderIndex + 3).map((slider1, index) => (
          <Slider1
            key={index}
            images={slider1.images}
            title={slider1.title}
            description={slider1.description}
            code={slider1.code}
          />
        ))}
      </div>
     
    </section>
  )
};

export default App;