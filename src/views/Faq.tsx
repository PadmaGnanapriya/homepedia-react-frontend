import React from "react";
import image from "../assets/images/background.webp";
import {Accordion, Card, Image} from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import BackgroundImage from "../components/BackGroundImg";
import {Link} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";

// TODO: Add a map and loop data.
const Faq: React.FC = () => {
  return (
    <BackgroundImage image={image}>
      <Card style={{maxWidth: '900px'}} className="card-div-fluid p-1 mx-auto my-4">
        <Image className="m-auto" width={180} src={logo}/>
        <h1 className="h4 text-center">FAQ</h1>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <small className="d-block text-center p-4">Don't get proper solution?<Link to={ROUTE_PATH.CONTACT}> Send your
          question</Link></small>

      </Card>
    </BackgroundImage>
  )
}
export default Faq
