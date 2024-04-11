import Link from "next/link";

const ArrayOfQuestions = [
  {
    id: "e1",
    Ques: "What is Marketbox?",
    Answer:
      "A marketplace for SMEs connect, digitize and build a reputation for their online business.",
  },
  {
    id: "e2",
    Ques: "How do I join Marketbox?",
    Answer: "Click on the signup button and register for free.",
  },
  {
    id: "e3",
    Ques: "What do you mean by escrow protection?",
    Answer:
      "Escrow protection protects both vendors and buyers from dubious deals by allowing us be the fair middleman in the deal. ",
  },
  {
    id: "e4",
    Ques: "How much do I pay for advertising store/brand?",
    Answer:
      "1000 naira weekly for category boost and 20000 naira weekly for a banner advert. ",
  },
  {
    id: "e5",
    Ques: "How important am I to marketbox?",
    Answer:
      " Without you and our users, we are nothing. It is as simple as that.",
  },
  {
    id: "e6",
    Ques: "How does marketbox help my business? ",
    Answer:
      "Marketbox is your partner in progress in your entire entrepreneurship journey. Helping you achieve your business goals is why we are here for you.",
  },
  {
    id: "e7",
    Ques: "How to generate invoice?",
    Answer: (
      <span className="text-[#EF5612]">
        <Link href="">Watch video</Link>
      </span>
    ),
  },
  {
    id: "e8",
    Ques: "How to pay invoice?",
    Answer: (
      <span className="text-[#EF5612]">
        <Link href="">Watch video</Link>
      </span>
    ),
  },
];

export default ArrayOfQuestions;
