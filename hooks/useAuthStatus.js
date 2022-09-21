import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Spinner from "../components/Spinner";

export const useAuthStatus = (WrappedComponent) => {
  const RequiresAuthentication = (props) => {
    // get user from redux state
    const { user } = useSelector((state) => state.auth);
    const router = useRouter();

    useEffect(() => {
      // if a there isn't a logged in user then redirect them to login
      if (user === null) {
        router.push("/auth/login");
      }
    }, [user, router]);

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
