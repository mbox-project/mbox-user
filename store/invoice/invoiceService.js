import axios from "axios";
// import { API_URL } from "../../config";

const PAYMENT_API_URL = "http://3.90.62.24:8004/api/";

//Generate Invoice
const invoice = async (invoiceData) => {
  const response = await axios.post(
    `${PAYMENT_API_URL}/Invoice/generateInvoice`,
    invoiceData
  );
  console.log("InvoiceResp", response);
  return response.data;
};
const invoiceService = {
  invoice,
};
export default invoiceService;
