const questions_tailwind_one = [
  {
    question:
      "Which HTML tag is used to apply a Tailwind CSS utility class to an element?",
    answers: [
      { text: "<code><style></code>", correct: false },
      { text: "<code><link></code>", correct: false },
      { text: "<code><body></code>", correct: false },
      { text: "<code><div class='...'></code>", correct: true },
    ],
    penalty: 5,
    category: "Tailwind CSS",
  },
  {
    question: "How do you apply a red background to an element using Tailwind?",
    answers: [
      { text: "<code>bg-red</code>", correct: false },
      { text: "<code>background-red-500</code>", correct: false },
      { text: "<code>bg-red-500</code>", correct: true },
      { text: "<code>bg-color-red</code>", correct: false },
    ],
    penalty: 4,
    category: "Tailwind CSS",
  },
  {
    question:
      "What is the correct way to make an element's text bold with Tailwind?",
    answers: [
      { text: "<code>font-bold</code>", correct: true },
      { text: "<code>text-bold</code>", correct: false },
      { text: "<code>font-weight-bold</code>", correct: false },
      { text: "<code>bold-text</code>", correct: false },
    ],
    penalty: 3,
    category: "Tailwind CSS",
  },
  {
    question:
      "Which class would you use to add a small amount of padding to all sides of an element?",
    answers: [
      { text: "<code>margin-2</code>", correct: false },
      { text: "<code>p-2</code>", correct: true },
      { text: "<code>padding-2</code>", correct: false },
      { text: "<code>m-2</code>", correct: false },
    ],
    penalty: 3,
    category: "Tailwind CSS",
  },
  {
    question: "In Tailwind, how do you set a maximum width for a container?",
    answers: [
      { text: "<code>max-w-xl</code>", correct: true },
      { text: "<code>width-max</code>", correct: false },
      { text: "<code>max-width-full</code>", correct: false },
      { text: "<code>w-max</code>", correct: false },
    ],
    penalty: 1,
    category: "Tailwind CSS",
  },
];

export { questions_tailwind_one };
