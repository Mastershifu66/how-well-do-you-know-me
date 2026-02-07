const questions = [
  {
    question: "What kind of person am I really?",
    answers: [
      { text: "Mountain person 🏔️", correct: false },
      { text: "Beach person 🌊", correct: true },
      { text: "City girl🏙️", correct: false },
      { text: "Homebody 🏠", correct: false }
    ]
  },
  {
    question: "Which country do I wanna visit badly?",
    answers: [
      { text: "Japan 🇯🇵 ", correct: false },
      { text: "France 🇫🇷 ", correct: false },
      { text: "China 🇨🇳 ", correct: true },
      { text: "USA 🇺🇸 ", correct: false }
    ]
  },
  {
    question: "If I could have ONE superpower, what would I choose?",
    answers: [
      { text: "Learn any language instantly 🗣️", correct: false },
      { text: "Get food anytime without consequences 🍜", correct: false },
      { text: "Become an expert in advanced coding 💻", correct: false },
      { text: "Teleport to any place anytime ✨", correct: true }
    ]
  },
  {
    question: "Who is my favorite Disney princess?",
    answers: [
      { text: "Elsa ❄️ ", correct: false },
      { text: "Moana 🌊 ", correct: false },
      { text: "Mulan 🗡️ ", correct: true },
      { text: "Rapunzel 🌸 ", correct: false }
    ]
  },
  {
    question: "Which season i like the most?",
    answers: [
      { text: "Winter ❄️ ", correct: false },
      { text: "Autumn 🍂 ", correct: false },
      { text: "Summer ☀️ ", correct: true },
      { text: "Spring 🌸 ", correct: false }
    ]
  },
  {
    question: "If I ever got arrested, what would it most likely be for?",
    answers: [
      { text: "Starting an argument with authority", correct: false },
      { text: "Climbing into a place I wasn’t allowed to 🚧", correct: true },
      { text: "Breaking traffic rules accidentally", correct: false },
      { text: "Being at the wrong place at the wrong time", correct: false }
    ]
  },
  {
    question: "What do I genuinely love doing the most?",
    answers: [
      { text: "Watching movies endlessly 🎬", correct: false },
      { text: "Scrolling social media 🎧", correct: false },
      { text: "Drawing and creating art 🎨", correct: false },
      { text: "travelling and exploring 🗺️", correct: true }
    ]
  },
  {
    question: "Which artist do I vibe with the most?",
    answers: [
      { text: "SKAI ISYOURGOD 🎤", correct: false },
      { text: "ITZY 🖤", correct: false },
      { text: "BLACKPINK 🖤💗", correct: true },
      { text: "BTS 🌙", correct: false }
    ]
  },
  {
    question: "My birthday month is…?",
    answers: [
      { text: "August ", correct: false },
      { text: "September", correct: true },
      { text: "October", correct: false },
      { text: "July ", correct: false }
    ]
  },
  {
    question: "How do I usually spend my evenings on a rainy day?",
    answers: [
      { text: "Talking to family or friends", correct: false },
      { text: "Watching or reading something comfort-worthy", correct: true },
      { text: "Cooking something really delicious", correct: false },
      { text: "Just looking outside the window and absorbing everything", correct: false }
    ]
  },
  {
    question: "If I disappear, what’s the reason?",
    answers: [
      { text: "Social burnout and blocked everyone", correct: false },
      { text: "Just went to a different city", correct: true },
      { text: "Too busy with work", correct: false },
      { text: "kidnapped", correct: false }
    ]
  },
  {
    question: "What’s my comfort activity when I’m stressed?",
    answers: [
      { text: "Scrolling social media 📱", correct: true },
      { text: "Talking to someone 💬", correct: true },
      { text: "Sleeping all day 😴", correct: false },
      { text: "Ignoring the problem", correct: false }
    ]
  },
  {
    question: "What kind of movies do I enjoy the most?",
    answers: [
      { text: "Horror 👻", correct: false },
      { text: "Romantic 💕", correct: false },
      { text: "Feel-good or comedy 🎥", correct: true },
      { text: "Documentaries 📚", correct: false }
    ]
  },
  {
  question: "If I go to a different country, what’s the most basic thing I secretly enjoy the most?",
  answers: [
    { text: "Trying famous tourist food 🍜", correct: false },
    { text: "Visiting monuments and museums 🏛️", correct: false },
    { text: "Grocery shopping like a local 🛒", correct: true },
    { text: "Taking aesthetic pictures 📸", correct: false }
  ]
  },
  {
  question: "If I ever dyed my hair, which color would I actually choose?",
  answers: [
    { text: "Cherry red ❤️", correct: false },
    { text: "Jet black 🖤", correct: false },
    { text: "Blonde 💛", correct: true },
    { text: "Purple or blue 💜", correct: false }
  ]
  },
  {
  question: "If I say ‘let’s do something random’, what do I probably mean?",
  answers: [
    { text: "Plan something safe", correct: false },
    { text: "Do something spontaneous and slightly unhinged ", correct: true },
    { text: "Study for 15 hours", correct: false },
    { text: "Overthink for hours", correct: false }
  ]
},
  {
    question: "What kind of person do I secretly admire the most?",
    answers: [
      { text: "Someone perfect on paper", correct: false },
      { text: "Someone emotionally aware and curious", correct: true },
      { text: "Someone popular", correct: false },
      { text: "Someone loud and dominant", correct: false }
    ]
  }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "NEXT";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = "true";
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
