import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../../components/PagesLayout/Layout";
import Pagenation from "../../components/Pagenation";
import shorts from "../../public/img/shorts.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllDeals, getVendorAllDeals } from "../../store/deals/dealService";
import DetailsModal from "../../components/DealsModal/detailsModal";


const index = () => {
  //const counter = data.length;
  const [modal, setModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [successfulDeals, setSucessfulDeals] = useState([])
  const [selectedDealId, setSelectedDealId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const counter = successfulDeals?.length;
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const detail = ({dealId, image, name}) => {
    setSelectedDealId(dealId);
    setSelectedImage(image);
    setSelectedName(name);

    setModal(true);
  };

  useEffect(() => {
    if (user?.role === "user") {
      dispatch(getAllDeals({ dealStatus: 1, pageNumber, pageSize }))
        .unwrap()
        .then((response) => (
          console.log(response),
          setSucessfulDeals(response?.data?.items?.$values)
        ))
        .catch((error) => console.log(error));
      console.log("effect");
    } else {
      dispatch(getVendorAllDeals({ dealStatus: 1, pageNumber, pageSize }))
        .unwrap()
        .then((response) => (
          console.log(response),
          setSucessfulDeals(response?.data?.items?.$values)
        ))
        .catch((error) => console.log(error));
      console.log("effect");
    }

  }, [pageNumber, pageSize]);


  function formatMoney(amount, locale = 'en-NG', currency = 'NGN') {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    });

    return formatter.format(amount);
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0'); // Ensure two digits
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  return (
    <Layout>
      <section className="card rectCard flex justify-between items-center text-lg border-b-2 mt-8 md:flex-row ">
        <h4 className="text-2xl font-medium mt-5">
          Succesful Deals ({counter})
        </h4>
        <form>
          <select
            id="sort"
            className="bg-gray-50 border text-gray-500 rounded-md p-2.5 px-6 mt-5"
          >
            <option disabled selected>
              Sort By
            </option>
            <option value="date">Date</option>
            <option value="type">Type</option>
          </select>
        </form>
      </section>
      {/* Saved Content  */}
      <section className="card rectCard overflow-x-auto">
        <table className="w-full">
          <tbody className="">
            {successfulDeals?.map((prod) => (
              <tr key={prod.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="shadow-md p-1  md:max-w-[70px] md:max-h-[65px]  bg-[#FAFAFA] rounded-md">
                      {
                        prod.product.otherDetails.imageUrl && (
                          <Image
                            src={prod.product.otherDetails.imageUrl}
                            width={40}
                            height={40}
                            alt="product"
                            className="w-full md:w-auto"
                          />
                        )
                      }

                    </div>
                    <div className="ml-6">
                      <div className="text-[#444444]">{prod.product.description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-[#444444]">{formatDate(prod.date)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-[#444444] font-semibold">
                    {
                      user?.role === "user" ?
                        (<span>-{formatMoney(prod.total)}</span>)
                        :
                        (<span>+{formatMoney(prod.subTotal)}</span>)
                    }

                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                  <button
                    type="button"
                    className="bg-[#26A17B] font-medium shadow-md shadow-[#26A17B12] py-[10px] px-[20px] text-[#FAFAFA] h-max rounded-[10px]"
                    onClick={() =>
                       detail({
                        dealId:prod.id,
                        image:prod.product.otherDetails.imageUrl,
                        name:prod.product.description
                      })}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Pagenation />
      <DetailsModal
        open={modal}
        setOpen={setModal}
        dealId={selectedDealId}
        image={selectedImage}
        name={selectedName}

      />
    </Layout>
  );
};

export default index;
