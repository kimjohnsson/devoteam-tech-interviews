# devoteam-tech-interviews

Your assignment is to build a small quiz game as a single page application. When the game begins, the player is presented with ten questions, one by one, from a pool of more than ten questions. The questions are to be presented in a random order, but the player should not receive the same question twice until all the other questions has been answered. A question can have a text or an image, and four alternative answers. Only one of the answers is correct.

The player has 15 seconds to answer each question. The remaining time should be visible to the player. When the time is up for a question, that question is considered unanswered. The player has two lifelines, one called "50/50" that removes two incorrect answers, and one called "+10 s" that gives the player ten extra seconds for the current question. Each lifeline can only be used once during a game.

Once the player has answered all questions (or run out of time) a summary is displayed with the number of correct answers, the number of incorrect answers, and the number of unanswered questions. More statistics, like average time per question, quickest answer, slowest answer etc. is a bonus.

Hard coded questions are OK, but implement the solution so that it could easily be adapted to load the questions from a server or a database in the future. Make up your own questions, or find questions online. If you use pictures for your questions, make sure they're free to use, e.g. under Creative Commons.
