import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";
import Questions from "../../components/Questions";
import ArrayOfQuestions from "../../components/ArrayOfQuestions";
import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { ArrayOfQuestions, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-3 flex items-center justify-between text-[14px] lg:text-[18px] text-[#444444] font-bold">
        {ArrayOfQuestions.Ques}
        {state ? (
          <FaCircleChevronUp className="lg:h-7 lg:w-7 w-5 h-5 text-[#444444]" />
        ) : (
          <FaCircleChevronDown className="lg:h-7 lg:w-7 w-5 h-5 text-[#444444]" />
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-[#9A9A9A] text-[12px] lg:text-base">
            {ArrayOfQuestions.Answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSPage = () => {
  return (
    <div>
      <Header />
      <section className=" w-full h-64 my-auto text-white aboutherobg block  ">
        <h1 className="flex justify-center  text-xl poppins md:text-2xl lg:text-6xl font-extrabold pt-16">
          Frequently Asked Questions
        </h1>
        <p className="flex justify-center max-w-screen-xl mx-auto text-center text-[14px] px-4 poppins lg:px-0 lg:text-lg pt-4">
          Here are questions asked, or possibly questions to be asked, and in
          case you could not find yours, use the box provided below.
        </p>
      </section>
      <section className=" px-4 md:py-14 py-10 sm:px-6 lg:px-8 ">
        {ArrayOfQuestions.map((item, idx) => (
          <FaqsCard idx={idx} ArrayOfQuestions={item} />
        ))}
        {/* <div>
          {ArrayOfQuestions.map((question) => {
            return (
              <div key={question.id}>
                <p className="font-bold text-base py-5">{question.Ques}</p>
                <p className="pb-3 text-wider text-current">
                  {question.Answer}
                </p>

                <hr className="font-extrabold"></hr>
              </div>
            );
          })}
        </div> */}
      </section>
      <Questions />
      <Newsletter />
      <MainFooter />
    </div>
  );
};
export default FAQSPage;
