import React, {useEffect, useRef} from 'react';
import {Carousel, Col, Container, Dropdown, DropdownButton, Row} from "react-bootstrap";
import ServiceSupplierCard from "../components/ServiceSupplierCard";
import bannerImage from "../assets/images/background.webp"
import ServiceSupplierBanner from "../components/ServiceSupplierBanner";
import CategoryCard from "../components/CategoryCard";
import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchServiceCategories, selectAllServiceCategories} from "../store/ServiceCategorySlice";
import Loading from "../components/Loading";
import {toast} from "react-toastify";
import {
  fetchAllApprovedServiceSuppliers,
  selectAllServiceSuppliers
} from "../store/ServiceSupplierSlice";

const Home: React.FC = () => {
  const myRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch()

  const serviceCategories = useSelector(selectAllServiceCategories)
  const serviceSupplierStatus = useSelector((state: any) => state.serviceSuppliers.status)
  const serviceCategoriesStatus = useSelector((state: any) => state.serviceCategories.status)
  const serviceSupplierError = useSelector((state: any) => state.serviceSuppliers.error)
  const serviceCategoriesError = useSelector((state: any) => state.serviceCategories.error)

  const suppliers = useSelector(selectAllServiceSuppliers)

  useEffect(() => {
    if (serviceCategoriesStatus === 'idle') {
      dispatch(fetchServiceCategories());
    }
    if (serviceCategoriesError) {
      toast.error(serviceCategoriesError)
    }
    if (serviceSupplierStatus === 'idle' || serviceCategories.length === 0) {
      dispatch(fetchAllApprovedServiceSuppliers());
    }
    if (serviceSupplierError) {
      toast.error(serviceSupplierError)
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
      <Container fluid={true} className="py-4 px-3 px-md-5">
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
          <Col sm={12} className="text-light p-3"><h3> Popular service suppliers</h3></Col>
          {
            suppliers.slice(0, 10).map((supplier: any, index: number) =>
              <ServiceSupplierCard key={'card' + index} supplier={supplier} serviceCategories={serviceCategories}/>)
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
            serviceCategories.map((serviceCategory: any, index: number) =>
              <CategoryCard key={index + 'category'} sm={6} md={6} lg={4} label={serviceCategory.name}
                            icon={serviceCategory.icon} index={index}/>)
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
