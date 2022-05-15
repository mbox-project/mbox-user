import React, { useState } from "react";
import Button from "./Button";

const InputForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const addEmailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const emailEntered = {
      email: enteredEmail,
    };
    console.log(emailEntered);
  };
  return (
    <form
      className=" pl-0 max-w-xs  md:max-w-xl lg:max-w-md pt-12 font-poppins font-light  m-auto"
      onSubmit={submitHandler}
    >
      <label className=" text-lg  lg:text-sm">Email</label>
      <input
        type="email"
        onChange={addEmailHandler}
        className=" border-2 border-solid border-gray-400 py-2 md:py-3 lg:py-2 mt-2 rounded-md w-full  "
      />

      <Button />
    </form>
  );
};
export default InputForm;
