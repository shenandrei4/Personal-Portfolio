import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import Zoom from "react-reveal/Zoom";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import emailjs from "@emailjs/browser";

export default function Contactus() {
  const form = useRef();
  const username = useRef();
  const recaptchaRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_0qzr8ha", "template_2voqa2c", form.current, {
        publicKey: "9N-t1R-HVx1JawwD5",
      })
      .then(
        () => {
          alert(
            `Thanks ${username.current.value}, I will shortly connect with you!`
          );
          console.log("SUCCESS!");
        },
        (error) => {
          alert(`Sorry, ${username.current.value} FAILED.... ${error.text}`);
          console.log("FAILED...", error.text);
        }
      );
  };

  const onChange = ( ) => {
    recaptchaRef.current.execute();
  }

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="from_name" className="label-class">
                          Full Name
                        </label>
                        <input
                          ref={username}
                          type="text"
                          className="form-input input-class"
                          id="from_name"
                          name="from_name"
                          aria-describedby="emailHelp"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="from_mail" className="label-class">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-input input-class"
                          name="from_mail"
                          id="from_mail"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="message" className="label-class">
                          Message
                        </label>
                        <textarea
                          className="form-message input-class"
                          id="message"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                        />
                      </div>
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LejQ-0pAAAAAFChhKIX577EY9k2BNgOsCMNgVTB"
                        onChange={onChange}
                      />
                      <div className="mt-2 submit-btn">
                        <button type="submit" className="submitBtn">
                          Submit
                          <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href={`mailto:shenandrei4@gmail.com`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>shenandrei4@gmail.com</p>
                    </a>
                    <a
                      href={`tel:+1 302 266 1399`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+1 302 266 1399</p>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/PfPWmRTuBjpRh8JR9"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          1885 W 9th St, Brooklyn, NY 11223
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6058.600391247504!2d-73.98103619999999!3d40.6011999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244fe76ce7e5f%3A0x186848375b2c743f!2s1885%20W%209th%20St%2C%20Brooklyn%2C%20NY%2011223!5e0!3m2!1sen!2sus!4v1717128247103!5m2!1sen!2sus"
                      frameBorder="0"
                      allowFullScreen=""
                      aria-hidden="false"
                      title="Contact Me"
                      tabIndex="0"
                      loading="lazy"
                      className=""
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
