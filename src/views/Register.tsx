import React, {useState} from "react";
import {uploadCertificate, uploadPayment, uploadServiceSupplierImage} from "../utils/ImageUploadService";

const Register: React.FC = () => {
  const [profileImage, setProfileImage] = useState('');
  const [certificateImage, setCertificateImage] = useState('');
  const [paymentImage, setPaymentImage] = useState('');

  const handleProfileImageChange = async (e: { target: { files: File[]; }; }) => {
    // setImage(e.target.files[0]);
    setProfileImage(URL.createObjectURL(e.target.files[0]));
    const profileImageUploaded = await uploadServiceSupplierImage(e.target.files[0]);
    console.log(profileImageUploaded);
  }
  const handleCertificateImageChange = async (e: { target: { files: File[]; }; }) => {
    // setImage(e.target.files[0]);
    setCertificateImage(URL.createObjectURL(e.target.files[0]));
    const certificateImageUploaded = await uploadCertificate(e.target.files[0]);
    console.log(certificateImageUploaded);
  }
  const handlePaymentImageChange = async (e: { target: { files: File[]; }; }) => {
    // setImage(e.target.files[0]);
    setPaymentImage(URL.createObjectURL(e.target.files[0]));
    const paymentImageUploaded = await uploadPayment(e.target.files[0]);
    console.log(paymentImageUploaded);
  }


  return (
    <>
      <div>Register</div>
      <div>
        <label>Service Supplier Profile Images</label>
        <div className="img-div">
          <input className="mb-0" type="file" accept="image/*"
            // @ts-ignore
                 onChange={handleProfileImageChange}
                 required/>
          <img src={profileImage} className="img-fluid" alt="book image"/>
        </div>
      </div>
      <div>
        <label>Certificate image</label>
        <div className="img-div">
          <input className="mb-0" type="file" accept="image/*"
            // @ts-ignore
                 onChange={handleCertificateImageChange}
                 required/>
          <img src={certificateImage} className="img-fluid" alt="book image"/>
        </div>
      </div>
      <div>
        <label>Payment Images</label>
        <div className="img-div">
          <input className="mb-0" type="file" accept="image/*"
            // @ts-ignore
                 onChange={handlePaymentImageChange}
                 required/>
          <img src={paymentImage} className="img-fluid" alt="book image"/>
        </div>
      </div>
    </>
  )
}

export default Register;