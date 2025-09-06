const questions_two = [
  {
    question:
      "Which of the following JavaScript array methods creates a new array with the results of calling a provided function on every element?",
    answers: [
      { text: "filter()", correct: false },
      { text: "forEach()", correct: false },
      { text: "map()", correct: true },
      { text: "reduce()", correct: false },
    ],
    penalty: 4,
    category: "JS",
  },
  {
    question: "In CSS, what is the purpose of the 'z-index' property?",
    answers: [
      { text: "To control the stacking order of elements.", correct: true },
      { text: "To set the opacity of an element.", correct: false },
      { text: "To adjust the text size.", correct: false },
      { text: "To create a 3D effect.", correct: false },
    ],
    penalty: 2,
    category: "CSS",
  },
  {
    question:
      "Which HTML tag is used to embed a video from an external source?",
    answers: [
      { text: "<video>", correct: false },
      { text: "<src>", correct: false },
      { text: "<iframe>", correct: true },
      { text: "<embed>", correct: false },
    ],
    penalty: 3,
    category: "HTML",
  },
  {
    question: "What is the purpose of a 'promise' in JavaScript?",
    answers: [
      { text: "To handle synchronous operations.", correct: false },
      { text: "To create a new variable.", correct: false },
      { text: "To handle asynchronous operations.", correct: true },
      { text: "To define a class.", correct: false },
    ],
    penalty: 4,
    category: "JS",
  },
  {
    question:
      "Which CSS property is used to create a flexible container that can align its items?",
    answers: [
      { text: "display: block;", correct: false },
      { text: "display: grid;", correct: false },
      { text: "display: flex;", correct: true },
      { text: "display: inline;", correct: false },
    ],
    penalty: 4,
    category: "CSS",
  },
  {
    question:
      "In HTML, what is the correct way to add a 'placeholder' text to an input field?",
    answers: [
      { text: "<input placeholder='Enter your name'>", correct: true },
      { text: "<input text='Enter your name'>", correct: false },
      { text: "<input value='Enter your name'>", correct: false },
      { text: "<input label='Enter your name'>", correct: false },
    ],
    penalty: 2,
    category: "HTML",
  },
  {
    question: "What is the result of 'typeof null' in JavaScript?",
    answers: [
      { text: "null", correct: false },
      { text: "object", correct: true },
      { text: "undefined", correct: false },
      { text: "string", correct: false },
    ],
    penalty: 2,
    category: "JS",
  },
  {
    question:
      "Which of the following is an HTML 'semantic element' that is typically used for a self-contained content, like a blog post or a forum comment?",
    answers: [
      { text: "<div>", correct: false },
      { text: "<section>", correct: false },
      { text: "<article>", correct: true },
      { text: "<span>", correct: false },
    ],
    penalty: 3,
    category: "HTML",
  },
];
export { questions_two };
