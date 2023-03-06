// import React, { useState, useEffect } from 'react';
// import "./Project.css";

// const Slider = ({ images, title, description,code }) => {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((currentImage + 1) % images.length);
//     }, 1500);

//     return () => clearInterval(interval);
//   }, [currentImage, images]);

//   const handleClick = (index) => {
//     setCurrentImage(index);
//   };

//   return (
//     <div className="slider">
//       <img src={images[currentImage]} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <a
//             className="code-btn button"
//             target="_blank"
//             href={code}
//             rel="noreferrer"
//           >Code</a>
//       <div className="slider-buttons">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`slider-button ${currentImage === index ? 'active' : ''}`}
//             onClick={() => handleClick(index)}
//           />
//         ))}
//       </div>
//     </div>
    
//   );
// };

// export default Slider;
