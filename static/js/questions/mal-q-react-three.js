const questions_react_three = [
  {
    question: "What is the purpose of the <code>useCallback</code> hook?",
    answers: [
      {
        text: "To memoize the result of a function call.",
        correct: false,
      },
      {
        text: "To memoize a function definition so that it doesn't get recreated on every render.",
        correct: true,
      },
      {
        text: "To fetch data from an API.",
        correct: false,
      },
      {
        text: "To update the state of a component.",
        correct: false,
      },
    ],
    penalty: 4,
    category: "React",
  },
  {
    question:
      "When should you use the <code>useReducer</code> hook instead of <code>useState</code>?",
    answers: [
      {
        text: "When the state is simple, like a boolean or string.",
        correct: false,
      },
      {
        text: "When you need to perform side effects.",
        correct: false,
      },
      {
        text: "When state logic is complex and involves multiple sub-values.",
        correct: true,
      },
      {
        text: "When you are working with an external API.",
        correct: false,
      },
    ],
    penalty: 4,
    category: "React",
  },
  {
    question: "What is 'prop drilling' and how can you avoid it?",
    answers: [
      {
        text: "Passing props directly to a component; you can avoid it by using local state.",
        correct: false,
      },
      {
        text: "A method for passing data through multiple layers of components; you can avoid it with Context or state management libraries.",
        correct: true,
      },
      {
        text: "A React best practice; it should always be used.",
        correct: false,
      },
      {
        text: "Passing state up to a parent component; you can avoid it with `useReducer`.",
        correct: false,
      },
    ],
    penalty: 4,
    category: "React",
  },
  {
    question: "What is the purpose of a HOC (Higher-Order Component)?",
    answers: [
      {
        text: "To render a component on the server-side.",
        correct: false,
      },
      {
        text: "A function that takes a component and returns a new component with enhanced functionality.",
        correct: true,
      },
      {
        text: "A component that has no state.",
        correct: false,
      },
      {
        text: "A way to use multiple hooks at once.",
        correct: false,
      },
    ],
    penalty: 4,
    category: "React",
  },
  {
    question: "What is the main advantage of using a custom hook?",
    answers: [
      {
        text: "It makes a component faster.",
        correct: false,
      },
      {
        text: "It allows you to reuse stateful logic across multiple components.",
        correct: true,
      },
      {
        text: "It replaces Redux for state management.",
        correct: false,
      },
      {
        text: "It automatically generates a key for list items.",
        correct: false,
      },
    ],
    penalty: 3,
    category: "React",
  },
];

export { questions_react_three };
