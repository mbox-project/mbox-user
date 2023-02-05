import axios from "axios";
// import { API_URL } from "../../config";

const API_URL = "http://107.23.126.161:8004/api";

//Generate Invoice
const invoice = async (invoiceData) => {
  // try {
  //   const response = await axios.post(
  //     `${API_URL}/Invoice/generateInvoice`,
  //     invoiceData
  //   );
  //   console.log(response.data, "logged");
  //   return response.data;
  // } catch (error) {
  //   console.log(error);
  // }
  const response = await axios.post(
    `${API_URL}/Invoice/generateInvoice`,
    invoiceData
  );
  console.log(response.data, "logged");
  return response.data;
};
const getInvoice = async (id) => {
  // try {

  // } catch (error) {
  //   console.log(error);
  // }
  const response = await axios.get(
    `${API_URL}/Invoice/getInvoiceById/?invoiceid=${id}`
  );
  return response.data;
};
const invoiceService = {
  invoice,
  getInvoice,
};
export default invoiceService;
