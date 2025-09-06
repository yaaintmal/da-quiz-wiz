const questions_react_one = [
  {
    question: "In React, what is the purpose of JSX?",
    answers: [
      { text: "To define the styling of a component.", correct: false },
      { text: "A new kind of HTML tag.", correct: false },
      {
        text: "A syntax extension for JavaScript that looks like HTML.",
        correct: true,
      },
      { text: "A way to handle asynchronous operations.", correct: false },
    ],
    penalty: 3,
    category: "React",
  },
  {
    question:
      "How do you render a React component named <code>MyComponent</code>?",
    answers: [
      { text: "<code><MyComponent></code>", correct: true },
      { text: "<code>render MyComponent()</code>", correct: false },
      { text: "<code><mycomponent></code>", correct: false },
      { text: "<code>{MyComponent}</code>", correct: false },
    ],
    penalty: 4,
    category: "React",
  },
  {
    question:
      "Which method is used to pass data from a parent component to a child component?",
    answers: [
      { text: "State", correct: false },
      { text: "Props", correct: true },
      { text: "Context", correct: false },
      { text: "Redux", correct: false },
    ],
    penalty: 2,
    category: "React",
  },
  {
    question: "In React, what is a component's 'state'?",
    answers: [
      { text: "Data that is passed down from a parent.", correct: false },
      { text: "Internal data that can change over time.", correct: true },
      { text: "A function that returns JSX.", correct: false },
      { text: "A static property of a component.", correct: false },
    ],
    penalty: 2,
    category: "React",
  },
  {
    question: "What is the correct way to handle a click event in React?",
    answers: [
      { text: "<code><button onClick='handleClick()'></code>", correct: false },
      { text: "<code><button onclick={handleClick}></code>", correct: false },
      { text: "<code><button onClick={handleClick}></code>", correct: true },
      { text: "<code><button onclick='handleClick'></code>", correct: false },
    ],
    penalty: 1,
    category: "React",
  },
];

export { questions_react_one };
