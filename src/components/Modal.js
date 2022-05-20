import React from "react";
import email from "../../../assets/images/email.png";
const Modal = () => {
  return (
    <div>
      <div>
        <img src={email} />
      </div>
      <h5>Email Confirmation</h5>
      <p>
        We have sent an Email to Taylormason@gmail.com to continue this process,
        After receiving the Email follow the link provided to complete your
        registration{" "}
      </p>

      <div>
        <p>I didnt get any email</p>
        <a href="">Resend confimation email</a>
      </div>
    </div>
  );
};
export default Modal;
