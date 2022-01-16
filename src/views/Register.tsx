import React, {useState} from 'react';
import BackgroundImage from "../components/BackGroundImg";
import image from "../assets/images/background.webp";
import {Button, Card, Col, Form, Image, Row} from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import {Link} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";
import {uploadCertificate, uploadPayment, uploadServiceSupplierImage} from "../utils/ImageUploadService";

const Register: React.FC = () => {
  const [profileImage, setProfileImage] = useState('');
  const [certificateImage, setCertificateImage] = useState('');
  const [paymentImage, setPaymentImage] = useState('');
  const [paymentType, setPaymentType] = useState('');

  const handleProfileImageChange = async (e: { target: { files: File[]; }; }) => {
    // setImage(e.target.files[0]);
    setProfileImage(URL.createObjectURL(e.target.files[0]));
    const profileImageUploaded = await uploadServiceSupplierImage(e.target.files[0]);
    console.log(profileImageUploaded);
  }
  const handleCertificateImageChange = async (e: { target: { files: File[]; }; }) => {
    setCertificateImage(URL.createObjectURL(e.target.files[0]));
    const certificateImageUploaded = await uploadCertificate(e.target.files[0]);
    console.log(certificateImageUploaded);
  }
  const handlePaymentImageChange = async (e: { target: { files: File[]; }; }) => {
    setPaymentImage(URL.createObjectURL(e.target.files[0]));
    const paymentImageUploaded = await uploadPayment(e.target.files[0]);
    console.log(paymentImageUploaded);
  }

  return (
    <BackgroundImage image={image}>
      <Card style={{maxWidth: '900px'}} className="card-div-fluid p-3 mx-auto my-4">
        <Image className="m-auto" width={180} src={logo}/>
        <div className="text-center my-2">
          <h1 className="h4">Register</h1>
          <small>Lets create your account</small>
        </div>
        <Form>
          <Row>
            <Form.Group className="mb-2" controlId="formGroupName" as={Col} sm={12} md={6}>
              <Form.Control type="text" placeholder="Full Name"/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupNic" as={Col} sm={12} md={6}>
              <Form.Control type="text" placeholder="NIC number"/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupPassword" as={Col} sm={12} md={6}>
              <Form.Control type="password" placeholder="Enter Strong Password"/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupRePassword" as={Col} sm={12} md={6}>
              <Form.Control type="password" placeholder="Re enter Password"/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupContact" as={Col} sm={12} md={6}>
              <Form.Control type="text" placeholder="Contact Number"/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupEmail" as={Col} sm={12} md={6}>
              <Form.Control type="email" placeholder="Enter your email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupProfilePicture" as={Col} sm={12} md={6}>
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control className="mb-0" type="file" accept="image/*" required
                // @ts-ignore
                            onChange={handleProfileImageChange}/>
              { profileImage &&
                  <img src={profileImage} className="img-fluid mt-2" alt="book image" style={{height: '170px'}}/>
              }
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAddress" as={Col} sm={12} md={6}>
              <Form.Label className="d-block" as={Col} sm={12} md={6}>
                <label>Gender</label></Form.Label>
              <input type={"radio"}/><span>Male</span> &nbsp;&nbsp;
              <input type={"radio"}/><span>Female</span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAddress" as={Col} sm={12} md={6}>
              <Form.Control as="textarea" aria-label="With textarea" placeholder="Your Address"/>
            </Form.Group>

            <hr/>
            <Form.Group className="mb-3" controlId="formGroupCopyCertificate" as={Col} sm={12} md={6}>
              <Form.Label>Working Time</Form.Label>
              <div className="d-flex">
                <Form.Control className="w-50" type="time" placeholder="Copy of Certificate"/>
                <Form.Control className="w-50" type="time" placeholder="Copy of Certificate"/>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCopyCertificate" as={Col} sm={12} md={6}>
              <Form.Label>Copy of Certificate</Form.Label>
              <Form.Control className="mb-0" type="file"
                // @ts-ignore
                            onChange={handleCertificateImageChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupWorkingExperience" as={Col} sm={12} md={6}>
              <Form.Control as="textarea" aria-label="With textarea" placeholder="Working Experience"/>
            </Form.Group>
            <hr/>
            <Col sm={12} md={6}>
              <Form.Select aria-label="Default select example">
                <option>~ select your plan ~</option>
                <option value="1">6 Months. Rs.4000</option>
                <option value="2">12 Months Rs.7000</option>
                <option value="3">24 Months Rs.13000</option>
              </Form.Select>
            </Col>
            <Form.Group className="mb-3" controlId="formGroupAddress" as={Col} sm={12} md={6}>
              <Form.Label className="d-block">Payment Type</Form.Label>
              <input value="manual" name="paymentType" type="radio"
                     onChange={() => setPaymentType('manual')}/><span>Manual</span> &nbsp;&nbsp;
              <input value="online" name="paymentType" type="radio"
                     onChange={() => setPaymentType('online')}/><span>Online</span>
            </Form.Group>

            { paymentType === 'manual' &&
                <Form.Group className="mb-3" controlId="formGroupProfilePicture" as={Col} sm={12} md={6}>
                    <Form.Label>Upload Payment Slip</Form.Label>
                    <Form.Control type="file" accept="image/*" placeholder="Payment Slip"
                      // @ts-ignore
                                  onChange={handlePaymentImageChange}/>
                  {
                    paymentImage &&
                      <img src={paymentImage} className="img-fluid mt-2" alt="book image" style={{height: '170px'}}/>
                  }
                </Form.Group>
            }
            { paymentType === 'online' &&
                <React.Fragment>
                  {/*    TODO: Add here */}
                    Online payment
                </React.Fragment>
            }
            <Form.Group className="mb-3" id="formGridCheckbox">
              <input type="checkbox"/>&nbsp;
              <small>I have agreed to&nbsp;
                <a target="_blank" href={ROUTE_PATH.TERMS_AND_CONDITIONS}>Terms and Conditions</a></small>
            </Form.Group>
            <Col className="text-center" sm={12}>
              <Button type="submit" className="px-5 my-3">Register</Button>
              <small className="d-block">Do you have an account?<Link to={ROUTE_PATH.LOGIN}> Sign In</Link></small>
            </Col>
          </Row>
        </Form>
      </Card>
    </BackgroundImage>
  );
}

export default Register;
