import React, {useEffect, useState} from "react";
import {Container, Dropdown, DropdownButton, Row} from "react-bootstrap";
import ServiceSupplierCard from "../components/ServiceSupplierCard";
import {cities, suppliers} from "../store/dummyData";
import {useDispatch, useSelector} from "react-redux";
import {fetchServiceCategories, selectAllServiceCategories} from "../store/ServiceCategorySlice";

const FindService: React.FC = () => {
    const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const dispatch = useDispatch()

  const serviceCategories = useSelector(selectAllServiceCategories)
  const serviceCategoriesStatus = useSelector((state: any) => state.serviceCategories.status)
  const serviceCategoriesError = useSelector((state: any) => state.serviceCategories.error)

  useEffect(() => {
    if (serviceCategoriesStatus === 'idle') {
      dispatch(fetchServiceCategories());
    }
  }, [serviceCategoriesStatus, dispatch])

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
                  serviceCategories.map((serviceType:any, index:number) =>
                    <div onClick={() => handleOnClickSideNavLink(index)} key={index}
                         className={activeLinkIndex === index ? 'side-link active py-2 px-4' : 'side-link py-2 px-4'}>
                      <span className={serviceType.icon}/> {serviceType.name}</div>)
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
