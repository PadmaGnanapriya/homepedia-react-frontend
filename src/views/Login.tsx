import React, {useEffect, useState} from 'react';
import image from '../assets/images/background.webp'
import BackgroundImage from "../components/BackGroundImg";
import {Button, Card, Form, Image} from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import googleLogo from "../assets/images/googleLogo.webp";
import {Link} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";
import {auth} from "../utils/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import {toast} from "react-toastify";


const Login: React.FC = () => {
    const [loggedUser, setLoggedUser] = useState<any>(null);

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    const user = await auth.signInWithEmailAndPassword(e.target.email.value, e.target.password.value);
    if(user){
        setLoggedUser(user);
    }
  }

  const handleSignWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      auth.signInWithPopup(provider)
        .then((result) => {
            if(result.user){
                setLoggedUser(result.user);
            }
        }).catch((error) => {
         toast.error(error)
      });
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
            <Form.Control name="email" type="email" placeholder="Enter email"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            {/*<Form.Label>Password</Form.Label>*/}
            <Form.Control name="password" type="password" placeholder="Password"/>
          </Form.Group>
          <Link className="float-end supper-small-txt" to={ROUTE_PATH.FORGOT_PASSWORD}>Forgot password</Link>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Remember Me"/>
          </Form.Group>

          <Button type="submit" className="py-2 my-3 w-100 h3">
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
