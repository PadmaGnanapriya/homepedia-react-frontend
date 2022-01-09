import React, {useEffect} from 'react';
import image from '../assets/images/background.webp'
import BackgroundImage from "../components/BackGroundImg";
import {Button, Card, Form, Image} from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import googleLogo from "../assets/images/googleLogo.webp";
import {Link} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";
import {useDispatch, useSelector} from "react-redux";
import {loggedUser, signWithEmailPassword, signWithGoogle} from "../store/authSlice";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const {loggedUser, status} = useSelector((state:any) => state.auth);

  const handleSignIn = (e:any) => {
    e.preventDefault();
    dispatch(signWithEmailPassword(e.target));
  }

  const handleSignWithGoogle = () => {
    dispatch(signWithGoogle())
  }

  useEffect(()=> {
      sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      console.log(loggedUser)
  }, [loggedUser])

  return (
    <BackgroundImage image={image}>
      <Card className="card-div p-3">
        <Image className="m-auto" width={160} src={logo}/>
        <div className="text-center my-2">
          <h1 className="h4">Sign In</h1>
          <small>Lets sign into your account</small>
        </div>

        <Form onSubmit={handleSignIn}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            {/*<Form.Label>Email address</Form.Label>*/}
            <Form.Control name="email" type="email" placeholder="Enter email" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            {/*<Form.Label>Password</Form.Label>*/}
            <Form.Control name="password" type="password" placeholder="Password" required/>
          </Form.Group>
          <Link className="float-end supper-small-txt" to={ROUTE_PATH.FORGOT_PASSWORD}>Forgot password</Link>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Remember Me"/>
          </Form.Group>

          <Button type="submit" className="py-2 my-3 w-100 h3" disabled={status === 'loading'}>
            <span className="h5">Sign In</span>
          </Button>
        </Form>

        <div className="separator pt-1 pb-3">OR</div>
        <Card className="google-bg-color d-inline p-1" onClick={handleSignWithGoogle}>
          <Image className="img-fluid me-4" width={38} src={googleLogo}/>
          <span className="text-light ">Sign With Google</span>
        </Card>
        <div className="text-end">
          <small className="d-block supper-small-txt mt-4 mb-3">Don't have an account yet?<Link
            to={ROUTE_PATH.REGISTER}> Create new Account</Link></small>
        </div>
      </Card>
    </BackgroundImage>
  );
}

export default Login;
