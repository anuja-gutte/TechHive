const quizData = [
  {
      question: "What is a Queue in data structures?",
      options: ["LIFO (Last In First Out)", "FIFO (First In First Out)", "Random Access", "Priority-based"],
      correct: 1,
  },
  {
      question: "Which of the following operations is not supported by a queue?",
      options: ["Enqueue", "Dequeue", "Peek", "Push"],
      correct: 3,
  },
  {
    question: "What is the time complexity of enqueue and dequeue operations in a simple queue?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correct: 0,
  },
  {
    question: "In a queue, the operation that adds an element to the end is called?",
    options: ["Dequeue", "Peek", "Enqueue", "Pop"],
    correct: 2,
  },
  {
    question: "Which of the following is the primary use of a queue?",
    options: ["Memory management", "Resource scheduling", "Database indexing", "Sorting"],
    correct: 1,
  },
  {
    question: "In a circular queue, when the rear reaches the end of the array, where should the next element be added?",
    options: ["At the front", "At the last index", "At the middle", "It cannot be added"],
    correct: 0,
  },
  {
    question: "In a queue implemented using an array, what happens if the queue is full and an enqueue operation is attempted?",
    options: ["Overflow error", "The array automatically expands", "The operation is ignored", "The queue wraps around"],
    correct: 0,
  },
  {
    question: "Which of the following is true about a priority queue?",
    options: ["It follows LIFO order", "It follows FIFO order", "Elements are dequeued based on their priority", "The queue is sorted in descending order"],
    correct: 2,
  },
  {
    question: "What is the space complexity of a queue implemented using a linked list?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correct: 1,
  },
  {
    question: "If a queue is implemented using a linked list, which of the following is true?",
    options: ["It needs a predefined array size", "It uses fixed memory size", "It allows dynamic resizing", "It is faster than a circular queue"],
    correct: 2,
  },
  {
    question: "In which data structure is a circular queue most beneficial?",
    options: ["Memory allocation systems", "Breadth-first search (BFS)", "Resource scheduling", "Sorting algorithms"],
    correct: 1,
  },
  {
    question: "When a queue is implemented using a circular array, what is the main advantage?",
    options: ["It reduces the need for resizing the array", "It increases the time complexity of dequeue", "It allows for efficient dequeuing operations", "It removes the need for linked lists"],
    correct: 0,
  },
  {
    question: "What happens when the front pointer is equal to the rear pointer in a circular queue?",
    options: ["Queue is empty", "Queue is full", "Rear pointer is reset to the front", "A dequeue operation is initiated"],
    correct: 1,
  },
  {
    question: "In a priority queue, how are elements inserted and removed?",
    options: ["Based on the time they were inserted", "Based on their numerical value", "Based on the highest priority", "Based on the lowest priority"],
    correct: 2,
  },
  {
    question: "Which of the following is true about a double-ended queue (deque)?",
    options: ["It allows insertions and deletions only at the front", "It allows insertions and deletions only at the rear", "It allows insertions and deletions at both ends", "It allows insertions at the front and deletions at the rear"],
    correct: 2,
  }
];


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let answeredCount = 0;
let selectedAnswers = {};
let score = 0;

function loadQuiz() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = ""; 

  
  const shuffledQuizData = shuffleArray([...quizData]);

  shuffledQuizData.forEach((currentData, questionIndex) => {
      const questionEl = document.createElement("div");
      questionEl.classList.add("question");
      questionEl.textContent = `${questionIndex + 1}. ${currentData.question}`;

      const optionsEl = document.createElement("ul");
      optionsEl.classList.add("options");

      currentData.options.forEach((option, index) => {
          const optionEl = document.createElement("li");
          optionEl.classList.add("option");
          optionEl.textContent = option;
          optionEl.onclick = () => selectAnswer(questionIndex, index, optionEl);
          optionsEl.appendChild(optionEl);
      });

      quiz.appendChild(questionEl);
      quiz.appendChild(optionsEl);
  });
}

function selectAnswer(questionIndex, selectedIndex, optionEl) {
  const options = optionEl.parentElement.children;


  if (selectedAnswers[questionIndex] !== undefined) {
      return;
  }

  Array.from(options).forEach((option) => option.classList.remove("selected"));

  optionEl.classList.add("selected");


  answeredCount++;
  selectedAnswers[questionIndex] = selectedIndex;


  updateProgressBar();
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const progressPercentage = (answeredCount / quizData.length) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

function submitQuiz() {
  // Reset score before calculating new score
  score = 0;

  const options = document.querySelectorAll(".option");

  quizData.forEach((question, questionIndex) => {
      const correctAnswer = question.correct;
      const selectedAnswer = selectedAnswers[questionIndex];

      if (selectedAnswer !== undefined) {
          const selectedOption =
              options[questionIndex * question.options.length + selectedAnswer];
          const correctOption =
              options[questionIndex * question.options.length + correctAnswer];

          // Mark the correct answer
          correctOption.classList.add("correct");

          // If the selected answer is wrong, mark it
          if (selectedAnswer !== correctAnswer) {
              selectedOption.classList.add("wrong");
          } else {
              score++;
          }
      }
  });

  
  options.forEach((option) => {
      option.style.pointerEvents = "none";
  });


  const scoreContainer = document.getElementById("score-container");
  scoreContainer.textContent = `You scored ${score}/${quizData.length}`;


  window.scrollTo(0, 0);
}

loadQuiz();
