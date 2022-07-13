import React from "react";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";
import Questions from "../../components/Questions";
import ArrayOfQuestions from "../../components/ArrayOfQuestions";
const FAQSPage = () => {
  return (
    <div>
      <Header />
      <section className=" w-full h-64 my-auto text-white aboutherobg block  ">
        <h1 className="flex justify-center text-xl  md:text-2xl lg:text-4xl font-extrabold pt-16">
          Frequently Asked Questions
        </h1>
        <p className="flex justify-center text-base px-4 lg:px-0 lg:text-lg pt-4">
          Here are questions asked, or possibly questions to be asked, and in
          case you could not find yours, use the box provided below.
        </p>
      </section>
      <section className=" px-4 pt-16  sm:px-6 lg:px-8 ">
        <div>
          {ArrayOfQuestions.map((question) => {
            return (
              <p key={question.id}>
                <p className="font-bold text-base py-5">{question.Ques}</p>
                <p className="pb-3 text-wider">{question.Answer}</p>
                <hr className="font-extrabold"></hr>
              </p>
            );
          })}
        </div>
      </section>
      <Questions />
      <Newsletter />
      <MainFooter />
    </div>
  );
};
export default FAQSPage;
