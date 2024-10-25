const quizData = [
    {
        question: "What is a Binary Tree?",
        options: ["A tree with at most two children per node", "A tree with exactly two children per node", "A tree with nodes arranged in a line", "A tree that has three children per node"],
        correct: 0,
    },
    {
        question: "What is the maximum number of nodes at level 'L' in a binary tree?",
        options: ["2^(L+1)", "2^L", "2^(L-1)", "L^2"],
        correct: 1,
    },
    {
        question: "What is the time complexity of searching an element in a balanced binary search tree (BST)?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
        correct: 1,
    },
    {
        question: "Which traversal method is used to retrieve nodes in ascending order from a BST?",
        options: ["Preorder", "Inorder", "Postorder", "Level Order"],
        correct: 1,
    },
    {
        question: "What is a Full Binary Tree?",
        options: ["A tree with at most two children per node", "A tree where every level, except possibly the last, is completely filled", "A tree in which every node has either 0 or 2 children", "A tree where each node has one child"],
        correct: 2,
    },
    {
        question: "In a binary tree, which traversal visits the root node first, then the left subtree, and finally the right subtree?",
        options: ["Inorder", "Preorder", "Postorder", "Level Order"],
        correct: 1,
    },
    {
        question: "Which of the following data structures is best suited for representing a tree structure?",
        options: ["Array", "Linked List", "Graph", "Binary Tree"],
        correct: 3,
    },
    {
        question: "What is a balanced tree?",
        options: ["A tree where each node has the same depth", "A tree where the difference in heights of subtrees of every node is at most 1", "A tree where each level has an equal number of nodes", "A tree where the left and right subtrees are identical"],
        correct: 1,
    },
    {
        question: "What is the height of an empty tree?",
        options: ["-1", "0", "1", "It does not have height"],
        correct: 0,
    },
    {
        question: "What is a Complete Binary Tree?",
        options: ["A tree with only left children", "A tree with only right children", "A tree that is completely filled on all levels except possibly the last level", "A tree with exactly two children for each node"],
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
