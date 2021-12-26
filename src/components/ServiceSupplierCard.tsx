import React from "react";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import {serviceTypes} from "../store/dummyData";
import {Link} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";

type ServiceSupplierProps = {
  supplier: {
    id: number | string;
    fullName: string;
    location: string;
    contact: string;
    image: string;
    isRecommended: boolean;
    rating: number,
    serviceList: string[]
  }

}

const ServiceSupplierCard: React.FC<ServiceSupplierProps> = (props) => {
  const {supplier} = props;

  return (
    <Col sm={12} md={6} className="p-2 service-supplier-card">
      <Card as={Link} to={ROUTE_PATH.SERVICE_SUPPLIER_OVERVIEW + "/" + supplier.id} className="card-div-fluid px-1 py-3">
        <Container>
          <Row>
            <Col sm={3}>
              <Image width={90} src={supplier.image} alt={supplier.fullName}/>

            </Col>
            <Col sm={5}>
              <span>{supplier.fullName}</span><br/>
              <h6><span className="icon-location_on"/> {supplier.location}</h6><br/>

            </Col>
            <Col sm={4}>
              <ReactStars
                count={6}
                size={24}
                value={supplier.rating * 6}
                activeColor="#ffd700"
              />
              {
                supplier.isRecommended &&
                <strong className="text-success"> <span className="icon-check"/> Recommended</strong>

              }
            </Col>
            <Col sm={8} className="mt-2 supper-small-txt">
              <a href="tel:+94766328189"> <span
                className="icon-phone"/> {supplier.contact.substring(0, supplier.contact.length - 4) + '####'}</a>
            </Col>
            <Col sm={4}>
              {
                supplier.serviceList.map(person => serviceTypes.map(service => service.label === person &&
                <span title={service.label} className={ service.icon + " pe-4 icon-svg"} />) )
              }
            </Col>
          </Row>
        </Container>

      </Card>
    </Col>
  )
}

export default ServiceSupplierCard;
