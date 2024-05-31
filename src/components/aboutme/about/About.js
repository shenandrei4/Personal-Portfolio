import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-1">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Andrei Shen </b>
                and I am a{" "}
                <b className="purple">Sr. Full stack developer</b>{" "}
                in New York, US.
                <br />
                <br />I am proficient in various programming languages such as
                <b className="purple">
                  {" "}
                  HTML, CSS, PHP, JavaScript, TypeScript, Rust, Solidity, Java, and Python.{" "}
                </b>
                <br />
                <br />I also have experience working with frameworks and
                libraries such as
                <b className="purple">
                  {" "}
                  NodeJS, ReactJS, Angular, Vue, APS.NET, Laravel, Web3, and CMS.{" "}
                </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with 
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks.
                </b>
                <br />
                <br />
                In my free time, I enjoy learning new technologies and &nbsp;
                <b className="purple">
                  building new web technologies and products.{" "}
                </b>
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
