//const correctAudio = new Audio('C:\Users\HP\OneDrive\Desktop\All Projects\Quiz website\correct.mp3'); // Replace with actual path
//const wrongAudio = new Audio('C:\Users\HP\OneDrive\Desktop\All Projects\Quiz website\wrong.mp3');
const correctSound = new Audio('correct.mp3');
const wrongSound = new Audio('wrong.mp3');


// Questions for Java
const javaQuestions = [
    {
        question: "Who invented Java Programming?",
        options: [
            " Guido van Rossum",
            " James Gosling",
            " Dennis Ritchie",
            " Bjarne Stroustrup"
        ],
        answer: 1 
    },
    {
        question: "Which component is used to compile, debug and execute the java programs?",
        options: [
            " JRE",
            "JIT",
            " JDK",
            " JVM"
        ],
        answer: 2 
    },
    {
        question: "Which one of the following is not a Java feature?",
        options: [
            " Object-oriented",
            " Use of pointers",
            " Portable",
            " Dynamic and Extensible"
        ],
        answer: 1 
    },
    {
        question: "What is the extension of java code files?",
        options: [
            " .js",
            " .txt",
            " .class",
            " .java"
        ],
        answer: 3 
    },
    {
        question: "Which of the following is a type of polymorphism in Java Programming?",
        options: [
            " Multiple polymorphism",
            " Compile time polymorphism",
            " Multilevel polymorphism",
            " Execution time polymorphism"
        ],
        answer: 1 
    },
    {
        question: "What is Truncation in Java?",
        options: [
            " Floating-point value assigned to a Floating type",
            " Floating-point value assigned to an integer type",
            " Integer value assigned to floating type",
            " Integer value assigned to floating type"
        ],
        answer: 1 
    },
    {
        question: "Which exception is thrown when java is out of memory?",
        options: [
            " MemoryError",
            " OutOfMemoryError",
            " MemoryOutOfBoundsException",
            " MemoryFullException"
        ],
        answer: 1 
    },
    {
        question: "Which of these are selection statements in Java?",
        options: [
            " break",
            " continue",
            " for()",
            " if()"
        ],
        answer: 3 
    },
    {
        question: "Which of these keywords is used to define interfaces in Java?",
        options: [
            " intf",
            " Intf",
            " interface",
            " Interface"
        ],
        answer: 2 
    },
    {
        question: "Which of the following is a superclass of every class in Java?",
        options: [
            " ArrayList",
            " Abstract class",
            " Object class",
            " String"
        ],
        answer: 2 
    }
];

//cquestions
const cQuestions = [
    {
        question:"Directives are translated by________?",
        options: [
            "Pre-processor",
            "Compiler",
            "Linker",
            "Editor"
        ],
        answer:0
    },
    {
        question: "What is the correct syntax to output 'Tech Testify' in C?",
        options: [
            "echo 'Tech Testify';", 
            "printf('Tech Testify');", 
            "System.out.println('Tech Testify');", 
            "print('Tech Testify');"
        ],
        answer: 1
    },
    {
        question: "The #include <stdio.h> is a ______________.?",
        options: [
            "Inclusion directive", 
            "File inclusion directive",
            "Preprocessor directive",
            "None of the above"
        ],
        answer: 2
    },
    {
        question: "Who is the father of C language?",
        options: [
            " Steve Jobs", 
            "James Gosling", 
            "Dennis Ritchie", 
            "Rasmus Lerdorf"
        ],
        answer: 2
    },
    {
        question: "Which of the following is not a valid C variable name?",
        options: [
            " int number", 
            "float rate",
            "int variable_count",
            "int $main;"
        ],
        answer: 3
    },
    {
        question: "Which of the following cannot be a variable name in C?",
        options: [
             "volatile",
             "fullname",
             "friend",
             "studio"
            ],
        answer: 0
    },
    {
        question: "What is short int in C programming??",
        options: [
            "The basic data type of C", 
            "Qualifier",
            "Short is the qualifier and int is the basic data type",
            "All of the mentioned"
        ],
        answer: 2
    },
    {
        question: "Which keyword is used to prevent any changes in the variable within a C program?",
        options: [
            "immutable",
            "mutable",
            "const",
            "volatile"],
        answer: 2
    },
    {
        question: "What is an example of iteration in C?",
        options: [
            "for",
            "while",
            "do-while",
            "all of the mentioned"
        ],
        answer: 3
    },
    {
        question: "Functions in C Language are always _________",
        options: [
            "internal",
            "external",
            "both",
            "not valid"],
        answer: 1
    },
    

]


// Questions for HTML
const htmlQuestions = [
    {
        question: "What is HTML?",
        options: [
            "a) HTML describes the structure of a webpage",
            "b) HTML is the standard markup language mainly used to create web pages",
            "c) HTML consists of a set of elements that helps the browser how to view the content",
            "d) All of the mentioned"
        ],
        answer: 3 
    },
    {
        question: "Who is the father of HTML?",
        options: [
            "a) Rasmus Lerdorf",
            "b) Tim Berners-Lee",
            "c) Brendan Eich",
            "d) Sergey Brin"
        ],
        answer: 1 
    },
    {
        question: "HTML stands for __________",
        options: [
            "a) HyperText Markup Language",
            "b) HyperText Machine Language",
            "c) HyperText Marking Language",
            "d) HighText Marking Language"
        ],
        answer: 0 
    },
    {
        question: "What is the correct syntax of doctype in HTML5?",
        options: [
            "a) </doctype html>",
            "b) <doctype html>",
            "c) <doctype html!>",
            "d) <!doctype html>"
        ],
        answer: 3 
    },
    {
        question: "Which of the following is used to read an HTML page and render it?",
        options: [
            "a) Web server",
            "b) Web network",
            "c) Web browser",
            "d) Web matrix"
        ],
        answer: 2 
    },
    {
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        options: [
            "a) head",
            "b) <h1>",
            "c) <h6>",
            "d) heading"
        ],
        answer: 1 
    },
    {
        question: "What is DOM in HTML?",
        options: [
            "a) Language dependent application programming",
            "b) Hierarchy of objects in ASP.NET",
            "c) Application programming interface",
            "d) Convention for representing and interacting with objects in html documents"
        ],
        answer: 3 
    },
    {
        question: "In which part of the HTML metadata is contained?",
        options: [
            "a) head tag",
            "b) title tag",
            "c) html tag",
            "d) body tag"
        ],
        answer: 0 
    },
    {
        question: "How do we write comments in HTML?",
        options: [
            "a) </…….>",
            "b) <!……>",
            "c) </……/>",
            "d) <…….!>"
        ],
        answer: 1 
    },
    {
        question: "Which of the following is not the element associated with the HTML table layout?",
        options: [
            "a) alignment",
            "b) color",
            "c) size",
            "d) spanning"
        ],
        answer: 1 
    }
];


// Questions for CSS
const cssQuestions = [
    {
        question: "What does CSS stand for?",
        options: [
            " Computer Style Sheets",
            " Creative Style Sheets",
            " Cascading Style Sheets",
            " Colorful Style Sheets"
        ],
        answer: 2 
    },
    {
        question: "Which property is used to change the background color?",
        options: [
            " bg-color",
            " color",
            " background-color",
            " bgcolor"
        ],
        answer: 2 
    },
    {
        question: "How do you select an element with id 'header'?",
        options: [
            " #header",
            " .header",
            " header",
            " *header"
        ],
        answer: 0 
    },
    {
        question: "Which CSS property controls the text size?",
        options: [
            " text-size",
            " font-size",
            " text-style",
            " font-style"
        ],
        answer: 1 
    },
    {
        question: "What is the correct CSS syntax to change the font name?",
        options: [
            " font-family: Arial;",
            " font: Arial;",
            " font-name: Arial;",
            " text-font: Arial;"
        ],
        answer: 0 
    },
    {
        question: "How do you create a CSS class?",
        options: [
            " .classname",
            " #classname",
            " classname",
            " *classname"
        ],
        answer: 0 
    },
    {
        question: "Which property is used to change the font of an element?",
        options: [
            " font-weight",
            " font-style",
            " font-family",
            " text-font"
        ],
        answer: 2 
    },
    {
        question: "How do you add a comment in CSS?",
        options: [
            " // this is a comment",
            " /* this is a comment */",
            " <!-- this is a comment -->",
            " # this is a comment"
        ],
        answer: 1 
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        options: [
            " padding",
            " margin",
            " spacing",
            " padding-space"
        ],
        answer: 1 
    },
    {
        question: "What does the z-index property do?",
        options: [
            " Sets the stack order of elements",
            " Changes the opacity of an element",
            " Defines the border of an element",
            " Alters the position of an element"
        ],
        answer: 0 
    }
];


// Questions for JavaScript
const jsQuestions = [
    {
        question: "What does JS stand for?",
        options: [
            " Java Source",
            " JavaScript",
            " Just Script",
            " Java Syntax"
        ],
        answer: 1 
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: [
            " -",
            " *",
            " =",
            " %"
        ],
        answer: 2 
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            " var colors = (1, 2, 3)",
            " var colors = [1, 2, 3]",
            " var colors = {1, 2, 3}",
            " var colors = 1, 2, 3"
        ],
        answer: 1 
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [
            " onmouseover",
            " onchange",
            " onclick",
            " onmouseclick"
        ],
        answer: 2 
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            " function:myFunction()",
            " function myFunction()",
            " myFunction()",
            " function = myFunction()"
        ],
        answer: 1 
    },
    {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        options: [
            " <script src='script.js'>",
            " <script href='script.js'>",
            " <script name='script.js'>",
            " <script file='script.js'>"
        ],
        answer: 0
    },
    {
        question: "How can you add a comment in a JavaScript?",
        options: [
            " // This is a comment",
            " /* This is a comment */",
            " Both a and b",
            " <!-- This is a comment -->"
        ],
        answer: 2 
    },
    {
        question: "Which method is used to convert JSON data to a JavaScript object?",
        options: [
            " JSON.parse()",
            " JSON.stringify()",
            " JSON.toObject()",
            " JSON.convert()"
        ],
        answer: 0 
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: [
            " Django",
            " Flask",
            " Angular",
            " Laravel"
        ],
        answer: 2 
    },
    {
        question: "What is the output of 'console.log(typeof NaN);'?",
        options: [
            " 'number'",
            " 'string'",
            " 'undefined'",
            " 'object'"
        ],
        answer: 0 
    }
];


let currentQuestionIndex = 0;
let score = 0;
let currentQuizType = '';

function startQuiz(quizType) {
    currentQuizType = quizType;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('question-display').style.display = 'block';
    document.getElementById('programming-container').style.display = 'none';
    document.getElementById('web-container').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    let questions = getQuestionsByType(currentQuizType);
    let questionData = questions[currentQuestionIndex];

    document.getElementById('question').innerText = questionData.question;
    const answerButtons = document.getElementById('answer-buttons');
    answerButtons.innerHTML = '';

    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(index, button));
        answerButtons.appendChild(button);
    });

    // Show or hide next button based on question index
    if (currentQuestionIndex < questions.length - 1) {
        document.getElementById('next-btn').style.display = 'none'; // Hide next button
    } else {
        document.getElementById('next-btn').style.display = 'none'; // Hide next button for the last question
    }
}

function selectAnswer(selectedIndex, button) {
    let questions = getQuestionsByType(currentQuizType);
    if (selectedIndex === questions[currentQuestionIndex].answer) {
        score++;
        button.style.backgroundColor = 'green'; // Green for correct answer
        correctSound.play(); // Play correct audio
    } else {
        button.style.backgroundColor = 'red'; // Red for wrong answer
        wrongSound.play(); // Play wrong audio
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => {
            showQuestion();
        }, 1000); // Wait 1 second before showing the next question
    } else {
        setTimeout(() => {
            showResult();
        }, 1000); // Wait 1 second before showing the result
    }
}

function restartQuiz() {
    document.getElementById('question-display').style.display = 'none';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('programming-container').style.display = 'block';
    document.getElementById('web-container').style.display = 'block';
}

function showResult() {
    document.getElementById('question-display').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    const tryAgainButton = document.getElementById("restart-btn");
    let congratulatoryMessage = '';
    if (score === currentQuestionIndex) {
        congratulatoryMessage = 'Congratulations! You got a perfect score!';
    } else {
        congratulatoryMessage = `Congratulations! You got a perfect score!You scored ${score} out of ${currentQuestionIndex}.`;
    }
    document.getElementById('result-message').innerText = congratulatoryMessage;
    tryAgainButton.style.display = "inline-block";
}

// Function to get questions based on the quiz type
function getQuestionsByType(type) {
    switch (type) {
        case 'java':
            return javaQuestions;
        case 'c':
            return cQuestions;
        case 'html':
            return htmlQuestions;
        case 'css':
            return cssQuestions;
        case 'js':
            return jsQuestions;
        default:
            return [];
    }
}

