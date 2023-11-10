const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const [questionContainerElement] =
  document.getElementsByClassName("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectButton = e.target;
  const correct = selectButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "Who invented JavaScript?",
    answers: [
      { text: "Bill Gates", correct: false },
      { text: "Tim Berners-Lee", correct: false },
      { text: "Brendan Eich", correct: true },
      { text: "Mark Zuckerberg", correct: false },
    ],
  },
  {
    question: "In which year was JavaScript first introduced?",
    answers: [
      { text: "1990", correct: false },
      { text: "1995", correct: true },
      { text: "2000", correct: false },
      { text: "1985", correct: false },
    ],
  },
  {
    question: "What was JavaScript initially called during its development?",
    answers: [
      { text: "LiveScript", correct: true },
      { text: "WebScript", correct: false },
      { text: "JScript", correct: false },
      { text: "Java++", correct: false },
    ],
  },
  {
    question:
      "Which company did Brendan Eich work for when he created JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Google", correct: false },
      { text: "Netscape", correct: true },
      { text: "Apple", correct: false },
    ],
  },
  {
    question: "What is the official standard upon which JavaScript is based?",
    answers: [
      { text: "ECMAScript", correct: true },
      { text: "Java Standard Edition", correct: false },
      { text: "JavaScript Object Notation", correct: false },
      { text: "HTML5", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a core data type in JavaScript?",
    answers: [
      { text: "Number", correct: false },
      { text: "String", correct: false },
      { text: "Tuple", correct: true },
      { text: "Boolean", correct: false },
    ],
  },
  {
    question: "In web development, what does CSS stand for?",
    answers: [
      { text: "Counter Strike: Source", correct: false },
      { text: "Corrective Style Sheet", correct: false },
      { text: "Computer Style Sheet", correct: false },
      { text: "Cascading Style Sheet", correct: true },
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High-Level Text Markup Language", correct: false },
      { text: "Hyperlink and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
    ],
  },
  {
    question:
      'Which programming language is also known as the "language of the web"?',
    answers: [
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
      { text: "Java", correct: false },
      { text: "C++", correct: false },
    ],
  },
  {
    question:
      'What is the purpose of the "console.log" function in JavaScript?',
    answers: [
      { text: "To print text on the webpage", correct: false },
      {
        text: "To log information to the console for debugging",
        correct: true,
      },
      { text: "To create a pop-up window", correct: false },
      { text: "To define a new variable", correct: false },
    ],
  },
];
