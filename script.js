/*
   Name:Robinpreet Kaur
   Date:10/01/2025
   About:The Adventure of Game

*/


// Track story state
let currentState = "start";

// DOM elements
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-button");

// ==========================
// Story Data
// ==========================



const story = {
  start: {
    text: "You wake up in a strange bed at Hogwarts School of Witchcraft and Wizardry. A wand rests beside you. What will you do?",
    choices: [
      { text: "Pick up the wand", nextState: "pickWand" },
      { text: "Ignore it and explore the castle", nextState: "exploreCastle" }
    ]
  },
  pickWand: {
    text: "The wand sparks with magic in your hand. A student invites you to your first class. Do you go?",
    choices: [
      { text: "Attend the magic class", nextState: "magicClass" },
      { text: "Skip class and sneak to the Forbidden Forest", nextState: "forest" }
    ]
  },
  exploreCastle: {
    text: "You wander the moving staircases. A portrait speaks to you, warning of mischief ahead. Do you listen?",
    choices: [
      { text: "Follow the portrait’s advice", nextState: "safePath" },
      { text: "Ignore it and sneak into the Restricted Section", nextState: "restrictedSection" }
    ]
  },
  magicClass: {
    text: "You master your first spell and impress the professor. The adventure ends with you becoming a promising young wizard.",
    choices: []
  },
  forest: {
    text: "In the Forbidden Forest, you encounter a centaur who guides you back to safety. The adventure ends peacefully.",
    choices: []
  },
  safePath: {
    text: "The portrait leads you to the Great Hall, where you enjoy a feast and make new friends. The adventure ends happily.",
    choices: []
  },
  restrictedSection: {
    text: "You open a cursed book in the Restricted Section and darkness surrounds you. The adventure ends in mystery.",
    choices: []
  }
};





