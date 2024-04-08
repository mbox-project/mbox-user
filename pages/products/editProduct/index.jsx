import React, { useState, useEffect } from "react";

import Products from "../../../components/MerchantPages/Products";
import { ProductsData } from "../../../components/prodata";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProductsId, getVendorProducts } from "../../../store/product/productService";
import {Spin } from 'antd';
import EditProduct from "../../../components/MerchantPages/editProduct";
import Layout from "../../../components/PagesLayout/Layout";
import { toastify } from "../../../helpers";


const Index = () => {
  const dispatch = useDispatch();
  //const { vendorId } = useSelector((state) => state.auth.user.id);
  const user = useSelector((state) => state.auth.user);

  console.log(user, "user");


  const [data, setData] = useState({
    name: "",
    description: "",
    quantity: 0,
    price: 0,
    discount: 0,
    categoryId: "",
    images: [],
    tags: [],
    colors: [],
    sizes: [],
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true); // State to track loading state
  const [pageSize, setPageSize] = useState(10);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

 

  useEffect(() => {
    let id = sessionStorage.getItem("productId")
    dispatch(getProductsId(id))
      .unwrap()
      .then((res) => {
        setData(res.data || []);
       
        setLoading(false); 
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toastify.alertError("Failed to laod product data", 1000)
      });
  }, []);



  

  

  return (
    <>
    <Layout>
         
            <EditProduct
              data={data}
              setData={setData}
            />
       
      </Layout>
    </>
  );
};

export default Index;
