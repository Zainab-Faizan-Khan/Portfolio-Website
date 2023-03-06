import React from "react";
import "./Project.css";
import "../../script.js";
import Web from "./web";
import App from "./app";
function Project  ()  {
 




  return (
   <section id="project">
     <blockquote className="project-header section-heading reveal">
        <div className="portfolio-heading reveal">
        <div className="proweb">"Behold my MERN Stack website projects that are guaranteed to blow you away! Here are just a few of my standout creations."</div>
        </div>

      </blockquote>
    <Web/>
    <blockquote className="project-header section-heading reveal">
        <div className="portfolio-heading reveal">
        <div className="proapp">"Get ready to tap into my world of mobile app creations! Here's a sneak peek of some of my top-notch projects."</div>
        </div>

      </blockquote>
    <App/>
    <div className="btn-wrapper">
        <a
          className="button"
          href="https://github.com/Zainab-Faizan-Khan"
          target="_blank"
          rel="noreferrer"
        >
          Check Out all projects <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  )
};

export default Project;