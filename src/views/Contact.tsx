import React from 'react';
import image from "../assets/images/page-contact.webp";
import BackgroundImage from "../components/BackGroundImg";
import {Button, Card, Form, Image} from "react-bootstrap";
import logo from "../assets/images/logo.webp";

const Contact: React.FC = () => {

    return (
      <BackgroundImage image={image}>

          <Card className="card-div p-3">
              <Image className="m-auto" width={180} src={logo}/>
              <div className="text-center my-2">
                  <h1 className="h4">Contact Us</h1>
                  <small>Lets discuss about your problem with us.</small>
              </div>

              <Form>
                  <Form.Group className="mb-3" controlId="formGroupName">
                      {/*<Form.Label>Full Name</Form.Label>*/}
                      <Form.Control type="text" placeholder="Full Name"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                      {/*<Form.Label>Email address</Form.Label>*/}
                      <Form.Control type="email" placeholder="Enter email"/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGroupMessage">
                      {/*<Form.Label>Message</Form.Label>*/}
                      <Form.Control as="textarea" aria-label="With textarea" placeholder="Your Message" />
                  </Form.Group>


                  <div className="text-center">
                      <Button type="submit" className="px-5 my-3">Send</Button>
                  </div>
              </Form>

          </Card>

      </BackgroundImage>
    );
}

export default Contact;
