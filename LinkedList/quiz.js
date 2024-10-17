const quizData = [
    {
      question: "What is a Linked List?",
      options: [
        "A collection of elements stored in contiguous memory locations",
        "A data structure consisting of nodes where each node contains a value and a reference to the next node",
        "A type of hash table",
        "A data structure that allows random access"
      ],
      correct: 1,
    },
    {
      question: "Which of the following operations is not typically supported by a linked list?",
      options: ["Insert", "Delete", "Access by index", "Search"],
      correct: 2,
    },
    {
      question: "What is the time complexity of inserting a new node at the beginning of a singly linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correct: 0,
    },
    {
      question: "In a doubly linked list, each node contains references to which of the following?",
      options: ["The next node only", "The previous node only", "Both the next and previous nodes", "The first and last nodes"],
      correct: 2,
    },
    {
      question: "What is the space complexity of a singly linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correct: 1,
    },
    {
      question: "What happens to the linked list when you delete the head node?",
      options: [
        "The head pointer moves to the next node",
        "The last node becomes the head",
        "The linked list becomes empty",
        "The head pointer remains the same"
      ],
      correct: 0,
    },
    {
      question: "Which of the following is true about circular linked lists?",
      options: [
        "The last node points to null",
        "The last node points to the first node",
        "All nodes are disconnected",
        "Only the head node is connected to the last node"
      ],
      correct: 1,
    },
    {
      question: "In a linked list, which of the following pointers is necessary to traverse the list?",
      options: ["Previous pointer", "Head pointer", "Tail pointer", "End pointer"],
      correct: 1,
    },
    {
      question: "How can you detect a cycle in a linked list?",
      options: [
        "Using a hash table",
        "Using the Floyd's Cycle Detection Algorithm",
        "By counting the nodes",
        "It's not possible to detect a cycle"
      ],
      correct: 1,
    },
    {
      question: "What is the time complexity of searching for an element in a singly linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correct: 1,
    },
    {
      question: "Which of the following is a disadvantage of using a linked list over an array?",
      options: [
        "Memory usage is higher due to node overhead",
        "Accessing elements is faster",
        "It allows dynamic resizing",
        "There is no need for contiguous memory"
      ],
      correct: 0,
    },
    {
      question: "What is the advantage of using a doubly linked list over a singly linked list?",
      options: [
        "Uses less memory",
        "Easier to delete a node",
        "Faster insertion at the end",
        "Allows for random access"
      ],
      correct: 1,
    },
    {
      question: "In a linked list, what do you need to do to delete a node?",
      options: [
        "Just remove it from the memory",
        "Change the previous node's next pointer to skip the node",
        "Change the next node's previous pointer",
        "Update the head pointer"
      ],
      correct: 1,
    },
    {
      question: "What is a common use case for linked lists?",
      options: [
        "Implementing stacks and queues",
        "Storing fixed-size collections",
        "Implementing binary search trees",
        "Directly accessing array elements"
      ],
      correct: 0,
    },
    {
      question: "What is the main drawback of a linked list compared to an array?",
      options: [
        "Elements can be added easily",
        "Memory allocation is dynamic",
        "Elements cannot be accessed in constant time",
        "It requires less memory"
      ],
      correct: 2,
    },
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
  