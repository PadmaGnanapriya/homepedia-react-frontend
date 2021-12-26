import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import user1 from "../assets/images/user1.png";

// @ts-ignore
import ReactStars from "react-rating-stars-component";

const ServiceSupplierBanner: React.FC = () => {
  return (
    <Container fluid>
      <Row className="carousel-div p-3 pt-4 text-center">
        <Col sm={12} md={6} lg={3} className="text-center">
          <img
            width={160}
            src={user1}
            alt="First slide"

          />
          <br/>
          <ReactStars
            className="d-flex m-5"
            count={6}
            size={35}
            value={.6 *6}
            edit={false}
            activeColor="#ffd700"
          />

          <strong className="text-success">Recommended
          </strong>
        </Col>
        <Col sm={12} md={6} lg={3}>

          <h2>Full Name</h2>
          <h6><span className="icon-location_on"/>  Location</h6><br/>
          <a href="tel:+94766328189" className="text-decoration-none text-dark"> <span className="icon-phone"/>  +94 766 328 189</a><br/>
          <a href="tel:+94766328189" className="text-decoration-none text-dark"> <span className="icon-whatsapp"/>   +94 766 328 189</a><br/>

        </Col>
        <Col sm={12} md={6} lg={3}>
          <h3>Working Days</h3>
          <h6><span className="icon-date_range me-3"/>Monday to Friday</h6><br/>
          <h3>Working Time</h3>
          <h6><span className="icon-access_alarm me-3"/>8.00AM - 5.00PM</h6>
        </Col>
        <Col sm={12} md={6} lg={3} className="px-3">
          <Card className="text-center card-div-fluid">

            <h5 className="mt-4">  <span className="icon-con-helmet"/> Mason</h5>
            <hr/>
            <small className="d-block mb-3">5 years experience</small>
          </Card>

        </Col>

      </Row>
    </Container>
  )
}

export default ServiceSupplierBanner
