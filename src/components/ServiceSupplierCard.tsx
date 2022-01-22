import React from "react";
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";
// @ts-ignore
import ReactStars from "react-rating-stars-component";

type ServiceSupplierProps = {
  supplier: {
    _id: number | string;
    fullName: string;
    workingArea: string;
    contactNumber: string;
    image: string;
    isRecommended: boolean;
    rate: number,
    serviceTypes: string[]
  }
  serviceCategories: any[]

}

const ServiceSupplierCard: React.FC<ServiceSupplierProps> = (props) => {
  const {supplier, serviceCategories} = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTE_PATH.SERVICE_SUPPLIER_OVERVIEW + "/" + supplier._id);
  }

  return (
    <Col sm={12} md={6} className="p-2 service-supplier-card">
      <Card onClick={handleClick} className="card-div-fluid px-1 py-3">
        <Container>
          <Row>
            <Col sm={3}>
              <Image width={90} src={supplier.image} alt={supplier.fullName}/>

            </Col>
            <Col sm={5}>
              <span>{supplier.fullName}</span><br/>
              <h6><span className="icon-location_on"/> {supplier.workingArea}</h6><br/>

            </Col>
            <Col sm={4}>
              <ReactStars
                count={6}
                size={24}
                value={supplier.rate * 6}
                activeColor="#ffd700"
              />
              {
                supplier.isRecommended &&
                <strong className="text-success"> <span className="icon-check"/> Recommended</strong>

              }
            </Col>
            <Col sm={8} className="mt-2 supper-small-txt">
              <a href="tel:+94766328189"> <span
                className="icon-phone"/> {supplier.contactNumber.substring(0, supplier.contactNumber.length - 4) + '####'}</a>
            </Col>
            <Col sm={4}>
              {
                supplier.serviceTypes.map((service, index) => {
                  let icon = serviceCategories.filter(serviceCategory => serviceCategory.name.includes(service.slice(1,-2)))[0]?.icon || '';
                  return ( <span key={index} title={service} className={ icon + " pe-4 icon-svg"} />)
                } )}
            </Col>
          </Row>
        </Container>

      </Card>
    </Col>
  )
}

export default ServiceSupplierCard;
