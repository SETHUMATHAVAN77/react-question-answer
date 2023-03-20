import React, { useState } from "react";
import Question from "./components/Question";

import data from "./data";

// clean code principles;

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <h1>WHAT ABOUT YOUR SELF</h1>
      <section className="container">
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </section>
    </main>
  );
};

export default App;
