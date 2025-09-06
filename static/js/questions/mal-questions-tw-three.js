const questions_tailwind_three = [
  {
    question:
      "What is the purpose of the <code>@layer</code> directive in Tailwind CSS?",
    answers: [
      {
        text: "To define custom CSS properties within a component.",
        correct: false,
      },
      {
        text: "To group custom CSS styles and apply them to an element.",
        correct: false,
      },
      {
        text: "To explicitly assign a set of CSS rules to a 'layer' like <code>base</code>, <code>components</code>, or <code>utilities</code>.",
        correct: true,
      },
      {
        text: "To create a responsive grid layout.",
        correct: false,
      },
    ],
    penalty: 4,
    category: "Tailwind CSS",
  },
  {
    question:
      "How do you create a custom utility class with a specific style using Tailwind's <code>@apply</code> directive?",
    answers: [
      {
        text: "<code>.my-class { @apply bg-blue-500 text-white; }</code>",
        correct: true,
      },
      {
        text: "<code>@apply my-class: bg-blue-500 text-white;</code>",
        correct: false,
      },
      {
        text: "<code>.my-class { apply: bg-blue-500 text-white; }</code>",
        correct: false,
      },
      {
        text: "<code>@custom .my-class { bg-blue-500 text-white; }</code>",
        correct: false,
      },
    ],
    penalty: 4,
    category: "Tailwind CSS",
  },
  {
    question:
      "Which class is used to control the aspect ratio of an element, for example, a 16:9 ratio?",
    answers: [
      { text: "<code>aspect-16/9</code>", correct: true },
      { text: "<code>ratio-16/9</code>", correct: false },
      { text: "<code>aspect-ratio-16-9</code>", correct: false },
      { text: "<code>16-9-ratio</code>", correct: false },
    ],
    penalty: 3,
    category: "Tailwind CSS",
  },
  {
    question:
      "What does the <code>group</code> utility class enable in Tailwind?",
    answers: [
      {
        text: "It applies a single style to a group of elements.",
        correct: false,
      },
      {
        text: "It allows you to apply hover, focus, or other state-based styles to child elements when the parent has a state.",
        correct: true,
      },
      {
        text: "It changes the layout of elements to a group-based grid.",
        correct: false,
      },
      {
        text: "It is a legacy class for backward compatibility.",
        correct: false,
      },
    ],
    penalty: 4,
    category: "Tailwind CSS",
  },
  {
    question:
      "How would you create a CSS custom property (variable) in a Tailwind project to be used in your classes?",
    answers: [
      {
        text: "By adding it to the <code>tailwind.config.js</code> file under the <code>theme</code> section.",
        correct: false,
      },
      {
        text: "By using the <code>--my-variable: value;</code> syntax within a <code><style></code> block or an external CSS file.",
        correct: true,
      },
      {
        text: "By defining it directly in a utility class.",
        correct: false,
      },
      {
        text: "By using a special <code>@variable</code> directive.",
        correct: false,
      },
    ],
    penalty: 4,
    category: "Tailwind CSS",
  },
];

export { questions_tailwind_three };
