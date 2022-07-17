import Label from "../../components/Label";
import Button from "../Button";
import React, { useState } from "react";
const Questions = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const textChangeHandler = (e) => {
    setEnteredText(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      name: enteredName,
      email: enteredEmail,
      text: enteredText,
    };
    console.log(enteredData);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredText("");
  };

  return (
    <section className=" newsletterbg  pt-0 lg:pt-12 pb-28">
      <div className=" ">
        <div className="flex justify-center tracking-wide font-extrabold textcolor text-base lg:text-lg  pt-12 lg:pt-10  ">
          <h4>Your Question(s) is/are not listed?</h4>
        </div>
        <form onSubmit={submitHandler} className="pt-5  lg:pt-10  ">
          <div className=" px-4 lg:px-0 block lg:flex lg:justify-center ">
            {" "}
            <div>
              <Label
                className="   pb-4 lg:relative  lg:right-4 text-base text-[#9A9A9A]"
                htmlFor="Name"
                title="Name"
              />
              <input
                name="Name"
                type="text"
                placeholder="Type your name here..."
                className="block w-full newsletterbg  text-base lg:text-sm   mt-2 border-[#444444] border-2 rounded-lg shadow-sm py-1 px-7 lg:relative lg:right-4"
                required={true}
                autoFocus={false}
                value={enteredName}
                onChange={nameChangeHandler}
              />
            </div>
            <div>
              <Label
                className=" text-xl   lg:relative lg:left-28 lg:text-base text-[#9A9A9A]"
                htmlFor="email"
                title="Email"
              />

              <input
                name="Email"
                type="email"
                className="block  w-full lg:relative lg:left-28 newsletterbg  text-lg lg:text-sm   mt-2 border-[#444444] border-2 rounded-lg shadow-sm py-1 px-7  "
                required={true}
                autoFocus={false}
                placeholder="Type your email here..."
                value={enteredEmail}
                onChange={emailChangeHandler}
              />
            </div>
          </div>
          <div className=" block px-4 lg:px-0 lg:flex justify-center pt-2 mt-2 lg:mt-5">
            <Label
              className=" text-xl   lg:relative lg:left-28 lg:text-base text-[#9A9A9A]"
              htmlFor="Your Questions"
              title="Your Questions"
            />
            <div>
              <input
                type="text"
                className=" w-full lg:px-52 py-12 newsletterbg text-lg lg:text-base mt-3  lg:mt-9 border-[#444444] border-2 rounded-lg shadow-sm"
                required={true}
                autoFocus={false}
                placeholder="Type your question(s) here ..."
                value={enteredText}
                onChange={textChangeHandler}
              />
            </div>
          </div>
          <Button
            type="submit"
            className=" aboutherobg py-2 mt-7 lg:py-2 lg:absolute lg:right-96 px-8  shadow-lg rounded-md text-white text-lg font-semibold"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};
export default Questions;
