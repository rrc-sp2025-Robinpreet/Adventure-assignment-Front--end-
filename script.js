/*
   Name: Robinpreet Kaur
   Date: 10/01/2025
   About: The Adventure Game - Harry Potter Theme
*/


// Track story state
let currentState = "start";

// DOM elements
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

// --------------------
// Story Data with Emojis
// --------------------


const story = {
  start: {
    text: "✨ You wake up in a strange bed at Hogwarts 🏰. A wand 🪄 rests beside you. What will you do?",
    choices: [
      { text: "Pick up the wand 🪄", nextState: "pickWand" },
      { text: "Ignore it and explore the castle 🏰", nextState: "exploreCastle" }
    ]
  },
  pickWand: {
    text: "The wand sparks with magic in your hand ✨. A student invites you to your first class 📚. Do you go?",
    choices: [
      { text: "Attend the magic class 🧙‍♂️", nextState: "magicClass" },
      { text: "Skip class and sneak to the Forbidden Forest 🌲", nextState: "forest" }
    ]
  },
  exploreCastle: {
    text: "You wander the moving staircases . A portrait 🖼️ speaks to you, warning of mischief ahead. Do you listen?",
    choices: [
      { text: "Follow the portrait’s advice ✅", nextState: "safePath" },
      { text: "Ignore it and sneak into the Restricted Section 📖", nextState: "restrictedSection" }
    ]
  },
  magicClass: {
    text: "🎉 You master your first spell ✨ and impress the professor 👩‍🏫. The adventure ends with you becoming a promising young wizard 🧙‍♀️.",
    choices: []
  },
  forest: {
    text: "In the Forbidden Forest 🌲, you encounter a unicorn 🦄 who guides you back to safety. The adventure ends peacefully 🌙.",
    choices: []
  },
  safePath: {
    text: "The portrait leads you to the Great Hall 🍽️, where you enjoy a feast  and make new friends 🤝. The adventure ends happily 🎊.",
    choices: []
  },
  restrictedSection: {
    text: "You open a cursed book 📖 in the Restricted Section and darkness surrounds you 🫨. The adventure ends in mystery 👻.",
    choices: []
  }
};

// -------------------
// Functions
// -------------------
function renderQuestion() {
  const state = story[currentState];
  questionElement.textContent = state.text;

  // Clear old choices
  answersElement.innerHTML = "";

  // Add new choices
  state.choices.forEach(choice => {
    addAnswerButton(choice.text, choice.nextState);
  });

  // Show restart button only if at an ending
  nextBtn.style.display = state.choices.length === 0 ? "block" : "none";
}

// Creates and appends a choice button
function addAnswerButton(text, nextState) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", () => {
    currentState = nextState;
    renderQuestion();
  });
  li.appendChild(button);
  answersElement.appendChild(li);
}

// Restart Event
nextBtn.addEventListener("click", () => {
  currentState = "start"; // restart story
  renderQuestion();
});

// Start Game
renderQuestion();
