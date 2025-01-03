import React from "react";
import Layout from "../../components/PagesLayout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransactions,
  getWallet,
  getTransactionDetails,
  createWallet,
  userGetTransactions,
} from "../../store/fundwallet/walletService";
import FundWallet from "../../components/FundWallet/FundWalletModal";
import Withdraw from "../../components/Withdraw/WithdrawModal";
import Credit from "../../components/assets/icon/credit";
import Debit from "../../components/assets/icon/debit";
import TransactionDetailsModal from "../../components/Modal/TransactionDetailsModal";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, message } from "antd";

const index = () => {
  const [open, setOpen] = useState(false);
  const [openFund, setOpenFund] = useState(false);
  const [loading, setLoading] = useState({});
  const [transactionDetails, setTransactionDetails] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { wallet, transactions } = useSelector((state) => state.wallet);
  const { role } = useSelector((state) => state.auth.user);
  const { email } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const { reference, trxref } = router.query;

  useEffect(() => {
    if (reference && trxref) {
      router.replace("/wallet", undefined, { shallow: true });
    }
  }, [reference, trxref]);

  useLayoutEffect(() => {
    dispatch(getWallet(email))
      .unwrap()
      .then((action) => console.log(action))
      .catch((error) => {
        if (error?.message === "Wallet does not exist")
          dispatch(createWallet());
      });
    dispatch(userGetTransactions())
      .unwrap()
      .then((actions) => {})
      .catch((error) => console.log(error));

    console.log("useLayoutEffect triggered");
  }, []);
  const handleButtonClick = (id) => {
    setLoading((prevState) => ({ ...prevState, [id]: true }));
    dispatch(getTransactionDetails(id))
      .unwrap()
      .then((action) => {
        setTransactionDetails(action.data);
        setIsModalOpen(true);
        setLoading((prevState) => ({ ...prevState, [id]: false }));
      })
      .catch((error) => {
        setLoading((prevState) => ({ ...prevState, [id]: false }));
        message.error("Error getting transaction details");
      });
  };

  return (
    <Layout>
      <section className="flex flex-col justify-between mt-8 text-lg border-b-2 card rectCard md:flex-row ">
        <h4>Marketbox Wallet Balance </h4>
        <h2 className="text-2xl text-blue-700">NGN {wallet?.balance}</h2>
      </section>
      {/* Transaction Card Summary */}
      <section className="flex flex-col justify-around card rectCard md:flex md:flex-row ">
        <div className="flex flex-col items-start p-3 space-y-3">
          <h4 className="text-sm tracking-wide">
            {role === "vendor" ? "Total spent/Withdrawal" : "Total Withdrawal"}
          </h4>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#F90808] px-4 py-2.5 rounded-2xl">
              <Debit className=" fill-white" />
            </div>
            {role === "vendor" ? (
              <h5>NGN {wallet?.totalSpent + wallet?.totalWithdrawal}</h5>
            ) : (
              <h5>NGN {wallet?.totalWithdrawal}</h5>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start p-3 space-y-3">
          <h4 className="text-sm tracking-wide">Total Deposited</h4>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#26A17B] px-4 py-2.5 rounded-2xl">
              <Credit className=" fill-white" />
            </div>
            <h5>NGN {wallet?.totalDeposit}</h5>
          </div>
        </div>
        <div className="flex flex-col items-start p-3 space-y-3">
          <h4 className="text-sm tracking-wide">
            {role === "vendor" ? "Total Sales" : "Total Purchase"}
          </h4>
          <div className="flex items-center justify-center gap-4">
            <div className="bg-blue-800 px-4 py-2.5 rounded-2xl">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.51757 14.2759C7.54609 14.2759 8.37975 15.1095 8.37975 16.1381C8.37975 17.1663 7.54609 18 6.51757 18C5.48928 18 4.65561 17.1663 4.65561 16.1381C4.65561 15.1095 5.48928 14.2759 6.51757 14.2759ZM14.8969 14.2759C15.9252 14.2759 16.7588 15.1095 16.7588 16.1381C16.7588 17.1663 15.9252 18 14.8969 18C13.8684 18 13.0347 17.1663 13.0347 16.1381C13.0347 15.1095 13.8684 14.2759 14.8969 14.2759ZM1.35975 8.03338e-05C2.29949 8.03338e-05 3.11109 0.6482 3.32368 1.55679L3.3397 1.63082L3.63822 3.1622L3.63671 3.16263L5.26613 11.5419L5.27306 11.5404L5.28388 11.5949C5.40749 12.229 5.94846 12.6925 6.58794 12.7226L6.65461 12.7241H15.9827C16.2399 12.7241 16.4483 12.9326 16.4483 13.1898C16.4483 13.4316 16.2637 13.6305 16.0275 13.653L15.9827 13.6552H6.65461C5.56679 13.6552 4.62795 12.9027 4.3861 11.8491L4.37008 11.7733L2.42588 1.80909C2.33019 1.31854 1.91325 0.95941 1.41925 0.932588L1.35972 0.930856H0.465428C0.208468 0.930856 0 0.722604 0 0.465429C0 0.223406 0.184655 0.024681 0.420617 0.00194831L0.465427 0L1.35975 8.03338e-05ZM4.31772 3.41375H15.5494C16.1493 3.41375 16.6358 3.90017 16.6358 4.50006C16.6358 4.54336 16.6332 4.58687 16.628 4.62995L16.6182 4.69425L15.8342 9.0063C15.611 10.2339 14.5598 11.1334 13.32 11.1713L13.2388 11.1724H5.82654L4.31772 3.41375Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
            {role === "vendor" ? (
              <h5>NGN {wallet?.totalSales}</h5>
            ) : (
              <h5>NGN {wallet?.totalPurchase}</h5>
            )}
          </div>
        </div>
      </section>
      {/* Fund Wallet & Withdraw Funds */}
      <section className="flex flex-col gap-5 px-8 mt-5 md:flex-row">
        <button
          type="button"
          className="flex items-center justify-center w-full gap-3 p-4 px-10 text-white bg-blue-900 rounded-lg md:w-1/2"
        >
          <svg
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0802 14.003C21.0802 14.4361 20.7291 14.7875 20.2956 14.7875H15.2874V19.7961C15.2874 20.2295 14.9359 20.5807 14.5028 20.5807C14.0697 20.5807 13.7183 20.2295 13.7183 19.7961V14.7875H8.70908C8.27598 14.7875 7.9245 14.4361 7.9245 14.003C7.9245 13.5699 8.27598 13.2184 8.70908 13.2184H13.7183V8.20984C13.7183 7.77674 14.0697 7.42526 14.5028 7.42526C14.9359 7.42526 15.2874 7.77674 15.2874 8.20984V13.2187H20.2956C20.7291 13.2184 21.0802 13.5699 21.0802 14.003V14.003ZM27.8397 14.003C27.8397 17.565 26.4522 20.9143 23.9334 23.4331C21.3333 26.0332 17.9182 27.3332 14.5032 27.3332C11.0883 27.3332 7.67315 26.0333 5.07306 23.4331C2.55421 20.9143 1.16675 17.5649 1.16675 14.003C1.16675 10.4403 2.55421 7.09157 5.07306 4.57281C7.5919 2.05397 10.9413 0.666504 14.5032 0.666504C18.0651 0.666504 21.4146 2.05397 23.9334 4.57281C26.4522 7.09133 27.8397 10.4404 27.8397 14.003ZM26.2705 14.003C26.2705 10.8596 25.0466 7.90426 22.8238 5.68153C20.6014 3.4588 17.6461 2.23489 14.5024 2.23489C11.3588 2.23489 8.40371 3.4588 6.18098 5.68153C3.95825 7.90426 2.73433 10.8593 2.73433 14.003C2.73433 17.1463 3.95825 20.1017 6.18098 22.3244C10.7696 26.9121 18.2352 26.9127 22.823 22.3244C25.0458 20.1013 26.2697 17.1466 26.2697 14.003H26.2705Z"
              fill="#FAFAFA"
              stroke="#FAFAFA"
            />
          </svg>

          <h4 className="tracking-wide">
            {" "}
            <span onClick={() => setOpenFund(true)}>Fund Wallet</span>
          </h4>
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-full gap-3 p-4 px-10 text-blue-900 border border-blue-800 rounded-lg md:w-1/2"
        >
          <svg
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.757 0.371582H2.24277C1.48654 0.371582 0.871338 0.986782 0.871338 1.74301V9.97158C0.871338 10.7278 1.48654 11.343 2.24277 11.343H6.35705V28.2573C6.35705 29.0135 6.97225 29.6287 7.72848 29.6287H23.2713C24.0276 29.6287 24.6428 29.0135 24.6428 28.2573V24.6002V21.4002V11.343H28.757C29.5133 11.343 30.1285 10.7278 30.1285 9.97158V1.74301C30.1285 0.986782 29.5133 0.371582 28.757 0.371582ZM7.72848 28.7144C7.00437 28.7144 7.36107 27.6448 7.27134 26.8129C7.65571 26.9316 23.4033 26.9133 23.7285 26.8129V28.2573C23.7285 29.1381 23.0283 28.5182 7.72848 28.7144ZM23.7285 25.6972C23.7285 25.8267 23.5329 25.9716 23.2713 25.9716C8.13591 25.8345 7.27134 26.235 7.27134 25.6972V24.0588C7.72446 24.2202 6.88763 24.1088 23.2713 24.143C23.4325 24.143 23.5847 24.11 23.7285 24.0588V25.6972ZM23.7285 21.4002C23.6425 22.1654 23.9912 23.2287 23.2713 23.2287C7.98448 23.0327 7.27134 23.6531 7.27134 22.7716V4.02872H23.7285V21.4002ZM6.35705 7.68587H4.98562V4.02872H6.35705V7.68587ZM28.757 10.4287H24.6428V8.60015H26.9285V3.11444H23.7285H4.07134V8.60015H6.35705V10.4287C2.88539 10.2729 1.78562 10.7803 1.78562 9.97158V1.74301C1.78562 1.491 1.99075 1.28587 2.24277 1.28587H28.757C29.0091 1.28587 29.2142 1.491 29.2142 1.74301C29.0345 9.34815 29.6258 10.4287 28.757 10.4287ZM24.6428 7.68587V4.02872H26.0142V7.68587H24.6428Z"
              fill="#034694"
            />
          </svg>

          <h4 className="tracking-wide">
            {/* <Link href="/withdrawfunds">Withdraw Funds </Link> */}
            <span onClick={() => setOpen(true)}>Withdraw Funds</span>
          </h4>
        </button>
      </section>
      {/* Transaction Recents History */}
      <section className="flex flex-col items-center justify-between mt-8 text-lg border-b-2 card rectCard md:flex-row ">
        <h4 className="mt-5 text-2xl font-medium">Recent Transactions</h4>
        <form className="hidden md:block">
          <select
            id="sort"
            className="bg-gray-50 border text-gray-500 text-sm rounded-md p-2.5 px-6 mt-5"
          >
            <option disabled selected>
              Sort By
            </option>
            <option value="d">date</option>
            <option value="c">type</option>
          </select>
        </form>
      </section>
      <div className="h-[500px] overflow-y-scroll">
        {transactions?.map((e, i) => {
          const date = new Date(e.dateCreated).toDateString();
          return (
            <div
              key={e.id}
              className="card rectCard w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[35%_25%_15%_15%] justify-between items-center overflow-x-auto text-sm"
            >
              <div className="flex items-center justify-start gap-5">
                {e.type === "Debit" ? (
                  <span className="flex items-center h-10 px-4 border border-red-400 rounded-full">
                    <Debit className="!fill-red-600" />
                  </span>
                ) : (
                  <span className="flex items-center h-10 px-4 border border-green-400 rounded-full">
                    <Credit className="!fill-[#26A17B]" />
                  </span>
                )}
                <span>{e.transactionType}</span>
              </div>
              <div>{date}</div>
              <div>{`₦${e.amount}`}</div>
              <Button
                loading={loading[e.id]}
                onClick={() => handleButtonClick(e.id)}
                className="bg-brightRed h-10 px-4 py-2 flex justify-center items-center text-white rounded-lg hover:!text-whte"
              >
                Details
              </Button>
            </div>
          );
        })}
      </div>
      <FundWallet openFund={openFund} setOpenFund={setOpenFund} />
      <Withdraw open={open} setOpen={setOpen} />
      <TransactionDetailsModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        data={transactionDetails}
      />
    </Layout>
  );
};

export default index;
