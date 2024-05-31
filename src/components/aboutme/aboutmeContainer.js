import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function AboutmeContainer() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            md={12}
            className="home-about-description d-flex justify-content-start"
          >
            <Zoom left cascade>
              <h1 className="aboutme-heading">About me</h1>
            </Zoom>
          </Col>
          <Col ms={12} className="d-flex flex-column">
            <div>
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
