import { useEffect, useState } from 'react'
import Image from 'next/image'
import mBox from "../assets/flier/Marketbox.svg"
import X from "../assets/flier/x.svg"
import tri from "../assets/flier/tri.svg"
import cross from "../assets/flier/cross.svg"
import { getVendor } from '../../store/auth/vendorService'
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from 'antd';
import { toastify } from '../../helpers'



//import styles from "./flier.module.css";
const Flyer = () => {
  const [flyer, setFlyer] = useState()
  const [loading, setLoading] = useState(true)
  const [flyerImage, setFlyerImage] = useState()
  const dispatch = useDispatch();

  
const name = flyer?.storeName.split(' ')
let fisdt = name?.[0]
let rest = name?.[1]


  useEffect(() => {
    dispatch(getVendor())
      .unwrap()
      .then((response) => {
        setFlyer(response?.data)
        setFlyerImage(response?.data?.imageUrl)
        setLoading(false)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        toastify.alertError("Could not get flyer data", 300)
      });
   
  }, []);
  return (
    <div className="flyer">
      <div className="purple-background">
        <div className="text-content">
          <h1 className="endorse">ENDORSE</h1>
          <h2 className=" marv">
            { loading === true ?
              <Skeleton rows={1} active className=' ' title={false} />
              :
              <> {fisdt} <br/> {rest}</>
            }
           
            </h2>
          <div className=" name-parent">
            <h3 className="name">By Kemisola Daniels</h3>
            <div className=" higlight"></div>
          </div>
          <p className="Mb"> On <Image src={mBox} className=" mbox-img" /></p>
          <p className="txt1">Where people buy and sell online with confidence</p>
          <div className="circle-parent relative">
            <Image src={tri} className=" tri-image" />
            <div className="white-circle">
              <div className=" inner-circle">
                {flyer?.imageUrl ? (
                  <Image src={flyer.imageUrl} alt="flyerimage" 
                  className=''
                 layout='fill'
                  />
                ) : (
                  <span></span>
                )}
              </div>
            </div>
            <div className=' absolute right-10 top-0'>
              <Image src={cross} className='' />
              <Image src={cross} className=' mb-[-10px]' />
            </div>

          </div>
          <div className=" descripton-parent">

            <p className=" descripton">
            { loading === true ?
              <Skeleton rows={1} active className='  w-[400px]' title={false} />
              :
              <> {flyer?.storeDescription}</>
            }
             
              </p>
            <Image src={X} />
          </div>
          <p className="social">@mboxexpress</p>
        </div>
        <div className="yellow-stripe"></div>
      </div>
    </div>

  );
};

export default Flyer