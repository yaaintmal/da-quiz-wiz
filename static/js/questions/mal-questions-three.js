const questions_three = [
  {
    question:
      "What is the purpose of the 'Object.freeze()' method in JavaScript?",
    answers: [
      {
        text: "To prevent new properties from being added to an object and to prevent existing properties from being modified.",
        correct: true,
      },
      {
        text: "To convert an object into a JSON string.",
        correct: false,
      },
      {
        text: "To create a deep copy of an object.",
        correct: false,
      },
      {
        text: "To seal an object, preventing new properties from being added.",
        correct: false,
      },
    ],
    penalty: 3,
    category: "JS",
  },
  {
    question: "In CSS, what is the 'BEM' methodology primarily used for?",
    answers: [
      {
        text: "To organize and name CSS classes for better maintainability and scalability.",
        correct: true,
      },
      {
        text: "To create complex animations and transitions.",
        correct: false,
      },
      {
        text: "To apply responsive design principles.",
        correct: false,
      },
      {
        text: "To style JavaScript components.",
        correct: false,
      },
    ],
    penalty: 1,
    category: "CSS",
  },
  {
    question:
      "Which of the following is an example of an HTML 'Web Component' technology?",
    answers: [
      {
        text: "jQuery",
        correct: false,
      },
      {
        text: "React",
        correct: false,
      },
      {
        text: "Custom Elements",
        correct: true,
      },
      {
        text: "Bootstrap",
        correct: false,
      },
    ],
    penalty: 3,
    category: "HTML",
  },
  {
    question:
      "What does the 'event bubbling' mechanism refer to in the JavaScript DOM?",
    answers: [
      {
        text: "The process of an event propagating from the target element up to the root of the DOM tree.",
        correct: true,
      },
      {
        text: "The process of an event propagating from the root of the DOM tree down to the target element.",
        correct: false,
      },
      {
        text: "A method for creating custom events.",
        correct: false,
      },
      {
        text: "A way to prevent default event behavior.",
        correct: false,
      },
    ],
    penalty: 4,
    category: "JS",
  },
  {
    question: "In CSS, what is the 'specificity' of a selector?",
    answers: [
      {
        text: "The order in which styles are applied.",
        correct: false,
      },
      {
        text: "The level of detail in a selector.",
        correct: false,
      },
      {
        text: "A value that determines which CSS rule gets applied to an element.",
        correct: true,
      },
      {
        text: "The number of elements a selector can target.",
        correct: false,
      },
    ],
    penalty: 4,
    category: "CSS",
  },
  {
    question:
      "Which HTML tag is used to define a 'data list' of options for an input field?",
    answers: [
      {
        text: "<select>",
        correct: false,
      },
      {
        text: "<datalist>",
        correct: true,
      },
      {
        text: "<ul>",
        correct: false,
      },
      {
        text: "<input>",
        correct: false,
      },
    ],
    penalty: 3,
    category: "HTML",
  },
];

export { questions_three };
