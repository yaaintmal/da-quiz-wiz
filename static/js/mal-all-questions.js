import { questions } from "./mal-questions.js";
import { questions_two } from "./mal-questions-two.js";
import { questions_three } from "./mal-questions-three.js";

const allQuestionLevels = [
  questions, // Level 1 questions
  questions_two, // Level 2 questions
  questions_three, // Level 3 questions
  // Add more question arrays for more levels
];

export { allQuestionLevels };
