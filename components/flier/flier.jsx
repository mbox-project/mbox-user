import { useEffect, useState } from "react";
import Image from "next/image";
import mBox from "../assets/flier/Marketbox.svg";
import X from "../assets/flier/x.svg";
import tri from "../assets/flier/tri.svg";
import cross from "../assets/flier/cross.svg";
import { getVendor } from "../../store/auth/vendorService";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import { toastify } from "../../helpers";
import { message } from "antd";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

//import styles from "./flier.module.css";
const Flyer = () => {
  const [flyer, setFlyer] = useState();
  const [loading, setLoading] = useState(true);
  const [flyerImage, setFlyerImage] = useState();
  const dispatch = useDispatch();

  const name = flyer?.storeName.split(" ");
  let first = name?.[0];
  let rest = name?.[1];

  useEffect(() => {
    dispatch(getVendor())
      .unwrap()
      .then((response) => {
        setFlyer(response?.data);
        setFlyerImage(response?.data?.imageUrl);
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        message.error("Could not get flyer data");
      });
  }, []);

  return (
    <div className="flyer">
      <div className="purple-background">
        <div className="text-content">
          <h1 className="endorse">ENDORSE</h1>
          <h2 className=" marv leading-none">
            {loading === true ? (
              <Skeleton rows={1} active className=" " title={false} />
            ) : (
              <>
                {" "}
                {first} <br /> {rest}
              </>
            )}
          </h2>
          <div className=" name-parent">
            <h3 className="name">By {flyer?.accountName}</h3>
            <div className=" higlight"></div>
          </div>
          <p className="Mb">
            {" "}
            On <Image src={mBox} className=" mbox-img" />
          </p>
          <p className="txt1">
            Where people buy and sell online with confidence
          </p>
          <div className="circle-parent relative">
            <Image src={tri} className=" tri-image" />
            <div className="white-circle">
              <div className=" inner-circle">
                {flyer?.image ? (
                  <Image
                    src={flyer.image}
                    alt="flyerimage"
                    className=""
                    layout="fill"
                  />
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            <div className=" absolute right-3 md:right-10 top-0 ">
              <Image src={cross} className="" />
              <Image src={cross} className=" " />
            </div>
          </div>
          <div className=" descripton-parent flex gap-2">
            <p className=" descripton">
              {loading === true ? (
                <Skeleton
                  rows={1}
                  active
                  className="  w-[400px]"
                  title={false}
                />
              ) : (
                <> {flyer?.storeDescription}</>
              )}
            </p>
            <Image src={X} />
          </div>
          <Link href="" className="social-link">
            <FaFacebookF className="social-icon size-4" />
          </Link>
          <p className="social">@mboxexpress</p>
          <span className=" flex items-center text-[#feb808] gap-2 font-medium text-base">
            <FaXTwitter className=" p-1 bg-[#feb808] rounded-full" color="#4a1546" size={20} />
            <p>@Marketbox_ng</p>
          </span>
          <span className=" flex items-center text-[#feb808] gap-2 font-medium">
            <IoLogoTiktok className=" p-1 bg-[#feb808] rounded-full text-[]" color="#4a1546" size={20}/>
            <p>@Marketbox_ng</p>
          </span>
          <span className=" flex items-center text-[#feb808] gap-2 font-medium">
            <FaInstagram className=" p-1 bg-[#feb808] rounded-full text-[]" color="#4a1546" size={20} />
            <p>@Marketboxng</p>
          </span>
        </div>
        <div className="yellow-stripe"></div>
      </div>
    </div>
  );
};

export default Flyer;
