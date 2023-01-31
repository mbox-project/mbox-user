import { data } from "autoprefixer";
import axios from "axios";

const PAYMENT_API_URL = "http://107.23.126.161:8004/api";



const createWallet = (email) => {
  fetch(`${PAYMENT_API_URL}/Wallet/checkalreadyhaswallet/${email}`)
    .then((response) => {
      console.log('success', response);
      if (response.status == 404) {
        const res = axios.post(
          `${PAYMENT_API_URL}/Wallet/create`, {
          email: email
        }).then(res => {
          console.log('done', res.data.data);
          return res.data.data
        });
      }
      return response.json();
    })
    .then((data) => console.log('error', data));
}



const paystackFundWallet = async (data) => {
  //let res = createWallet(data.email);
  const response = await axios.post(
    `${PAYMENT_API_URL}/Wallet/paystack/fund-wallet`,
    data
  );
  iresponse.df (response.data) {
    localStorage.setItem("wallet", JSON.stringify(response.data));
  }
  return ata;
}

const withdrawFundPaystack = async (data) => {
  const response = await axios.post(
    `${PAYMENT_API_URL}/wallet/paystack/withdraw`,
    data
  );
  return response.json();
}


const paystackVerifyPayment = async (reference) => {
  const response = await axios.get(
    `${PAYMENT_API_URL}/Wallet/paystack/verify?reference=${reference}`,
  );
  // payment is validated .. credit user
  return response.data;
}

const walletService = {
  paystackFundWallet,
  withdrawFundPaystack,
  paystackVerifyPayment
};
export default walletService;
