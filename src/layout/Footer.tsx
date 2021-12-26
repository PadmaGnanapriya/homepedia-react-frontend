import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {ROUTE_PATH} from "../constants/RoutePaths";
import {Link} from "react-router-dom";
import logo from "../assets/images/logo2.webp";

const Footer: React.FC = () => {
    return (
      <Container fluid={true} className="footer-div mt-auto pt-3">
          <Row>

              <Col xs={12} sm={12} md={4} className="p-2 p-md-3">
                  <h4>Homepedia</h4>
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used a</p>
              </Col>

              <Col xs={12} sm={6} md={4} className="p-2 p-md-3">
                  <h4>Contact Info</h4>
                  <a target="_blank" href="https://www.google.com/maps/place/University+of+Kelaniya+-+Sri+Lanka/@6.9744491,79.9138713,17z/data=!3m1!4b1!4m5!3m4!1s0x3ae258033380c747:0x12c707892cabde33!8m2!3d6.9744491!4d79.91606">
                      <span className="icon-location_on"/>  University Kandy Road Kelaniya, 11600</a><br/>
                  <a href="tel:+94766328189"> <span className="icon-phone"/>  +94 766 328 189</a><br/>
                  <a href="mailto:homepedia@gmail.com"><span className="icon-email"/>  homepedia@gmail.com</a>
                  <Image width={180} className="img-fluid mx-auto d-lg-none" src={logo}/>
              </Col>

              <Col xs={12} sm={6} md={4} lg={2} className="p-2 p-md-3">
                  <h4>Quick Links</h4>
                  <ul>
                      <li><Link to={ROUTE_PATH.HOME} className="text-light pt-3 px-1 px-sm-2 px-md-4">Home</Link>
                      </li>
                      <li>
                          <Link to={ROUTE_PATH.LOGIN} className="text-light pt-3 px-1 px-sm-2 px-md-4">Login</Link>
                      </li>
                      <li>
                          <Link to={ROUTE_PATH.REGISTER} className="text-light pt-3 px-1 px-sm-2 px-md-4">Register</Link>
                      </li>
                      <li>
                          <Link to={ROUTE_PATH.ABOUT} className="text-light pt-3 px-1 px-sm-2 px-md-4">About</Link>
                      </li>
                      <li>
                          <Link to={ROUTE_PATH.CONTACT} className="text-light pt-3 px-1 px-sm-2 px-md-4">Contact</Link>
                      </li>
                  </ul>
              </Col>
              <Col xs={2} className="d-none d-lg-block  pt-5 pe-4">
                  <Image  className="img-fluid w-100" src={logo}/>
              </Col>
              <Col xs={12} className="text-center pb-3 text-light">
                  <hr/>
                  <small>
                      &copy; {new Date().getFullYear()}. All Rights Reserved. Site by Elite Team. UOK
                  </small>
              </Col>
          </Row>
      </Container>
    )
}
export default Footer;
