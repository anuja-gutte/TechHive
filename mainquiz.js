const quizData = [
    {
      question: "Which of the following searching algorithms has the best worst-case time complexity?",
      options: ["Linear Search", "Binary Search", "Jump Search", "Exponential Search"],
      correct: 1,
    },
    {
      question: "What is the average time complexity of a Binary Search on a sorted array?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      correct: 1,
    },
    {
      question: "Which sorting algorithm is most efficient for large datasets and is a comparison-based sort?",
      options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
      correct: 1,
    },
    {
      question: "In Quick Sort, what is the time complexity of the worst-case scenario?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(n log n)"],
      correct: 2,
    },
    {
      question: "In which data structure are elements inserted and removed from only one end?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correct: 1,
    },
    {
      question: "Which of the following is true about a stack?",
      options: ["LIFO (Last In First Out)", "FIFO (First In First Out)", "Sorted Order", "Unordered"],
      correct: 0,
    },
    {
      question: "In which data structure is insertion and deletion done from opposite ends?",
      options: ["Deque", "Queue", "Stack", "Priority Queue"],
      correct: 0,
    },
    {
      question: "What is the main advantage of using a doubly linked list over a singly linked list?",
      options: ["Increased memory usage", "Bidirectional traversal", "Simpler implementation", "Faster search operations"],
      correct: 1,
    },
    {
      question: "In a binary search tree, which of the following is true about the left child of a node?",
      options: ["It is greater than the parent node", "It is equal to the parent node", "It is smaller than the parent node", "It is random compared to the parent node"],
      correct: 2,
    },
    {
      question: "What is the time complexity of inserting an element in a balanced binary search tree (BST)?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correct: 1,
    },
    {
      question: "What is the time complexity of searching for an element in a hash table, assuming no collisions?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      correct: 2,
    },
    {
      question: "Which of the following is a non-comparison-based sorting algorithm?",
      options: ["Merge Sort", "Quick Sort", "Counting Sort", "Heap Sort"],
      correct: 2,
    },
    {
      question: "What is the space complexity of a queue implemented using a linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correct: 1,
    },
    {
      question: "Which data structure is used in the implementation of recursion?",
      options: ["Queue", "Stack", "Linked List", "Binary Tree"],
      correct: 1,
    },
    {
      question: "In which type of tree are all nodes' left children less than the node, and the right children greater?",
      options: ["AVL Tree", "Binary Search Tree (BST)", "Heap", "Trie"],
      correct: 1,
    },
    
  ];
  let answeredCount = 0;
  let selectedAnswers = {};
  let score = 0;
  
  function loadQuiz() {
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = ""; 
  
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
  
       
        correctOption.classList.add("correct");
  
       
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
  
