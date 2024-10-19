const quizData = [
    {
      question: "What is Linear Search in data structures?",
      options: [
        "An algorithm that finds an element in sorted data only",
        "An algorithm that scans each element sequentially until the target is found",
        "A searching method that works in O(log n) time complexity",
        "A method that splits the data into multiple parts and searches them in parallel"
      ],
      correct: 1,
    },
    {
      question: "What is the time complexity of Linear Search?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correct: 2,
    },
    {
      question: "What is Binary Search?",
      options: [
        "An algorithm that finds an element by sequentially scanning the array",
        "A recursive or iterative algorithm that divides the sorted dataset and eliminates half each time",
        "A sorting algorithm that works in logarithmic time",
        "A searching method applicable to unsorted data"
      ],
      correct: 1,
    },
    {
      question: "Which of the following is true about Binary Search?",
      options: [
        "It works on unsorted data",
        "It works efficiently with sorted data",
        "It is slower than Linear Search",
        "It has a time complexity of O(n)"
      ],
      correct: 1,
    },
    {
      question: "What is the best case time complexity of Binary Search?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correct: 0,
    },
    {
      question: "What is the time complexity of Binary Search in the worst case?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correct: 1,
    },
    {
      question: "In Linear Search, how does the algorithm behave if the target is not found?",
      options: [
        "It throws an exception",
        "It continues indefinitely",
        "It scans the entire list and returns -1 or a failure indicator",
        "It terminates after checking the middle element"
      ],
      correct: 2,
    },
    {
      question: "In Binary Search, what happens if the target value is smaller than the middle element?",
      options: [
        "The search continues in the left half of the dataset",
        "The search continues in the right half of the dataset",
        "The search is stopped, and the target is declared not found",
        "The middle element is updated and searched again"
      ],
      correct: 0,
    },
    {
      question: "Which of the following is NOT a characteristic of Binary Search?",
      options: [
        "It reduces the search space by half after each comparison",
        "It requires the dataset to be sorted",
        "It performs better than Linear Search on large datasets",
        "It can work with both sorted and unsorted datasets"
      ],
      correct: 3,
    },
    {
      question: "In Linear Search, what happens if the target element is found?",
      options: [
        "The algorithm continues to search for other occurrences",
        "The algorithm stops and returns the index of the target element",
        "The algorithm sorts the array and returns the position",
        "The algorithm removes the target element from the list"
      ],
      correct: 1,
    },
    {
      question: "Which of the following scenarios is best suited for Binary Search?",
      options: [
        "Finding the largest element in a list of unsorted numbers",
        "Searching an element in a sorted list of items",
        "Finding a specific word in a random collection of words",
        "Performing a search on real-time streaming data"
      ],
      correct: 1,
    },
    {
      question: "How does Binary Search divide the search space?",
      options: [
        "It divides the dataset into three equal parts",
        "It removes one-third of the elements in each iteration",
        "It divides the dataset into two halves after each comparison",
        "It searches sequentially from left to right"
      ],
      correct: 2,
    },
    {
      question: "Which searching algorithm would you use for an unsorted dataset?",
      options: [
        "Binary Search",
        "Linear Search",
        "Bubble Sort",
        "Insertion Search"
      ],
      correct: 1,
    }
  ];
  
  let answeredCount = 0;
  let selectedAnswers = {};
  let score = 0;
  
  function loadQuiz() {
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = ""; // Clear previous content
  
    quizData.forEach((currentData, questionIndex) => {
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
  
    // If the question has already been answered, return early to avoid counting multiple selections
    if (selectedAnswers[questionIndex] !== undefined) {
      return;
    }
  
    // Reset styles for other options in the same question
    Array.from(options).forEach((option) => option.classList.remove("selected"));
  
    // Mark the selected option visually with the "selected" class
    optionEl.classList.add("selected");
  
    // Store the selected answer
    answeredCount++;
    selectedAnswers[questionIndex] = selectedIndex;
  
    // Update the progress bar
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
  
    // Disable further selection after submitting
    options.forEach((option) => {
      option.style.pointerEvents = "none";
    });
  
    // Display final score
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.textContent = `You scored ${score}/${quizData.length}`;
  
    // Scroll back to the top to show the correct/incorrect answers
    window.scrollTo(0, 0);
  }
  
  // Load the quiz when the page is ready
  loadQuiz();
