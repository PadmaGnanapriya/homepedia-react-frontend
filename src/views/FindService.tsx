import React, {useState} from "react";
import {Container, Dropdown, DropdownButton, Row} from "react-bootstrap";
import ServiceSupplierCard from "../components/ServiceSupplierCard";
import {cities, serviceTypes, suppliers} from "../store/dummyData";

const FindService: React.FC = () => {
    const [activeLinkIndex, setActiveLinkIndex] = useState(0);

    const handleOnClickSideNavLink = (index: number) => {
        setActiveLinkIndex(index)
    }
    return (
      <div className="d-flex">
          <div style={{width: '200px'}} className="py-3 side-nav-container">
              <DropdownButton id="dropdown-basic-button" title="  City  ">
                  {
                      cities.map(element =>  <Dropdown.Item href="#/action-1">{element}</Dropdown.Item>)
                  }
              </DropdownButton>
              {
                  serviceTypes.map((serviceType, index) =>
                    <div onClick={() => handleOnClickSideNavLink(index)} key={index}
                         className={activeLinkIndex === index ? 'side-link active py-2 px-4' : 'side-link py-2 px-4'}><span
                      className={serviceType.icon}/> {serviceType.label}</div>)
              }
          </div>

          <Container fluid={true} className="py-4 px-3" style={{
              background: 'radial-gradient(circle, rgba(26,8,69,1) 0%, rgba(43,19,98,1) 35%, rgba(50,121,189,1) 100%)'
          }}>
              <Row>
                  {
                      suppliers.map(supplier => <ServiceSupplierCard supplier={supplier}/>)
                  }
              </Row>
          </Container>


      </div>
    )
}
export default FindService;
