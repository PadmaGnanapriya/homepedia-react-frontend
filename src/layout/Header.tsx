import React, {useEffect, useState} from "react";
import {Button, Form, FormControl, Image, Nav, Navbar, NavDropdown, OverlayTrigger, Popover} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";
import logo from "../assets/images/logo2.webp";
import {useDispatch, useSelector} from "react-redux";
import {loggedRole, signOut} from "../store/authSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const role = useSelector(loggedRole);
  const handleLogOut = () => {
    dispatch(signOut());
  }

  return (
    <React.Fragment>
      <div className=" header-div-top py-1 text-end">
        <span className="icon-gps_fixed"/> <span className="me-3">Galle</span>
        <a className="text-decoration-none text-light p-0  mx-3" href="tel:+94766328189"> <span
          className="icon-phone"/> +94 766 328 189</a>
        <a className="text-decoration-none text-light  mx-3" href="mailto:homepedia@gmail.com"><span
          className="icon-email"/> homepedia@gmail.com</a>
        <span className="icon-facebook2 me-2"/>
        <span className="icon-whatsapp me-2"/>
        <span className="icon-instagram me-2"/>
        <span className="icon-skype me-4"/>
      </div>

      <Navbar collapseOnSelect expand="md" className="p-0 sticky-top header-div-bottom text-light">
        <Navbar.Brand>
          <Link to={'/'} className="mx-4 my-0 p-0">
            <Image width={110} className="img-fluid" src={logo}/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={ROUTE_PATH.FIND_SERVICE}>Find Services</Nav.Link>
            <Nav.Link as={Link} to={'../#categories'}>Categories</Nav.Link>
            <Nav.Link as={Link} to={ROUTE_PATH.ABOUT}>About</Nav.Link>
            <Nav.Link as={Link} to={ROUTE_PATH.CONTACT}>Contact Us</Nav.Link>
                <NavDropdown title="More" id="collasible-nav-dropdown3">
                  <NavDropdown.Item as={Link} to={ROUTE_PATH.TERMS_AND_CONDITIONS}>Terms & Conditions</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={ROUTE_PATH.FAQ}>FAQ</NavDropdown.Item>
                  {
                    role === 'Viewer' &&
                      <NavDropdown.Item as={Link} to={ROUTE_PATH.FORGOT_PASSWORD}>Forgot Password</NavDropdown.Item>
                  }
                </NavDropdown>
            {
              role === 'Administrator' &&
              <Nav.Link as={Link} to={ROUTE_PATH.DASHBOARD}>Dashboard</Nav.Link>
            }
          </Nav>
          <Nav>
            {
              role === 'ServiceSupplier' &&
                <React.Fragment>
                    <OverlayTrigger
                        trigger="click"
                        placement="bottom"
                        overlay={
                          <Popover id={`popover-positioned-bottom`}>
                            <Popover.Header as="h3">{`Recent Notifications`}</Popover.Header>
                            <Popover.Body>
                              <span>Your password has been successfully changed.</span><br/>
                              <small className="d-block text-end supper-small">26/11/2021 8.30 PM</small>
                              <hr/>
                              <span>Your account creating was successful.</span><br/>
                              <small className="d-block text-end supper-small">26/08/2021 9.30 PM</small>
                              <hr/>
                              <Nav.Link as={Link} to={ROUTE_PATH.NOTIFICATION_MANAGEMENT}>
                                <Button className=" btn-secondary w-100">View All Notifications</Button>
                              </Nav.Link>
                            </Popover.Body>
                          </Popover>
                        }
                    >
                        <span className="icon-notifications_on  pt-3 pe-4"/>
                    </OverlayTrigger>

                    <span className="icon-person d-block pt-3"/>
                    <NavDropdown title="User" id="collasible-nav-dropdown2">
                        <NavDropdown.Item as={Link} to={ROUTE_PATH.PROFILE}
                                          className="text-dark">Profile</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={ROUTE_PATH.RESET_PASSWORD} className="text-dark">Reset
                            Password</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={ROUTE_PATH.RE_NEW_MEMBERSHIP}>Renew
                            Membership</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">
                            <Button onClick={handleLogOut} className="px-4 py-1 w-100">Log out</Button>
                        </NavDropdown.Item>
                    </NavDropdown>
                </React.Fragment>
            }
            {
              role === 'Administrator' &&
                <NavDropdown title="Admin" id="collasible-nav-dropdown2">

                    <NavDropdown.Item as={Link} to={ROUTE_PATH.MESSAGE_MANAGEMENT} className="text-dark">
                        Message Management</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={ROUTE_PATH.SERVICE_SUPPLIER_MANAGEMENT} className="text-dark">
                        Service Supplier Management</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={ROUTE_PATH.INCOME_MANAGEMENT} className="text-dark">
                        Income Management</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={ROUTE_PATH.FAQ_MANAGEMENT} className="text-dark">
                        FAQ Management</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={ROUTE_PATH.USER_REVIEW_MANAGEMENT} className="text-dark">
                        Review Management</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action/3.4">
                        <Button onClick={handleLogOut} className="px-4 py-1">Log out</Button>
                    </NavDropdown.Item>
                </NavDropdown>
            }
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button><span className="icon-search h3"/> </Button>
              &nbsp;
            </Form>
            {
              role === 'Viewer' &&
                <Nav.Link as={Link} to={ROUTE_PATH.LOGIN} className="py-1 px-4">
                    <Button className="px-4 py-1">Login</Button></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}
export default Header;
