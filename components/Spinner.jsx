import React from "react";
import spinnerStyles from "../styles/Spinner.module.css";

const Spinner = () => {
  // Using the Module Css for styling ..here ..
  return (
    <div className={spinnerStyles.loadingSpinnerContainer}>
      <div className={spinnerStyles.loadingSpinner}></div>
    </div>
  );
};

export default Spinner;
