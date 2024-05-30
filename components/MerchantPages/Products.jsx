import React, {useState} from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import shirt from "../../public/img/shirt.png";
import { FiEdit2 } from "react-icons/fi";
import { LuTrash } from "react-icons/lu";
import { TbShare3 } from "react-icons/tb";
import { Modal } from 'antd';
import Button from "../Button";
import { deleteProduct } from "../../store/product/productService";
import { useDispatch } from "react-redux";
import { toastify } from "../../helpers";
import { useRouter } from "next/router";

const Products = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [loading, setLoadinge] = useState(false);

  const showModal = (id) => {
    setProductIdToDelete(id);
    setIsModalOpen(true);
    console.log(id)
  };
 

  const handleDeleteProduct = (productId) => {
    setLoadinge(true);
    dispatch(deleteProduct(productId)).unwrap()
      .then((res) => {
        toastify.alertSuccess(
          "Product deleted successfully",
          3000,
          () => {
            // Close the modal after a successful deletion
            handleCancel();
          }
        );
        setLoadinge(false);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        toastify.alertError("An error occurred while deleting the product", 3000);
        setLoadinge(false);
      });
  };
  const handleOk = () => {
    //setIsModalOpen(false);
    if (productIdToDelete) {
      handleDeleteProduct(productIdToDelete);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handlePassProductId = () => {
   sessionStorage.setItem("productId", id)
   router.push("products/editProduct")
  };
  function formatMoney(amount, locale = 'en-NG', currency = 'NGN') {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    });
  
    return formatter.format(amount);
  }

 
  //destructure the products
  console.log(product, product.galleryImages.$values[0]?.imageUrl);
  const { name, price, id } = product;
  const firstImage = product.galleryImages.$values[0]?.imageUrl;
  return (
    <>
    <div className="relative group rounded-2xl overflow-hidden shadow-md ">
      <div className="card rectCard flex flex-col items-center justify-center space-y-5  duration-200 relative">
        <div className="prodImg">
          <Image src={firstImage} alt="product" width={130} height={150} />
        </div>
        <h4 className="text-md font-bold">{name}</h4>
        <h5 className="text-lg text-brightRed"> {formatMoney(price)}</h5>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-around items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[#EF5612]">
       <div className=" p-2 rounded-full bg-white" >
       <FiEdit2 className="text-[#EF5612] cursor-pointer hover:text-blue-700" onClick={handlePassProductId}/>
       </div>
      
      <div className=" p-2 rounded-full bg-white"   onClick={() => showModal(id)}>
      <LuTrash className="text-[#EF5612] cursor-pointer hover:text-red-700 border-black" />
      </div>
      </div>
     
    </div>
    <Modal title="" open={isModalOpen} onCancel={handleCancel} footer={false} >
        <div className=" flex flex-col items-center mb-7">
        <p className=" text-xl font-semibold mb-5">Delete {name} product</p>
        <p className=" text-2xl text-red-500 font-semibold">Are you sure?</p>
        </div>
        
        <Button children={ loading === false? "Yes, delete product" : "deleting...."} 
        className={` bg-red-600 text-white font-medium w-full py-2 rounded`} 
         onClick={handleOk}/>
      </Modal>
    </>
  );
};

// Adding a prop validation
Products.propTypes = {
  products: PropTypes.object.isRequired,
};
export default Products;
