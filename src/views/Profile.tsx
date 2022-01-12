import React, {useState} from "react";
import BackgroundImage from "../components/BackGroundImg";
import image from "../assets/images/background.webp";
import {Button, Card, Col, Form, Image, Row} from "react-bootstrap";
import profileImage from "../assets/images/user1.png";
import {ROUTE_PATH} from "../constants/RoutePaths";
import {Link} from "react-router-dom";

const Profile: React.FC = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsUpdating(false);
  }

  return (
    <BackgroundImage image={image}>
      <Card style={{maxWidth: '900px'}} className="card-div-fluid p-3 mx-auto my-4">
        <div className="text-center my-2">
          <Image className="m-auto rounded-circle" width={200} src={profileImage}/>
          <h1 className="h4">Full Name</h1>
        </div>

        <Form onSubmit={e => handleSubmit(e)}>
          <Row>
            <Form.Group className="mb-2" controlId="formGroupName" as={Col} sm={12} md={6}>
              <Form.Label>Full Name</Form.Label>
              <Form.Control disabled={!isUpdating} type="text" placeholder="Full Name"/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupNic" as={Col} sm={12} md={6}>
              <Form.Label>NIC</Form.Label>
              <Form.Control disabled={!isUpdating} type="text" placeholder="NIC number"/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupContact" as={Col} sm={12} md={6}>
              <Form.Label>Contact</Form.Label>
              <Form.Control disabled={!isUpdating} type="text" placeholder="Contact Number"/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupEmail" as={Col} sm={12} md={6}>
              <Form.Label>Email address</Form.Label>
              <Form.Control disabled={!isUpdating} type="email" placeholder="Enter your email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAddress" as={Col} sm={12} md={6}>
              <Form.Label>Message</Form.Label>
              <Form.Control disabled={!isUpdating} as="textarea" aria-label="With textarea" placeholder="Your Address"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupProfilePicture" as={Col} sm={12} md={6}>
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control disabled={!isUpdating} type="file" placeholder="Upload Profile Picture"/>
            </Form.Group>
            <hr/>
            <Form.Group className="mb-3" controlId="formGroupCopyCertificate" as={Col} sm={12} md={6}>
              <Form.Label>Working Time</Form.Label>
              <div className="d-flex">
                <Form.Control disabled={!isUpdating} className="w-50" type="time" placeholder="Copy of Certificate"/>
                <Form.Control disabled={!isUpdating} className="w-50" type="time" placeholder="Copy of Certificate"/>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCopyCertificate" as={Col} sm={12} md={6}>
              <Form.Label>Copy of Certificate</Form.Label>
              <Form.Control disabled={!isUpdating} type="file" placeholder="Copy of Certificate"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupWorkingExperience" as={Col} sm={12} md={6}>
              <Form.Label>Working Experience</Form.Label>
              <Form.Control disabled={!isUpdating} as="textarea" aria-label="With textarea"
                            placeholder="Working Experience"/>
            </Form.Group>
            <Col className="text-center" sm={12}>
              {
                isUpdating ?
                  <Button type="submit" className="px-5 my-3">Save And Update Profile Details</Button> :
                  <Link onClick={() => setIsUpdating(true)} to={ROUTE_PATH.PROFILE}>
                    Are you need to update details?</Link>
              }
            </Col>
          </Row>
        </Form>
      </Card>
    </BackgroundImage>

  )
}
export default Profile;
