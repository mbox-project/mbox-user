import React, { useState } from "react";
import Image from "next/image";
import shirt from "../public/img/shirt.png";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { approveDeal } from "../store/deals/dealService";
import { toastify } from "../helpers";
import { LoadingOutlined } from "@ant-design/icons";
import { formatMoney } from "../helpers/NairaFormat";
import ApproveDealModal from "./DealsModal/ApproveDealModal";

const DisputePage = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const { name, type, disputes, owner,invoiceTag  } = product;
  const [modal, setModal] = useState(false);
  const firstImage = product.product?.otherDetails?.imageUrl;
  const dealId = product.id;


  const dispatch = useDispatch();
  const approve = () => {
    setModal(true)
  }

 
  return (
    <>
      <div className="border border-gray-500 rounded-large p-6 shadow-lg  mhover:-translate-y-1 hover:scale-10  duration-200 ">
        <div className="flex flex-col justify-around  md:flex md:flex-row hover:-translate-y-1 hover:scale-10  duration-200 ">
          <div className="flex justify-center items-center">
            {/* <Image src={shirt} width={100} height={100} alt="product" /> */}
            {firstImage && (
              <Image src={firstImage} alt="product" width={100}
                height={100} />
            )

            }

          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-gray-900 font-bold">{name}</h2>
            <h3 className="text-sm">{type}</h3>
            <h2 className="text-md  text-gray-500">Invoice Tag: {invoiceTag}</h2>
            <h2 className="text-md  text-gray-500">{owner}</h2>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="text-gray-900 font-bold">{formatMoney(product?.product?.price)}</h2>
            {/* <h3 className="text-md  text-gray-500">Size:{size}</h3> */}
            <h2>
              <span className="text-md  text-gray-500">Color:</span>
              <span className="font-bold"> {product?.product?.otherDetails?.color}</span>
            </h2>
            <h2 className="text-md  text-gray-500">
              QTY: <span className="text-red-500">{product?.product?.quantity}</span>
            </h2>
          </div>

          <div className="block mt-10">
            <button
              type="button"
              className="bg-[#034694] text-white text-center items-center rounded-lg  py-2 px-8 h-10"
              onClick={approve}
            >
               Resolve
            </button>
          </div>
        </div>
        <div className="pt-4">
          <hr />
          <p className="pt-4">
            <span className="text-brightRed">Comment(s): </span> 
            {disputes?.$values?.[0]?.message}
          </p>
        </div>
      </div>

      <ApproveDealModal
        open={modal}
        setOpen={setModal}
        buyer={product?.buyerId}
        seller={product?.vendorId}
        invoiceId={product?.invoiceId}
        dealId={product?.id}
      />
    </>
  );
};

//proptypes validation...
DisputePage.propTypes = {
  product: PropTypes.object.isRequired,
};

export default DisputePage;
