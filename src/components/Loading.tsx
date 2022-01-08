import React from "react";
import {Image} from "react-bootstrap";
import loading from "../assets/images/loading.webp";

const Loading: React.FC = () => {
  return(
     <div className="w-100 h-25 text-center">
       <Image src={loading} alt='loading'/>
       <br/>
       <span className="text-light h5">Loading . . .</span>
     </div>
  )
}

export default Loading;
