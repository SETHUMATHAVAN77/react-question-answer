import React, { useState } from "react";

import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Question = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{question}</h4>
        <button
          type="button"
          className="btn"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <FaPlusCircle /> : <FaMinusCircle />}
        </button>
      </header>
      {showInfo && <p>{answer}</p>}
    </article>
  );
};

export default Question;
