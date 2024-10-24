const quizData = [
    {
      question: "What is Insertion Sort in data structures?",
      options: [
        "An algorithm that works by dividing the list into smaller sublists and merging them",
        "An algorithm that builds the sorted list one element at a time by comparing and inserting elements into their correct position",
        "A sorting method that splits the data into multiple parts and sorts them in parallel",
        "A sorting algorithm that works with O(log n) time complexity"
      ],
      correct: 1,
    },
    {
      question: "What is the time complexity of Insertion Sort in the worst case?",
      options: ["O(1)", "O(n)", "O(n²)", "O(log n)"],
      correct: 2,
    },
    {
      question: "What is Merge Sort?",
      options: [
        "A sorting algorithm that builds the sorted list one element at a time",
        "A divide-and-conquer algorithm that divides the dataset, sorts each half, and merges them",
        "A recursive algorithm that eliminates half the elements in each iteration",
        "An algorithm that sorts by inserting elements into their correct position"
      ],
      correct: 1,
    },
    {
      question: "Which of the following is true about Merge Sort?",
      options: [
        "It sorts the array in place without additional memory",
        "It has a time complexity of O(n²) in the best case",
        "It works efficiently on large datasets and guarantees O(n log n) time complexity",
        "It works faster than Insertion Sort on small datasets"
      ],
      correct: 2,
    },
    {
      question: "What is the time complexity of Merge Sort in the worst case?",
      options: ["O(1)", "O(n)", "O(n²)", "O(n log n)"],
      correct: 3,
    },
    {
      question: "How does Insertion Sort handle partially sorted data?",
      options: [
        "It performs inefficiently, requiring O(n²) time in all cases",
        "It improves performance to O(n log n)",
        "It performs faster, close to O(n) time",
        "It divides the data and merges it"
      ],
      correct: 2,
    },
    {
      question: "What is the key advantage of Merge Sort over Insertion Sort?",
      options: [
        "Merge Sort requires less memory than Insertion Sort",
        "Merge Sort has a better worst-case time complexity",
        "Merge Sort is easier to implement",
        "Merge Sort is faster for smaller datasets"
      ],
      correct: 1,
    },
    {
      question: "In Merge Sort, how is the data divided?",
      options: [
        "It is split into two halves repeatedly until single elements remain",
        "It is split into random parts and sorted individually",
        "It is sorted in place without division",
        "It sorts elements pairwise and merges them in batches"
      ],
      correct: 0,
    },
    {
      question: "Which sorting algorithm is more efficient for small, mostly sorted datasets?",
      options: ["Insertion Sort", "Merge Sort", "Bubble Sort", "Quick Sort"],
      correct: 0,
    },
    {
      question: "What is the space complexity of Merge Sort?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correct: 2,
    },
    {
      question: "What is the primary disadvantage of Insertion Sort?",
      options: [
        "It requires additional memory",
        "It has a poor time complexity of O(n²) for large datasets",
        "It cannot handle large datasets",
        "It doesn't work well with unsorted data"
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
  