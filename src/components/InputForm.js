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
    <form className="pl-24 max-w-xl" onSubmit={submitHandler}>
      <label>
        Email
        <input
          type="email"
          onChange={addEmailHandler}
          className=" border-2 border-solid border-gray-200 rounded-md w-full  visible"
        />
      </label>
      <Button />
    </form>
  );
};
export default InputForm;
