import React from "react";
import ServiceSupplierBanner from "../components/ServiceSupplierBanner";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import CategoryCard from "../components/CategoryCard";
import UserReviewCard from "../components/UserReviewCard";

// @ts-ignore
import ReactStars from "react-rating-stars-component";

const ServiceSupplierOverview: React.FC = () => {
  const dataSet = [
    {
      label: 'Qualification',
      icon: 'icon-local_police',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      label: 'Personal Info',
      icon: 'icon-attach_file',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      label: 'Work Experience',
      icon: 'icon-con-workman',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      label: 'Contact Info',
      icon: 'icon-phone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },

  ];

  const reviewList = [
    {
      id: 1,
      rating: 6,
      comment: 'Lorem ipsum dolor sit amet, consectetur',
      email: 'padmaisuru@gmail.com',
      commentTime: '12/11/2021 8.30PM'
    },
    {
      id: 1,
      rating: 8,
      comment: 'Lorem ipsum dolor sit amet, consectetur',
      email: 'padmaisuru@gmail.com',
      commentTime: '12/11/2021 8.30PM'
    },
  ]
  return (
    <div className="light-bg-color">
      <ServiceSupplierBanner/>
      <Container>
        <Row className="py-4">
          {
            dataSet.map(data => <CategoryCard key={data.icon} sm={12} md={6} lg={6} label={data.label} icon={data.icon}
                                              description={data.description}/>)
          }
          <Col sm={12} md={6} className="pt-5">
            <h3 className="pb-4">User Reviews</h3>
            {
              reviewList.map(review =>
                <UserReviewCard key={review.id} id={review.id} rating={review.rating} comment={review.comment}
                                                       email={review.email} commentTime={review.commentTime}/>)
            }
          </Col>
          <Col sm={12} md={6} className="pt-5">
            <Card className="card-div-fluid p-3">
              <div className="text-center my-2">
                <h1 className="h4">New Review</h1>
                <small>Lets write your review.</small>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Control type="text" placeholder="Full Name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupReview">
                  <Form.Control as="textarea" aria-label="With textarea" placeholder="Your Review"/>
                </Form.Group>
                <ReactStars
                  className="d-flex m-5"
                  count={6}
                  size={35}
                  value={2 * .6}
                  edit={false}
                  activeColor="#ffd700"
                />
                <div className="text-center">
                  <Button type="submit" className="px-5 my-3">Submit</Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default ServiceSupplierOverview;
