import { questions } from "./questions/mal-questions.js";
import { questions_tailwind_one } from "./questions/mal-questions-tw-one.js";
import { questions_two } from "./questions/mal-questions-two.js";
import { questions_three } from "./questions/mal-questions-three.js";

const allQuestionLevels = [
  questions, // Level 1 questions
  questions_tailwind_one, // Tailwind Level 1 questions
  questions_two, // Level 2 questions
  questions_three, // Level 3 questions
  // Add more question arrays for more levels
];

export { allQuestionLevels };
