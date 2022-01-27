import React, {PropsWithChildren} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import user1 from "../assets/images/user1.png";

// @ts-ignore
import ReactStars from "react-rating-stars-component";

type ServiceSupplierBannerType = {
  serviceSupplier:any
  serviceCategories:any
}
const ServiceSupplierBanner: React.FC<ServiceSupplierBannerType> = (props: PropsWithChildren<ServiceSupplierBannerType>) => {
  const {serviceSupplier, serviceCategories} = props;
  let icon = serviceCategories.filter((serviceCategory:any) =>
    serviceCategory.name.includes(serviceSupplier.serviceTypes[0].slice(1,-2)))[0]?.icon || '';

  return (
    <Container fluid>
      <Row className="carousel-div p-3 pt-4 text-center">
        <Col sm={12} md={6} lg={3} className="text-center">
          <img width={140} src={serviceSupplier.image} alt={serviceSupplier.fullName} />
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
          <h2>{serviceSupplier.fullName}</h2>
          <h6><span className="icon-location_on"/>{serviceSupplier.workingArea}</h6><br/>
          <a href={"tel:"+serviceSupplier.contactNumber} className="text-decoration-none text-dark">
            <span className="icon-phone"/>{serviceSupplier.contactNumber}</a><br/>
          <a href="tel:+94766328189" className="text-decoration-none text-dark">
            <span className="icon-whatsapp"/>{serviceSupplier.contactNumber}</a><br/>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <h3>Working<br/> Days</h3>
          <h6><span className="icon-date_range me-3"/>Monday to Friday</h6><br/>
        </Col>
        <Col sm={12} md={6} lg={3} className="px-3">
          <Card className="text-center card-div-fluid">

            <h5 className="mt-4">  <span className={icon}/> {serviceSupplier.serviceTypes[0]}</h5>
            <hr/>
            <small className="d-block mb-3">5 years experience</small>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ServiceSupplierBanner
