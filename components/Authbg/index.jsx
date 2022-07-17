import React from "react";
import authbgimg from "../../public/images/authbg.png";
import Image from "next/image";
const Authbg = () => {
  return (
    <div>
      <Image src={authbgimg} width="700px" height="650px" />
    </div>
  );
};
export default Authbg;
