import React from "react";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import MainFooter from "../../components/MainFooter";
import Questions from "../../components/Questions";
// import ArrayOfQuestions from "../../components/ArrayOfQuestions";
const FAQSPage = (props) => {
  console.log( props.item)
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
      {/* <<ArrayOfQuestions {props.items.map(question => (
        <ul>
          {" "}
          Ques ={question.Ques} Answer ={question.Answer}
        </ul>
      ))} />> */}
      <div>
        
{props.items.map((question) =>{return(<ul>Ques ={question.Ques} Answer ={question.Answer}</ul>)})}

      </div>
      
      <Questions />
      <Newsletter />
      <MainFooter />
    </div>
  );
};
export default FAQSPage;
