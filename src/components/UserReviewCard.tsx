import React from "react";
import {Col, Container, Row, Image, Card} from "react-bootstrap";
import userPlaceHolder from "../assets/images/userPlaceHolder.webp";
// @ts-ignore
import ReactStars from "react-rating-stars-component";

type UserReviewCardType = {
  id: number;
  rating: number;
  comment: string;
  email: string;
  commentTime: string;
}
const UserReviewCard: React.FC<UserReviewCardType> = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col sm={2}>
          <Image width={'100%'} className="img-fluid " src={userPlaceHolder}/>
        </Col>
        <Col sm={10}>
          <Card className="card-div-fluid p-2 mb-3">
            <ReactStars
              className="d-flex m-5"
              count={6}
              size={35}
              value={props.rating *.6}
              edit={false}
              activeColor="#ffd700"
            />
            <p>{props.comment}</p>
            <span className="supper-small-txt">{props.email}</span>
            <small className="supper-small-txt">{props.commentTime}</small>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default UserReviewCard;
