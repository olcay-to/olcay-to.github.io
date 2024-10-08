import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Me" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact Me</h2>
                  <ul className="contact-info">
                    <li>Email: <a href="mailto:olcy.yldiz@gmail.com">olcy.yldiz@gmail.com</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/olcay-yıldız-9a31072bb/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
                    <li>Instagram: <a href="https://www.instagram.com/olcaytoji/" target="_blank" rel="noopener noreferrer">@olcaytoji</a></li>
                  </ul>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
