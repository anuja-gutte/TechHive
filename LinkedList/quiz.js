const quizData = [
  {
      question: "What is a linked list?",
      options: ["A sequential collection of data elements", "A data structure where each element points to the next", "A circular data structure", "A type of array"],
      correct: 1
  },
  {
      question: "What is the time complexity of inserting an element at the beginning of a singly linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correct: 0
  },
  {
      question: "Which of the following operations is most efficient in a doubly linked list compared to a singly linked list?",
      options: ["Inserting at the front", "Searching for an element", "Deleting a node given its reference", "Reversing the list"],
      correct: 2
  },
  {
      question: "Which of the following is true about circular linked lists?",
      options: ["They have a tail node that points to the head node", "They are easier to reverse", "They always store data in sorted order", "They allow constant time search"],
      correct: 0
  },
  {
      question: "Which of the following is a valid advantage of a linked list over an array?",
      options: ["Faster access to random elements", "Memory usage is dynamic", "Better cache locality", "Fixed size"],
      correct: 1
  },
  {
      question: "Which of the following is an application of linked lists?",
      options: ["Stack", "Queue", "Both", "None of the above"],
      correct: 2
  },
  {
      question: "How do you delete a node in a singly linked list, given only access to that node?",
      options: ["You cannot delete the node", "Copy the data from the next node and delete the next node", "Move the node to the end and delete", "Traverse the list from the head"],
      correct: 1
  },
  {
      question: "What is the primary difference between a singly linked list and a doubly linked list?",
      options: ["Doubly linked list nodes contain pointers to both the next and previous nodes", "Singly linked lists use arrays, doubly linked lists use pointers", "Doubly linked lists cannot be circular", "Singly linked lists allow for faster access to previous nodes"],
      correct: 0
  },
  {
      question: "In a circular linked list, which of the following is true?",
      options: ["The list is infinite", "The last node points to the first node", "The nodes have no pointers", "The list grows and shrinks dynamically"],
      correct: 1
  },
  {
      question: "Which of the following linked lists allows traversing in both directions?",
      options: ["Singly linked list", "Doubly linked list", "Circular linked list", "Unidirectional list"],
      correct: 1
  }
];

let answeredCount = 0;
let selectedAnswers = {};
let score = 0;

const totalQuestions = 5;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuiz() {
  const quiz = document.getElementById('quiz');
  quiz.innerHTML = '';

  const shuffledQuestions = shuffle(quizData).slice(0, totalQuestions);

  shuffledQuestions.forEach((currentData, questionIndex) => {
      const questionEl = document.createElement('div');
      questionEl.classList.add('question');
      questionEl.textContent = `${questionIndex + 1}. ${currentData.question}`;

      const optionsEl = document.createElement('ul');
      optionsEl.classList.add('options');

      currentData.options.forEach((option, index) => {
          const optionEl = document.createElement('li');
          optionEl.classList.add('option');
          optionEl.textContent = option;
          optionEl.onclick = () => selectAnswer(questionIndex, index, optionEl);
          optionsEl.appendChild(optionEl);
      });

      quiz.appendChild(questionEl);
      quiz.appendChild(optionsEl);
  });
  resetQuiz(); 
}

function selectAnswer(questionIndex, selectedIndex, optionEl) {
  const options = optionEl.parentElement.children;

  Array.from(options).forEach(option => option.classList.remove('selected'));

  optionEl.classList.add('selected');

  if (selectedAnswers[questionIndex] === undefined) {
      answeredCount++;
  }
  selectedAnswers[questionIndex] = selectedIndex;

  updateProgressBar();
}

function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const progressPercentage = (answeredCount / totalQuestions) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

function submitQuiz() {
  if (answeredCount < totalQuestions) {
      alert("Please answer all questions before submitting.");
      return;
  }

  const options = document.querySelectorAll('.option');

  quizData.slice(0, totalQuestions).forEach((question, questionIndex) => {
      const correctAnswer = question.correct;
      const selectedAnswer = selectedAnswers[questionIndex];

      if (selectedAnswer !== undefined) {
          const selectedOption = options[questionIndex * question.options.length + selectedAnswer];
          const correctOption = options[questionIndex * question.options.length + correctAnswer];

          correctOption.classList.add('correct');

          if (selectedAnswer !== correctAnswer) {
              selectedOption.classList.add('wrong');
          } else {
              score++;
          }
      }
  });

  options.forEach(option => {
      option.style.pointerEvents = 'none';
  });

  const scoreContainer = document.getElementById('score-container');
  scoreContainer.textContent = `You scored ${score}/${totalQuestions}`;

  window.scrollTo(0, 0);
}

function resetQuiz() {
  answeredCount = 0;
  selectedAnswers = {};
  score = 0;
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = '0%';
  const scoreContainer = document.getElementById('score-container');
  scoreContainer.textContent = '';

  document.querySelectorAll('.option').forEach(option => {
      option.classList.remove('correct', 'wrong', 'selected');
      option.style.pointerEvents = 'auto';
  });
}

loadQuiz();
