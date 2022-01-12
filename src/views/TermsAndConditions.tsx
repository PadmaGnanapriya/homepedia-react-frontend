import React from "react";
import image from "../assets/images/background.webp";
import {Card, Image} from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import BackgroundImage from "../components/BackGroundImg";

const TermsAndConditions: React.FC = () => {
    return (
      <BackgroundImage image={image}>

          <Card style={{maxWidth: '900px'}} className="card-div-fluid p-3 mx-auto my-4">
              <Image className="m-auto" width={180} src={logo}/>
              <h1 className="h4 text-center">Terms And Conditions</h1>
              <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li> Donec eu libero a nisl ultrices porttitor.</li>
                  <li>Nam sed enim in velit finibus blandit. Curabitur fringilla pharetra orci, non imperdiet metus convallis
                      non. Ut lacinia,
                  </li>
                  <li>Morbi eu libero ut diam facilisis tempus non vitae est.</li>
                  <li> Mauris nec orci id justo hendrerit tincidunt.</li>
                  <li> Nunc a erat non massa auctor placerat sed at nisi.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim in velit finibus blandit.
                      Curabitur
                  </li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur
                      fringilla pharetra orci, non imperdiet metus convallis non. Ut lacinia,
                  </li>
                  <li> Cras nec augue laoreet, accumsan nibh id, scelerisque nisi.</li>
                  <li> Proin in mi eu tellus posuere malesuada.</li>
                  <li> Phasellus vulputate leo ac nulla aliquam vestibulum.</li>
                  <li> Nam sagittis ipsum in elit sodales, a tempor nunc porttitor.</li>

              </ul>
          </Card>
      </BackgroundImage>
    )
}
export default TermsAndConditions;
