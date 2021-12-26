import React from 'react';
import {Container} from "react-bootstrap";

type backgroundImageProps = {
  image: string;
}
const BackgroundImage: React.FC<backgroundImageProps> = (props) => {

  return (
      <div className="bg-image-div" style={{ backgroundImage:`url(${props.image})`, minHeight: '100vh' }}>
      <Container className="img-bg-container">
        {props.children}
      </Container>
      </div>
  );
}

export default BackgroundImage;
