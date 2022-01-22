import React, {useEffect} from "react";
import image from "../assets/images/background.webp";
import {Accordion, Card, Image} from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import BackgroundImage from "../components/BackGroundImg";
import {Link} from "react-router-dom";
import {ROUTE_PATH} from "../constants/RoutePaths";
import {fetchFAQs, selectAllFAQs} from "../store/faqSlice";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";

const Faq: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAllFAQs);
  const faqStatus = useSelector((state: any) => state.faqs.status);
  const faqError = useSelector((state: any) => state.faqs.error);

  useEffect(() => {
    if (faqStatus === 'idle') {
      dispatch(fetchFAQs());
    }
    if (faqError) {
      toast.error(faqError);
    }
  }, [faqStatus, dispatch])

  return (
    <BackgroundImage image={image}>
      <Card style={{maxWidth: '900px'}} className="card-div-fluid p-1 mx-auto my-4">
        <Image className="m-auto" width={180} src={logo}/>
        <h1 className="h4 text-center">FAQ</h1>
        <Accordion>
          {
            data.map((faq: any) =>
              <Accordion.Item eventKey={faq._id}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer} </Accordion.Body>
              </Accordion.Item>
            )
          }
        </Accordion>

        <small className="d-block text-center p-4">Don't get proper solution?<Link to={ROUTE_PATH.CONTACT}> Send your
          question</Link></small>

      </Card>
    </BackgroundImage>
  )
}
export default Faq
