import axios from "axios";
// import { API_URL } from "../../config";

const PAYMENT_API_URL = "http://107.23.126.161:8004/api";

//Generate Invoice
const invoice = async (invoiceData) => {
  const response = await axios
    .post(`${PAYMENT_API_URL}/Invoice/generateInvoice`, invoiceData)
    .then((res) => console.log(res));
  if (response.data) {
    localStorage.setItem("invoiceLog", JSON.stringify(response.data));
  }
  console.log("InvoiceResp", response.data);
  return response.data;
};
const invoiceService = {
  invoice,
};
export default invoiceService;
