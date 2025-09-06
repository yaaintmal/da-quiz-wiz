import { questions } from "./questions/mal-q.js";
import { questions_tailwind_one } from "./questions/mal-q-tw-one.js";
import { questions_two } from "./questions/mal-q-two.js";
import { questions_react_one } from "./questions/mal-q-react-one.js";
import { questions_three } from "./questions/mal-q-three.js";

const allQuestionLevels = [
  questions, // Level 1 Basic questions
  questions_tailwind_one, // Tailwind Level 1 questions
  questions_two, // Level 2 Basic questions
  questions_react_one, // React Level 1 questions
  questions_three, // Level 3 Basic questions
  // Add more question arrays for more levels
];

export { allQuestionLevels };
