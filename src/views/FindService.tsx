import React, {useEffect, useState} from "react";
import {Container, Dropdown, DropdownButton, Row} from "react-bootstrap";
import ServiceSupplierCard from "../components/ServiceSupplierCard";
import {cities} from "../store/dummyData";
import {useDispatch, useSelector} from "react-redux";
import {fetchServiceCategories, selectAllServiceCategories} from "../store/ServiceCategorySlice";
import {fetchAllApprovedServiceSuppliers, selectAllServiceSuppliers} from "../store/ServiceSupplierSlice";
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";

const FindService: React.FC = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState(sessionStorage.getItem('activeIndex') || 0);
  const dispatch = useDispatch()

  const serviceCategories = useSelector(selectAllServiceCategories)
  const serviceCategoriesStatus = useSelector((state: any) => state.serviceCategories.status)
  const serviceCategoriesError = useSelector((state: any) => state.serviceCategories.error)
  const suppliers = useSelector(selectAllServiceSuppliers)
  const serviceSupplierStatus = useSelector((state: any) => state.serviceSuppliers.status)
  const serviceSupplierError = useSelector((state: any) => state.serviceSuppliers.error)
  const [filteredSuppliers, setFilteredSuppliers] = useState([])

  const location = useLocation();
  const navigate = useNavigate();


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
    setFilteredSuppliers(suppliers.filter((supplier: any) =>
      supplier.serviceTypes.includes(serviceCategories[activeLinkIndex]?.name)
    ))
  }, [suppliers, activeLinkIndex, location])


  const handleOnClickSideNavLink = (index: number) => {
    setActiveLinkIndex(index)
    navigate(ROUTE_PATH.FIND_SERVICE + "/" + serviceCategories[index]?.name)

  }
  return (
    <div className="d-flex">
      <div style={{width: '200px'}} className="py-3 side-nav-container">
        <DropdownButton id="dropdown-basic-button" title="  City  ">
          {
            cities.map((element, index) =>
              <Dropdown.Item key={index} href="#/action-1">{element}</Dropdown.Item>)
          }
        </DropdownButton>
        {
          serviceCategories.map((serviceType: any, index: number) =>
            <div onClick={() => handleOnClickSideNavLink(index)} key={index}
              //** don't use == in below line **//
                 className={activeLinkIndex == index ? 'side-link active py-2 px-4' : 'side-link py-2 px-4'}>
              <span className={serviceType.icon}/> {serviceType.name}</div>)
        }
      </div>

      <Container fluid={true} className="py-4 px-3" style={{
        background: 'radial-gradient(circle, rgba(26,8,69,1) 0%, rgba(43,19,98,1) 35%, rgba(50,121,189,1) 100%)'
      }}>
        <Row>
          {
            filteredSuppliers.length > 0 &&
            filteredSuppliers.slice(0, 10).map((supplier: any, index: number) =>
              <ServiceSupplierCard key={'card' + index} supplier={supplier} serviceCategories={serviceCategories}/>)
          }
        </Row>
      </Container>
    </div>
  )
}
export default FindService;
