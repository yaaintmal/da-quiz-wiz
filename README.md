### The Coding Tux Quiz Wiz

Welcome to Tux Quiz Wiz, a browser-based quiz game designed to test your knowledge of web development fundamentals!

---

## 🎮 How to Play

The goal of the game is to answer questions about HTML, CSS, and JavaScript. The quiz is divided into multiple levels, each with a set of questions. Your score is based on the number of correct answers, and your performance determines your title, ranging from "Novice" to "Coding Ninja".

To start, simply click the "Start Quiz" button. A question will appear, along with four possible answers. Click on the answer you believe is correct.

---

# ⚡ Health, Mana, and Regeneration

Your character, TuxWiz, has two important meters: Health and Mana. Managing them is key to succeeding in the game.


# Health ❤️‍🩹

   - Answering correctly: You score points and your health is not affected.
   - Answering incorrectly: You lose health points. The number of points you lose is determined by the "penalty" value of the question multiplied by a penalty multiplier. If your health reaches zero, the game is over.


# Mana 🪄

- Regeneration: Both health and mana regenerate slightly with each new question.
- Spells: You can use spells to heal yourself. Casting a spell will cost you mana. If you don't have enough mana, you can't cast the spell.
- Note: There is a special condition where your character may experience a higher regeneration rate, but this comes with a temporary increased penalty to your health and mana regeneration. Use your spells wisely!


# 🏆 Scoring

- Correct Answers: You gain a fixed number of points for each correct answer.
- Incorrect Answers: You lose points based on the question's penalty value.
- High Score: Your highest score is saved, so you can always try to beat your personal best.


# 🧙🏼‍♀️🧙🏾 Spells

As you advance, you'll unlock spells that can help you. They appear on the spell board and can be used by clicking on them.
- Heaven Sent: This spell provides a significant boost to your health over the next three rounds, but it comes at a cost of a larger mana and health regeneration penalty per round. You (prob) can only use this spell once per game.
- New Life: This spell gives you an instant, one-time health boost. It costs a certain amount of mana to cast and can also only be used once per game.

---

# ✨ Levels and Titles

The game features multiple levels. As you progress and accumulate points, your title will change to reflect your growing skills:
- Novice * Apprentice
- Young Gun Wiz
- Coding Ninja

---

# Changelog
## Version 0.1.9.2
- added react.js questions
- rearranged questions-template

## Version 0.1.9.1
- added untested mobile compability
- added tailwind css question - level
- adjusted title-lvl and necessary points
- balancing: adjusted regen to Life:9 / Mana:4
- balancing: BOTI now costs 75 Mana instead of 80
- balancing: BOTI now boosts liferegen * 4 & mana * 2 per round
- balancing: instant heal-effect of "new life" now grants 50 HP instead of 40

## Version 0.1.8.4
- added spell: blessing of the instructor > heaven sent
- balancing: adjusted penaltypoints
- adjusted regen to Life:9 / Mana:3

## Version 0.1.7.6
- added option for the penalty-multiplier
- adjusted penalty-multiplier
- various balancing, adjusted regen to Life:8 / Mana:3

## Version 0.1.5.2
- added life- & mana-regeneration per round
- updated spell-costs
