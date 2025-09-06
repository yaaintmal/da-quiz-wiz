const questions_tailwind_two = [
  {
    question:
      "How do you apply a class only when the screen size is medium or larger?",
    answers: [
      { text: "<code>md:class-name</code>", correct: true },
      { text: "<code>medium:class-name</code>", correct: false },
      { text: "<code>@media(md):class-name</code>", correct: false },
      { text: "<code>class-name-md</code>", correct: false },
    ],
    penalty: 3,
    category: "Tailwind CSS",
  },
  {
    question:
      "Which class is used to center an item horizontally within a flex container?",
    answers: [
      { text: "<code>align-items-center</code>", correct: false },
      { text: "<code>justify-center</code>", correct: true },
      { text: "<code>text-center</code>", correct: false },
      { text: "<code>center-flex</code>", correct: false },
    ],
    penalty: 2,
    category: "Tailwind CSS",
  },
  {
    question:
      "What class would you use to add a border of 2 pixels with a solid grey-400 color?",
    answers: [
      { text: "<code>border-2 border-gray-400</code>", correct: true },
      { text: "<code>border-solid-gray-400-2</code>", correct: false },
      { text: "<code>border-width-2 border-gray-400</code>", correct: false },
      { text: "<code>border-gray-400 border-2px</code>", correct: false },
    ],
    penalty: 3,
    category: "Tailwind CSS",
  },
  {
    question: "How do you add a shadow to an element with Tailwind?",
    answers: [
      { text: "<code>shadow</code>", correct: false },
      { text: "<code>shadow-lg</code>", correct: true },
      { text: "<code>box-shadow</code>", correct: false },
      { text: "<code>shadow-effect</code>", correct: false },
    ],
    penalty: 2,
    category: "Tailwind CSS",
  },
  {
    question:
      "Which class is used to change the cursor to a pointer when hovering over an element?",
    answers: [
      { text: "<code>cursor-pointer</code>", correct: true },
      { text: "<code>hover:cursor-pointer</code>", correct: false },
      { text: "<code>pointer</code>", correct: false },
      { text: "<code>cursor-hand</code>", correct: false },
    ],
    penalty: 2,
    category: "Tailwind CSS",
  },
];

export { questions_tailwind_two };
