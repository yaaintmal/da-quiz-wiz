const questions_react_two = [
  {
    question:
      "Which of the following hooks is used to perform side effects in a functional component?",
    answers: [
      { text: "<code>useState</code>", correct: false },
      { text: "<code>useContext</code>", correct: false },
      { text: "<code>useEffect</code>", correct: true },
      { text: "<code>useReducer</code>", correct: false },
    ],
    penalty: 2,
    category: "React",
  },
  {
    question:
      "What is the key purpose of the dependency array in a <code>useEffect</code> hook?",
    answers: [
      { text: "To determine when the component re-renders.", correct: false },
      { text: "To specify which props the component needs.", correct: false },
      {
        text: "To control when the effect is re-run based on changes to the listed variables.",
        correct: true,
      },
      { text: "To pass data to the effect function.", correct: false },
    ],
    penalty: 3,
    category: "React",
  },
  {
    question:
      "In a list of rendered components, what is the primary purpose of the 'key' prop?",
    answers: [
      {
        text: "To uniquely identify each element for React's reconciliation.",
        correct: true,
      },
      { text: "To style each element differently.", correct: false },
      { text: "To pass a unique ID to a component.", correct: false },
      { text: "To prevent a component from re-rendering.", correct: false },
    ],
    penalty: 3,
    category: "React",
  },
  {
    question: "How do you conditionally render a component in React?",
    answers: [
      { text: "Using a CSS class.", correct: false },
      {
        text: "With a <code>switch</code> statement in the JSX.",
        correct: false,
      },
      {
        text: "Using a conditional operator (e.g., <code>&&</code> or ternary) within the JSX.",
        correct: true,
      },
      { text: "By changing the component's state.", correct: false },
    ],
    penalty: 2,
    category: "React",
  },
  {
    question:
      "What is the difference between a controlled and an uncontrolled component?",
    answers: [
      {
        text: "A controlled component is managed by React state, while an uncontrolled component is managed by the DOM.",
        correct: true,
      },
      {
        text: "A controlled component is a functional component, while an uncontrolled component is a class component.",
        correct: false,
      },
      {
        text: "A controlled component uses <code>useState</code>, an uncontrolled component uses <code>useEffect</code>.",
        correct: false,
      },
      {
        text: "There is no difference.",
        correct: false,
      },
    ],
    penalty: 4,
    category: "React",
  },
];

export { questions_react_two };
