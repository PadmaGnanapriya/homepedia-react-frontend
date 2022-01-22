import React, {PropsWithChildren} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";

type CategoryCardProps = {
  sm: number;
  md: number;
  lg: number;
  label: string,
  icon: string
  description?: string;
  index?: number
}
const CategoryCard: React.FC<CategoryCardProps> = (props: PropsWithChildren<CategoryCardProps>) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (props.index || props.index=== 0) {
      sessionStorage.setItem('activeIndex', String(props.index || 0));
      navigate(ROUTE_PATH.FIND_SERVICE);
    }
  }

  return (
    <Col sm={props.sm} md={props.md} lg={props.lg} className="p-2">
      <Card className="container-fluid p-4" onClick={handleOnClick}>
        <Row>
          <Col sm={3}>
            <span className={props.icon + ' h1 float-end'}/>
          </Col>
          <Col sm={8}>
            <span className="h2">{props.label}</span><br/>
            <small>{props.description}</small>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default CategoryCard;
