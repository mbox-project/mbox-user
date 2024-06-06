import React from "react";
import Image from "next/image";
import loginbg from "../../../public/images/loginbg.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { verifyEmail } from "../../../store/auth/authSlice";
import { useSelector } from "react-redux";
import Spinner from "../../../components/Spinner";
import { toastify } from "../../../helpers";

const Index = () => {
  const router = useRouter();
  //console.log("QueryParams", router.query);
  const { isLoading } = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    const params = Object.fromEntries(new URLSearchParams(location.search));
    dispatch(verifyEmail({ email: params.email, token: params.token }))
      .unwrap()
      .then((action) => {})
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex h-svh md:h-full items-center">
          <div className="hidden md:w-1/2 md:block">
            <Image src={loginbg} height={830} className="object-cover " />
          </div>
          <div className="md:w-1/2 px-5 flex-col items-center md:px-0 justify-center  text-center space-y-2">
            <div className="flex justify-center">
              <svg
                width="89"
                height="89"
                viewBox="0 0 89 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.2661 27.3864H70.1028C68.8279 27.3864 67.7943 28.42 67.7943 29.6956C67.7943 30.9705 68.828 32.0041 70.1028 32.0041H80.0031L52.1011 55.8231C50.0432 57.5935 47.4193 58.5667 44.7049 58.5667C41.9905 58.5667 39.3657 57.5934 37.3086 55.8231L9.40472 32.0041H19.3058C20.5806 32.0041 21.6142 30.9704 21.6142 29.6956C21.6142 28.42 20.5806 27.3864 19.3058 27.3864H3.14251C1.86767 27.3864 0.833252 28.42 0.833252 29.6956V86.2654C0.833252 86.8777 1.07679 87.4653 1.50972 87.8982C1.94266 88.3312 2.53021 88.5747 3.14251 88.5747H86.2664C86.8788 88.5747 87.4663 88.3312 87.8992 87.8982C88.3322 87.4653 88.5757 86.8777 88.5757 86.2654V29.6956C88.5757 29.0833 88.3322 28.4958 87.8992 28.0628C87.4663 27.6299 86.8788 27.3864 86.2664 27.3864H86.2661ZM83.9568 81.5238L59.55 62.3964C59.0691 62.0106 58.453 61.8343 57.8407 61.9047C57.2284 61.9758 56.6694 62.2889 56.2891 62.7744C55.9087 63.2599 55.7387 63.8776 55.816 64.4892C55.894 65.1007 56.2126 65.6565 56.7027 66.0315L79.5756 83.9574H9.8307L32.7036 66.0315C33.7071 65.2445 33.8834 63.7933 33.0964 62.7891C32.3094 61.7856 30.8582 61.6101 29.8547 62.3963L5.44995 81.523V34.7024L34.3078 59.3348C37.1999 61.8218 40.8877 63.1896 44.7023 63.1896C48.5169 63.1896 52.2052 61.822 55.0973 59.3348L83.9552 34.7024L83.9568 81.5238ZM44.7045 40.0865C49.9098 40.0865 54.9016 38.0185 58.5824 34.3377C62.2632 30.6569 64.3312 25.6651 64.3312 20.4598C64.3312 15.2544 62.2632 10.2626 58.5824 6.58182C54.9016 2.90101 49.9098 0.833008 44.7045 0.833008C39.4991 0.833008 34.5074 2.90101 30.8265 6.58182C27.1457 10.2626 25.0777 15.2544 25.0777 20.4598C25.0839 25.6635 27.1535 30.6515 30.8327 34.3316C34.5127 38.0108 39.5007 40.0804 44.7045 40.0865ZM44.7045 5.45153C48.6851 5.45153 52.5027 7.03253 55.3168 9.8474C58.1318 12.6615 59.7127 16.4791 59.7127 20.4598C59.7127 24.4404 58.1317 28.258 55.3168 31.0721C52.5027 33.887 48.6851 35.468 44.7045 35.468C40.7238 35.468 36.9063 33.887 34.0921 31.0721C31.2772 28.258 29.6963 24.4404 29.6963 20.4598C29.7009 16.4807 31.2834 12.6661 34.0967 9.85196C36.9108 7.03861 40.7252 5.45608 44.7045 5.45153ZM36.1447 23.2468C35.2626 22.3423 35.2719 20.8958 36.1656 20.002C37.0593 19.1082 38.5049 19.099 39.4104 19.9819L42.2971 22.8679L49.9052 14.3073C50.7525 13.3541 52.212 13.2682 53.1654 14.1156C54.1188 14.9629 54.2044 16.4224 53.3571 17.3758L44.1209 27.7663C43.698 28.2417 43.0981 28.5216 42.4626 28.5402C42.4409 28.541 42.4185 28.541 42.3953 28.541C41.783 28.5417 41.1955 28.2982 40.7633 27.8645L36.1447 23.2468Z"
                  fill="#26A17B"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Email Verified Successfully</h2>
            <p className="text-sm">You have Successfully verified your email</p>
            <button
              className="bg-brightRed text-center text-white p-3 rounded-lg w-full md:w-96"
              onClick={() => router.push("/auth/login")}
            >
              Proceed To Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
