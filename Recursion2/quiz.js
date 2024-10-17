const quizData = [
    {
        question: "What is the definition of recursion in programming?",
        options:  [ "A loop that repeats forever", "A function that never terminates", "A function that calls itself","A way to sort arrays"],
        correct: 2
    },
    {
        question: "Which of the following is essential for recursion to terminate?",
        options: ["Loop","Base case", "Multiple parameters", "Constant values"],
        correct: 1
    },
    {
        question: "Which language runs in a web bro In which of the following scenarios is recursion often preferred?",
        options: [ "Calculating averages", "Looping through arrays", "Finding factorials","Reading from files"],
        correct: 2
    },
    {
        question: "What happens when recursion does not have a base case?",
        options:[ "Program runs faster", "Program will terminate", "Compilation error","Infinite recursion"],
        correct: 3
    },
    {
        question: "What is the time complexity of a simple recursive function with one recursive call that reduces the input size by 1?",
        options: [ "O(log n)", "O(n^2)", "O(n)","O(2^n)"],
        correct: 2
    },
    {
        question:  "How does recursion generally compare to iteration (loops) in terms of memory usage?",
        options: [ "Uses less memory", "Uses the same memory", "Recursion has no memory impact","Uses more memory"],
        correct: 3
    },
    {
        question: "Which data structure is used to implement recursion internally?",
        options:  [ "Queue", "Array","Stack", "Heap"],
        correct: 2
    },
    {
        question: "Which of the following problems cannot be solved efficiently using simple recursion?",
        options: ["Fibonacci sequence", "Factorial calculation", "Binary search", "Merge sort"],
        correct: 0
    },
    {
        question:"Which of the following recursion types can lead to exponential time complexity in certain problems?",
        options:["Tree recursion", "Tail recursion", "Linear recursion", "Simple recursion"],
        correct: 0
    },

    {
        question: "Which of the following is an example of indirect recursion?",
        options:  [ "A function calls itself directly","Function A calls Function B, which calls Function A", "A loop calling a recursive function", "Recursion used in nested loops"],
        correct: 1
    },
    {
        question: "Which algorithmic strategy is often used with recursive solutions for optimization problems?",
        options: ["Dynamic programming", "Greedy algorithms", "Brute force", "Backtracking"],
        correct: 0
    },
    {
        question: "What issue can occur when a recursive function does not have proper termination conditions?",
        options:  ["Stack overflow", "Faster runtime", "Heap overflow", "Garbage collection issues"],
        correct: 0
    },
    {
        question: "Which of the following statements is true about recursion?",
        options:   ["Recursion can be used to replace loops", "Recursion is always more efficient than iteration", "Recursion cannot be used for solving complex problems", "Recursion avoids the use of function calls"],
        correct: 0
    },
    {
        question: "What is the advantage of using tail recursion in functions?",
        options:  ["Prevents infinite recursion", "Increases the speed of recursion", "Allows multiple recursive calls","Optimizes memory usage"],
        correct: 3
    },
    {
        question: " In Java, what error occurs if recursion goes too deep without terminating?",
        options:  [ "OutOfMemoryError", "ArrayIndexOutOfBoundsException", "NullPointerException","StackOverflowError"],
        correct: 3
    },
];

let answeredCount = 0;
let selectedAnswers = {};
let score = 0;

function loadQuiz() {
    const quiz = document.getElementById('quiz');
    quiz.innerHTML = ''; // Clear previous content

    quizData.forEach((currentData, questionIndex) => {
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

    // Reset styles for other options in the same question
    Array.from(options).forEach(option => option.classList.remove('selected'));

    // Mark the selected option visually with the "selected" class
    optionEl.classList.add('selected');

    // Store the selected answer
    if (selectedAnswers[questionIndex] === undefined) {
        answeredCount++;
    }
    selectedAnswers[questionIndex] = selectedIndex;

    // Update the progress bar
    updateProgressBar();
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = (answeredCount / quizData.length) * 100;
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

            // Mark the correct answer
            correctOption.classList.add('correct');

            // If the selected answer is wrong, mark it
            if (selectedAnswer !== correctAnswer) {
                selectedOption.classList.add('wrong');
            } else {
                score++;
            }
        }
    });

    // Disable further selection after submitting
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });

    // Display final score
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.textContent = `You scored ${score}/${quizData.length}`;

    // Scroll back to the top to show the correct/incorrect answers
    window.scrollTo(0, 0);
}

// Load the quiz when the page is ready
loadQuiz();


