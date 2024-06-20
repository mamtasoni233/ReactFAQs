import React, { useState } from 'react';
import { questions } from './Data/faqQuestions';

export default function Faqs() {
  let [currentId, setCurrentId] = useState(questions[0].id);
  let items = questions.map((itemsData, i) => {
    let itemDetails = {
      itemsData,
      currentId,
      setCurrentId,
    };
    return <FaqItems itemDetails={itemDetails} key={i} />;
  });
  return (
    <div>
      <h1 className="text-[2em] font-bold">
        Frequantly Asked Questions (FAQs) Using Props Drilling{' '}
      </h1>
      <div className="faqOuter w-3/4 m-auto">{items}</div>
    </div>
  );
}

const FaqItems = ({ itemDetails }) => {
  let { currentId, itemsData, setCurrentId } = itemDetails;
  return (
    <div className="faqItems m-5 border-red-500 text-lg font-bold border text-left cursor-pointer">
      <h2
        onClick={() => setCurrentId(itemsData.id)}
        className=" bg-gray-300 text-black m-0 p-2"
      >
        {itemsData.question}
      </h2>
      <p
        className={`text-left m-0 scale-y-0 rotate-[0.5s] ${
          currentId === itemsData.id
            ? 'block scale-y-1 p-2 transition'
            : 'hidden'
        }`}
      >
        {itemsData.answer}
      </p>
    </div>
  );
};
