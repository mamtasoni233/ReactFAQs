import './App.css';
import 'react-notifications/lib/notifications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { questions } from './Data/faqQuestions';
import { useState } from 'react';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Faqs from './Faqs';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

function App() {
  let [showFaqAns, SetShowFaqAns] = useState(questions[0].id);
  let n = ['a', 'b', 'c', 'd'];
  let showNotification = () => {
    // NotificationManager.info('Info message');
    NotificationManager.success('Success message', 'Title here');
  };
  return (
    <div className="App">
      <NotificationContainer />
      <button
        className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
        onClick={showNotification}
      >
        Save
      </button>
      <ul>
        {n.map((items, i) => {
          return <li key={i}>{items}</li>;
        })}
      </ul>
      {/* Create Faq Using State | React Js */}
      <h1 className="text-[2em] font-bold">
        Frequantly Asked Questions (FAQs){' '}
      </h1>
      <div className="faqOuter w-3/4 m-auto">
        {questions.map((faqItems, i) => {
          return (
            <div className="faqItems m-5 border-red-500 border" key={i}>
              <h2
                onClick={() => SetShowFaqAns(faqItems.id)}
                className="text-lg font-bold m-0 p-2 bg-slate-800 text-white text-left cursor-pointer"
              >
                {faqItems.question} <FontAwesomeIcon icon={faArrowDown} />
              </h2>
              <p
                className={`text-left  m-0 scale-y-0 rotate-[0.5s] ${
                  showFaqAns === faqItems.id
                    ? 'block scale-y-1 p-2 transition'
                    : 'hidden'
                }`}
              >
                {faqItems.answer}
              </p>
            </div>
          );
        })}
      </div>
      {/* Create Faq With Props drilling  that data render from child to parent*/}
      <Faqs />
    </div>
  );
}

export default App;
