import React, {useRef, useState} from 'react';
import image from "../assets/images/page-contact.webp";
import BackgroundImage from "../components/BackGroundImg";
import {Button, Card, Form, Image} from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import {useDispatch, useSelector} from "react-redux";
import {addNewMessage} from "../store/messagesSlice";
import {toast} from "react-toastify";

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const status = useSelector((state: any) => state.messages.status);
  const dispatch = useDispatch()
  const form = useRef(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addNewMessage({name, email, message}))
    if (status === 'succeeded') {
      // @ts-ignore
      form.current.reset();
      toast.success("Your message was delivered successfully. Our team will reply soon.")
    }
  }

  return (
    <BackgroundImage image={image}>
      <Card className="card-div p-3">
        <Image className="m-auto" width={180} src={logo}/>
        <div className="text-center my-2">
          <h1 className="h4">Contact Us</h1>
          <small>Lets discuss about your problem with us.</small>
        </div>
        <Form ref={form} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Control type="text" name="fullName" placeholder="Full Name" onChange={e => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupMessage">
            <Form.Control as="textarea" aria-label="With textarea" placeholder="Your Message"
                          onChange={e => setMessage(e.target.value)}/>
          </Form.Group>
          <div className="text-center">
            <Button disabled={status === 'sending'} type="submit" className="px-5 my-3">Send</Button>
          </div>
        </Form>
      </Card>
    </BackgroundImage>
  );
}

export default Contact;
