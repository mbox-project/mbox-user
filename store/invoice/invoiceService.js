import { getApi, postApi } from "../../config/api";
// import { API_URL } from "../../config";

//Generate Invoice
const invoice = async (invoiceData) => {
  const response = await postApi("Invoice/generateInvoice", invoiceData);
  console.log(response.data, "logged");
  return response.data;
};
const getAllInvoice = async () => {
  try {
    const response = await getApi("Invoice/getAllInvoice");
    return response.data;
  } catch (error) {
    console.log(error);
  }
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
  getAllInvoice
};
export default invoiceService;
