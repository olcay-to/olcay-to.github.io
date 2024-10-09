import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo1 from "../assets/img/logo_oy.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo1} alt="Homepage" style={{ width: "15rem" }} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/olcay-yıldız-9a31072bb/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/olcaytoji/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>CREATED BY OLCAY YİLDİZ</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
