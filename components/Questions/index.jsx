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
    <section className=" newsletterbg py-6 md:py-10 lg:py-16 border-b">
      <div className=" ">
        <div className="flex justify-center tracking-wide font-bold poppins textcolor text-base lg:text-2xl">
          <h4>Your Question(s) is/are not listed?</h4>
        </div>
        <form
          onSubmit={submitHandler}
          className="mt-8 max-w-[900px] mx-auto px-4 lg:px-0 space-y-4"
        >
          <div className="block lg:flex lg:justify-center gap-10 space-y-4 md:space-y-0">
            <div className="flex flex-col gap-2">
              <Label
                className="text-base text-[#9A9A9A]"
                htmlFor="Name"
                title="Name"
              />
              <input
                name="Name"
                type="text"
                placeholder="Type your name here..."
                className="block w-full lg:min-w-96 newsletterbg text-base lg:text-md border-[#444444] border-2 rounded-lg shadow-sm px-3 py-3.5"
                required={true}
                autoFocus={false}
                value={enteredName}
                onChange={nameChangeHandler}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label
                className="text-base text-[#9A9A9A]"
                htmlFor="email"
                title="Email"
              />

              <input
                name="Email"
                type="email"
                className="block w-full lg:min-w-96 newsletterbg text-base lg:text-md border-[#444444] border-2 rounded-lg shadow-sm px-3 py-3.5"
                required={true}
                autoFocus={false}
                placeholder="Type your email here..."
                value={enteredEmail}
                onChange={emailChangeHandler}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:max-w-xl mx-auto">
            <Label
              className="text-base text-[#9A9A9A]"
              htmlFor="Your Questions"
              title="Your Questions"
            />
            <textarea
              rows={4}
              // className=" w-full lg:px-56 py-12 lg:relative lg:right-20 newsletterbg text-base lg:text-md mt-3  lg:mt-9 border-[#444444] border-2 rounded-lg shadow-sm"
              className="block w-full lg:min-w-96 newsletterbg text-base lg:text-md border-[#444444] border-2 rounded-lg shadow-sm px-3 py-3.5"
              required={true}
              autoFocus={false}
              placeholder="Type your question(s) here ..."
              value={enteredText}
              onChange={textChangeHandler}
            />
          </div>
          <div className="flex lg:justify-center pt-4">
            <Button
              type="submit"
              className=" aboutherobg py-2 px-8 shadow-lg rounded-md text-white font-semibold text-base lg:text-md"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Questions;
