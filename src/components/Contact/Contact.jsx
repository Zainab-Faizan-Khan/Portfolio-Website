import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(formData);
  
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g37xxgs",
        "template_b5widg3",
        e.target,
        "7kRCTRZtipln4gobl"
      )
      .then((resp) => {
        alert("Message sent Successfully!");
      }).catch(error => console.log(error));
  }
  return (
    <section id="contact">
      <blockquote className="contact-header section-heading reveal">
        <p className="para">
          <span className="cyan">Any Query? Hit me up!</span><br/>
          <span className="cyan"> Email me or connect on the socials.</span>
        </p>
      </blockquote>
      <div className="contact-wrapper">
        <form id="contact-form" class="form-horizontal" onSubmit={sendEmail}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div class="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            type="text"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

<button
            className="send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className="alt-send-button">
              <i class="fa fa-paper-plane"></i>
              <span class="send-text">SEND</span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container reveal">
          <ul className="contact-list">
            <li className="list-item">
              <i class="fa-solid fa-location-dot fa-2x">
                <span className="contact-text place">Karachi, Pakistan</span>
              </i>
            </li>

            <li className="list-item">
              <i class="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:sidraw24@gmail.com" title="Send me an email">
                    zainabfaizan712@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <ul className="social-media-list">
            <li>
              <a href="https://github.com/Zainab-Faizan-Khan/Zainab-Faizan-Khan" target="_blank" className="contact-icon" rel="noreferrer">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/zainab-faizan-khan-633679196/" target="_blank" className="contact-icon" rel="noreferrer">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/faizan_zainab" target="_blank" className="contact-icon" rel="noreferrer">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
