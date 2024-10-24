const quizData = [
    {
        "question":  "What is Insertion Sort in data structures?",
        "options":  [
          "An algorithm that works by dividing the list into smaller sublists and merging them",
          "An algorithm that builds the sorted list one element at a time by comparing and inserting elements into their correct position",
          "A sorting method that splits the data into multiple parts and sorts them in parallel",
          "A sorting algorithm that works with O(log n) time complexity"
        ],
        "correct": 1
    },
    {
        "question": "What is the time complexity of Insertion Sort in the worst case?",
        "options": ["O(1)", "O(n)", "O(n²)", "O(log n)"],
        "correct": 2
    },
    {
        "question":"What is Merge Sort?",
        "options": [  
          "A sorting algorithm that builds the sorted list one element at a time",
          "A divide-and-conquer algorithm that divides the dataset, sorts each half, and merges them",
          "A recursive algorithm that eliminates half the elements in each iteration",
          "An algorithm that sorts by inserting elements into their correct position"
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is true about Merge Sort?",
        "options":[ 
          "It sorts the array in place without additional memory",
          "It has a time complexity of O(n²) in the best case",
          "It works efficiently on large datasets and guarantees O(n log n) time complexity",
          "It works faster than Insertion Sort on small datasets"
        ],
        "correct": 2
    },
    {
        "question": "What is the time complexity of Merge Sort in the worst case?",
        "options": [ "O(1)", "O(n)", "O(n²)", "O(n log n)"],
        "correct": 3
    },
    {
        "question": "How does Insertion Sort handle partially sorted data?",
        "options": [ 
          "It performs inefficiently, requiring O(n²) time in all cases",
          "It improves performance to O(n log n)",
          "It performs faster, close to O(n) time",
          "It divides the data and merges it"
        ],
        "correct": 2
    },
    {
        "question": "What is the key advantage of Merge Sort over Insertion Sort?",
        "options":  [  
          "Merge Sort requires less memory than Insertion Sort",
          "Merge Sort has a better worst-case time complexity",
          "Merge Sort is easier to implement",
          "Merge Sort is faster for smaller datasets"
        ],
        "correct": 1
    },
    {
        "question": "In Merge Sort, how is the data divided?",
        "options": [ 
          "It is split into two halves repeatedly until single elements remain",
          "It is split into random parts and sorted individually",
          "It is sorted in place without division",
          "It sorts elements pairwise and merges them in batches"
        ],
        "correct": 0
    },
    {
        "question": "Which sorting algorithm is more efficient for small, mostly sorted datasets?",
        "options":["Insertion Sort", "Merge Sort", "Bubble Sort", "Quick Sort"],
        "correct": 0
    },
    {
        "question": "What is the space complexity of Merge Sort?",
        "options":  ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        "correct": 2
    },
    {
        "question": "What is the primary disadvantage of Insertion Sort?",
        "options": [ 
          "It requires additional memory",
          "It has a poor time complexity of O(n²) for large datasets",
          "It cannot handle large datasets",
          "It doesn't work well with unsorted data"
        ],
        "correct": 1
    },
    {
        "question": "What is Linear Search?",
        "options": [ 
          "A search algorithm that compares elements in a sorted array using divide-and-conquer",
          "A search method that sequentially checks each element in the list until the desired element is found",
          "An algorithm that works only with binary trees",
          "A search technique that sorts the data before searching"
        ],
        "correct": 1
    },
    {
        "question": "What is the time complexity of Linear Search in the worst case?",
        "options": ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        "correct": 1
    },
    {
        "question": "What is Binary Search?",
        "options": [ 
          "A search method that sequentially checks each element in an unsorted list",
          "A search algorithm that compares the target element to the middle element of a sorted list and repeatedly divides the list",
          "A brute-force search method that scans the entire array",
          "A search technique that randomly checks elements"
        ],
        "correct": 1
    },
    {
        "question": "What is the time complexity of Binary Search in the worst case?",
        "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        "correct": 2
    },
    {
        "question": "What is the primary limitation of Binary Search?",
        "options": [ 
          "It works only on unsorted data",
          "It works only on sorted data",
          "It requires a linear-time pre-processing step",
          "It has a poor worst-case time complexity"
        ],
        "correct": 1
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
  const options = document.querySelectorAll('.option');

  quizData.forEach((question, questionIndex) => {
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
  scoreContainer.textContent = 'You scored ' +score + '/' +totalQuestions; 

  
  window.scrollTo(0, 0);
}


loadQuiz();