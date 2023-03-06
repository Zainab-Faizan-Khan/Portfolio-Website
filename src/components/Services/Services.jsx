import React from "react";
import "./Services.css";
import "../../script.js";

function Services() {
  return (
    <section id="services">
    <blockquote className="service-header section-heading reveal">
    <div className="intrest">What's the point of <b>learning</b> all the cool stuff if I couldn't put them to good use?</div>
    </blockquote>
    <section className="scroll">
      <div class="all">
        <div class="lefter">
          <div class="text">Machine Learning</div>
        </div>
        <div class="left">
          <div class="text">Development</div>
        </div>
        <div class="center">
          <div class="explainer">
            <span>DIVE IN!</span>
          </div>
          <div class="text">MERN Stack</div>
        </div>
        <div class="right">
          <div class="text">React/React Native</div>
        </div>
        <div class="righter">
          <div class="text">Data Science</div>
        </div>
      </div>
      </section>
    </section>
  );
}

export default Services;
