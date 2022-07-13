import React from "react";
import FAQSPage from "../../pages/FAQSPage";
const ArrayOfQuestions = () => {
  const question = [
    {
      id: "e1",
      Ques: "what is Mbox?",
      Answer:
        "Mbox is a digital marketplace that allows SMEs a digital version of their businesses",
    },
    {
      id: "e2",
      Ques: "what is Mbox?",
      Answer:
        "Mbox is a digital marketplace that allows SMEs a digital version of their businesses",
    },
    {
      id: "e3",
      Ques: "what is Mbox?",
      Answer:
        "Mbox is a digital marketplace that allows SMEs a digital version of their businesses",
    },
    {
      id: "e4",
      Ques: "what is Mbox?",
      Answer:
        "Mbox is a digital marketplace that allows SMEs a digital version of their businesses",
    },
    {
      id: "e5",
      Ques: "what is Mbox?",
      Answer:
        "Mbox is a digital marketplace that allows SMEs a digital version of their businesses",
    },
  ];
  console.log(question);

  return (
    <div>
      <FAQSPage items={question} />
    </div>
  );
};
export default ArrayOfQuestions;
