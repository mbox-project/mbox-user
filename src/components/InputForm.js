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
      className=" pl-0 max-w-xs lg:max-w-md pt-6 font-poppins font-light  m-auto"
      onSubmit={submitHandler}
    >
      <label className="text-sm">Email</label>
      <input
        type="email"
        onChange={addEmailHandler}
        className=" border-2 border-solid border-gray-400 py-1 rounded-md w-full  visible"
      />

      <Button />
    </form>
  );
};
export default InputForm;
