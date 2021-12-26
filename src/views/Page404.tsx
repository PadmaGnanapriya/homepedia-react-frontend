import React from "react";
import BackgroundImage from "../components/BackGroundImg";
import pageNotFound from "../assets/images/page-404.webp";
import {ROUTE_PATH} from "../constants/RoutePaths";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
const Page404: React.FC = () => {
  return(
    <BackgroundImage image={pageNotFound}>
      <div>

      </div>

      <Card className="card-div p-4">
        <h1 className="text-center"><span className="icon-warning"/></h1>
        <h2 className="text-center">

          Sorry we can't found the page. <br/>
          Go to &nbsp;
          <Link to={ROUTE_PATH.HOME}>Home</Link>

        </h2>
      </Card>


    </BackgroundImage>
  )
}
export default Page404;
