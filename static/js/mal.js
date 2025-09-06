// importing questions, wiz emotes n stuff
import { allQuestionLevels } from "./mal-all-questions.js";
import { wizQuestion, wizHappy, wizSad, wizInfo } from "./mal-wizard.js";
import { showVersion } from "./mal-version.js";

// importing spells
// import { spellCast } from "./mal-spells.js";

// ** USER ***/
// config stuff
// set titles for different skill levels
const beginnerTitle = "Novice";
const intermediateTitle = "Apprentice";
const expertTitle = "Young Gun Wiz";
const legendaryTitle = "Coding Ninja";

// penalty multiplier to multiply penalty points (default: 13)
const penaltyMultiplier = 13;
// set life & mana regen per round (default: life 8 & mana 3)
const lifeRegen = 8;
const manaRegen = 3;

// further config for advanced users to set the startlevel 1 - 3
// const startLevel = 0;

// ** DEV **

// declaring DOM elements
const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");
const questionTextElement = document.getElementById("question-text");
const answerButtonsElement = document.getElementById("answer-buttons");
const feedbackMessageElement = document.getElementById("feedback-message");
const scoreDisplay = document.getElementById("score-display");
const highScoreDisplay = document.getElementById("high-score-display");
const wizardPrompt = document.getElementById("wizard-prompt");
const healthBarContainer = document.getElementById("health-bar-container");
const manaBarContainer = document.getElementById("mana-bar-container");
const categoryTitleContainer = document.getElementById("categorie-title");
const lvlTitleContainer = document.getElementById("level-title");

// * Further Implementations:
//* RND BG SWITCHER (yeah, really for both classes!) /*edited: those damn pseudo-classes- not working as intended... YET!*/

// document.addEventListener("DOMContentLoaded", function () {
//   // Check if the container element exists
//   if (!wpContainer) {
//     console.error(
//       "Error: Container element not found. Please check your HTML selector."
//     );
//     return; // Exit the function if the element is not found
//   }

//   const loadWP = () => {
//     const wpArray = [
//       "/static/img/worlds/world-1.png",
//       "/static/img/worlds/world-2.png",
//       "/static/img/worlds/world-3.png",
//       "/static/img/worlds/world-4.png",
//     ];

//     const selectedWP = wpArray[Math.floor(Math.random() * wpArray.length)];
//     const img = new Image();
//     img.src = selectedWP;

//     img.onerror = () => {
//       console.error(`Error loading image: ${selectedWP}`);
//     };

//     img.onload = () => {
//       wpContainer.style.setProperty("background-image", `url('${selectedWP}')`);
//       console.log(`Background image set to: ${selectedWP}`);
//     };
//   };
//   // loadWP(); // Call the function to set the background
// });

// Initialising variables
document.querySelector(".version").textContent = showVersion();
const pointsPerQuestion = 10; // user defined point system right here!
let currentQuestionIndex = 0;
let score = 0;
let isGameActive = false;
let highScore = localStorage.getItem("highScore") || 0; // Load high score from local storage
highScoreDisplay.textContent = highScore;
let health = 100;
let mana = 100;
let actualLvl = 0; // setting the starting level // later prob like : let actualLvl = startLevel;
let currentQuestions = [];

function reGen() {
  if (health && mana) {
    updateHealthBar(-lifeRegen);
    updateManaBar(-manaRegen);
  }
  return null;
}

// function to update the health bar
function updateHealthBar(penaltyPoints) {
  if (penaltyPoints > 0) {
    health -= penaltyPoints;
  } else {
    if ((health -= penaltyPoints) > 100) {
      health = 100;
    }
  }

  if (health <= 0) {
    health = 0;
    healthBarContainer.innerHTML = "";
    healthBarContainer.innerHTML = `<div class="health-bar-fill" id="health-bar-fill" style="width: ${health}%"></div>`;
    currentQuestionIndex = currentQuestions.length; // This will trigger endGame()
  } else {
    healthBarContainer.innerHTML = "";
    healthBarContainer.innerHTML = `<div class="health-bar-fill" id="health-bar-fill" style="width: ${health}%"></div>`;
  }
}

// function to update the mana bar
function updateManaBar(spellPoints) {
  if (spellPoints > 0) {
    mana -= spellPoints;
  } else {
    if ((mana -= spellPoints) > 100) {
      mana = 100;
    }
  }

  if (mana <= 0) {
    mana = 0;
    manaBarContainer.innerHTML = "";
    manaBarContainer.innerHTML = `<div class="mana-bar-fill" id="mana-bar-fill" style="width: ${mana}%"></div>`;
  } else {
    manaBarContainer.innerHTML = "";
    manaBarContainer.innerHTML = `<div class="mana-bar-fill" id="mana-bar-fill" style="width: ${mana}%"></div>`;
  }
}
// function to update the level title container > actual level to display
//* FURTHER IMPLMENTATION IDEA : adding some cool effects in case we level up!
function getLvlTitle() {
  let lvlTitle = `${beginnerTitle}`;
  if (score <= 0) {
    lvlTitle = `${beginnerTitle} (${actualLvl + 1})`;
  }
  if (score > 30) {
    lvlTitle = `${intermediateTitle} (${actualLvl + 1})`;
  }
  if (score > 55) {
    lvlTitle = `${expertTitle} (${actualLvl + 1})`;
  }
  if (score > 85) {
    lvlTitle = `${legendaryTitle} (${actualLvl + 1})`;
  }
  return lvlTitle;
}
function getCleanLvlTitle() {
  let cleanLvlTitle = beginnerTitle;
  if (score <= 0) {
    cleanLvlTitle = beginnerTitle;
  }
  if (score > 30) {
    cleanLvlTitle = intermediateTitle;
  }
  if (score > 55) {
    cleanLvlTitle = expertTitle;
  }
  if (score > 85) {
    cleanLvlTitle = legendaryTitle;
  }
  return cleanLvlTitle;
}

function lvlUpdater() {
  if (score <= 0) {
    lvlTitleContainer.textContent = getLvlTitle();
  }
  if (score > 30) {
    lvlTitleContainer.textContent = getLvlTitle();
  }
  if (score > 55) {
    lvlTitleContainer.textContent = getLvlTitle();
  }
  if (score > 85) {
    lvlTitleContainer.textContent = getLvlTitle();
  }
}
function spellCast(spell) {
  if (health >= 100) {
  } else {
    switch (spell) {
      // case 1:
      //   document.querySelector(".spell-one").style = "display: none";
      //   break;
      // case 2:
      //   document.querySelector(".spell-two").style = "display: none";
      //   break;
      case 3: // new life (+30 health, -50 mana)
        if (mana >= 50) {
          updateHealthBar(-30);
          updateManaBar(50);
          document.querySelector(".spell-three").style = "display: none";
          break;
        }
        break;
      default:
      // do nothing
    }
  }
}

// used to reset spells after cooldown
function spellReset() {
  if (mana > 0) {
    // document.querySelector(".spell-one").style = "display: block";
    // document.querySelector(".spell-two").style = "display: block";
    document.querySelector(".spell-three").style = "display: block";
  }
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("spell-one")) {
    // spellCast(1);
  } else if (event.target.classList.contains("spell-two")) {
    // spellCast(2);
  } else if (event.target.classList.contains("spell-three")) {
    spellCast(3);
  }
});

//** */ Where the fun begins...
//* GAME LOGIC

function startGame() {
  // reset states n ish to start values for a new game
  isGameActive = true;
  startButton.style.display = "none"; // Hide start button
  currentQuestionIndex = 0;
  score = 0;
  actualLvl = 0; // Start at the first level (index 0)
  currentQuestions = allQuestionLevels[actualLvl];
  scoreDisplay.textContent = score;
  feedbackMessageElement.textContent = "";
  questionContainer.style.display = "block"; // Ensure question container is visible
  wizardPrompt.textContent = "Let's test your knowledge, adventurer!";
  showQuestion();
  health = 100;
  mana = 100;
  healthBarContainer.innerHTML = `<div class="health-bar-fill" id="health-bar-fill" style="width: ${health}%"></div>`;
  healthBarContainer.style.display = "block";
  document.getElementById("spell-board").style.display = `block`;
  manaBarContainer.innerHTML = `<div class="mana-bar-fill" id="mana-bar-fill" style="width: ${mana}%"></div>`;
  manaBarContainer.style.display = "block";
}

function showQuestion() {
  if (currentQuestionIndex >= currentQuestions.length) {
    // Check if the user survived the current level
    if (health > 0) {
      // If there are more levels, advance to the next one
      if (actualLvl < allQuestionLevels.length - 1) {
        actualLvl++;
        currentQuestionIndex = 0;
        currentQuestions = allQuestionLevels[actualLvl];
        wizardPrompt.textContent = `You survived this level! 🥳 I'll create a portal to the next stage... hold on!`;
        setTimeout(showQuestion, 10500);
        return;
      } else {
        // All levels are complete
        endGame();
        return;
      }
    } else {
      // If health is 0 or less, end the game immediately
      endGame();
      return;
    }
  }

  // Reset state
  answerButtonsElement.innerHTML = "";
  feedbackMessageElement.textContent = "";
  wizQuestion();
  wizardPrompt.textContent = `Level ${actualLvl + 1}, Question ${
    currentQuestionIndex + 1
  }:`;

  let currentQuestion = currentQuestions[currentQuestionIndex];

  // setting category title
  categoryTitleContainer.textContent = `Kategorie: ${currentQuestion.category}`;
  lvlUpdater();
  spellReset();
  reGen();

  // setting questions
  questionTextElement.textContent = currentQuestion.question;
  // looping through answers
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  let penaltyPoints = currentQuestions[currentQuestionIndex].penalty || 0;

  if (penaltyPoints > 0) {
    penaltyPoints = parseInt(penaltyPoints);
  }

  if (isCorrect) {
    score += pointsPerQuestion;
    feedbackMessageElement.textContent =
      "Correct! ✨ You won " + pointsPerQuestion + " points!";
    selectedButton.classList.add("correct");
    wizHappy();
  } else {
    feedbackMessageElement.textContent =
      "Incorrect. ❌\nYou lost " + penaltyPoints + " points.";
    selectedButton.classList.add("incorrect");
    score -= penaltyPoints;
    updateHealthBar(penaltyPoints * penaltyMultiplier);
    wizSad();
  }
  scoreDisplay.textContent = score;

  // Disabling all buttons after an answer is selected
  Array.from(answerButtonsElement.children).forEach((button) => {
    button.disabled = true;
  });

  // Automatically move to the next question after a short delay
  setTimeout(() => {
    currentQuestionIndex++;
    showQuestion();
    pointsPerQuestion;
  }, 2500); // 2.5seconds delay
}

function endGame() {
  wizInfo();
  isGameActive = false;
  feedbackMessageElement.textContent = "";
  questionTextElement.textContent = "Quiz complete!";
  answerButtonsElement.innerHTML = "";
  feedbackMessageElement.textContent = `You scored ${score} out of a total of ${
    allQuestionLevels.flat().length
  } questions!
  You can call yourself '${getCleanLvlTitle()}' now!`;
  startButton.textContent = "Play Again";
  startButton.style.display = "block";
  wizardPrompt.textContent = "Thanks for playing!";

  // Reset health & mana bar
  healthBarContainer.style.display = "none";
  health = 100;
  healthBarContainer.innerHTML = `<div class="health-bar-fill" id="health-bar-fill" style="width: ${health}%"></div>`;
  manaBarContainer.style.display = "none";
  mana = 100;
  manaBarContainer.innerHTML = `<div class="mana-bar-fill" id="mana-bar-fill" style="width: ${mana}%"></div>`;

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    highScoreDisplay.textContent = highScore;
    feedbackMessageElement.textContent += " New high score! 🎉";
  }
}

// THE button Event Listeners ---
startButton.addEventListener("click", () => {
  startGame();
});
//
//
// THE END :c / this is the end
// errthing got to end
// even our script
// wasn't even really started tho' :7
// ... poor wiz
//
//* Further TODO list:
//* adding more spells
//* RND BG SWITCHER (yeah, really for both classes!)
//
//* replacing bg-images
// * (need more high for responsive design > comment out in css width&height values actually set to fixed px")
//* Joker logic
// Further further TODO list:
// refactoring to a wiz class > initiating different wizards classes << MP? POOOOAHHHH
// different avatars for different wizards
// RND AVATAR SWITCHER
// different jokers for different wizards
/// FURTHER FURTHER - collab
/// level design, switching to different stages at different levels
/// different modes: error spoting, complete-the-code, write-a-test
