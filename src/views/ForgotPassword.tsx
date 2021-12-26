import React, {useState} from "react";
import BackgroundImage from "../components/BackGroundImg";
import image from "../assets/images/background.webp";
import {Button, Card, Form, Image} from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import {Link} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";

const ForgotPassword: React.FC = () => {
    const [isEmailSubmit, setIsEmailSubmit] = useState(false);
    const [isSubmitSixDigitCode, setIsSubmitSixDigitCode] = useState(false);

    const handleSubmitEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsEmailSubmit(true);
    }

    const handleSubmitSixDigitCode = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitSixDigitCode(true);
    }

    const handleSubmitNewPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
      <BackgroundImage image={image}>

          <Card className="card-div p-3">
              <Image className="m-auto" width={180} src={logo}/>
              <div className="text-center my-2">
                  <h1 className="h4">Forgot Password</h1>

              </div>
              {!isEmailSubmit &&
                <Form onSubmit={e => handleSubmitEmail(e)}>
                    <label className="d-block text-center mb-3">Enter your email and we will send you instruction to reset your password</label>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        {/*<Form.Label>Email address</Form.Label>*/}
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <div className="text-center">
                        <Button type="submit" className="px-5 my-3">Continue</Button>
                        <small className="d-block"><Link to={ROUTE_PATH.HOME}>Back to Homepedia</Link></small>
                    </div>
                </Form>
              }
              {isEmailSubmit && !isSubmitSixDigitCode &&
                <Form onSubmit={e => handleSubmitSixDigitCode(e)}>
                    <label className="d-block text-center mb-3">We have email 6 digit code into your email. Please enter that code here and continue.</label>

                    <Form.Group className="mb-3" controlId="formGroupSixDigit">
                        {/*<Form.Label>Password</Form.Label>*/}
                        <Form.Control type="text" placeholder="Six digit Code"/>
                    </Form.Group>
                    <div className="text-end">
                        <small className="d-block supper-small-txt my-2">Don't receive code? &nbsp; <Link onClick={() => setIsEmailSubmit(false)}
                                                                                                          to={ROUTE_PATH.FORGOT_PASSWORD}> Resend</Link></small>
                    </div>
                    <div className="text-center">
                        <Button type="submit" className="px-5 my-3">Continue</Button>
                        <small className="d-block"><Link to={ROUTE_PATH.HOME}>Back to Homepedia</Link></small>
                    </div>
                </Form>
              }

              {isSubmitSixDigitCode &&
                <Form onSubmit={e => handleSubmitNewPassword(e)}>
                    <label className="d-block text-center mb-3">Create a new strong password.</label>

                    <Form.Group className="mb-3" controlId="formGroupNewPassword">
                        {/*<Form.Label>Password</Form.Label>*/}
                        <Form.Control type="password" placeholder="Create new password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                        {/*<Form.Label>Password</Form.Label>*/}
                        <Form.Control type="password" placeholder="Confirm your password"/>
                    </Form.Group>

                    <div className="text-center">
                        <Button type="submit" className="px-5 my-3">Change</Button>
                        <small className="d-block"><Link to={ROUTE_PATH.HOME}>Back to Homepedia</Link></small>
                    </div>
                </Form>

              }

          </Card>
      </BackgroundImage>
    )
}
export default ForgotPassword;
