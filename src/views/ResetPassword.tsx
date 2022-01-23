import React, {useState} from "react";
import BackgroundImage from "../components/BackGroundImg";
import image from "../assets/images/background.webp";
import {Button, Card, Form, Image} from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import {Link, useNavigate} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";
import {useDispatch} from "react-redux";
import {forgotPassword} from "../store/authSlice";

const ResetPassword: React.FC = () => {
  const [isEmailSubmit, setIsEmailSubmit] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEmailSubmit(true);
    dispatch(forgotPassword(email));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(ROUTE_PATH.LOGIN);
  }

  return (
    <BackgroundImage image={image}>

      <Card className="card-div p-3">
        <Image className="m-auto" width={180} src={logo}/>
        <div className="text-center my-2">
          <h1 className="h4">Reset Password</h1>
        </div>
        {!isEmailSubmit &&
            <Form onSubmit={e => handleSubmitEmail(e)}>
                <label className="d-block text-center mb-3">
                    Enter your email and we will send you instruction to reset your password</label>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  {/*<Form.Label>Email address</Form.Label>*/}
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                </Form.Group>

                <div className="text-center">
                    <Button type="submit" className="px-5 my-3">Continue</Button>
                    <small className="d-block"><Link to={ROUTE_PATH.HOME}>Back to Homepedia</Link></small>
                </div>
            </Form>
        }
        {isEmailSubmit &&
            <Form onSubmit={e => handleSubmit(e)}>
                <label className="d-block text-center mb-3">
                    We have send password reset link into your email. Click the link and reset your password.</label>
                <div className="text-end">
                    <small className="d-block supper-small-txt my-2">Don't receive code? &nbsp;
                        <Link onClick={() => setIsEmailSubmit(false)}
                              to={ROUTE_PATH.FORGOT_PASSWORD}> Resend</Link></small>
                </div>
                <div className="text-center">
                    <Button type="submit" className="px-5 my-3">Continue</Button>
                    <small className="d-block"><Link to={ROUTE_PATH.HOME}>Back to Homepedia</Link></small>
                </div>
            </Form>
        }
      </Card>
    </BackgroundImage>
  )
}
export default ResetPassword;
