import React from "react";
import BackgroundImage from "../components/BackGroundImg";
import image from "../assets/images/background.webp";
import {Button, Card, Form, Image} from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import {Link} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";

const ResetPassword: React.FC = () => {
  return (
    <BackgroundImage image={image}>

      <Card className="card-div p-3">
        <Image className="m-auto" width={180} src={logo}/>
        <div className="text-center my-2">
          <h1 className="h4">Reset Password</h1>
          <label>Please create a new password that you don't use</label>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupOldPassword">
            <Form.Control type="password" placeholder="Old Password"/>
          </Form.Group>
          <hr/>
          <Form.Group className="mb-3" controlId="formGroupNewPassword">
            <Form.Control type="password" placeholder="Create new password"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
            <Form.Control type="password" placeholder="Confirm your password"/>
          </Form.Group>
          <div className="text-center">
            <Button type="submit" className="px-5 my-3">Change</Button>
            <small className="d-block"><Link to={ROUTE_PATH.HOME}>Back to Homepedia</Link></small>
          </div>
        </Form>
      </Card>
    </BackgroundImage>
  )
}
export default ResetPassword;
