import React, {PropsWithChildren} from "react";
import {Card, Col, Row} from "react-bootstrap";

type CategoryCardProps = {
  sm: number;
  md: number;
  lg: number;
  label: string,
  icon: string
  description?: string;
}
const CategoryCard: React.FC<CategoryCardProps> = (props:PropsWithChildren<CategoryCardProps>) => {
  return(
    <Col sm={props.sm} md={props.md} lg={props.lg} className="p-2">
      <Card className="container-fluid p-4">
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
