import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Spinner from "../components/Spinner";
import { getUser } from "../store/auth/authSlice";

export const useAuthStatus = (WrappedComponent) => {
  const RequiresAuthentication = (props) => {
    // get user from redux state
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const router = useRouter();

    useLayoutEffect(() => {
      // if a there isn't a logged in user then redirect them to login
      if (!user.role) router.push("/");
      else return;
    }, [user]);

    // if there's a loggedInUser, show the wrapped page, otherwise show a loading indicator
    return user && user !== null ? (
      <WrappedComponent {...props} />
    ) : (
      <Spinner />
    );
  };

  return RequiresAuthentication;
};

useAuthStatus.propTypes = {
  WrappedComponent: PropTypes.node.isRequired,
};
