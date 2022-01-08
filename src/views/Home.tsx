import React, {useEffect, useRef} from 'react';
import {Carousel, Col, Container, Dropdown, DropdownButton, Row} from "react-bootstrap";
import ServiceSupplierCard from "../components/ServiceSupplierCard";
import { suppliers} from "../store/dummyData";
import bannerImage from "../assets/images/background.webp"
import ServiceSupplierBanner from "../components/ServiceSupplierBanner";
import CategoryCard from "../components/CategoryCard";
import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchServiceCategories, selectAllServiceCategories} from "../store/ServiceCategorySlice";
import Loading from "../components/Loading";

const Home: React.FC = () => {
    const myRef = useRef(null);
    const location = useLocation();
    const dispatch = useDispatch()

    const serviceCategories = useSelector(selectAllServiceCategories)
    const serviceCategoriesStatus = useSelector((state: any) => state.serviceCategories.status)
    const serviceCategoriesError = useSelector((state: any) => state.serviceCategories.error)

    useEffect(() => {
        if (serviceCategoriesStatus === 'idle') {
            dispatch(fetchServiceCategories());
        }
    }, [serviceCategoriesStatus, dispatch])

    useEffect(() => {
        if (location.hash !== '') {
            // @ts-ignore
            myRef.current.scrollIntoView();
        }
    })

    return (
      <Container fluid={true} className="p-0 blue-bg-color">
          <img src={bannerImage} className="img-fluid w-100"/>
          <Container fluid={true} className="py-4 px-3 px-md-5" >
              <h3 className="ps-4 text-light">Premium Members</h3>
              <Carousel>
                  <Carousel.Item>
                      <ServiceSupplierBanner/>
                  </Carousel.Item>
                  <Carousel.Item>
                      <ServiceSupplierBanner/>
                  </Carousel.Item>
                  <Carousel.Item>
                      <ServiceSupplierBanner/>
                  </Carousel.Item>
                  <Carousel.Item>
                      <ServiceSupplierBanner/>
                  </Carousel.Item>
                  <Carousel.Item>
                      <ServiceSupplierBanner/>
                  </Carousel.Item>
              </Carousel>

              <Row className="pt-5">
                  <Col sm={4} className="text-center text-light p-3"><h3> Filter By</h3></Col>
                  <Col sm={4} className="p-3">
                      <DropdownButton id="dropdown-basic-button" title="  City  ">
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </DropdownButton>
                  </Col>
                  <Col sm={4} className="p-3">
                      <DropdownButton id="dropdown-basic-button" title="  Service  ">
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </DropdownButton>
                  </Col>
                  {
                      suppliers.map(supplier => <ServiceSupplierCard supplier={supplier}/>)
                  }

                  <br/>
                  <br/>
                  <br/>
                  <hr/>
                  <br/>
                  <h3 id="categories" ref={myRef} className="text-light">Categories</h3>
                  {
                      serviceCategoriesStatus === 'loading' &&
                    <Loading/>
                  }
                  {
                      serviceCategories.map((serviceCategory:any) =>
                        <CategoryCard sm={6} md={6} lg={4} label={serviceCategory.name} icon={serviceCategory.icon}/>)
                  }
              </Row>
          </Container>
      </Container>
    );
}

export default Home;
