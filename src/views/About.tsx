import React from 'react';
import image from "../assets/images/page-about.webp";
import {Card, Col, Container, Image, Row} from "react-bootstrap";

const About: React.FC = () => {

  return (
    <div className="blue-bg-color m-0 py-5">
      <Container>
        <Card className="card-div-fluid px-3 py-4">
          <div className="text-center">
            <h1 className="h2">About Us</h1>
          </div>
          <Row className="my-4">
            <Col sm={12}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae luctus nulla. Duis elementum,
                orci at sollicitudin semper, risus risus aliquam neque, et efficitur dui dolor id purus. Pellentesque
                porta lectus, quis feugiat justo dictum vel. Maecenas diam purus, lacinia eget nulla sit amet,
                scelerisque tortor. Aenean hendrerit euismod lectus, vitae faucibus lectus imperdiet non. Nulla
                facilisi.</p>
            </Col>
            <Col sm={12} md={5}>
              <Image src={image} className="img-fluid w-100"/>
            </Col>
            <Col sm={12} md={7}>
              <p>Curabitur sit amet arcu volutpat, molestie massa eu, blandit magna. Aenean lacinia leo risus, sed
                metus malesuada quis. Donec mattis dui a viverra placerat. Sed pharetra efficitur arcu mattis lacinia.
                justo dui, tempus molestie nisl ut, tristique placerat nibh. Vivamus tristique augue in dui accumsan
                dignissim. Nulla auctor, nunc et viverra volutpat, elit leo tristique elit, sed vulputate nisi nibh id
                Sed mollis metus id venenatis posuere. In sed nisi tortor. Sed fermentum vehicula orci id placerat.
                blandit tortor. Proin sapien turpis, vestibulum ut eleifend quis, vestibulum et elit. Duis dictum erat
                Duis euismod ligula non dolor vehicula varius. Proin mauris quam, aliquam sit amet lorem vel, semper
                semper
                nulla.</p>

            </Col>
            <Col sm={12}>
              <p>Fusce accumsan in sapien quis molestie. Aenean nec mi tincidunt, semper diam non, elementum orci. Orci
                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis fringilla tortor.
                elementum vehicula malesuada. Morbi pretium faucibus turpis, ut faucibus magna faucibus vitae. Aliquam
                mi, ultrices et magna eleifend, fermentum finibus quam. Integer porta nibh quis neque aliquet, in
                laoreet.</p>
            </Col>

            <Col sm={12} md={6}>
              <iframe title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2952617587734!2d79.91387131477319!3d6.974449094961461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae258033380c747%3A0x12c707892cabde33!2sUniversity%20of%20Kelaniya%20-%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1637678197023!5m2!1sen!2slk"
                width="600" height="450"/>
            </Col>
            <Col sm={12} md={6} className="p-md-4">
              <br/><br/>
              <a target="_blank"  rel="noreferrer"
                 href="https://www.google.com/maps/place/University+of+Kelaniya+-+Sri+Lanka/@6.9744491,79.9138713,17z/data=!3m1!4b1!4m5!3m4!1s0x3ae258033380c747:0x12c707892cabde33!8m2!3d6.9744491!4d79.91606">
                <span className="icon-location_on"/> University Kandy Road Kelaniya, 11600</a><br/><br/>
              <a href="tel:+94766328189"> <span className="icon-phone"/> +94 766 328 189</a><br/><br/>
              <a href="mailto:homepedia@gmail.com"><span className="icon-email"/> homepedia@gmail.com</a>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default About;
