// declaring a variable to keep track of whether the quiz is currently running.
// This variable stores the index of the current question being displayed.
// This variable holds the player's current score.
// This variable will store the highest score achieved by the player.

// --- 1. DOM Element Selection ---
// variables to select HTML elements from the page to interact with them.
// Display the high score on page load.

// --- 2. Questions Data ---
// This is an array of objects, where each object represents a single quiz question.
const questions = [
{
question: "What's the capital of France?",
answers: [
{ text: "Berlin", correct: false },
{ text: "Paris", correct: true },
{ text: "Madrid", correct: false },
{ text: "Rome", correct: false },
],
},

];

// --- 3. Game Logic Functions ---

function startGame() {
// Set the game state to active.
// Hide the start button so the user can't click it again.
// Reset the question index to 0 to start from the beginning.
// Reset the player's score to 0.
// Update the displayed score on the screen.
// Clear any previous feedback messages.
// Show the container that holds the questions and answers.
// Update the prompt message for the user.
// Call the function to display the first question.

function showQuestion() {
// Clear any existing answer buttons from the previous question.
// Clear any previous feedback messages.
// Check if there are more questions to display.
// Get the current question object from the 'questions' array.
// Set the text of the question element to the current question's text.
// Loop through each answer in the current question's 'answers' array.
// Create a new <button> element for each answer.

      // Set the button's text to the answer's text.
      // Add a CSS class to style the button.
      // If the answer is correct, add a data attribute to the button.
      // Add a 'click' event listener to the button, so when it's clicked, it calls the 'selectAnswer' function.
      // Add the new button to the 'answerButtonsElement' container in the HTML.

function selectAnswer(e) {
// Get the button that was clicked.
// Check if the clicked button's 'data-correct' attribute is 'true'.
// Check if the answer is correct.
// Increment the score.
// Display a "Correct!" message.
// Add a CSS class to visually indicate the correct answer.
// Update the displayed score.

} else {
// Display an "Incorrect" message.
// Add a CSS class to visually indicate the incorrect answer.

// Disable all answer buttons to prevent the user from clicking multiple answers.
// Use a timer to automatically advance to the next question after a delay.
// Increment the question index to move to the next question.
// Call 'showQuestion' to display the new question.

/_ final scores n ish, play again bla //
_/
function endGame() {
// Set the game state to inactive.
// Display a "Quiz complete!" message.
// Clear all answer buttons.
// Display the final score.

// Change the text of the start button to "Play Again".
// Show the start button again.

// Check if the current score is higher than the previous high score.
// If it is, update the high score.
// Save the new high score to the browser's local storage so it persists.
// Update the displayed high score on the screen.

    // Add a message to let the user know they set a new high score.

// --- 4. Event Listeners ---
// This line listens for a 'click' event on the 'startButton' element.
// When the button is clicked, it executes the provided function, which in turn calls the 'startGame' function.
