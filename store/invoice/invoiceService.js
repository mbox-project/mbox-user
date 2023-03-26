import axios from "axios";
import { getApi, postApi } from "../../config/api";
// import { API_URL } from "../../config";

const API_URL = "http://52.87.168.25:8004/api";

//Generate Invoice
const invoice = async (invoiceData) => {
  const response = await postApi("Invoice/generateInvoice", invoiceData);
  console.log(response.data, "logged");
  return response.data;
};
const getInvoice = async (id) => {
  try {
    const response = await getApi(`Invoice/getInvoiceById/?invoiceid=${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const invoiceService = {
  invoice,
  getInvoice,
};
export default invoiceService;
