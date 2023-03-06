import React from "react";
import "./Home.css";
import profileImg from "../../assets/profile.jpeg";
import logo from "../../assets/icons/logoo.png"
import "../../script.js"




function Home() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Zainab_Khan_CV.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Zainab_Khan_CV.pdf';
        alink.click();
      })
    })
  }
  return (
    <header>
      <nav className="nav">
        <aside className="brand-name">
          <img className='logo-img' src={logo}/>
          <span className="logo-name">ZFK</span>
        </aside>
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#services">Interests</a>
          <a href="#project">Projects</a>
          {/* <a href="#blog">Blog</a> */}
          <a href="#contact">Contact</a>
        </div>
        <button className="btn" onClick={onButtonClick}>Download Resume</button>
      </nav>
      <section id="home">
        <main className="main-homepage">

          <article className="personal-info">
            <blockquote className="name">
              <p>
                Hello, <span className="zainab"> I'm Zainab Faizan Khan </span> {" "}
              </p>
              <h4 className="wordCarousel">
                <div>
                  <ul className="flip">
                    <li>a Software Engineer</li>
                    <li>a MERN Stack Developer</li>
                    <li>a Data Scientist</li>
                    <li>a Power BI Developer</li>
                  </ul>
                </div>
              </h4>
            </blockquote>
            <div className="para1 reveal">
              <p1>
                With a solid background in both <b>MERN stack development</b> and <b>data science</b>, I am equipped with the skills to provide comprehensive solutions for a range of projects. My expertise in MERN stack development enables me to create dynamic and responsive web applications as well as mobile applications with ease. Additionally, my proficiency in data science allows me to analyze complex datasets, derive insights, and develop predictive models.
                {/* Additionally, I have an interest in web development and have been exploring the MERN stack. By learning MongoDB, Express, React, and Node.js, I hope to develop my skills and create full-stack web applications that are both efficient and scalable. Ultimately, I want to use my knowledge and expertise in data science and web development to help businesses leverage their data and make informed decisions that drive growth and success. */}
              </p1>



            </div>
            <button className="btn-desktop" > <a href="../../assets/Zainab_Khan_CV.pdf" title="CV" download>Download CV</a></button>
          </article>
          <figure className="profile-figure reveal">
            <img src={profileImg} alt="Profile" className="profile-img" />
          </figure>
        </main>
        <div className="socials-list reveal">
          <ul className="social">
            <li>Connect with me on:</li>
            <li>
              <a href="https://twitter.com/faizan_zainab" target="_blank">
                <i class="fab fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/zainab-faizan-khan-633679196/" target="_blank">
                <i class="fab fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Zainab-Faizan-Khan/Zainab-Faizan-Khan" target="_blank">
                <i class="fab fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}

export default Home;
