import React from "react";
import tags from "./tags.js";
import "./Skills.css";
import "../../script.js";

function Skills() {
 
  const tagElement = tags.map((tag,index) => {
    return (
      <a href={tag.href} target="_blank" rel="noreferrer" key={index} className="reveal">
        <span
          style={{
            color: tag.color,
            backgroundColor: tag.backgroundColor,
            cursor: tag.href ? "pointer" : "not-allowed",
          }}
          className="tag"
        >
          {tag.name}
        </span>
      </a>
    );
  });
  return (
    <section id="skills">
      <article className="skill-header section-heading reveal">
        <div>
          <span className="cyan">Skillset</span>
        </div>
        <div className="paragraph">
        As a Software Engineer, I'm always on the lookout for ways to improve and grow. Here's a glimpse into the skills I've already mastered, but rest assured, my journey to excellence is far from over!
        </div>
      </article>
      <main className="tags-container fade-in">{tagElement}</main>
    </section>
    
  );
}

export default Skills;
