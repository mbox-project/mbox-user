import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../store/auth/authSlice";

const useGetUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== undefined && sessionStorage.getItem("token")) {
      dispatch(getUser())
        .unwrap()
        .then((action) => {})
        .catch((error) => {});
    }
  }, []);
  return {};
};

export default useGetUser;
