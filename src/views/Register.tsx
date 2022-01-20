import React, {useState} from 'react';
import BackgroundImage from "../components/BackGroundImg";
import image from "../assets/images/background.webp";
import {Button, Card, Col, Form, Image, Row} from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import {Link} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";
import {uploadCertificate, uploadPayment, uploadServiceSupplierImage} from "../utils/ImageUploadService";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {addNewServiceSupplier} from "../store/ServiceSupplierSlice";

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState('');
  const [certificateImage, setCertificateImage] = useState('');
  const [paymentImage, setPaymentImage] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [profileImageUploaded, setProfileImageUploaded] = useState('');
  const [certificateImageUploaded, setCertificateImageUploaded] = useState('');
  const [paymentImageUploaded, setPaymentImageUploaded] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleProfileImageChange = async (e: { target: { files: File[]; }; }) => {
    setIsLoading(true);
    setProfileImage(URL.createObjectURL(e.target.files[0]));
    let imageUrl = await uploadServiceSupplierImage(e.target.files[0]);
    setProfileImageUploaded(imageUrl);
    setIsLoading(false);

  }
  const handleCertificateImageChange = async (e: { target: { files: File[]; }; }) => {
    setIsLoading(true);
    setCertificateImage(URL.createObjectURL(e.target.files[0]));
    let imageUrl = await uploadCertificate(e.target.files[0]);
    setCertificateImageUploaded(imageUrl);
    setIsLoading(false);

  }
  const handlePaymentImageChange = async (e: { target: { files: File[]; }; }) => {
    setIsLoading(true);
    setPaymentImage(URL.createObjectURL(e.target.files[0]));
    let imageUrl = await uploadPayment(e.target.files[0]);
    setPaymentImageUploaded(imageUrl)
    setIsLoading(false);

  }

  const planList = [
    {_id: 1, name: '6 months', amount: 8000},
    {_id: 2, name: '12 months', amount: 15000},
    {_id: 3, name: '18 months', amount: 20000},
  ]
  const [fullName, setFullName] = useState('');
  const [nic, setNic] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [workingArea, setWorkingArea] = useState('');
  const [workingTimeStart, setWorkingTimeStart] = useState('');
  const [workingTimeEnd, setWorkingTimeEnd] = useState('');
  const [serviceTypes, setServiceTypes] = useState([]);
  const [workingExperience, setWorkingExperience] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<any>(0);


  const handleSubmit = (e: any) => {
    e.preventDefault();
    const d = new Date();
    let selectedIndex = planList.findIndex((element, index) => {
      if (element._id === selectedPlan) {
        return true;
      }
    })

    if (password !== password2) {
      toast.warn("Password mismatched");
      return;
    }
    if (password.length < 6) {
      toast.warn("Password should be longer than 6 characters");
      return;
    }

    const newServiceSupplier = {
      fullName,
      nic,
      contactNumber,
      email,
      password,
      image: profileImageUploaded,
      gender,
      address,
      workingArea,
      workingTimeStart,
      workingTimeEnd,
      serviceTypes,
      copyOfCertificate: certificateImageUploaded || [],
      workingExperience,
      selectedPlan: planList.filter((plan) => plan._id == selectedPlan)[0].name,
      isVip: selectedIndex > 2,
      expiredDate: new Date(d.setMonth(d.getMonth() + selectedIndex * 6 + 6)),
      rate: 0,

    }
    dispatch(addNewServiceSupplier(newServiceSupplier));


  }

  return (
    <BackgroundImage image={image}>
      <Card style={{maxWidth: '900px'}} className="card-div-fluid p-3 mx-auto my-4">
        <Image className="m-auto" width={180} src={logo}/>
        <div className="text-center my-2">
          <h1 className="h4">Register</h1>
          <small>Lets create your account</small>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="mb-2" controlId="formGroupName" as={Col} sm={12} md={6}>
              <Form.Control type="text" placeholder="Full Name" required onChange={e => setFullName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupNic" as={Col} sm={12} md={6}>
              <Form.Control type="text" placeholder="NIC number" required onChange={e => setNic(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupPassword" as={Col} sm={12} md={6}>
              <Form.Control type="password" placeholder="Enter Strong Password"
                            required onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupRePassword" as={Col} sm={12} md={6}>
              <Form.Control type="password" placeholder="Re enter Password"
                            required onChange={e => setPassword2(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupContact" as={Col} sm={12} md={6}>
              <Form.Control type="text" placeholder="Contact Number" required
                            onChange={e => setContactNumber(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupEmail" as={Col} sm={12} md={6}>
              <Form.Control type="email" placeholder="Enter your email" required
                            onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupProfilePicture" as={Col} sm={12} md={6}>
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control className="mb-0" type="file" accept="image/*"
                // @ts-ignore
                            required onChange={handleProfileImageChange}/>
              {profileImage &&
                  <img src={profileImage} className="img-fluid mt-2" alt="book image" style={{height: '170px'}}/>
              }
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAddress" as={Col} sm={12} md={6}>
              <Form.Label className="d-block" as={Col} sm={12} md={6}>
                <label>Gender</label></Form.Label>
              <input type={"radio"} required onChange={() => setGender('male')}/><span>Male</span> &nbsp;&nbsp;
              <input type={"radio"} required onChange={() => setGender('female')}/><span>Female</span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAddress" as={Col} sm={12} md={6}>
              <Form.Control as="textarea" aria-label="With textarea" placeholder="Your Address"
                            required onChange={e => setAddress(e.target.value)}/>
            </Form.Group>

            <hr/>
            <Form.Group className="mb-3" as={Col} sm={12} md={6}>
              <Form.Label>Working Time</Form.Label>
              <div className="d-flex">
                <Form.Control className="w-50" type="time" required
                              onChange={e => setWorkingTimeStart(e.target.value)}/>
                <Form.Control className="w-50" type="time" required onChange={e => setWorkingTimeEnd(e.target.value)}/>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCopyCertificate" as={Col} sm={12} md={6}>
              <Form.Label>Copy of Certificate</Form.Label>
              <Form.Control className="mb-0" type="file"
                // @ts-ignore
                            required onChange={handleCertificateImageChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupWorkingExperience" as={Col} sm={12} md={6}>
              <Form.Control as="textarea" aria-label="With textarea" placeholder="Working Experience"
                            required onChange={e => setWorkingExperience(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupWorkingArea" as={Col} sm={12} md={6}>
              <Form.Control type="text" placeholder="Working Area"
                            required onChange={e => setWorkingArea(e.target.value)}/>
            </Form.Group>
            <hr/>
            <Col sm={12} md={6}>
              <Form.Select aria-label="Default select example" required onChange={e => setSelectedPlan(e.target.value)}>
                <option disabled>~ select your plan ~</option>
                {
                  // @ts-ignore
                  planList.map((plan) => <option key={plan._id} value={plan._id}>{plan.name}</option>)
                }
              </Form.Select>
            </Col>
            <Form.Group className="mb-3" controlId="formGroupAddress" as={Col} sm={12} md={6}>
              <Form.Label className="d-block">Payment Type</Form.Label>
              <input value="manual" name="paymentType" type="radio"
                     required onChange={() => setPaymentType('manual')}/><span>Manual</span> &nbsp;&nbsp;
              <input value="online" name="paymentType" type="radio"
                     required onChange={() => setPaymentType('online')}/><span>Online</span>
            </Form.Group>
            <Col sm={12} md={6}/>
            {paymentType === 'manual' &&
                <Form.Group className="mb-3" controlId="formGroupProfilePicture" as={Col} sm={12} md={6}>
                    <Form.Label>Upload Payment Slip</Form.Label>
                    <Form.Control type="file" accept="image/*" placeholder="Payment Slip"
                      // @ts-ignore
                                  required onChange={handlePaymentImageChange}/>
                  {
                    paymentImage &&
                      <img src={paymentImage} className="img-fluid mt-2" alt="book image" style={{height: '170px'}}/>
                  }
                </Form.Group>
            }
            {paymentType === 'online' &&
                <React.Fragment>
                  {/*    TODO: Add here */}
                    Online payment
                </React.Fragment>
            }
            <Form.Group className="mb-3" id="formGridCheckbox">
              <input type="checkbox" onChange={() => setIsChecked(!isChecked)}/>&nbsp;
              <small>I have agreed to&nbsp;
                <a target="_blank" href={ROUTE_PATH.TERMS_AND_CONDITIONS}>Terms and Conditions</a></small>
            </Form.Group>
            <Col className="text-center" sm={12}>
              <Button type="submit" className="px-5 my-3" disabled={!isChecked || isLoading}>Register</Button>
              <small className="d-block">Do you have an account?<Link to={ROUTE_PATH.LOGIN}> Sign In</Link></small>
            </Col>
          </Row>
        </Form>
      </Card>
    </BackgroundImage>
  );
}

export default Register;
